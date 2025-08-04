import { create } from "zustand";

type AdminState = {
  id: string;
  name: string;
};

type AdminStore = {
  admin: AdminState | null;
  setAdmin: (admin: AdminState | null) => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  admin: null,
  setAdmin: (admin) => set({ admin }),
}));
