import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface StoreState {
  selectedGenre: Genre;
  setSelectedGenre: (genre: Genre) => void;
  selectedPlatform: Platform;
  setSelectedPlatform: (platform: Platform) => void;
}

const useStore = create<StoreState>()(
  devtools((set) => ({
    selectedGenre: {} as Genre,
    setSelectedGenre: (genre) => set({ selectedGenre: genre }),
    selectedPlatform: {} as Platform,
    setSelectedPlatform: (platform) => set({ selectedPlatform: platform })
  }))
);

export default useStore;
