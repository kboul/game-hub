import { Alert, AlertIcon, Box, Spinner } from "@chakra-ui/react";
import { useGameTrailers } from "../hooks";

export default function GameTrailers({ gameId }: { gameId: number }) {
  const { data, isLoading, isError } = useGameTrailers(gameId);
  console.log(data?.results);

  if (isLoading) return <Spinner />;
  if (isError) return <p>Something went wrong</p>;

  const trailers = data?.results;

  if (trailers?.length === 0)
    return (
      <Alert status="info" marginTop={5}>
        <AlertIcon />
        There are no trailers for this game.
      </Alert>
    );

  const firstTrailer = data?.results[0];
  if (!firstTrailer) return null;

  return (
    <Box display="flex" justifyContent="center" marginTop={5}>
      <video
        src={firstTrailer.data[480]}
        poster={firstTrailer.preview}
        controls
      />
    </Box>
  );
}
