import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useGames } from "../hooks";

const skeletons = Array(10)
  .fill(undefined)
  .map((_, i) => i + 1);

export default function GameGrid() {
  const { loading, games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}>
        {loading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
}
