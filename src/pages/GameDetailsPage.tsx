import { Link, useParams } from "react-router-dom";
import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";

import { useGameDetails } from "../hooks";
import { useState } from "react";

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
        <Link to="/">Go back</Link>
      </Box>
    </>
  );
}
