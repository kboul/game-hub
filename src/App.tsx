import { Grid, GridItem, Show } from "@chakra-ui/react";

import { GameGrid, GenreList, Navbar, PlatformSelector } from "./components";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
      }
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
