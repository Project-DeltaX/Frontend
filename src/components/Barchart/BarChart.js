import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { year: 2015, interns: 20 },
  { year: 2016, interns: 27 },
  { year: 2017, interns: 25 },
  { year: 2018, interns: 20 },
  { year: 2019, interns: 27 },
  { year: 2020, interns: 25 },
  { year: 2021, interns: 36 },
  { year: 2022, interns: 32 },
];
const CustomTick = () => {
  return null;
};



const BarChartComponent = () => {
  return (
    <BarChart
      width={600}
      height={300}
      xAxis={null}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}  
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="year" fontSize={16} tick={<CustomTick />}/>
      <YAxis fontSize={18} />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="interns"
        fill="#8884d8"
        barSize={15}
        
        radius={[10, 10, 0, 0]}
        // shape={<OvalBar />}
      />
    </BarChart>
  );
};

export default BarChartComponent;
