import { Alert, AlertIcon, Image, SimpleGrid, Spinner } from "@chakra-ui/react";

import { useGameScreenshots } from "../hooks";

export default function GameScreenshots({ gameId }: { gameId: number }) {
  const { data, isLoading, isError } = useGameScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <Alert status="error" marginTop={5}>
        <AlertIcon />
        Something went wrong.
      </Alert>
    );

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map(({ id, image }) => (
        <Image key={id} src={image} />
      ))}
    </SimpleGrid>
  );
}
