import useGenres from "./useGenres";

export default function useGenre(id: number | undefined) {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === id);
}
