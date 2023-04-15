import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="UI Logo" boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
