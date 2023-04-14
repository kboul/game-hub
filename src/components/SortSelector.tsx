import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const orderItems = [
  "Relevance",
  "Data added",
  "Name",
  "Release date",
  "Popularity",
  "Average rating"
];

export default function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {orderItems.map((orderItem) => (
          <MenuItem key={orderItem}>{orderItem}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
