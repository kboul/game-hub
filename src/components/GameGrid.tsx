import { Alert, AlertIcon, SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useGames, useStore } from "../hooks";

const skeletons = Array(12)
  .fill(undefined)
  .map((_, i) => i + 1);

export default function GameGrid() {
  const selectedGenre = useStore((state) => state.selectedGenre);
  const selectedPlatform = useStore((state) => state.selectedPlatform);
  const selectedSortOrder = useStore((state) => state.selectedSortOrder);
  const searchedGame = useStore((state) => state.searchedGame);

  const gameQuery = {
    selectedGenre,
    selectedPlatform,
    selectedSortOrder,
    searchedGame
  };

  const { isLoading, data, error } = useGames(gameQuery);

  const NoGamesAlert = (
    <Alert status="info" mt={2} width="50%" marginLeft={2}>
      <AlertIcon />
      There are no games with the selected criteria.
    </Alert>
  );

  const showNoGamesAlert = Boolean(
    (Object.keys(selectedPlatform).length > 0 ||
      Object.keys(selectedSortOrder).length) &&
      data?.results.length === 0
  );

  let content = (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );

  if (error) content = <Text>{error.message}</Text>;
  if (showNoGamesAlert) content = NoGamesAlert;

  return content;
}
