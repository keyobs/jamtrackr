import { create } from 'zustand';

export type TPlayer = {
  id?: string;
  name: string;
  number: string;
  team: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export interface TPlayersState {
  playersList: TPlayer[];
  updatePlayersList: (player: TPlayer) => void;
}

export const usePlayersStore = create<TPlayersState>((set) => ({
    playersList: [],
    updatePlayersList: (player) =>
        set((state) => ({ playersList: [...state.playersList, player] })),
}));
