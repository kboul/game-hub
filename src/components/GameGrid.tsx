import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import { useGames } from "../hooks";

export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}>
        {games.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
}
