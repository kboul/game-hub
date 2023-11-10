import usePlatforms from "./usePlatforms";

export default function usePlatform(id: PlatformId) {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform.id === id);
}
