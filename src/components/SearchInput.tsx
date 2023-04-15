import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

import { useStore } from "../hooks";

const formStyle = { width: "100%" };

export default function SearchInput() {
  const [searchedGameText, setSearchedGameText] = useState("");

  const setSearchedGame = useStore((state) => state.setSearchedGame);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchedGame(searchedGameText);
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          onChange={(e) => setSearchedGameText(e.target.value)}
          placeholder="Search games..."
          value={searchedGameText}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}
