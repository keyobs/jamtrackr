import { create } from 'zustand';

export type TTeam = {
  id?: string;
  name: string;
  players: string[];
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export interface TTeamsState {
  teamsList: TTeam[];
  updateTeamsList: (team: TTeam) => void;
}

export const useTeamsStore = create<TTeamsState>((set) => ({
    teamsList: [],
    updateTeamsList: (team: TTeam) =>
        set((state) => ({ teamsList: [...state.teamsList, team] })),
}));
