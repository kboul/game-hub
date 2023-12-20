import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchedGame?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSelectedGenreId: (genreId: number) => void;
  setSelectedPlatformId: (platformId: number) => void;
  setSelectedSortOrder: (sortOrder: string) => void;
  setSearchedGame: (searchedGame: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSelectedGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setSelectedPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSelectedSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchedGame: (searchedGame) => set({ gameQuery: { searchedGame } })
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Store", useGameQueryStore);

export default useGameQueryStore;
