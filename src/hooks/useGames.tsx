import { useInfiniteQuery } from "@tanstack/react-query";

import ApiClient from "../api/apiClient";
import useStore from "./useStore";
import { queryKeys } from "../constants";

const apiClient = new ApiClient<Game>("/games");

export default function useGames() {
  const selectedGenreId = useStore((state) => state.selectedGenreId);
  const selectedPlatformId = useStore((state) => state.selectedPlatformId);
  const selectedSortOrder = useStore((state) => state.selectedSortOrder);
  const searchedGame = useStore((state) => state.searchedGame);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      ...queryKeys.games,
      { genreId: selectedGenreId },
      { platformId: selectedPlatformId },
      { sortOrder: selectedSortOrder },
      { searchedGame }
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
