import usePlatforms from "./usePlatforms";

export default function usePlatform(id: number | undefined) {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform.id === id);
}
