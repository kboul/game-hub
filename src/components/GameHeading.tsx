import { Heading } from "@chakra-ui/react";

import { useGenres, useStore } from "../hooks";

export default function GameHeading() {
  const { data: genres } = useGenres();
  const selectedGenreId = useStore((state) => state.selectedGenreId);
  const selectedPlatform = useStore((state) => state.selectedPlatform);

  const selectedGenre = genres?.results.find(
    ({ id }) => id === selectedGenreId
  );

  const heading = `${selectedPlatform.name ?? ""} ${
    selectedGenre?.name ?? ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}
