import { useInfiniteQuery } from "@tanstack/react-query";

import ApiClient from "../api/apiClient";
import { queryKeys } from "../constants";

const apiClient = new ApiClient<Game>("/games");

interface GameQuery {
  selectedGenreId: GenreId;
  selectedPlatformId: PlatformId;
  selectedSortOrder: string;
  searchedGame: string;
}

export default function useGames(gameQuery: GameQuery) {
  const {
    selectedGenreId,
    selectedPlatformId,
    selectedSortOrder,
    searchedGame
  } = gameQuery;

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      ...queryKeys.games,
      { genreId: selectedGenreId },
      { platformId: selectedPlatformId },
      selectedSortOrder,
      searchedGame
    ],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: selectedGenreId,
          parent_platforms: selectedPlatformId,
          ...(selectedSortOrder && { ordering: selectedSortOrder }), // conditonally add ordering param to the request
          ...(searchedGame && { search: searchedGame }), // conditonally add search param to the request
          page: pageParam
        }
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 // 24h
  });
}
