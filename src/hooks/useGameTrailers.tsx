import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../constants";
import ApiClient from "../api/apiClient";

export default function useGameTrailers(gameId: number) {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: [...queryKeys.trailers, gameId],
    queryFn: apiClient.getAll
  });
}
