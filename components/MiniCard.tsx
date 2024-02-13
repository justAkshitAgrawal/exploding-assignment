"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

interface MiniCardProps {
  title: string;
  value: string;
  percentage: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

const MiniCard = ({ title, value, percentage }: MiniCardProps) => {
  const generateData = () => {
    const data = [];
    const numDataPoints = 60;
    let currentValue = 1000;
    for (let i = 0; i < numDataPoints; i++) {
      const volatility = Math.random() * 50;
      const direction = Math.random() > 0.5 ? 1 : -1;
      currentValue += volatility * direction;
      data.push(currentValue);
    }
    return data;
  };

  const generateLabels = () => {
    const labels = [];
    const numDataPoints = 60;
    for (let i = 0; i < numDataPoints; i++) {
      labels.push(`Day ${i + 1}`);
    }
    return labels;
  };
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold">{title}</p>
      <div className="h-12 w-40">
        <Line
          data={{
            labels: generateLabels(),
            datasets: [
              {
                label: "Price",
                data: generateData(),
                borderColor: "rgb(46, 92, 229)",
                backgroundColor: "rgba(46, 92, 229, 0.2)",
                tension: 0.5,
                pointStyle: "rectRot",
                pointRadius: 0,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
          }}
        />
      </div>

      <div>
        <p className="font-semibold text-blue-600 text-xs text-right">
          {value}k
        </p>
        <p className="text-lg font-semibold text-green-600">+{percentage}</p>
      </div>
    </div>
  );
};

export default MiniCard;
