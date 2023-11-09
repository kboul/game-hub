import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../constants";
import ApiClient from "../api/apiClient";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export default function usePlatforms() {
  return useQuery({
    queryKey: queryKeys.genres,
    queryFn: apiClient.getAll
    // staleTime: 24 * 60 * 60 * 1000 // 1 day
  });
}
