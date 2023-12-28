import { Heading } from "@chakra-ui/react";

import {
  usePlatform,
  useGameQueryStore,
  useGenre,
  useSearchParam
} from "../hooks";

export default function GameHeading() {
  const genreId = useSearchParam("genreId");
  const selectedGenre = useGenre(Number(genreId));

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
