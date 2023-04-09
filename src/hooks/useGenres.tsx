import useData from "./useData";

export default function useGenres() {
  return useData<Genre>("/genres");
}
