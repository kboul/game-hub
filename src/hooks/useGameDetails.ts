import { useQuery } from "@tanstack/react-query";

import ApiClient from "../api/apiClient";
import { queryKeys } from "../constants";

const apiClient = new ApiClient<GameDetails>("/games");

export default function useGameDetails(slug: string) {
  return useQuery({
    queryKey: [...queryKeys.games, slug],
    queryFn: () => apiClient.get(slug)
  });
}
