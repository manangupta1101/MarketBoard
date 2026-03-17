import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type { Resource, ResourceCategory } from '@/types';

interface ResourceState {
  resources: Resource[];
  isLoaded: boolean;

  fetchResources: () => Promise<void>;
  addResource: (resource: Resource) => Promise<void>;
  updateResource: (id: string, updates: Partial<Resource>) => Promise<void>;
  deleteResource: (id: string) => Promise<void>;
  getByCategory: (category: ResourceCategory) => Resource[];
}

export const useResourceStore = create<ResourceState>((set, get) => ({
  resources: [],
  isLoaded: false,

  fetchResources: async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('resources')
      .select('*, added_by:profiles!added_by_id(full_name)')
      .order('created_at', { ascending: false });

    if (error || !data) return;

    const resources: Resource[] = data.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      category: row.category as ResourceCategory,
      url: row.url,
      fileName: row.file_name,
      fileSize: row.file_size,
      username: row.username,
      password: row.password,
      addedById: row.added_by_id,
      addedByName: (row.added_by as Record<string, string>)?.full_name ?? '',
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));

    set({ resources, isLoaded: true });
  },

  addResource: async (resource) => {
    const supabase = createClient();

    await supabase.from('resources').insert({
      id: resource.id,
      title: resource.title,
      description: resource.description,
      category: resource.category,
      url: resource.url,
      file_name: resource.fileName,
      file_size: resource.fileSize,
      username: resource.username,
      password: resource.password,
      added_by_id: resource.addedById,
    });

    set((state) => ({ resources: [resource, ...state.resources] }));
  },

  updateResource: async (id, updates) => {
    const supabase = createClient();

    const dbUpdates: Record<string, unknown> = {};
    if (updates.title !== undefined) dbUpdates.title = updates.title;
    if (updates.description !== undefined) dbUpdates.description = updates.description;
    if (updates.category !== undefined) dbUpdates.category = updates.category;
    if (updates.url !== undefined) dbUpdates.url = updates.url;
    if (updates.fileName !== undefined) dbUpdates.file_name = updates.fileName;
    if (updates.fileSize !== undefined) dbUpdates.file_size = updates.fileSize;
    if (updates.username !== undefined) dbUpdates.username = updates.username;
    if (updates.password !== undefined) dbUpdates.password = updates.password;

    if (Object.keys(dbUpdates).length > 0) {
      await supabase.from('resources').update(dbUpdates).eq('id', id);
    }

    set((state) => ({
      resources: state.resources.map((r) =>
        r.id === id ? { ...r, ...updates, updatedAt: new Date().toISOString() } : r
      ),
    }));
  },

  deleteResource: async (id) => {
    const supabase = createClient();
    await supabase.from('resources').delete().eq('id', id);

    set((state) => ({ resources: state.resources.filter((r) => r.id !== id) }));
  },

  getByCategory: (category) => {
    return get().resources.filter((r) => r.category === category);
  },
}));
