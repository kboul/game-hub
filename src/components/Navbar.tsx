import { HStack, Image, Text } from "@chakra-ui/react";

import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <HStack>
      <Image src={logo} alt="UI Logo" boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
}
