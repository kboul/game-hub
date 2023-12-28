import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../constants";
import ApiClient from "../api/apiClient";

export default function useGameScreenshots(gameId: number) {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: [...queryKeys.screenshots, gameId],
    queryFn: apiClient.getAll
  });
}
