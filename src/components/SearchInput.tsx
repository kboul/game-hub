import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useGameQueryStore } from "../hooks";

const formStyle = { width: "100%" };

export default function SearchInput() {
  const navigate = useNavigate();

  const ref = useRef<HTMLInputElement>(null);
  const setSearchedGame = useGameQueryStore((state) => state.setSearchedGame);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) {
      setSearchedGame(ref.current.value);
      navigate("/");
    }
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          ref={ref}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}
