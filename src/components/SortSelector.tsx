import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { useGameQueryStore, useSearchParam } from "../hooks";
import { useSearchParams } from "react-router-dom";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Data added" }, // - reverses the sort order
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" }
];

export default function SortSelector() {
  const sortOrder = useSearchParam("sortOrder");
  const [_, setSearchParams] = useSearchParams();

  const currentSortOrder =
    sortOrders.find(({ value }) => value === sortOrder)?.label ?? "Relevance";

  const handleMenuItemClick = (value: string) => () => {
    setSearchParams((searchParams) => {
      searchParams.set("sortOrder", value);
      return searchParams;
    });
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder}
      </MenuButton>
      <MenuList>
        {sortOrders.map(({ value, label }) => (
          <MenuItem
            onClick={handleMenuItemClick(value)}
            key={value}
            value={value}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
