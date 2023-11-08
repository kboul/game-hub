import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";

import { useGenres, useStore } from "../hooks";
import { getCroppedImageUrl } from "../utils";

export default function GenreList() {
  const selectedGenre = useStore((state) => state.selectedGenre);
  const setSelectedGenre = useStore((state) => state.setSelectedGenre);

  const { isLoading, data, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  const handleGenreClick = (genre: Genre) => setSelectedGenre(genre);

  return (
    <>
      <Heading fontSize="xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                fontWeight={selectedGenre.id === genre.id ? "bold" : "normal"}
                onClick={() => handleGenreClick(genre)}
                variant="link"
                whiteSpace="normal"
                textAlign="left">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>{" "}
    </>
  );
}
