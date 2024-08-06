import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Jan", income: 4000, expenses: 2400 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 2000, expenses: 9800 },
  { name: "Apr", income: 2780, expenses: 3908 },
  { name: "May", income: 1890, expenses: 4800 },
  { name: "Jun", income: 2390, expenses: 3800 },
  { name: "Jul", income: 3490, expenses: 4300 },
];

const Overview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="bg-white p-4 shadow rounded">
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#8884d8" />
          <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default Overview;
