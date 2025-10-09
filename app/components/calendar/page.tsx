"use client"

import { useMemo, useState } from "react"
import { addDays } from "date-fns"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/registry/new-york/ui/calendar"
import { Button } from "@/registry/new-york/ui/button"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/calendar @omni/button"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 4),
  })

  const rangeSummary = useMemo(() => {
    if (!range?.from) return "No range selected."
    if (!range.to) return `Range starts ${range.from.toLocaleDateString()}.`
    return `${range.from.toLocaleDateString()} – ${range.to.toLocaleDateString()}`
  }, [range])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        React Day Picker wired to the Omni button system: sharp navigation
        controls, muted grid, and range styling that stays readable in glassy
        surfaces.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Examples</h2>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Single date
              </CardTitle>
              <CardDescription>
                Use the frosted navigation buttons and muted cells for point-in-time
                scheduling.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="max-w-full overflow-x-auto">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-none border border-border/70"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {date
                  ? `Inspection scheduled for ${date.toLocaleDateString()}.`
                  : "Select a day to schedule the inspection."}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Date range
              </CardTitle>
              <CardDescription>
                Range selection with dropdown month controls for maintenance windows.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="max-w-full overflow-x-auto">
                <Calendar
                  mode="range"
                  captionLayout="dropdown"
                  numberOfMonths={2}
                  selected={range}
                  onSelect={setRange}
                  className="rounded-none border border-border/70"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span>{rangeSummary}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setRange(undefined)}
                  className="tracking-[0.3em]"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="calendar" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Calendar } from "@/components/ui/calendar"
import type { DateRange } from "react-day-picker"

const [range, setRange] = useState<DateRange | undefined>()

<Calendar
  mode="range"
  numberOfMonths={2}
  captionLayout="dropdown"
  selected={range}
  onSelect={setRange}
/>`}</CodeSnippet>
    </div>
  )
}
