import React, { useContext, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { HomeContext } from "../../contexts/homeContext";

const ChartComponent = ({ historicalDataInAdvancedStats }) => {
  const {
    homeState: { formattedHistoricalData },
  } = useContext(HomeContext);
  const [size, setSize] = useState({
    x: window.innerWidth,
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
    });
  useEffect(() => (window.onresize = updateSize), []);
  if (!formattedHistoricalData) return null;
  return (
    <>
      <LineChart
        width={size.x > 600 ? 600 : 450}
        height={400}
        data={
          historicalDataInAdvancedStats
            ? historicalDataInAdvancedStats
            : formattedHistoricalData.data
        }
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="cases"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="deaths"
          stroke="red"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="recovery"
          stroke="green"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
};

export default ChartComponent;
