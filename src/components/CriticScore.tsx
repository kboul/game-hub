import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

export default function CriticScore({ score }: CriticScoreProps) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge borderRadius="4px" colorScheme={color} fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
}
