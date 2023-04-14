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

  const gameQuery = { selectedGenre, selectedPlatform, selectedSortOrder };

  const { loading, data: games, error } = useGames(gameQuery);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}>
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
        {!loading && games.length === 0 && (
          <Alert status="info" mt={2} width="95%">
            <AlertIcon />
            There are no games with the selected criteria.
          </Alert>
        )}
      </SimpleGrid>
    </>
  );
}
