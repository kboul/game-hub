import { Alert, AlertIcon, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useGames, useStore } from "../hooks";

const skeletons = Array(12)
  .fill(undefined)
  .map((_, i) => i + 1);

export default function GameGrid() {
  const selectedGenreId = useStore((state) => state.selectedGenreId);
  const selectedPlatform = useStore((state) => state.selectedPlatform);
  const selectedSortOrder = useStore((state) => state.selectedSortOrder);
  const searchedGame = useStore((state) => state.searchedGame);

  const gameQuery = {
    selectedGenreId,
    selectedPlatform,
    selectedSortOrder,
    searchedGame
  };

  const { isLoading, fetchNextPage, hasNextPage, data, error } =
    useGames(gameQuery);

  const NoGamesAlert = (
    <Alert status="info" mt={2} width="50%" marginLeft={2}>
      <AlertIcon />
      There are no games with the selected criteria.
    </Alert>
  );

  const showNoGamesAlert = Boolean(data?.pages[0].results.length === 0);
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

  let content = (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      next={() => fetchNextPage()}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}>
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
    </InfiniteScroll>
  );

  if (error) content = <Text>{error.message}</Text>;
  if (showNoGamesAlert) content = NoGamesAlert;

  return content;
}
