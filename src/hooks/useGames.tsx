import { useInfiniteQuery } from "@tanstack/react-query";

import ApiClient from "../api/apiClient";
import { queryKeys } from "../constants";
import useSearchParam from "./useSearchParam";

const apiClient = new ApiClient<Game>("/games");

export default function useGames() {
  const genreId = useSearchParam("genreId");
  const platformId = useSearchParam("platformId");
  const sortOrder = useSearchParam("sortOrder");
  const searchedGame = useSearchParam("searchedGame");

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      ...queryKeys.games,
      { genreId, platformId, sortOrder, searchedGame }
    ],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: genreId,
          parent_platforms: platformId,
          ordering: sortOrder,
          search: searchedGame,
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
