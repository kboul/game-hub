import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { useStore, usePlatforms } from "../hooks";
import { getSelectedItem } from "../utils";

export default function PlatformSelector() {
  const selectedPlatformId = useStore((state) => state.selectedPlatformId);
  const setSelectedPlatformId = useStore(
    (state) => state.setSelectedPlatformId
  );
  const { data, error } = usePlatforms();

  if (error) return null;

  const selectedPlatform = getSelectedItem(
    data?.results ?? [],
    selectedPlatformId
  );

  const handlePlatformClick = (platformId: PlatformId) =>
    setSelectedPlatformId(platformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform.name ?? "Platforms"}
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
