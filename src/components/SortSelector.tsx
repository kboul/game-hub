import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { useStore } from "../hooks";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Data added" }, // - reverses the sort order
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" }
];

export default function SortSelector() {
  const selectedSortOrder = useStore((state) => state.selectedSortOrder);
  const setSelectedSortOrder = useStore((state) => state.setSelectedSortOrder);

  const currentSortOrder =
    sortOrders.find(({ value }) => value === selectedSortOrder)?.label ??
    "Relevance";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder}
      </MenuButton>
      <MenuList>
        {sortOrders.map(({ value, label }) => (
          <MenuItem
            onClick={() => setSelectedSortOrder(value)}
            key={value}
            value={value}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
