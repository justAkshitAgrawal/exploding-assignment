"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Filter } from "./Filter";

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
import { HiOutlineTrendingUp } from "react-icons/hi";
import { Switch } from "./ui/switch";

import { FaCircleQuestion } from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

const yearFilters = [
  {
    value: "3",
    label: "3 Months",
  },
  {
    value: "6",
    label: "6 Months",
  },
  {
    value: "9",
    label: "9 Months",
  },
  {
    value: "12",
    label: "12 Months",
  },
];
const ChartCard = () => {
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
    <Card className="">
      <CardHeader>
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-4">
            {/* <Filter data={yearFilters} /> */}
            {/* <div className="border border-blue-300 md:w-[200px] p-2 rounded-md bg-blue-600/20 flex items-center justify-evenly">
              <HiOutlineTrendingUp className="text-blue-600" />
              <p className="text-blue-600 text-xs font-semibold">Trending</p>
              <Switch disabled />
              <TooltipProvider>
                <TooltipComponent>
                  <TooltipTrigger className="">
                    <FaCircleQuestion className="text-blue-600" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{`Forecast predicts the growth of this trend over the next 12 months. Our forecasting uses a deep machine learning model trained on millions of data points.`}</p>
                  </TooltipContent>
                </TooltipComponent>
              </TooltipProvider>
            </div> */}
          </div>
          <div className="flex gap-6 max-md:hidden">
            <p className="text-blue-600 flex flex-col items-center md:text-2xl font-bold">
              {"9.9K"}
              <span className="text-xs mt-1 text-gray-500">Volume</span>
            </p>
            <p className="text-green-500 flex flex-col items-center text-2xl font-bold">
              {"99"}%<span className="text-xs mt-1 text-gray-500">Growth</span>
            </p>{" "}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex gap-6 md:hidden mb-4">
          <p className="text-blue-600 flex flex-col items-center md:text-2xl font-bold">
            {"9.9K"}
            <span className="text-xs mt-1 text-gray-500">Volume</span>
          </p>
          <p className="text-green-500 flex flex-col items-center md:text-2xl font-bold">
            {"99"}%<span className="text-xs mt-1 text-gray-500">Growth</span>
          </p>{" "}
        </div>
        <Line
          data={{
            labels: generateLabels(),
            datasets: [
              {
                // label: "Price",
                data: generateData(),
                borderColor: "rgb(46, 92, 229)",
                backgroundColor: "#2e5ce5",
                tension: 0.5,
                pointStyle: "circle",
                pointRadius: 0,
                pointHoverRadius: 5,
                pointBackgroundColor: "#2e5ce5",
                pointHitRadius: 100,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                display: false,
              },
              y: {
                // display: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                mode: "nearest",
                intersect: false,
                backgroundColor: "rgb(214, 233, 251)",
                displayColors: false,
                titleColor: "rgb(0, 0, 0)",
                bodyColor: "#2e5ce5",
                titleAlign: "center",
                bodyAlign: "center",
                padding: 10,
                bodyFont: {
                  size: 19,
                  weight: 600,
                },
                callbacks: {
                  label: function (tooltip) {
                    return `${tooltip.formattedValue.slice(0, 3)}K/mo`;
                  },
                },
              },
            },
          }}
        />
      </CardContent>

      <CardFooter>
        <TooltipProvider>
          <TooltipComponent>
            <TooltipTrigger className="text-xs bg-gray-200 px-2 py-1 border-gray-400">
              {"Exploding"}
            </TooltipTrigger>
            <TooltipContent>
              <p>{`"Steep, hockey stick growth."`}</p>
            </TooltipContent>
          </TooltipComponent>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default ChartCard;
