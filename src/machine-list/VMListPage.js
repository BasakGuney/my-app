import { ChakraProvider ,Stack,Box} from "@chakra-ui/react";
import TopMenu from "../menus/TopMenu";
import VMList from "./VMList";
import LeftMenu from "../menus/LeftMenu";


function VMListPage() {
  return (
    <>
      <ChakraProvider>
        <Stack direction="column" spacing="0">
         <TopMenu></TopMenu>
          <Stack direction="row">
           <LeftMenu></LeftMenu>
           <VMList></VMList>
          </Stack>
        </Stack>
      </ChakraProvider>
    </>
  );
}

export default VMListPage;
