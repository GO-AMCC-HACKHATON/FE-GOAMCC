import React, { useEffect, useRef, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import dynamic from "next/dynamic";

const Chart = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const [chartWidth, setChartWidth] = useState(300);
  const [client, setClient] = useState(false);
  const mainLayoutRef = useRef(null);

  const updateChartWidth = () => {
    if (mainLayoutRef.current) {
      const containerWidth = mainLayoutRef.current.offsetWidth;
      setChartWidth(containerWidth);
    }
  };

  useEffect(() => {
    setClient(true);
    updateChartWidth();
    window.addEventListener("resize", updateChartWidth);
    return () => window.removeEventListener("resize", updateChartWidth);
  }, []);

  return (
    <>
      {client && (
        <div ref={mainLayoutRef}>
          <PieChart width={chartWidth} height={200}>
            <Pie
              data={data}
              cx={chartWidth / 2}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      )}
    </>
  );
};

export default Chart;
