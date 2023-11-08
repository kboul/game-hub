import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { useStore, usePlatforms } from "../hooks";

export default function PlatformSelector() {
  const selectedPlatform = useStore((state) => state.selectedPlatform);
  const setSelectedPlatform = useStore((state) => state.setSelectedPlatform);
  const { data, error } = usePlatforms();

  if (error) return null;

  const handlePlatformClick = (platform: Platform) =>
    setSelectedPlatform(platform);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform.name ?? "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handlePlatformClick(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
