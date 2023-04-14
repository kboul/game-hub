import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface StoreState {
  selectedGenre: Genre;
  setSelectedGenre: (genre: Genre) => void;
  selectedPlatform: Platform;
  setSelectedPlatform: (platform: Platform) => void;
  selectedSortOrder: string;
  setSelectedSortOrder: (sortOrder: string) => void;
}

const useStore = create<StoreState>()(
  devtools((set) => ({
    selectedGenre: {} as Genre,
    setSelectedGenre: (genre) => set({ selectedGenre: genre }),
    selectedPlatform: {} as Platform,
    setSelectedPlatform: (platform) => set({ selectedPlatform: platform }),
    selectedSortOrder: "",
    setSelectedSortOrder: (sortOrder) => set({ selectedSortOrder: sortOrder })
  }))
);

export default useStore;
