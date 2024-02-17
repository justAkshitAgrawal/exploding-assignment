"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
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

import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

interface DisplayCardProps {
  title: string;
  description: string;
  tag: string;
  volume: number;
  growth: number;
  type?: "pro" | "free";
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

const DisplayCard = ({
  title,
  description,
  tag,
  volume,
  growth,
  type,
}: DisplayCardProps) => {
  const generateData = () => {
    const data = [];
    const numDataPoints = 60;
    let currentValue = 100;
    data.push(0);
    data.push(129);
    data.push(100);
    data.push(150);
    data.push(250);
    data.push(220);
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
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    for (let i = 0; i < 12; i++) {
      labels.push(months[i]);
    }
    return labels;
  };

  const triangleGradientPlugin = {
    id: "triangleGradient",
    beforeDraw: (chart: any, args: any, options: any) => {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      const gradient = ctx.createLinearGradient(
        chartArea.left, // Start x-coordinate (left side of the chart)
        chartArea.bottom, // Start y-coordinate (bottom of the chart)
        chartArea.right, // End x-coordinate (right side of the chart)
        chartArea.bottom // End y-coordinate (bottom of the chart)
      );
      gradient.addColorStop(0, "rgba(46, 92, 229, 0.2)"); // Blue
      gradient.addColorStop(1, "rgba(46, 92, 229, 0.05)"); // Blue
      ctx.save();
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(chartArea.left, chartArea.bottom);
      ctx.lineTo(chartArea.right, chartArea.bottom);
      ctx.lineTo(chartArea.right, chartArea.top);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  };

  return (
    <Card
      className={`w-full hover:border-blue-500 cursor-pointer relative group scale-[0.9]`}
    >
      <CardHeader className={` ${type === "pro" ? "blur" : ""}`}>
        <CardTitle className="flex justify-between">
          <h2 className="group-hover:text-blue-600 transition-all">{title}</h2>
          <div className="flex gap-4">
            <p className="text-blue-600 flex flex-col items-center">
              {volume}
              <span className="text-xs mt-1 text-gray-500">Volume</span>
            </p>
            <p className="text-green-500 flex flex-col items-center">
              {growth > 0 ? `+${growth}` : growth}%
              <span className="text-xs mt-1 text-gray-500">Growth</span>
            </p>{" "}
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className={` ${type === "pro" ? "blur" : ""}`}>
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
          plugins={[triangleGradientPlugin]}
        />
        <p className="text-sm mt-5">{description}</p>
      </CardContent>

      <CardFooter className={` ${type === "pro" ? "blur" : ""}`}>
        <TooltipProvider>
          <TooltipComponent>
            <TooltipTrigger className="text-xs bg-gray-200 px-2 py-1 border-gray-400">
              {tag}
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {tag === "Exploding"
                  ? "Steep, hockey stick growth."
                  : "Consistent, steady growth."}
              </p>
            </TooltipContent>
          </TooltipComponent>
        </TooltipProvider>
      </CardFooter>

      <div
        className={`absolute top-[50%] left-[50%] flex flex-col items-center gap-5 ${
          type === "pro" ? "" : "hidden"
        }
         transform -translate-x-1/2 -translate-y-1/2
        `}
      >
        <div className="flex items-center gap-2">
          <Button
            className="
          bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-0 h-6 rounded text-[10px]
          "
          >
            PRO
          </Button>
          <p className="font-semibold">Members Only</p>
        </div>

        <Button className="bg-[#2e5ce5] rounded-none">
          Try Exploding Topics Pro
        </Button>
      </div>
    </Card>
  );
};

export default DisplayCard;
