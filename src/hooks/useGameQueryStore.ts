import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  sortOrder?: string;
  searchedGame?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSelectedSortOrder: (sortOrder: string) => void;
  setSearchedGame: (searchedGame: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSelectedSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchedGame: (searchedGame) => set({ gameQuery: { searchedGame } })
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Store", useGameQueryStore);

export default useGameQueryStore;
