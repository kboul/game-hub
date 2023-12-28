import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { useSearchParam } from "../hooks";

const formStyle = { width: "100%" };

export default function SearchInput() {
  const [_, setSearchParams] = useSearchParams();
  const searchedGame = useSearchParam("searchedGame");

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) {
      setSearchParams((searchParams) => {
        const value = ref.current?.value;
        if (value) searchParams.set("searchedGame", ref.current?.value);
        else searchParams.delete("searchedGame"); // remove the key if value is `null
        return searchParams;
      });
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
          defaultValue={searchedGame ?? ""}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}
