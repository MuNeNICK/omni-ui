"use client"

import { useMemo, useState } from "react"
import { format, subDays } from "date-fns"
import type { DateRange } from "react-day-picker"

import { Button } from "@/registry/new-york/ui/button"
import { DatePicker } from "@/registry/new-york/ui/date-picker"
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

const installCommand =
  "pnpm dlx shadcn@latest add @omni/date-picker @omni/calendar @omni/button @omni/popover"

export default function DatePickerPage() {
  const [auditDate, setAuditDate] = useState<Date | undefined>(new Date())
  const [maintenanceWindow, setMaintenanceWindow] = useState<DateRange | undefined>({
    from: subDays(new Date(), 6),
    to: new Date(),
  })

  const maintenanceSummary = useMemo(() => {
    if (!maintenanceWindow?.from) return "No window selected."

    if (!maintenanceWindow.to) {
      return `Window begins ${format(maintenanceWindow.from, "PPP")}.`
    }

    return `Window runs ${format(maintenanceWindow.from, "PP")} – ${format(
      maintenanceWindow.to,
      "PP"
    )}.`
  }, [maintenanceWindow])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Date Picker</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Calendar popover tuned to the Omni glass aesthetic—mono triggers, translucent
        surfaces, and range selection that mirrors our dashboard tooling.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Examples</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Audit snapshot
            </CardTitle>
            <CardDescription>
              Single date selection for pulling compliance reports or log exports.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <DatePicker
              value={auditDate}
              onValueChange={setAuditDate}
              placeholder="Choose audit date"
              buttonVariant="muted"
            />
            <p className="text-sm text-muted-foreground">
              {auditDate
                ? `Audit anchored to ${format(auditDate, "PPPP")}.`
                : "Select a day to generate the audit report."}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Maintenance window
            </CardTitle>
            <CardDescription>
              Range picker with dual-month layout, clear control, and glass toolbar.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <DatePicker
              mode="range"
              value={maintenanceWindow}
              onValueChange={setMaintenanceWindow}
              numberOfMonths={2}
              showClearButton
              closeOnSelect={false}
              placeholder="Select maintenance range"
              captionLayout="dropdown"
            />
            <p className="text-sm text-muted-foreground">{maintenanceSummary}</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                Notify workspace
              </Button>
              <Button size="sm">Lock deployments</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="date-picker" />

      <p className="text-sm text-muted-foreground">
        The picker builds on the calendar component. Install <code>@omni/calendar</code>
        if you haven&apos;t already pulled it into your project.
      </p>

      <h3 className="text-lg mt-10 font-bold">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { DatePicker } from "@/components/ui/date-picker"
import type { DateRange } from "react-day-picker"

export function WindowPicker() {
  const [window, setWindow] = useState<DateRange | undefined>()

  return (
    <DatePicker
      mode="range"
      value={window}
      onValueChange={setWindow}
      numberOfMonths={2}
      showClearButton
    />
  )
}`}</CodeSnippet>
    </div>
  )
}
