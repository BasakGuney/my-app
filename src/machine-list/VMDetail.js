import { Box, ChakraProvider } from "@chakra-ui/react";
import {GaugeContainer, Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import ".."
import { Button } from "@mui/material";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';




function VMDetail() {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <ChakraProvider>
      <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            startAngle={180}
            endAngle={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ChakraProvider>
    </>
  );
}

export default VMDetail;
