import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../constants";
import apiClient from "../api/apiClient";

export default function usePlatforms() {
  return useQuery({
    queryKey: queryKeys.genres,
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data)
    // staleTime: 24 * 60 * 60 * 1000 // 1 day
  });
}
