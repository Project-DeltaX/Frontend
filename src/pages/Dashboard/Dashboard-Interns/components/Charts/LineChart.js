
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "2023-06-11",
    candidates: 11,
    
  },
  {
    name: "2023-06-12",
    candidates: 12,
    
  },
  {
    name: "2023-06-13",
    candidates: 8,
    
  },
  {
    name: "2023-06-16",
    candidates: 10,
    
  },
  {
    name: "2023-06-17",
    candidates: 7,
    
  },
  {
    name: "2023-06-18",
    candidates: 13,
   
  },
  {
    name: "2023-06-11",
    candidates: 11,
   
  }
];

export default function DailyInterviewChart() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="candidates" stroke="#82ca9d" />
    </LineChart>
  );
}
