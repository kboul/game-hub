import useData from "./useData";

export default function useGames(selectedGenre: Genre) {
  const genreId = selectedGenre.id;
  return useData<Game>("/games", { params: { genres: genreId } }, [genreId]);
}
