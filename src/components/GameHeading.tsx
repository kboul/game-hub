import { Heading } from "@chakra-ui/react";

import { usePlatform, useGenre, useSearchParam } from "../hooks";

export default function GameHeading() {
  const genreId = useSearchParam("genreId");
  const selectedGenre = useGenre(genreId!);

  const platformId = useSearchParam("platformId");
  const selectedPlatform = usePlatform(platformId!);

  const heading = `${selectedPlatform?.name ?? ""} ${
    selectedGenre?.name ?? ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}
