import {
  ChakraProvider,
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function LeftMenu() {
  return (
    <>
      <ChakraProvider>
        <Box background="#171923" w="300px" h="800px">
          <Accordion
            allowToggle
            paddingLeft={1.5}
            paddingRight={1.5}
            paddingTop={1.5}
            borderColor="#1A202C"
          >
            <AccordionItem background="#1A202C" textColor="white" >
              <h2>
                <AccordionButton onClick={()=>{window.location="/machine-list"}}>
                  <Box as="span" flex="1" textAlign="left" h="30px" >
                    MACHINE LIST
                  </Box>
                  <ChevronRightIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
            <Box h="1"></Box>
            <AccordionItem background="#1A202C" textColor="white">
              <h2>
                <AccordionButton  onClick={()=>{window.location="/machine-info"}}>
                  <Box as="span" flex="1" textAlign="left" h="30px">
                  MACHINE INFO
                  </Box>
                  <ChevronRightIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
           
           
            
          
     
          </Accordion>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default LeftMenu;
