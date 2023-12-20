import { useInfiniteQuery } from "@tanstack/react-query";

import ApiClient from "../api/apiClient";
import useGameQueryStore from "./useGameQueryStore";
import { queryKeys } from "../constants";

const apiClient = new ApiClient<Game>("/games");

export default function useGames() {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [...queryKeys.games, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchedGame,
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
