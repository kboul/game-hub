import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface StoreState {
  selectedGenre: Genre;
  setSelectedGenre: (genre: Genre) => void;
}

const useStore = create<StoreState>()(
  devtools((set) => ({
    selectedGenre: {} as Genre,
    setSelectedGenre: (genre) => set({ selectedGenre: genre })
  }))
);

export default useStore;
