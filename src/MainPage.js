import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  Stack,
  StackDivider,
  Select,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import { CloseIcon, DeleteIcon, Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { AreaChart } from "@mantine/charts";
import "@mantine/charts/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const data = {
  vm_id: "vm-123",
  vm_name: "AD-DNS-001",
  uptime: "3.5 weeks",
  metrics: [
    {
      timestamp: "16:50",
      cpu_usage_percentage: 3.6,
      cpu_usage_MHz: 289,
      ram_usage_percentage: 7.0,
      ram_usage_MB: 440,
      network_usage: {
        rx: "1.000 KB/s",
        tx: "1.000 KB/s",
      },
      disk_latency_ms: 2.5,
      storage_adapter_latency_ms: 3.8,
      cpu_ready_ms: 500,
    },
    {
      timestamp: "17:00",
      cpu_usage_percentage: 3.7,
      cpu_usage_MHz: 290,
      ram_usage_percentage: 7.2,
      ram_usage_MB: 445,
      network_usage: {
        rx: "1.000 KB/s",
        tx: "0 KB/s",
      },
      disk_latency_ms: 1.9,
      storage_adapter_latency_ms: 2.0,
      cpu_ready_ms: 480,
    },
    {
      timestamp: "17:10",
      cpu_usage_percentage: 3.6,
      cpu_usage_MHz: 288,
      ram_usage_percentage: 7.1,
      ram_usage_MB: 442,
      network_usage: {
        rx: "4.000 KB/s",
        tx: "0 KB/s",
      },
      disk_latency_ms: 3.1,
      storage_adapter_latency_ms: 4.2,
      cpu_ready_ms: 510,
    },
    {
      timestamp: "17:20",
      cpu_usage_percentage: 3.6,
      cpu_usage_MHz: 108,
      ram_usage_percentage: 7.1,
      ram_usage_MB: 442,
      network_usage: {
        rx: "4.000 KB/s",
        tx: "0 KB/s",
      },
      disk_latency_ms: 3.1,
      storage_adapter_latency_ms: 4.2,
      cpu_ready_ms: 510,
    },
    {
      timestamp: "17:30",
      cpu_usage_percentage: 3.6,
      cpu_usage_MHz: 150,
      ram_usage_percentage: 7.1,
      ram_usage_MB: 442,
      network_usage: {
        rx: "4.000 KB/s",
        tx: "0 KB/s",
      },
      disk_latency_ms: 3.1,
      storage_adapter_latency_ms: 4.2,
      cpu_ready_ms: 510,
    },
    {
      timestamp: "17:40",
      cpu_usage_percentage: 3.6,
      cpu_usage_MHz: 245,
      ram_usage_percentage: 7.1,
      ram_usage_MB: 442,
      network_usage: {
        rx: "4.000 KB/s",
        tx: "0 KB/s",
      },
      disk_latency_ms: 3.1,
      storage_adapter_latency_ms: 4.2,
      cpu_ready_ms: 510,
    },
  ],
};

const test = [
  {
    name: "Web Server",
    state: "active",
    type: "virtual",
    producer: "TechCorp",
    ip_address: "192.168.1.1",
    os: "Ubuntu",
    address: "123 Cloud Rd, Virtual City, CA, 90210",
  },
  {
    name: "Database Server",
    state: "inactive",
    type: "physical",
    producer: "ServerCo",
    ip_address: "192.168.1.2",
    os: "Windows Server",
    address: "456 Data St, Server Town, TX, 75001",
  },
  {
    name: "Backup Server",
    state: "active",
    type: "virtual",
    producer: "CloudInc",
    ip_address: "192.168.1.3",
    os: "Debian",
    address: "789 Backup Blvd, Cloud City, NY, 10001",
  },
  {
    name: "File Server",
    state: "active",
    type: "physical",
    producer: "FileSystems",
    ip_address: "192.168.1.4",
    os: "CentOS",
    address: "321 File Ave, Data Center, FL, 33101",
  },
  {
    name: "Mail Server",
    state: "inactive",
    type: "virtual",
    producer: "MailTech",
    ip_address: "192.168.1.5",
    os: "Red Hat",
    address: "654 Mail Rd, Sendville, WA, 98001",
  },
  {
    name: "API Gateway",
    state: "active",
    type: "virtual",
    producer: "ApiCorp",
    ip_address: "192.168.1.6",
    os: "Fedora",
    address: "987 Api St, Gateway City, OR, 97001",
  },
  {
    name: "Monitoring Server",
    state: "active",
    type: "physical",
    producer: "MonitorSystems",
    ip_address: "192.168.1.7",
    os: "Ubuntu",
    address: "135 Monitor Way, Watchtower, IL, 60001",
  },
  {
    name: "Test Server",
    state: "inactive",
    type: "physical",
    producer: "TestLabs",
    ip_address: "192.168.1.8",
    os: "SUSE",
    address: "246 Test Dr, Experiment City, MI, 48201",
  },
  {
    name: "Load Balancer",
    state: "active",
    type: "virtual",
    producer: "LoadTech",
    ip_address: "192.168.1.9",
    os: "Nginx",
    address: "369 Balance St, Traffic City, AZ, 85001",
  },
  {
    name: "Game Server",
    state: "active",
    type: "physical",
    producer: "GameDev",
    ip_address: "192.168.1.10",
    os: "Windows",
    address: "159 Game Ave, Playtown, NV, 89001",
  },
];

function MainPage() {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");
  const [producer, setProducer] = useState("");
  const [ip, setIp] = useState("");
  const [os, setOs] = useState("");
  const [address, setAddress] = useState("");
  console.log("Active".toLowerCase);

  return (
    <>
      <ChakraProvider>
        <Card width="25%" bgGradient='linear(to-l, #7928CA, #FF0080)' >
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Overview
                </Heading>
                <Text pt="2" fontSize="sm">
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Analysis
                </Heading>
                <Text pt="2" fontSize="sm">
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <br></br>
        <br></br>
        <Box w="50%">
          <MantineProvider>
            <AreaChart
              h={300}
              data={data.metrics}
              dataKey="timestamp"
              series={[
                { name: "cpu_usage_MHz", color: "indigo.6" },
                { name: "ram_usage_MB", color: "blue.6" },
              ]}
              curveType="linear"
            />
          </MantineProvider>
        </Box>
        <TableContainer>
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
                  <Select width="120px" id="state">
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                    <option value="">All</option>
                  </Select>
                </Td>

                <Td>
                  <Select width="120px" id="type">
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
                        setProducer(document.getElementById("producer").value);
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
              {test.map((element, index) =>
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
                  <Tr>
                    <Td>{element.name}</Td>
                    <Td>{element.state}</Td>
                    <Td>{element.type}</Td>
                    <Td>{element.producer}</Td>
                    <Td>{element.ip_address}</Td>
                    <Td>{element.os}</Td>
                    <Td>{element.address}</Td>
                  </Tr>
                ) : (
                  <></>
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    </>
  );
}

export default MainPage;
