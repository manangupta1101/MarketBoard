import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type {
  CreativeRequest,
  RequestStatus,
  RequestComment,
  ReEditEntry,
  ReEditRequest,
} from '@/types';

interface RequestState {
  requests: CreativeRequest[];
  isLoaded: boolean;

  /** Fetch all requests with their comments, re-edits, and re-edit requests */
  fetchRequests: () => Promise<void>;
  addRequest: (request: CreativeRequest) => Promise<void>;
  updateRequest: (id: string, updates: Partial<CreativeRequest>) => Promise<void>;
  moveForward: (id: string) => Promise<void>;
  moveBackward: (id: string, reEdit?: ReEditEntry) => Promise<void>;
  moveToStatus: (id: string, status: RequestStatus) => Promise<void>;
  assignRequest: (id: string, assigneeId: string, assigneeName: string) => Promise<void>;
  addComment: (requestId: string, comment: RequestComment) => Promise<void>;
  deleteRequest: (id: string, deletedById: string, deletedByName: string, reason: string) => Promise<void>;
  requestReEdit: (requestId: string, reEditRequest: ReEditRequest) => Promise<void>;
  approveReEditRequest: (requestId: string, reEditRequestId: string, reEdit: ReEditEntry) => Promise<void>;
  rejectReEditRequest: (requestId: string, reEditRequestId: string) => Promise<void>;
  getRequestsByStatus: (status: RequestStatus) => CreativeRequest[];
  getRequestsByAssignee: (assigneeId: string) => CreativeRequest[];
  getRequestsByRequester: (requesterId: string) => CreativeRequest[];
  /** Subscribe to realtime changes on requests */
  subscribeRealtime: () => () => void;
}

const STATUS_ORDER: RequestStatus[] = ['open', 'in_progress', 'review', 'closed'];

/** Map a DB row + related data into a CreativeRequest */
const mapDbRequest = (
  row: Record<string, unknown>,
  comments: RequestComment[],
  reEdits: ReEditEntry[],
  reEditRequests: ReEditRequest[],
  profiles: Record<string, { full_name: string; email: string }>
): CreativeRequest => {
  const requesterProfile = profiles[row.requester_id as string];
  const assigneeProfile = row.assignee_id ? profiles[row.assignee_id as string] : null;
  const teamLeadProfile = row.team_lead_id ? profiles[row.team_lead_id as string] : null;
  const deletedByProfile = row.deleted_by_id ? profiles[row.deleted_by_id as string] : null;

  return {
    id: row.id as string,
    title: row.title as string,
    description: row.description as string,
    type: row.type as CreativeRequest['type'],
    priority: row.priority as CreativeRequest['priority'],
    status: row.status as RequestStatus,
    totalItems: row.total_items as number,
    dueDate: row.due_date as string | null,
    requesterId: row.requester_id as string,
    requesterName: requesterProfile?.full_name ?? '',
    requesterEmail: requesterProfile?.email ?? '',
    assigneeId: (row.assignee_id as string) ?? null,
    assigneeName: assigneeProfile?.full_name ?? null,
    teamLeadId: (row.team_lead_id as string) ?? null,
    teamLeadName: teamLeadProfile?.full_name ?? null,
    teamLeadEmail: teamLeadProfile?.email ?? null,
    referenceLinks: (row.reference_links as string[]) ?? [],
    scriptNoteId: row.script_note_id as string | null,
    finalLink: row.final_link as string | null,
    comments,
    reEdits,
    reEditRequests,
    isInReEdit: row.is_in_re_edit as boolean,
    createdAt: row.created_at as string,
    closedAt: row.closed_at as string | null,
    deletedById: (row.deleted_by_id as string) ?? null,
    deletedByName: deletedByProfile?.full_name ?? null,
    deletedAt: row.deleted_at as string | null,
    deletionReason: row.deletion_reason as string | null,
  };
};

export const useRequestStore = create<RequestState>((set, get) => ({
  requests: [],
  isLoaded: false,

  fetchRequests: async () => {
    const supabase = createClient();

    // Fetch requests
    const { data: requestRows, error } = await supabase
      .from('creative_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !requestRows) return;

    if (requestRows.length === 0) {
      set({ requests: [], isLoaded: true });
      return;
    }

    const requestIds = requestRows.map((r) => r.id);

    // Fetch related data in parallel
    const [commentsRes, reEditsRes, reEditRequestsRes, profilesRes] = await Promise.all([
      supabase
        .from('request_comments')
        .select('*')
        .in('request_id', requestIds)
        .order('created_at', { ascending: true }),
      supabase
        .from('re_edit_entries')
        .select('*')
        .in('request_id', requestIds)
        .order('created_at', { ascending: true }),
      supabase
        .from('re_edit_requests')
        .select('*')
        .in('request_id', requestIds)
        .order('created_at', { ascending: true }),
      supabase
        .from('profiles')
        .select('id, full_name, email'),
    ]);

    // Build profile lookup
    const profiles: Record<string, { full_name: string; email: string }> = {};
    for (const p of profilesRes.data ?? []) {
      profiles[p.id] = { full_name: p.full_name, email: p.email };
    }

    // Group comments by request_id
    const commentsByRequest: Record<string, RequestComment[]> = {};
    for (const c of commentsRes.data ?? []) {
      const authorProfile = profiles[c.author_id];
      const comment: RequestComment = {
        id: c.id,
        authorId: c.author_id,
        authorName: authorProfile?.full_name ?? '',
        content: c.content,
        createdAt: c.created_at,
      };
      if (!commentsByRequest[c.request_id]) commentsByRequest[c.request_id] = [];
      commentsByRequest[c.request_id].push(comment);
    }

    // Group re-edits by request_id
    const reEditsByRequest: Record<string, ReEditEntry[]> = {};
    for (const re of reEditsRes.data ?? []) {
      const creatorProfile = profiles[re.created_by_id];
      const entry: ReEditEntry = {
        id: re.id,
        deadline: re.deadline,
        comment: re.comment,
        submittedAt: re.submitted_at,
        createdAt: re.created_at,
        createdById: re.created_by_id,
        createdByName: creatorProfile?.full_name ?? '',
      };
      if (!reEditsByRequest[re.request_id]) reEditsByRequest[re.request_id] = [];
      reEditsByRequest[re.request_id].push(entry);
    }

    // Group re-edit requests by request_id
    const reEditRequestsByRequest: Record<string, ReEditRequest[]> = {};
    for (const req of reEditRequestsRes.data ?? []) {
      const requesterProfile = profiles[req.requested_by_id];
      const reEditReq: ReEditRequest = {
        id: req.id,
        requestedById: req.requested_by_id,
        requestedByName: requesterProfile?.full_name ?? '',
        requestedDate: req.requested_date,
        comment: req.comment,
        status: req.status,
        createdAt: req.created_at,
      };
      if (!reEditRequestsByRequest[req.request_id]) reEditRequestsByRequest[req.request_id] = [];
      reEditRequestsByRequest[req.request_id].push(reEditReq);
    }

    // Map all requests
    const requests = requestRows.map((row) =>
      mapDbRequest(
        row,
        commentsByRequest[row.id] ?? [],
        reEditsByRequest[row.id] ?? [],
        reEditRequestsByRequest[row.id] ?? [],
        profiles
      )
    );

    set({ requests, isLoaded: true });
  },

  addRequest: async (request) => {
    const supabase = createClient();

    const { error } = await supabase.from('creative_requests').insert({
      id: request.id,
      title: request.title,
      description: request.description,
      type: request.type,
      priority: request.priority,
      status: request.status,
      total_items: request.totalItems,
      due_date: request.dueDate,
      requester_id: request.requesterId,
      assignee_id: request.assigneeId,
      team_lead_id: request.teamLeadId,
      reference_links: request.referenceLinks,
      script_note_id: request.scriptNoteId,
      final_link: request.finalLink,
      is_in_re_edit: request.isInReEdit,
    });

    if (error) {
      console.error('Failed to add request:', error.message);
      return;
    }

    // Optimistic update
    set((state) => ({ requests: [request, ...state.requests] }));
  },

  updateRequest: async (id, updates) => {
    const supabase = createClient();

    // Map camelCase to snake_case for DB
    const dbUpdates: Record<string, unknown> = {};
    if (updates.title !== undefined) dbUpdates.title = updates.title;
    if (updates.description !== undefined) dbUpdates.description = updates.description;
    if (updates.type !== undefined) dbUpdates.type = updates.type;
    if (updates.priority !== undefined) dbUpdates.priority = updates.priority;
    if (updates.status !== undefined) dbUpdates.status = updates.status;
    if (updates.totalItems !== undefined) dbUpdates.total_items = updates.totalItems;
    if (updates.dueDate !== undefined) dbUpdates.due_date = updates.dueDate;
    if (updates.assigneeId !== undefined) dbUpdates.assignee_id = updates.assigneeId;
    if (updates.teamLeadId !== undefined) dbUpdates.team_lead_id = updates.teamLeadId;
    if (updates.referenceLinks !== undefined) dbUpdates.reference_links = updates.referenceLinks;
    if (updates.scriptNoteId !== undefined) dbUpdates.script_note_id = updates.scriptNoteId;
    if (updates.finalLink !== undefined) dbUpdates.final_link = updates.finalLink;
    if (updates.isInReEdit !== undefined) dbUpdates.is_in_re_edit = updates.isInReEdit;
    if (updates.closedAt !== undefined) dbUpdates.closed_at = updates.closedAt;
    if (updates.deletedById !== undefined) dbUpdates.deleted_by_id = updates.deletedById;
    if (updates.deletedAt !== undefined) dbUpdates.deleted_at = updates.deletedAt;
    if (updates.deletionReason !== undefined) dbUpdates.deletion_reason = updates.deletionReason;

    if (Object.keys(dbUpdates).length > 0) {
      await supabase.from('creative_requests').update(dbUpdates).eq('id', id);
    }

    // Optimistic update
    set((state) => ({
      requests: state.requests.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    }));
  },

  moveForward: async (id) => {
    const request = get().requests.find((r) => r.id === id);
    if (!request) return;

    const currentIndex = STATUS_ORDER.indexOf(request.status);
    if (currentIndex >= STATUS_ORDER.length - 1) return;

    const nextStatus = STATUS_ORDER[currentIndex + 1];
    const supabase = createClient();

    const dbUpdates: Record<string, unknown> = { status: nextStatus };

    // When moving forward to review or closed while in re-edit, mark latest re-edit as submitted
    if (request.isInReEdit && (nextStatus === 'review' || nextStatus === 'closed')) {
      dbUpdates.is_in_re_edit = false;
    }

    // Mark all unsubmitted re-edits as submitted when reaching review or closed
    if (nextStatus === 'review' || nextStatus === 'closed') {
      const now = new Date().toISOString();
      const unsubmittedReEdits = request.reEdits.filter((re) => !re.submittedAt);
      for (const re of unsubmittedReEdits) {
        await supabase
          .from('re_edit_entries')
          .update({ submitted_at: now })
          .eq('id', re.id);
      }
    }

    if (nextStatus === 'closed') {
      dbUpdates.closed_at = new Date().toISOString();
    }

    await supabase.from('creative_requests').update(dbUpdates).eq('id', id);

    // Optimistic update
    const now = new Date().toISOString();
    set((state) => ({
      requests: state.requests.map((r) => {
        if (r.id !== id) return r;
        let updatedReEdits = r.reEdits;
        let updatedIsInReEdit = r.isInReEdit;
        if (nextStatus === 'review' || nextStatus === 'closed') {
          updatedReEdits = r.reEdits.map((re) =>
            !re.submittedAt ? { ...re, submittedAt: now } : re
          );
          updatedIsInReEdit = false;
        }
        return {
          ...r,
          status: nextStatus,
          reEdits: updatedReEdits,
          isInReEdit: updatedIsInReEdit,
          closedAt: nextStatus === 'closed' ? now : r.closedAt,
        };
      }),
    }));
  },

  moveBackward: async (id, reEdit) => {
    const request = get().requests.find((r) => r.id === id);
    if (!request) return;

    const currentIndex = STATUS_ORDER.indexOf(request.status);
    if (currentIndex <= 0) return;

    const prevStatus = STATUS_ORDER[currentIndex - 1];
    const supabase = createClient();

    await supabase.from('creative_requests').update({
      status: prevStatus,
      is_in_re_edit: reEdit ? true : request.isInReEdit,
      closed_at: request.status === 'closed' ? null : request.closedAt,
    }).eq('id', id);

    if (reEdit) {
      await supabase.from('re_edit_entries').insert({
        id: reEdit.id,
        request_id: id,
        deadline: reEdit.deadline,
        comment: reEdit.comment,
        submitted_at: reEdit.submittedAt,
        created_by_id: reEdit.createdById,
      });
    }

    set((state) => ({
      requests: state.requests.map((r) => {
        if (r.id !== id) return r;
        return {
          ...r,
          status: prevStatus,
          reEdits: reEdit ? [...r.reEdits, reEdit] : r.reEdits,
          isInReEdit: reEdit ? true : r.isInReEdit,
          closedAt: r.status === 'closed' ? null : r.closedAt,
        };
      }),
    }));
  },

  moveToStatus: async (id, status) => {
    const request = get().requests.find((r) => r.id === id);
    const supabase = createClient();

    const dbUpdates: Record<string, unknown> = {
      status,
      closed_at: status === 'closed' ? new Date().toISOString() : undefined,
    };

    if (request?.isInReEdit && (status === 'closed' || status === 'review')) {
      dbUpdates.is_in_re_edit = false;
    }

    // Mark all unsubmitted re-edits as submitted when reaching review or closed
    if (request && (status === 'closed' || status === 'review')) {
      const now = new Date().toISOString();
      const unsubmittedReEdits = request.reEdits.filter((re) => !re.submittedAt);
      for (const re of unsubmittedReEdits) {
        await supabase
          .from('re_edit_entries')
          .update({ submitted_at: now })
          .eq('id', re.id);
      }
    }

    await supabase.from('creative_requests').update(dbUpdates).eq('id', id);

    const now = new Date().toISOString();
    set((state) => ({
      requests: state.requests.map((r) => {
        if (r.id !== id) return r;
        let updatedReEdits = r.reEdits;
        let updatedIsInReEdit = r.isInReEdit;
        if (status === 'closed' || status === 'review') {
          updatedReEdits = r.reEdits.map((re) =>
            !re.submittedAt ? { ...re, submittedAt: now } : re
          );
          updatedIsInReEdit = false;
        }
        return {
          ...r,
          status,
          reEdits: updatedReEdits,
          isInReEdit: updatedIsInReEdit,
          closedAt: status === 'closed' ? now : r.closedAt,
        };
      }),
    }));
  },

  assignRequest: async (id, assigneeId, assigneeName) => {
    const supabase = createClient();
    await supabase.from('creative_requests').update({ assignee_id: assigneeId }).eq('id', id);

    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === id ? { ...r, assigneeId, assigneeName } : r
      ),
    }));
  },

  addComment: async (requestId, comment) => {
    const supabase = createClient();

    await supabase.from('request_comments').insert({
      id: comment.id,
      request_id: requestId,
      author_id: comment.authorId,
      content: comment.content,
    });

    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === requestId ? { ...r, comments: [...r.comments, comment] } : r
      ),
    }));
  },

  deleteRequest: async (id, deletedById, deletedByName, reason) => {
    const supabase = createClient();

    await supabase.from('creative_requests').update({
      status: 'deleted',
      deleted_by_id: deletedById,
      deleted_at: new Date().toISOString(),
      deletion_reason: reason,
    }).eq('id', id);

    // Add deletion comment
    const commentId = crypto.randomUUID();
    await supabase.from('request_comments').insert({
      id: commentId,
      request_id: id,
      author_id: deletedById,
      content: `[Deleted] ${reason}`,
    });

    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === id
          ? {
              ...r,
              status: 'deleted' as const,
              deletedById,
              deletedByName,
              deletedAt: new Date().toISOString(),
              deletionReason: reason,
              comments: [
                ...r.comments,
                {
                  id: commentId,
                  authorId: deletedById,
                  authorName: deletedByName,
                  content: `[Deleted] ${reason}`,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : r
      ),
    }));
  },

  requestReEdit: async (requestId, reEditRequest) => {
    const supabase = createClient();

    await supabase.from('re_edit_requests').insert({
      id: reEditRequest.id,
      request_id: requestId,
      requested_by_id: reEditRequest.requestedById,
      requested_date: reEditRequest.requestedDate,
      comment: reEditRequest.comment,
      status: reEditRequest.status,
    });

    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === requestId
          ? { ...r, reEditRequests: [...r.reEditRequests, reEditRequest] }
          : r
      ),
    }));
  },

  approveReEditRequest: async (requestId, reEditRequestId, reEdit) => {
    const request = get().requests.find((r) => r.id === requestId);
    if (!request) return;

    const supabase = createClient();
    const currentIndex = STATUS_ORDER.indexOf(request.status);
    const prevStatus = currentIndex > 0 ? STATUS_ORDER[currentIndex - 1] : request.status;

    // Update request status
    if (request.status === 'review' || request.status === 'closed') {
      await supabase.from('creative_requests').update({
        status: prevStatus,
        is_in_re_edit: true,
        closed_at: request.status === 'closed' ? null : request.closedAt,
      }).eq('id', requestId);
    }

    // Add re-edit entry
    await supabase.from('re_edit_entries').insert({
      id: reEdit.id,
      request_id: requestId,
      deadline: reEdit.deadline,
      comment: reEdit.comment,
      submitted_at: reEdit.submittedAt,
      created_by_id: reEdit.createdById,
    });

    // Update re-edit request status
    await supabase.from('re_edit_requests').update({ status: 'approved' }).eq('id', reEditRequestId);

    set((state) => ({
      requests: state.requests.map((r) => {
        if (r.id !== requestId) return r;
        return {
          ...r,
          status: (r.status === 'review' || r.status === 'closed') ? prevStatus : r.status,
          reEdits: [...r.reEdits, reEdit],
          isInReEdit: true,
          reEditRequests: r.reEditRequests.map((req) =>
            req.id === reEditRequestId ? { ...req, status: 'approved' as const } : req
          ),
          closedAt: r.status === 'closed' ? null : r.closedAt,
        };
      }),
    }));
  },

  rejectReEditRequest: async (requestId, reEditRequestId) => {
    const supabase = createClient();
    await supabase.from('re_edit_requests').update({ status: 'rejected' }).eq('id', reEditRequestId);

    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === requestId
          ? {
              ...r,
              reEditRequests: r.reEditRequests.map((req) =>
                req.id === reEditRequestId ? { ...req, status: 'rejected' as const } : req
              ),
            }
          : r
      ),
    }));
  },

  getRequestsByStatus: (status) => {
    return get().requests.filter((r) => r.status === status);
  },

  getRequestsByAssignee: (assigneeId) => {
    return get().requests.filter((r) => r.assigneeId === assigneeId);
  },

  getRequestsByRequester: (requesterId) => {
    return get().requests.filter((r) => r.requesterId === requesterId);
  },

  subscribeRealtime: () => {
    const supabase = createClient();
    const channel = supabase
      .channel('requests-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'creative_requests' },
        () => {
          // Re-fetch all requests on any change (handles complex joins)
          get().fetchRequests();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  },
}));
