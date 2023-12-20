import { Heading } from "@chakra-ui/react";

import { usePlatform, useGameQueryStore, useGenre } from "../hooks";

export default function GameHeading() {
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const selectedPlatform = usePlatform(selectedPlatformId);

  const heading = `${selectedPlatform?.name ?? ""} ${
    selectedGenre?.name ?? ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}
