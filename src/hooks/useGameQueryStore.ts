import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  searchedGame?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchedGame: (searchedGame: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,

  setSearchedGame: (searchedGame) => set({ gameQuery: { searchedGame } })
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Store", useGameQueryStore);

export default useGameQueryStore;
