import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";

import { useGenres, useStore } from "../hooks";
import { getCroppedImageUrl } from "../utils";

export default function GenreList() {
  const setSelectedGenre = useStore((state) => state.setSelectedGenre);

  const { loading, data: genres, error } = useGenres();

  if (error) return null;
  if (loading) return <Spinner />;

  const handleGenreClick = (genre: Genre) => setSelectedGenre(genre);

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontSize="lg"
              onClick={() => handleGenreClick(genre)}
              variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
