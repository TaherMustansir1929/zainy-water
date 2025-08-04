import { Area } from "@prisma/client";
import { create } from "zustand";

type ModeratorState = {
  id: string;
  name: string;
  areas: Area[];
};

type ModeratorStore = {
  moderator: ModeratorState | null;
  setModerator: (moderator: ModeratorState | null) => void;
};

export const useModeratorStore = create<ModeratorStore>((set) => ({
  moderator: null,
  setModerator: (moderator) => set({ moderator }),
}));
