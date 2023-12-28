import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Navbar } from "../components";

export default function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  const errorText = isRouteErrorResponse(error)
    ? "This page does not exist."
    : "An unexpected error occured.";

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>{errorText}</Text>
      </Box>
    </>
  );
}
