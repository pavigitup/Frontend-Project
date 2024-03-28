import React from 'react';
import { BarChart,Bar ,CartesianGrid,XAxis,YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./style.css";

const BarCharts = ({ populationData }) => {
  return (
    <ResponsiveContainer width="100%" height={350} >
                               
<BarChart width={730} height={250} data={populationData} className='p-4'>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Year" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Year" fill="#8884d8" />
  <Bar dataKey="Population" fill="#82ca9d" />
</BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
