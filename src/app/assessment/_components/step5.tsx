"use client";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [
  { browser: "safari", visitors: 12, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface StepProps {
  onSetStep: (value: number) => void;
}

export const Step5 = ({ onSetStep }: StepProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-[#1A1C1E] text-2xl font-bold text-center">
          Confirm the results
        </div>
        <Card className="flex flex-col">
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadialBarChart
                data={chartData}
                startAngle={0}
                endAngle={250}
                innerRadius={80}
                outerRadius={110}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-muted last:fill-background"
                  polarRadius={[86, 74]}
                />
                <RadialBar dataKey="visitors" background cornerRadius={10} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-4xl font-bold"
                            >
                              {chartData[0].visitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              / 18
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
            <div className="flex flex-col gap-4">
              <div className="border border-solid border-[#DCE4E8]" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center">
                  <div className="font-medium text-[#1A1C1E] text-sm">
                    Question 1
                  </div>
                  <div className="text-[#0C9A55] font-bold text-sm">
                    Correct
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="font-medium text-[#1A1C1E] text-sm">
                    Question 2
                  </div>
                  <div className="text-[#0C9A55] font-bold text-sm">
                    Correct
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="font-medium text-[#1A1C1E] text-sm">
                    Question 3
                  </div>
                  <div className="text-[#9A0C0C] font-bold text-sm">
                    Incorrect
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="font-medium text-[#1A1C1E] text-sm">
                    Question 4
                  </div>
                  <div className="text-[#0C9A55] font-bold text-sm">
                    Correct
                  </div>
                </div>
              </div>
              <div className="text-orange-500 font-extrabold text-sm  cursor-pointer">
                Show all
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
        </Card>
      </div>

      <div className="flex flex-row gap-4 bottom-0 fixed w-[375px] pb-5 pr-10">
        <Button
          variant={"outline"}
          className="items-center rounded-[70px] w-full h-14 px-6 py-[13px] font-bold text-lg"
          onClick={() => onSetStep(4)}
        >
          Back
        </Button>
        <Button
          className="items-center rounded-[70px] w-full h-14 px-6 py-[13px] font-bold text-lg"
          onClick={() => onSetStep(5)}
        >
          Print
        </Button>
      </div>
    </div>
  );
};
