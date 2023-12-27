import { Link, useParams } from "react-router-dom";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

import { useGameDetails } from "../hooks";

export default function GameDetailsPage() {
  const { id } = useParams();

  const { data: game, isLoading, isError } = useGameDetails(id!);

  if (isLoading) return <Spinner />;
  if (isError || !game) return <Box>Something went wrong</Box>;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
      <Box marginTop={5}>
        <Link to="/">Go back</Link>
      </Box>
    </>
  );
}
