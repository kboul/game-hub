import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">{isDark ? "Light" : "Dark"} mode</Text>
    </HStack>
  );
}
