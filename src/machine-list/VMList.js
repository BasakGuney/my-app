import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  CloseIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { useState } from "react";
import React from "react";
import vm_list_data from "./vm_list.json";

const vm_list = vm_list_data;

function VMList() {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");
  const [producer, setProducer] = useState("");
  const [ip, setIp] = useState("");
  const [os, setOs] = useState("");
  const [address, setAddress] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const handleRowClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  return (
    <Box backgroundColor="#1A202C" height="800px">
      <ChakraProvider>
        <div
          style={{
            height: "800px",
            overflow: "auto",
            borderBottomWidth: "1px",
            borderBottomColor: "grey",
          }}
        >
          <TableContainer
            border="5px solid"
            borderRadius="20px"
            marginLeft={4}
            marginRight={4}
            marginTop={4}
            backgroundColor="white"
            paddingTop={8}
            paddingLeft={8}
            paddingRight={8}
            paddingBottom={20}
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>State</Th>
                  <Th>Type</Th>
                  <Th>Producer</Th>
                  <Th>IP Address</Th>
                  <Th>OS</Th>
                  <Th>Address</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <InputGroup size="sm">
                      <Input id="name" size="sm"></Input>
                      <InputRightElement size="sm">
                        <IconButton
                          size="sm"
                          icon={<CloseIcon size="sm"></CloseIcon>}
                          onClick={() => {
                            document.getElementById("name").value = "";
                          }}
                        ></IconButton>
                      </InputRightElement>
                    </InputGroup>
                  </Td>

                  <Td>
                    <Select width="120px" id="state" defaultValue="">
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                      <option value="">All</option>
                    </Select>
                  </Td>

                  <Td>
                    <Select width="120px" id="type" defaultValue="">
                      <option value="physical">physical</option>
                      <option value="virtual">virtual</option>
                      <option value="">All</option>
                    </Select>
                  </Td>

                  <Td>
                    <InputGroup size="sm">
                      <Input id="producer" size="sm"></Input>
                      <InputRightElement size="sm">
                        <IconButton
                          size="sm"
                          icon={<CloseIcon size="sm"></CloseIcon>}
                          onClick={() => {
                            document.getElementById("producer").value = "";
                          }}
                        ></IconButton>
                      </InputRightElement>
                    </InputGroup>
                  </Td>

                  <Td>
                    <InputGroup size="sm">
                      <Input id="ip" size="sm"></Input>
                      <InputRightElement size="sm">
                        <IconButton
                          size="sm"
                          icon={<CloseIcon size="sm"></CloseIcon>}
                          onClick={() => {
                            document.getElementById("ip").value = "";
                          }}
                        ></IconButton>
                      </InputRightElement>
                    </InputGroup>
                  </Td>

                  <Td>
                    <InputGroup size="sm">
                      <Input id="os" size="sm"></Input>
                      <InputRightElement size="sm">
                        <IconButton
                          size="sm"
                          icon={<CloseIcon size="sm"></CloseIcon>}
                          onClick={() => {
                            document.getElementById("os").value = "";
                          }}
                        ></IconButton>
                      </InputRightElement>
                    </InputGroup>
                  </Td>

                  <Td>
                    <InputGroup size="sm">
                      <Input id="address" size="sm"></Input>
                      <InputRightElement size="sm">
                        <IconButton
                          size="sm"
                          icon={<CloseIcon size="sm"></CloseIcon>}
                          onClick={() => {
                            document.getElementById("address").value = "";
                          }}
                        ></IconButton>
                      </InputRightElement>
                    </InputGroup>
                  </Td>

                  <Td>
                    <HStack>
                      {" "}
                      <IconButton
                        colorScheme="blue"
                        size="sm"
                        icon={<Search2Icon size="sm"></Search2Icon>}
                        onClick={() => {
                          setName(document.getElementById("name").value);
                          setState(document.getElementById("state").value);
                          setType(document.getElementById("type").value);
                          setProducer(
                            document.getElementById("producer").value
                          );
                          setIp(document.getElementById("ip").value);
                          setOs(document.getElementById("os").value);
                          setAddress(document.getElementById("address").value);
                        }}
                      ></IconButton>
                      <br></br>
                      <Button
                        size="sm"
                        leftIcon={<CloseIcon />}
                        onClick={() => {
                          document.getElementById("name").value = "";
                          document.getElementById("state").value = "";
                          document.getElementById("type").value = "";
                          document.getElementById("producer").value = "";
                          document.getElementById("ip").value = "";
                          document.getElementById("address").value = "";
                          document.getElementById("os").value = "";
                        }}
                      >
                        Clear All
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
                {vm_list.map((element, index) =>
                  element.name.toLowerCase().includes(name.toLowerCase()) &&
                  (element.state.toLowerCase() === state.toLowerCase() ||
                    state === "") &&
                  (element.type.toLowerCase() === type.toLowerCase() ||
                    type === "") &&
                  element.producer
                    .toLowerCase()
                    .includes(producer.toLowerCase()) &&
                  element.ip_address.toLowerCase().includes(ip.toLowerCase()) &&
                  element.os.toLowerCase().includes(os.toLowerCase()) &&
                  element.address
                    .toLowerCase()
                    .includes(address.toLowerCase()) ? (
                    <React.Fragment key={element.name}>
                      <Tr onClick={() => handleRowClick(element.name)}>
                        <Td>{element.name}</Td>
                        <Td>{element.state}</Td>
                        <Td>{element.type}</Td>
                        <Td>{element.producer}</Td>
                        <Td>{element.ip_address}</Td>
                        <Td>{element.os}</Td>
                        <Td>{element.address}</Td>
                        <Td>
                        <IconButton aria-label='Details' icon={<ExternalLinkIcon />} onClick={()=> (window.location ="/machine-info/"+index+"/"+element.name )}/>
                        </Td>
                      </Tr>
                    </React.Fragment>
                  ) : (
                    <></>
                  )
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </ChakraProvider>
    </Box>
  );
}

export default VMList;
