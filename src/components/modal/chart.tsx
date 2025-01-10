import { useEffect, useState } from "react";
import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface ChartProps {
  hourlyTemperature?: number[];
}

const Chart = ({ hourlyTemperature }: ChartProps) => {
  const chartData = hourlyTemperature
    ? hourlyTemperature.map((temperature: number, index: number) => ({
        hour: `${index}:00`,
        temperature,
      }))
    : [];
  const [currentHourGMT, setCurrentHourGMT] = useState(
    new Date().getUTCHours()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHourGMT(new Date().getUTCHours());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} className="-left-5">
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={true}
          horizontal={false}
        />
        <XAxis dataKey="hour" />
        <YAxis
          domain={["dataMin - 2", "dataMax + 2"]}
          tickFormatter={(value) => value.toFixed(1)}
        />
        <Tooltip formatter={(value) => [`Temperature: ${value} °C`]} />
        <ReferenceLine
          x={chartData[currentHourGMT]?.hour}
          stroke="black"
          strokeDasharray="3 3"
        />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
