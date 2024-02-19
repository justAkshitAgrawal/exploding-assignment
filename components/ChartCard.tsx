"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Filter } from "./Filter";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { Switch } from "./ui/switch";
import { FaCircleQuestion } from "react-icons/fa6";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipComponent,
} from "./ui/tooltip";
import moment from "moment";
import createTrend from "trendline";

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
    const numDataPoints = 100; // Adjust this for more or fewer points
    let currentValue = 1000; // Starting value

    for (let i = 0; i < numDataPoints; i++) {
      const volatility = Math.random() * 1000; // Increased volatility
      let direction = Math.random(); // Random direction of the trend

      if (Math.random() > 0.8) {
        direction *= -1; // Change direction more frequently
      }

      currentValue += volatility * direction; // Apply the change to the current value
      data.push({ x: new Date(2020, 0, i + 10), y: currentValue }); // Add the new value to the dataset
    }
    return data;
  };

  const data = generateData().map((el) => {
    return { ...el, x: moment(el.x).valueOf() };
  });

  const trendData = () => {
    const trend = createTrend(data, "x", "y");
    const minDate = Math.min(...data.map((d) => d.x));
    const maxDate = Math.max(...data.map((d) => d.x));
    console.log("trendData:", [
      { y: trend.calcY(minDate), x: minDate },
      { y: trend.calcY(maxDate), x: maxDate },
    ]); // Log to inspect!
    return [
      { y: trend.calcY(minDate), x: minDate },
      { y: trend.calcY(maxDate), x: maxDate },
    ];
  };

  const lastYValue = data[data.length - 1].y;

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active: boolean;
    payload: any;
  }) => {
    if (active && payload && payload.length) {
      const date = new Date(payload[0].payload.x); // Access the date from the payload
      const month = date.toLocaleString("default", { month: "short" });
      return (
        <div className="custom-tooltip bg-[#d6e9fb] p-2  rounded-md shadow-lg">
          <p className="label text-center font-semibold text-xs">{`${month.toUpperCase()}`}</p>
          <div className="flex items-center space-x-2">
            <p className="intro text-[#2e5ce5] font-medium">{`${payload[0].value.toFixed(
              2
            )}/mo`}</p>
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
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <Card className="">
      <CardHeader>
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-4">
            <Filter data={yearFilters} />
            <div className="border border-blue-300 md:w-[200px] p-1.5 rounded-md bg-blue-600/20 flex items-center md:justify-evenly max-md:space-x-1">
              <HiOutlineTrendingUp className="text-blue-600" />
              <p className="text-blue-600 text-xs font-semibold">Trending</p>
              <Switch disabled className="max-md:scale-75" />
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
            </div>
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
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            {/* <defs>
              <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#2e5ce5" stopOpacity={0} />
                <stop offset="100%" stopColor="#2e5ce5" stopOpacity={0.8} />
              </linearGradient>
            </defs> */}
            <YAxis
              domain={["auto", "auto"]} // Use 'auto' to see if YAxis can recalculate
              allowDataOverflow={true} // Temporarily allow values outside boundaries
            />{" "}
            <XAxis
              dataKey="x"
              type="number"
              domain={["auto", "auto"]}
              scale="time"
              visibility={"hidden"}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              contentStyle={{ backgroundColor: "#d6e9fb", border: "none" }}
              cursor={false}
              content={
                <CustomTooltip
                  active={true}
                  payload={[{ value: 1000 }]}
                  // label={}
                />
              }
            />
            <Line
              type="linear"
              data={trendData()}
              dataKey="y"
              stroke="#ff7300" // Your desired trendline color
              strokeWidth={2} // Choose appropriate width
              opacity={1}
              z={1}
              legendType="none"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#2e5ce5"
              strokeWidth={3}
              fillOpacity={0.5}
              fill="url(#colorY)"
              z={5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="flex justify-between ml-16 mt-2">
          {[2019, 2020, 2021, 2022, 2023, 2024].map((year) => {
            return (
              <div key={year} className=" text-gray-400 text-xs">
                <p>{year}</p>
              </div>
            );
          })}
        </div>
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
