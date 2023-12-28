import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} alt="UI Logo" boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
