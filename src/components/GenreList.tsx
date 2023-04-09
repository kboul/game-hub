import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

import { useGenres } from "../hooks";
import { getCroppedImageUrl } from "../utils";

export default function GenreList() {
  const { loading, data: genres, error } = useGenres();

  if (error) return null;
  if (loading) return <Spinner />;
  return (
    <List>
      {genres.map(genre => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
