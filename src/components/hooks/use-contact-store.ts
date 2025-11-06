'use client';

import { create } from 'zustand';

interface ContactStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useContactStore = create<ContactStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
