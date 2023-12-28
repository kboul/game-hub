import usePlatforms from "./usePlatforms";

export default function usePlatform(id: string) {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform.id === Number(id));
}
