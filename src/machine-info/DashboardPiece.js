import {
  ChakraProvider,
  Stack,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


function DashBoardPiece(props) {
  const [networkUsage, setNetworkUsage] = useState([]);
  const [first, setFirst] = useState(true);
  if (first) {
    props.data.metrics.map((element) => {
      element.network_usage["timestamp"] = element.timestamp;
      networkUsage.push(element.network_usage);
    });
    setFirst(false);
  }
  return (
    <>
      <ChakraProvider>
        <br></br>
        <Box borderColor="grey" borderWidth={2}>
          <Stack
            direction="column"
            spacing={0}
            backgroundColor="#1A202C"
            width="1710px"
          >
            <div>
              <br></br>
              <Stack direction="row">
                <Stack direction="column" paddingLeft={10}>
                  <Stack direction="row">
                    <Card
                      bgGradient="linear(to-r, #2c5282, #3182ce)"
                      width="200px"
                      height="110px"
                    >
                      <CardBody color="white" alignContent="center">
                        <Text fontSize="xl">Uptime</Text>
                        <Text fontSize="4xl">{props.data.uptime}</Text>
                      </CardBody>
                    </Card>
                    <Card
                      bgGradient="linear(to-r, #2c5282, #3182ce)"
                      width="200px"
                      height="110px"
                    >
                      <CardBody color="white" alignContent="center">
                        <Text fontSize="xl">CPU Usage MHz</Text>
                        <Flex align="center">
                          <Text fontSize="4xl" mr={2}>
                            {props.data.metrics[29].cpu_usage_MHz}
                          </Text>
                          <Text fontSize="3xl" mr={2}>
                            MHz
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                    <Card
                      bgGradient="linear(to-r, #2c5282, #3182ce)"
                      width="200px"
                      height="110px"
                    >
                      <CardBody color="white" alignContent="center">
                        <Text fontSize="xl">RAM Usage</Text>
                        <Flex align="center">
                          <Text fontSize="4xl" mr={2}>
                            {props.data.metrics[29].ram_usage_MB}
                          </Text>
                          <Text fontSize="3xl" mr={2}>
                            MB
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                  </Stack>
                  <Stack direction="row">
                    <Card
                      bgGradient="linear(to-r, #276749, #48BB78)"
                      width="300px"
                      height="110px"
                    >
                      <CardBody color="white" alignContent="center">
                        <Text fontSize="xl">CPU Usage</Text>
                        <Flex align="center">
                          <Text fontSize="4xl" mr={2}>
                            {props.data.metrics[29].cpu_usage_percentage}
                          </Text>
                          <Text fontSize="3xl" mr={2}>
                            %
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>

                    <Card
                      bgGradient="linear(to-r, #276749, #48BB78)"
                      width="310px"
                      height="110px"
                    >
                      <CardBody color="white" alignContent="center">
                        <Text fontSize="xl">RAM Usage</Text>
                        <Flex align="center">
                          <Text fontSize="4xl" mr={2}>
                            {props.data.metrics[29].ram_usage_percentage}
                          </Text>
                          <Text fontSize="3xl" mr={2}>
                            %
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                  </Stack>
                </Stack>

                <Stack direction="row">
                  <Box
                    width="500px"
                    backgroundColor="#2D3748"
                    sx={{ paddingLeft: "2px", paddingTop: "3px" }}
                  >
                    <Text align="center" color="#C9C9C9">
                      CPU Usage%
                    </Text>
                    <AreaChart
                      width={500}
                      height={200}
                      data={props.data.metrics}
                      margin={{
                        top: 10,
                        right: 50,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="timestamp"
                        stroke="#C9C9C9"
                        ticks={[
                          props.data.metrics[4].timestamp,
                          props.data.metrics[5].timestamp,
                          props.data.metrics[10].timestamp,
                          props.data.metrics[15].timestamp,
                          props.data.metrics[20].timestamp,
                          props.data.metrics[25].timestamp,
                          props.data.metrics[30].timestamp,
                        ]}
                      />
                      <YAxis stroke="#C9C9C9" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="cpu_usage_percentage"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </Box>
                  <Box
                    width="500px"
                    backgroundColor="#2D3748"
                    sx={{ paddingLeft: "2px", paddingTop: "3px" }}
                  >
                    <Text align="center" color="#C9C9C9">
                      RAM Usage%
                    </Text>
                    <AreaChart
                      width={500}
                      height={200}
                      data={props.data.metrics}
                      margin={{
                        top: 10,
                        right: 50,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="timestamp"
                        stroke="#C9C9C9"
                        ticks={[
                          props.data.metrics[4].timestamp,
                          props.data.metrics[5].timestamp,
                          props.data.metrics[10].timestamp,
                          props.data.metrics[15].timestamp,
                          props.data.metrics[20].timestamp,
                          props.data.metrics[25].timestamp,
                          props.data.metrics[30].timestamp,
                        ]}
                      />
                      <YAxis stroke="#C9C9C9" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="ram_usage_percentage"
                        stroke="#0ca678"
                        fill="#0ca678"
                      />
                    </AreaChart>
                  </Box>
                </Stack>
              </Stack>
            </div>
            <Stack direction="row" paddingLeft={10} paddingTop={2}>
              <Box
                width="620px"
                backgroundColor="#2D3748"
                sx={{ paddingLeft: "2px", paddingTop: "3px" }}
              >
                <Text align="center" color="#C9C9C9">
                  Network Usage Kb/s
                </Text>
                <AreaChart
                  width={620}
                  height={200}
                  data={networkUsage}
                  margin={{
                    top: 10,
                    right: 50,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="timestamp"
                    stroke="#C9C9C9"
                    ticks={[
                      props.data.metrics[4].timestamp,
                      props.data.metrics[5].timestamp,
                      props.data.metrics[10].timestamp,
                      props.data.metrics[15].timestamp,
                      props.data.metrics[20].timestamp,
                      props.data.metrics[25].timestamp,
                      props.data.metrics[30].timestamp,
                    ]}
                  />
                  <YAxis stroke="#C9C9C9" />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="rx"
                    stackId="1"
                    stroke="#304ffe"
                    fill="#304ffe"
                  />
                  <Area
                    type="monotone"
                    dataKey="tx"
                    stackId="1"
                    stroke="#311b92"
                    fill="#311b92"
                  />
                </AreaChart>
              </Box>

              <Box
                width="500px"
                backgroundColor="#2D3748"
                sx={{ paddingLeft: "2px", paddingTop: "3px" }}
              >
                <Text align="center" color="#C9C9C9">
                  CPU Ready (ms)
                </Text>
                <AreaChart
                  width={500}
                  height={200}
                  data={props.data.metrics}
                  margin={{
                    top: 10,
                    right: 50,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="timestamp"
                    stroke="#C9C9C9"
                    ticks={[
                      props.data.metrics[4].timestamp,
                      props.data.metrics[5].timestamp,
                      props.data.metrics[10].timestamp,
                      props.data.metrics[15].timestamp,
                      props.data.metrics[20].timestamp,
                      props.data.metrics[25].timestamp,
                      props.data.metrics[30].timestamp,
                    ]}
                  />
                  <YAxis stroke="#C9C9C9" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="cpu_ready_ms"
                    stroke="#d9480f"
                    fill="#d9480f"
                  />
                </AreaChart>
              </Box>
              <Box
                width="500px"
                backgroundColor="#2D3748"
                sx={{ paddingLeft: "2px", paddingTop: "3px" }}
              >
                <Text align="center" color="#C9C9C9">
                  Latency (ms)
                </Text>
                <AreaChart
                  width={500}
                  height={200}
                  data={props.data.metrics}
                  margin={{
                    top: 10,
                    right: 50,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="timestamp"
                    stroke="#C9C9C9"
                    ticks={[
                      props.data.metrics[4].timestamp,
                      props.data.metrics[5].timestamp,
                      props.data.metrics[10].timestamp,
                      props.data.metrics[15].timestamp,
                      props.data.metrics[20].timestamp,
                      props.data.metrics[25].timestamp,
                      props.data.metrics[30].timestamp,
                    ]}
                  />
                  <YAxis stroke="#C9C9C9" />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="disk_latency_ms"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="storage_adapter_latency_ms"
                    stackId="1"
                    stroke="#5c940d"
                    fill="#5c940d"
                  />
                </AreaChart>
              </Box>
            </Stack>
          </Stack>
          <br></br>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default DashBoardPiece;
