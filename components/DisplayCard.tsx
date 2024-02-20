"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
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
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import chartTrendline from "chartjs-plugin-trendline";

interface DisplayCardProps {
  title: string;
  description: string;
  tag: string;
  volume: number;
  growth: number;
  type?: "pro" | "free";
}

import moment from "moment";
import createTrend from "trendline";
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

    return [
      { y: trend.calcY(minDate), x: minDate },
      { y: trend.calcY(maxDate), x: maxDate },
    ];
  };

  const lastYValue = data[data.length - 1].y;
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
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorY" x1="1" y1="0" x2="0" y2="0">
                <stop offset="10%" stopColor="#2e5ce5" stopOpacity={0} />
                <stop offset="100%" stopColor="#2e5ce5" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            {/* <YAxis
              domain={["auto", "auto"]} // Use 'auto' to see if YAxis can recalculate
              allowDataOverflow={true} // Temporarily allow values outside boundaries
              fontSize={10}
              display={"none"}
              visibility={"hidden"}
            />{" "} */}
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
              active={false}
            />
            <Area
              type="monotoneY"
              data={trendData()}
              dataKey="y"
              isAnimationActive={false} // Disables animations for this area
              strokeWidth={0}
              fillOpacity={0.5}
              fill="url(#colorY)"
              dot={false}
              activeDot={false}
            />
            <Area
              type="monotone"
              dataKey="y"
              stroke="#2e5ce5"
              strokeWidth={3}
              fillOpacity={0}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
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
