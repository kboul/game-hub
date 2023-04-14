import useData from "./useData";

export default function usePlatforms() {
  return useData<Platform>("/platforms/lists/parents");
}
