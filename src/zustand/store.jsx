import { create } from 'zustand';

export const useStore = create((set) => ({
    resources: [],
    setResources: (data) => set({ resources: data }),
}));


