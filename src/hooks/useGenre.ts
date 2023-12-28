import useGenres from "./useGenres";

export default function useGenre(id: string) {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === Number(id));
}
