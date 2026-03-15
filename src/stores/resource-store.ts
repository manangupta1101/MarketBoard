import { create } from 'zustand';
import type { Resource, ResourceCategory } from '@/types';

interface ResourceState {
  resources: Resource[];
  addResource: (resource: Resource) => void;
  updateResource: (id: string, updates: Partial<Resource>) => void;
  deleteResource: (id: string) => void;
  getByCategory: (category: ResourceCategory) => Resource[];
}

export const useResourceStore = create<ResourceState>((set, get) => ({
  resources: [],

  addResource: (resource) => {
    set((state) => ({ resources: [...state.resources, resource] }));
  },

  updateResource: (id, updates) => {
    set((state) => ({
      resources: state.resources.map((r) =>
        r.id === id ? { ...r, ...updates, updatedAt: new Date().toISOString() } : r
      ),
    }));
  },

  deleteResource: (id) => {
    set((state) => ({ resources: state.resources.filter((r) => r.id !== id) }));
  },

  getByCategory: (category) => {
    return get().resources.filter((r) => r.category === category);
  },
}));
