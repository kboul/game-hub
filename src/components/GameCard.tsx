import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

/* because this image is bigger than its container we 
  only take round corners on the bottom and need to apply 
  overflow hidden property */

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(p => p.platform)}
        />
      </CardBody>
    </Card>
  );
}
