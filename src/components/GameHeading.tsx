import { Heading } from "@chakra-ui/react";

import { useStore } from "../hooks";

export default function GameHeading() {
  const selectedGenre = useStore((state) => state.selectedGenre);
  const selectedPlatform = useStore((state) => state.selectedPlatform);

  const heading = `${selectedPlatform.name ?? ""} ${
    selectedGenre.name ?? ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}
