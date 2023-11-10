import { Heading } from "@chakra-ui/react";

import { useGenres, usePlatforms, useStore } from "../hooks";
import { getSelectedItem } from "../utils";

export default function GameHeading() {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedGenreId = useStore((state) => state.selectedGenreId);
  const selectedPlatformId = useStore((state) => state.selectedPlatformId);

  const selectedPlatform = getSelectedItem(
    platforms?.results,
    selectedPlatformId
  );

  const selectedGenre = getSelectedItem(genres?.results, selectedGenreId);

  const heading = `${selectedPlatform?.name ?? ""} ${
    selectedGenre?.name ?? ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}
