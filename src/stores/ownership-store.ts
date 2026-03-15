import { create } from 'zustand';
import type { AdminPromotionRequest } from '@/types';

interface OwnershipState {
  // Credentials password — only owners can change this
  credentialsPassword: string;

  // Admin promotion requests
  promotionRequests: AdminPromotionRequest[];

  // Actions
  setCredentialsPassword: (newPassword: string) => void;
  createPromotionRequest: (request: AdminPromotionRequest) => void;
  approvePromotion: (requestId: string, reviewerId: string, reviewerName: string) => void;
  rejectPromotion: (requestId: string, reviewerId: string, reviewerName: string) => void;
}

export const useOwnershipStore = create<OwnershipState>((set) => ({
  credentialsPassword: 'creative@2026',
  promotionRequests: [],

  setCredentialsPassword: (newPassword: string) => {
    set({ credentialsPassword: newPassword });
  },

  createPromotionRequest: (request: AdminPromotionRequest) => {
    set((state) => {
      const hasPending = state.promotionRequests.some(
        (r) => r.targetUserId === request.targetUserId && r.status === 'pending'
      );
      if (hasPending) return state;
      return { promotionRequests: [...state.promotionRequests, request] };
    });
  },

  approvePromotion: (requestId: string, reviewerId: string, reviewerName: string) => {
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

  rejectPromotion: (requestId: string, reviewerId: string, reviewerName: string) => {
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
}));
