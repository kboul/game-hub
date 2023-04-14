import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import CriticScore from "./CriticScore";
import GameCardContainer from "./GameCardContainer";
import PlatformIconList from "./PlatformIconList";
import { getCroppedImageUrl } from "../utils";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

/* because this image is bigger than its container we 
  only take round corners on the bottom and need to apply 
  overflow hidden property */

export default function GameCard({ game }: GameCardProps) {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}
