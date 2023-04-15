import useData from "./useData";

interface GameQuery {
  selectedGenre: Genre;
  selectedPlatform: Platform;
  selectedSortOrder: string;
}

export default function useGames(gameQuery: GameQuery) {
  const genreId = gameQuery.selectedGenre.id;
  const platformId = gameQuery.selectedPlatform.id;
  const sortOrder = gameQuery.selectedSortOrder;

  return useData<Game>(
    "/games",
    {
      params: {
        genres: genreId,
        platforms: platformId,
        ordering: gameQuery.selectedSortOrder
      }
    },
    [genreId, platformId, sortOrder]
  );
}
