import { HStack, Image, Text } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} alt="UI Logo" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}
