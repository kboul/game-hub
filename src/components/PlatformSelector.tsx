import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { usePlatforms, usePlatform, useSearchParam } from "../hooks";
import { useSearchParams } from "react-router-dom";

export default function PlatformSelector() {
  const [_, setSearchParams] = useSearchParams();

  const platformId = useSearchParam("platformId");
  const selectedPlatform = usePlatform(platformId!);

  const { data, error } = usePlatforms();

  if (error) return null;

  const handlePlatformClick = (platformId: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("platformId", String(platformId));
      return searchParams;
    });
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ?? "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handlePlatformClick(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
