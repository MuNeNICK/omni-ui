"use client"

import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/new-york/ui/chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { Separator } from "@/components/ui/separator"

const installCommand = "pnpm dlx shadcn@latest add @omni/chart"

const trafficConfig = {
  requests: {
    label: "Requests",
    theme: {
      light: "#38bdf8",
      dark: "#38bdf8",
    },
  },
  errors: {
    label: "Errors",
    theme: {
      light: "#f97316",
      dark: "#fb923c",
    },
  },
} satisfies ChartConfig

const trafficData = [
  { label: "00:00", requests: 4200, errors: 30 },
  { label: "06:00", requests: 5100, errors: 42 },
  { label: "12:00", requests: 6400, errors: 54 },
  { label: "18:00", requests: 7200, errors: 33 },
]

const latencyConfig = {
  latency: {
    label: "Latency",
    icon: undefined,
    theme: {
      light: "#22c55e",
      dark: "#34d399",
    },
  },
} satisfies ChartConfig

const latencyData = [
  { label: "Tokyo", latency: 138 },
  { label: "Singapore", latency: 162 },
  { label: "Frankfurt", latency: 148 },
  { label: "Oregon", latency: 210 },
]

export default function ChartPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Chart</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Wrapper components that apply the Omni CSS tokens to Recharts surfaces—
        think glass axes, muted tooltips, and theme-aware data colors.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Examples</h2>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Request vs error rate
              </CardTitle>
              <CardDescription>
                Multi-series area chart with legend and tooltip styled by the registry.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="max-w-full overflow-x-auto">
                <ChartContainer
                  config={trafficConfig}
                  className="h-72 w-full min-w-[320px]"
                >
                  <AreaChart data={trafficData} margin={{ top: 16, right: 16, left: 0, bottom: 8 }}>
                    <CartesianGrid vertical={false} strokeDasharray="4 4" />
                    <XAxis dataKey="label" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} width={32} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="requests" stroke="var(--color-requests)" fill="var(--color-requests)" fillOpacity={0.15} strokeWidth={2} />
                    <Area type="monotone" dataKey="errors" stroke="var(--color-errors)" fill="var(--color-errors)" fillOpacity={0.2} strokeWidth={2} />
                  </AreaChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Regional latency
              </CardTitle>
              <CardDescription>
                Single-series bar chart using the same container for consistent styling.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="max-w-full overflow-x-auto">
                <ChartContainer
                  config={latencyConfig}
                  className="h-72 w-full min-w-[320px]"
                >
                  <BarChart data={latencyData} margin={{ top: 16, right: 16, left: 0, bottom: 8 }}>
                    <CartesianGrid vertical={false} strokeDasharray="4 4" />
                    <XAxis dataKey="label" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} width={32} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="latency" radius={0} fill="var(--color-latency)" />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="chart" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, Tooltip } from "recharts"

const data = [
  { label: "00:00", value: 120 },
  { label: "06:00", value: 180 },
]

<ChartContainer config={{ value: { label: "Requests", theme: { light: "#38bdf8" } } }}>
  <LineChart data={data}>
    <XAxis dataKey="label" />
    <Tooltip content={<ChartTooltipContent />} />
    <Line type="monotone" dataKey="value" stroke="var(--color-value)" />
  </LineChart>
</ChartContainer>`}</CodeSnippet>
    </div>
  )
}
