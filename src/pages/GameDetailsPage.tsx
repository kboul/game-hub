import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";

import { GameAttributes, GameTrailers } from "../components";
import { useGameDetails } from "../hooks";

export default function GameDetailsPage() {
  const { id } = useParams();

  const { data: game, isLoading, isError } = useGameDetails(id!);

  const [isTruncated, setIsTruncated] = useState(true);

  if (isLoading) return <Spinner />;
  if (isError || !game) return <Box>Something went wrong</Box>;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text isTruncated={isTruncated}>{game.description_raw}</Text>
      <Button
        colorScheme="yellow"
        fontWeight="bold"
        onClick={() => setIsTruncated(!isTruncated)}
        size="xs"
        variant="solid">
        Show {isTruncated ? "more" : "less"}
      </Button>

      <Box marginTop={5}>
        <GameAttributes game={game} />
      </Box>

      <Box>
        <GameTrailers gameId={game.id} />
      </Box>

      <Box marginTop={5}>
        <Button as={Link} to="/">
          Go back
        </Button>
      </Box>
    </>
  );
}
