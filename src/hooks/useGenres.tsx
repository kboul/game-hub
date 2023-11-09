import { useQuery } from "@tanstack/react-query";

import ApiClient from "../api/apiClient";
import { queryKeys } from "../constants";

const apiClient = new ApiClient<Genre>("/genres");

export default function useGenres() {
  return useQuery({
    queryKey: queryKeys.genres,
    queryFn: apiClient.getAll
    // staleTime: 24 * 60 * 60 * 1000 // 1 day
  });
}
// if we give intialData and keep the stale time on 1day then the real data will be fetched after 1 day
// and keep the initialData as fresh in the first place
