import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import CriticScore from "./CriticScore";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { getCroppedImageUrl } from "../utils";

type GameCardProps = { game: Game };

/* because this image is bigger than its container we 
  only take round corners on the bottom and need to apply 
  overflow hidden property */

export default function GameCard({ game }: GameCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => navigate(`/games/${game.slug}`);

  return (
    <GameCardContainer>
      <Card onClick={handleCardClick} cursor="pointer">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            {game.parent_platforms && (
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            )}
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
