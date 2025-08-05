import { Moderator } from "@/app/(admin)/admin/(dashboard)/add-moderator/columns";
import { create } from "zustand";

export type AddModDrawerState = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  mod_data: Moderator | null;
  setModData: (data: Moderator) => void;
};

export const useAddModDrawer = create<AddModDrawerState>((set) => ({
  isOpen: false,
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
  mod_data: null,
  setModData: (data: Moderator) => set({ mod_data: data }),
}));
