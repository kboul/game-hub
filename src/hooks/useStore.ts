import { create } from "zustand";
import { devtools } from "zustand/middleware";

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

const useStore = create<StoreState>()(
  devtools((set) => ({
    selectedGenreId: undefined as GenreId,
    setSelectedGenreId: (genreId) => set({ selectedGenreId: genreId }),
    selectedPlatformId: undefined as PlatformId,
    setSelectedPlatformId: (platformId) =>
      set({ selectedPlatformId: platformId }),
    selectedSortOrder: "",
    setSelectedSortOrder: (sortOrder) => set({ selectedSortOrder: sortOrder }),
    searchedGame: "",
    setSearchedGame: (game) => set({ searchedGame: game })
  }))
);

export default useStore;
