import useGenres from "./useGenres";

export default function useGenre(id: GenreId) {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === id);
}
