import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Text
} from "@chakra-ui/react";

import { GameAttributes, GameScreenshots, GameTrailers } from "../components";
import { useGameDetails } from "../hooks";

export default function GameDetailsPage() {
  const { id } = useParams();

  const { data: game, isLoading, isError } = useGameDetails(id!);

  const [noOfLines, setNoOfLines] = useState(5);

  if (isLoading) return <Spinner />;
  if (isError || !game) return <Box>Something went wrong</Box>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <Box>
        <Heading>{game.name}</Heading>
        <Text noOfLines={noOfLines}>{game.description_raw}</Text>
        <Button
          colorScheme="yellow"
          fontWeight="bold"
          onClick={() => setNoOfLines((prev) => (prev === 5 ? 0 : 5))}
          size="xs"
          variant="solid">
          Show {noOfLines === 5 ? "more" : "less"}
        </Button>

        <Box marginTop={5}>
          <GameAttributes game={game} />
        </Box>
      </Box>

      <Box>
        <Box display="flex" justifyContent="center" marginTop={5}>
          <GameTrailers gameId={game.id} />
        </Box>

        <GameScreenshots gameId={game.id} />
      </Box>

      <Box>
        <Button as={Link} to="/">
          Go back
        </Button>
      </Box>
    </SimpleGrid>
  );
}
