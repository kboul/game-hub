import {
  Alert,
  AlertIcon,
  Box,
  Button,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { Fragment } from "react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useGames, useStore } from "../hooks";

const skeletons = Array(12)
  .fill(undefined)
  .map((_, i) => i + 1);

export default function GameGrid() {
  const selectedGenre = useStore((state) => state.selectedGenre);
  const selectedPlatform = useStore((state) => state.selectedPlatform);
  const selectedSortOrder = useStore((state) => state.selectedSortOrder);
  const searchedGame = useStore((state) => state.searchedGame);

  const gameQuery = {
    selectedGenre,
    selectedPlatform,
    selectedSortOrder,
    searchedGame
  };

  const {
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    data,
    error
  } = useGames(gameQuery);

  const NoGamesAlert = (
    <Alert status="info" mt={2} width="50%" marginLeft={2}>
      <AlertIcon />
      There are no games with the selected criteria.
    </Alert>
  );

  const showNoGamesAlert = Boolean(data?.pages[0].results.length === 0);

  let content = (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );

  if (error) content = <Text>{error.message}</Text>;
  if (showNoGamesAlert) content = NoGamesAlert;

  return content;
}
