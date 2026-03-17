import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type { AdminPromotionRequest } from '@/types';

/** Generate a 6-digit OTP */
const generateOtp = (): string => {
  return String(Math.floor(100000 + Math.random() * 900000));
};

interface OwnershipTransferOtp {
  otp: string;
  targetUserId: string;
  requestedById: string;
  sentToEmails: string[];
  createdAt: string;
  expiresAt: string;
}

interface OwnershipState {
  // Credentials password — only owners can change this
  credentialsPassword: string;

  // Admin promotion requests
  promotionRequests: AdminPromotionRequest[];

  // Ownership transfer OTP tracking (kept client-side — short-lived)
  pendingTransferOtp: OwnershipTransferOtp | null;

  // Actions
  fetchCredentialsPassword: () => Promise<void>;
  setCredentialsPassword: (newPassword: string) => Promise<void>;

  fetchPromotionRequests: () => Promise<void>;
  createPromotionRequest: (request: AdminPromotionRequest) => Promise<void>;
  approvePromotion: (requestId: string, reviewerId: string, reviewerName: string) => Promise<void>;
  rejectPromotion: (requestId: string, reviewerId: string, reviewerName: string) => Promise<void>;

  // Ownership transfer OTP
  initiateTransferOtp: (targetUserId: string, requestedById: string, ownerEmails: string[]) => string;
  verifyTransferOtp: (otp: string) => boolean;
  clearTransferOtp: () => void;

  // Removed emails
  addRemovedEmail: (email: string, removedById: string, removedByName: string) => Promise<string>;
  isEmailBlocked: (email: string) => Promise<boolean>;
  removeEmailBlock: (email: string) => Promise<void>;
}

export const useOwnershipStore = create<OwnershipState>((set, get) => ({
  credentialsPassword: 'creative@2026',
  promotionRequests: [],
  pendingTransferOtp: null,

  fetchCredentialsPassword: async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('app_settings')
      .select('value')
      .eq('key', 'credentials_password')
      .single();

    if (data) {
      set({ credentialsPassword: data.value });
    }
  },

  setCredentialsPassword: async (newPassword: string) => {
    const supabase = createClient();
    await supabase
      .from('app_settings')
      .update({ value: newPassword })
      .eq('key', 'credentials_password');

    set({ credentialsPassword: newPassword });
  },

  fetchPromotionRequests: async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('admin_promotion_requests')
      .select('*, requester:profiles!requester_id(full_name), target:profiles!target_user_id(full_name), reviewer:profiles!reviewed_by_id(full_name)')
      .order('created_at', { ascending: false });

    if (!data) return;

    const requests: AdminPromotionRequest[] = data.map((row) => ({
      id: row.id,
      requesterId: row.requester_id,
      requesterName: (row.requester as Record<string, string>)?.full_name ?? '',
      targetUserId: row.target_user_id,
      targetUserName: (row.target as Record<string, string>)?.full_name ?? '',
      status: row.status,
      reviewedById: row.reviewed_by_id,
      reviewedByName: (row.reviewer as Record<string, string>)?.full_name ?? null,
      createdAt: row.created_at,
      reviewedAt: row.reviewed_at,
    }));

    set({ promotionRequests: requests });
  },

  createPromotionRequest: async (request: AdminPromotionRequest) => {
    const supabase = createClient();

    // Check for existing pending request
    const existing = get().promotionRequests.some(
      (r) => r.targetUserId === request.targetUserId && r.status === 'pending'
    );
    if (existing) return;

    await supabase.from('admin_promotion_requests').insert({
      id: request.id,
      requester_id: request.requesterId,
      target_user_id: request.targetUserId,
      status: request.status,
    });

    set((state) => ({
      promotionRequests: [...state.promotionRequests, request],
    }));
  },

  approvePromotion: async (requestId: string, reviewerId: string, reviewerName: string) => {
    const supabase = createClient();

    await supabase.from('admin_promotion_requests').update({
      status: 'approved',
      reviewed_by_id: reviewerId,
      reviewed_at: new Date().toISOString(),
    }).eq('id', requestId);

    set((state) => ({
      promotionRequests: state.promotionRequests.map((r) =>
        r.id === requestId
          ? {
              ...r,
              status: 'approved' as const,
              reviewedById: reviewerId,
              reviewedByName: reviewerName,
              reviewedAt: new Date().toISOString(),
            }
          : r
      ),
    }));
  },

  rejectPromotion: async (requestId: string, reviewerId: string, reviewerName: string) => {
    const supabase = createClient();

    await supabase.from('admin_promotion_requests').update({
      status: 'rejected',
      reviewed_by_id: reviewerId,
      reviewed_at: new Date().toISOString(),
    }).eq('id', requestId);

    set((state) => ({
      promotionRequests: state.promotionRequests.map((r) =>
        r.id === requestId
          ? {
              ...r,
              status: 'rejected' as const,
              reviewedById: reviewerId,
              reviewedByName: reviewerName,
              reviewedAt: new Date().toISOString(),
            }
          : r
      ),
    }));
  },

  // ── Ownership Transfer OTP ──────────────────────────────────────────

  initiateTransferOtp: (targetUserId: string, requestedById: string, ownerEmails: string[]): string => {
    const otp = generateOtp();
    const now = new Date();
    const expires = new Date(now.getTime() + 10 * 60 * 1000); // 10 min expiry

    set({
      pendingTransferOtp: {
        otp,
        targetUserId,
        requestedById,
        sentToEmails: ownerEmails,
        createdAt: now.toISOString(),
        expiresAt: expires.toISOString(),
      },
    });

    return otp;
  },

  verifyTransferOtp: (otp: string): boolean => {
    const pending = get().pendingTransferOtp;
    if (!pending) return false;

    const now = new Date();
    if (now > new Date(pending.expiresAt)) {
      set({ pendingTransferOtp: null });
      return false;
    }

    return pending.otp === otp;
  },

  clearTransferOtp: () => {
    set({ pendingTransferOtp: null });
  },

  // ── Removed Emails ──────────────────────────────────────────────────

  addRemovedEmail: async (email: string, removedById: string, _removedByName: string): Promise<string> => {
    const otp = generateOtp();
    const supabase = createClient();

    // Remove existing entry for this email first
    await supabase.from('removed_emails').delete().eq('email', email.toLowerCase());

    await supabase.from('removed_emails').insert({
      email: email.toLowerCase(),
      removed_by_id: removedById,
      re_registration_otp: otp,
    });

    return otp;
  },

  isEmailBlocked: async (email: string): Promise<boolean> => {
    const supabase = createClient();
    const { data } = await supabase
      .from('removed_emails')
      .select('email')
      .eq('email', email.toLowerCase())
      .maybeSingle();

    return !!data;
  },

  removeEmailBlock: async (email: string) => {
    const supabase = createClient();
    await supabase.from('removed_emails').delete().eq('email', email.toLowerCase());
  },
}));
