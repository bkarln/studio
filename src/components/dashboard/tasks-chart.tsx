"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { tasks } from "@/lib/data"
import { ChartTooltipContent } from "@/components/ui/chart"

export function TasksChart() {
    const taskStatusCounts = tasks.reduce((acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const chartData = Object.keys(taskStatusCounts).map(status => ({
        name: status,
        total: taskStatusCounts[status]
    }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Overview</CardTitle>
        <CardDescription>A summary of your tasks by status.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
                content={<ChartTooltipContent />}
                cursor={{ fill: "hsl(var(--accent))", opacity: 0.5 }}
            />
            <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
