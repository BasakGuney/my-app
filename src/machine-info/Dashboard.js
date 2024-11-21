import {
  ChakraProvider,
  Stack,
  Box,
  Input,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import dashboard_list from "./dashboard_data.json";
import DashBoardPiece from "./DashboardPiece";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const dashboards = dashboard_list;

function Dashboard() {
  const { index, vm_name } = useParams();
  const [vmName, setVmName] = useState("");
  const [openIndexes, setOpenIndexes] = useState([]);
  const [showAfterDelay, setShowAfterDelay] = useState(true);
  useEffect(() => {
    if (index) {
      setOpenIndexes([parseInt(index, 10)]);
    }
  }, [index]);

  useEffect(() => {
    if (vm_name) {
      setVmName(vm_name);
    }
  }, vm_name);

  const handleInputChange = (event) => {
    setVmName(event.target.value);
  };

  return (
    <Box backgroundColor="#1A202C" height="800px">
      <ChakraProvider>
        <Stack direction="column" spacing="0" paddingTop={4} paddingLeft={4}>
          <Input
            defaultValue={vm_name}
            id="vm_name"
            placeholder="Name"
            textColor="white"
            width="1725px"
            onChange={(e) => {
              setVmName(e.target.value)
              setShowAfterDelay(false);
              setTimeout(() => {
                setShowAfterDelay(true);
              }, 500);
            }}
          />
          <Stack direction="column" spacing={0} paddingTop={4}>
            {dashboard_list.map((element) =>
              element.vm_name.toLowerCase().includes(vmName.toLowerCase()) &&
              showAfterDelay ? (
                <Accordion
                  allowToggle
                  width="1750px"
                  backgroundColor="#1A202C"
                >
                  <AccordionItem borderColor="#1A202C" textColor="white">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box as="span" flex="1" textAlign="left">
                          {element.vm_name}
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <DashBoardPiece data={element}></DashBoardPiece>
                      <Box paddingEnd={4}></Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ) : (
                <></>
              )
            )}
          </Stack>
        </Stack>
      </ChakraProvider>
    </Box>
  );
}
export default Dashboard;
