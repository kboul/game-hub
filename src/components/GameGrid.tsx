import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import { useGames } from "../hooks";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const { loading, games, error } = useGames();

  const skeletons = Array(6)
    .fill(undefined)
    .map((_, i) => i + 1);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}>
        {loading &&
          skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {games.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
}
