
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


export default function DailyInterviewChart(props) {
  return (
    <LineChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis label={{ value: 'No of Candidates', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="candidates" stroke="#27144B" />
    </LineChart>
  );
}
