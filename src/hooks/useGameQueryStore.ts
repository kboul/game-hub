import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  platformId?: number;
  sortOrder?: string;
  searchedGame?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSelectedPlatformId: (platformId: number) => void;
  setSelectedSortOrder: (sortOrder: string) => void;
  setSearchedGame: (searchedGame: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSelectedPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSelectedSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchedGame: (searchedGame) => set({ gameQuery: { searchedGame } })
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Store", useGameQueryStore);

export default useGameQueryStore;
