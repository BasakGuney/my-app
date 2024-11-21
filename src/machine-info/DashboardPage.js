import { ChakraProvider ,Stack} from "@chakra-ui/react";
import TopMenu from "../menus/TopMenu";
import LeftMenu from "../menus/LeftMenu";
import Dashboard from "./Dashboard";


function DashboardPage() {
  return (
    <>
      <ChakraProvider>
        <Stack direction="column" spacing="0">
         <TopMenu></TopMenu>
          <Stack direction="row">
           <LeftMenu></LeftMenu>
           <Dashboard></Dashboard>
          </Stack>
        </Stack>
      </ChakraProvider>
    </>
  );
}

export default DashboardPage;
