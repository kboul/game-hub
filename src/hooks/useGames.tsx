import useData from "./useData";

interface GameQuery {
  selectedGenre: Genre;
  selectedPlatform: Platform;
  selectedSortOrder: string;
  searchedGame: string;
}

export default function useGames(gameQuery: GameQuery) {
  const genreId = gameQuery.selectedGenre.id;
  const platformId = gameQuery.selectedPlatform.id;
  const sortOrder = gameQuery.selectedSortOrder;
  const searchedGameText = gameQuery.searchedGame;

  return useData<Game>(
    "/games",
    {
      params: {
        genres: genreId,
        platforms: platformId,
        ordering: gameQuery.selectedSortOrder,
        search: searchedGameText
      }
    },
    [genreId, platformId, sortOrder, searchedGameText]
  );
}
