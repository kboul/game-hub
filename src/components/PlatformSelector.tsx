import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { useStore, usePlatforms, usePlatform } from "../hooks";

export default function PlatformSelector() {
  const selectedPlatformId = useStore((state) => state.selectedPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const setSelectedPlatformId = useStore(
    (state) => state.setSelectedPlatformId
  );
  const { data, error } = usePlatforms();

  if (error) return null;

  const handlePlatformClick = (platformId: PlatformId) =>
    setSelectedPlatformId(platformId);

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
