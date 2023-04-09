import { useGenres } from "../hooks";

export default function GenreList() {
  const { loading, genres, error } = useGenres();

  return (
    <ul>
      {genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
