import { SimpleGrid, GridItem, Heading, Text } from "@chakra-ui/react";

import CriticScore from "./CriticScore";

// dl: Definition List
export default function GameAttributes({ game }: { game: GameDetails }) {
  return (
    <SimpleGrid columns={2} spacing={10} as="dl">
      <GridItem>
        <Heading color="gray.600" fontSize="2xl">
          Platforms
        </Heading>
        {game.platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GridItem>
      <GridItem>
        <Heading color="gray.600" fontSize="2xl">
          Metascore
        </Heading>
        <CriticScore score={game.metacritic} />
      </GridItem>
      <GridItem>
        <Heading color="gray.600" fontSize="2xl">
          Genres
        </Heading>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GridItem>
      <GridItem>
        <Heading color="gray.600" fontSize="2xl">
          Publishers
        </Heading>
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GridItem>
    </SimpleGrid>
  );
}
