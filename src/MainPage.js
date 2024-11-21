import {
  ChakraProvider,
  Stack,
  Box,
} from "@chakra-ui/react";
import TopMenu from "./menus/TopMenu";
import LeftMenu from "./menus/LeftMenu";


function MainPage() {
  return (
      <ChakraProvider>
        <Stack direction="column" spacing="0">
          <TopMenu></TopMenu>
          <Stack direction="row">
            <LeftMenu></LeftMenu>
          </Stack>
        </Stack>
      </ChakraProvider>
  );
}
export default MainPage;
