import { Grid, GridItem, Show } from "@chakra-ui/react";

import { GameGrid, GenreList, Navbar } from "./components";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
      }
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
