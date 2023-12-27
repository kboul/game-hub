import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { Navbar } from "../components";

export default function Layout() {
  return (
    <Box padding={5}>
      <Navbar />
      <Outlet />
    </Box>
  );
}
