import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface StoreState {
  selectedGenreId: GenreId;
  setSelectedGenreId: (genreId: GenreId) => void;
  selectedPlatformId: PlatformId;
  setSelectedPlatformId: (platformId: PlatformId) => void;
  selectedSortOrder: string;
  setSelectedSortOrder: (sortOrder: string) => void;
  searchedGame: string;
  setSearchedGame: (game: string) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedGenreId: undefined as GenreId,
  setSelectedGenreId: (genreId) => set({ selectedGenreId: genreId }),
  selectedPlatformId: undefined as PlatformId,
  setSelectedPlatformId: (platformId) =>
    set({ selectedPlatformId: platformId }),
  selectedSortOrder: "",
  setSelectedSortOrder: (sortOrder) => set({ selectedSortOrder: sortOrder }),
  searchedGame: "",
  setSearchedGame: (game) => set({ searchedGame: game })
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Store", useStore);

export default useStore;
