import useData from "./useData";

export default function useGames(
  selectedGenre: Genre,
  selectedPlatform: Platform
) {
  const genreId = selectedGenre.id;
  const platformId = selectedPlatform.id;

  return useData<Game>(
    "/games",
    { params: { genres: genreId, platforms: platformId } },
    [genreId, platformId]
  );
}
