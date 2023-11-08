import { useQuery } from "@tanstack/react-query";

import apiClient from "../api/apiClient";
import { queryKeys } from "../constants";

interface GameQuery {
  selectedGenre: Genre;
  selectedPlatform: Platform;
  selectedSortOrder: string;
  searchedGame: string;
}

export default function useGames(gameQuery: GameQuery) {
  const genreId = gameQuery.selectedGenre.id;
  const platformId = gameQuery.selectedPlatform.id;
  const sortOrder = gameQuery.selectedSortOrder;
  const searchedGameText = gameQuery.searchedGame;

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [
      ...queryKeys.games,
      genreId,
      platformId,
      sortOrder,
      searchedGameText
    ],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: genreId,
            parent_platforms: platformId,
            ordering: sortOrder,
            search: searchedGameText
          }
        })
        .then((res) => res.data)
  });
}
