import {
    ChakraProvider,
    Button,
    Stack,
    Box,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
  } from "@chakra-ui/react";
  import {
    ChevronDownIcon,
  } from "@chakra-ui/icons";



function TopMenu() {
  return (
    <>
    <ChakraProvider>
      <Box backgroundColor="black" h="50px">
        <Stack direction="row">
          <Box w="300px"></Box>
        </Stack>
      </Box>
      </ChakraProvider>
    </>
  );
}

export default TopMenu;