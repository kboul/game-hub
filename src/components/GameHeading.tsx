import { Heading } from "@chakra-ui/react";

import { usePlatform, useStore, useGenre } from "../hooks";

export default function GameHeading() {
  const selectedGenreId = useStore((state) => state.selectedGenreId);
  const selectedGenre = useGenre(selectedGenreId);

  const selectedPlatformId = useStore((state) => state.selectedPlatformId);
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
