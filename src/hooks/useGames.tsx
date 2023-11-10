import { useInfiniteQuery } from "@tanstack/react-query";

import ApiClient from "../api/apiClient";
import { queryKeys } from "../constants";

const apiClient = new ApiClient<Game>("/games");

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

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      ...queryKeys.games,
      genreId,
      platformId,
      sortOrder,
      searchedGameText
    ],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: genreId,
          parent_platforms: platformId,
          ...(sortOrder && { ordering: sortOrder }), // conditonally add ordering param to the request
          ...(searchedGameText && { search: searchedGameText }), // conditonally add search param to the request
          page: pageParam
        }
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  });
}
