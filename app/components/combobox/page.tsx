"use client"

import { useMemo, useState } from "react"

import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxSearch,
  ComboboxSeparator,
  ComboboxTrigger,
} from "@/registry/new-york/ui/combobox"
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
  "pnpm dlx shadcn@latest add @omni/combobox @omni/command @omni/popover"

const regions = [
  {
    value: "tokyo",
    label: "Tokyo",
    badge: "Primary",
    description: "Low latency for Japan workloads.",
  },
  {
    value: "osaka",
    label: "Osaka",
    badge: "Failover",
    description: "Warm standby for critical services.",
  },
  {
    value: "singapore",
    label: "Singapore",
    badge: "Edge",
    description: "Edge cache and streaming endpoints.",
  },
  {
    value: "sydney",
    label: "Sydney",
    badge: "Preview",
    description: "Pilot clusters for APAC partners.",
  },
]

const teams = [
  { value: "observability", label: "Observability", hint: "SRE" },
  { value: "security", label: "Security", hint: "Security" },
  { value: "product", label: "Product", hint: "Product" },
  { value: "growth", label: "Growth", hint: "Operations" },
]

export default function ComboboxPage() {
  const [openRegion, setOpenRegion] = useState(false)
  const [region, setRegion] = useState<string | null>(null)
  const [openTeam, setOpenTeam] = useState(false)
  const [team, setTeam] = useState<string | null>("observability")

  const selectedRegion = useMemo(
    () => regions.find((item) => item.value === region),
    [region]
  )
  const selectedTeam = useMemo(
    () => teams.find((item) => item.value === team),
    [team]
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Combobox</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Uppercase popover selector that layers on top of the glass command menu
        primitives, complete with search, grouping, and indicator controls.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Examples</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Region selector
            </CardTitle>
            <CardDescription>
              Surface production regions with inline metadata and fast filtering.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Combobox open={openRegion} onOpenChange={setOpenRegion}>
              <ComboboxTrigger
                placeholder="Select a deployment region"
                className="min-w-[18rem]"
              >
                {selectedRegion ? (
                  <span className="flex items-center gap-3">
                    <span>{selectedRegion.label}</span>
                    <Badge variant="outline" className="font-mono text-[10px]">
                      {selectedRegion.badge}
                    </Badge>
                  </span>
                ) : null}
              </ComboboxTrigger>
              <ComboboxContent>
                <ComboboxSearch placeholder="Filter regions" />
                <ComboboxList>
                  <ComboboxEmpty>No regions found.</ComboboxEmpty>
                  <ComboboxGroup>
                    {regions.map((item) => (
                      <ComboboxItem
                        key={item.value}
                        value={item.value}
                        onSelect={(current) => {
                          const next = current === region ? null : current
                          setRegion(next)
                          setOpenRegion(false)
                        }}
                      >
                        <span className="flex flex-col">
                          <span className="font-medium leading-none">
                            {item.label}
                          </span>
                          <span className="text-muted-foreground/70 text-[11px]">
                            {item.description}
                          </span>
                        </span>
                      </ComboboxItem>
                    ))}
                  </ComboboxGroup>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>

            {selectedRegion ? (
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {selectedRegion.label}
                </span>{" "}
                is mapped to the {selectedRegion.badge?.toLowerCase()} cluster.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Choose a region to see its operational role.
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Assignment workflow
            </CardTitle>
            <CardDescription>
              Compact toolbar variant that toggles between teams without leaving
              the command surface.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Combobox open={openTeam} onOpenChange={setOpenTeam}>
              <ComboboxTrigger
                size="sm"
                placeholder="Assign to..."
                className="min-w-[12rem]"
              >
                {selectedTeam?.label}
              </ComboboxTrigger>
              <ComboboxContent align="end">
                <ComboboxSearch placeholder="Filter teams" />
                <ComboboxList>
                  <ComboboxEmpty>No team found.</ComboboxEmpty>
                  <ComboboxGroup>
                    {teams.map((item) => (
                      <ComboboxItem
                        key={item.value}
                        value={item.value}
                        onSelect={(current) => {
                          setTeam(current)
                          setOpenTeam(false)
                        }}
                      >
                        <span className="flex w-full items-center justify-between">
                          <span>{item.label}</span>
                          <span className="text-muted-foreground/60 text-[11px]">
                            {item.hint}
                          </span>
                        </span>
                      </ComboboxItem>
                    ))}
                  </ComboboxGroup>
                  <ComboboxSeparator />
                  <ComboboxGroup>
                    <ComboboxItem
                      value="new-team"
                      onSelect={() => {
                        setOpenTeam(false)
                      }}
                    >
                      Create new team…
                    </ComboboxItem>
                  </ComboboxGroup>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>

            <Button variant="ghost" size="sm" className="tracking-[0.32em]">
              Notify
            </Button>
            <Button size="sm" className="tracking-[0.32em]">
              Assign
            </Button>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="combobox" />

      <p className="text-sm text-muted-foreground">
        The combobox depends on the command and popover primitives. Add them via
        the copy command above if they are not already in your project.
      </p>

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxSearch,
  ComboboxList,
  ComboboxEmpty,
  ComboboxItem,
} from "@/components/ui/combobox"

const regions = [
  { value: "tokyo", label: "Tokyo" },
  { value: "osaka", label: "Osaka" },
]

export function RegionCombobox() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string | null>(null)

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger placeholder="Select region">
        {regions.find((item) => item.value === value)?.label}
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxSearch placeholder="Filter regions" />
        <ComboboxList>
          <ComboboxEmpty>No regions found.</ComboboxEmpty>
          <ComboboxGroup>
            {regions.map((item) => (
              <ComboboxItem
                key={item.value}
                value={item.value}
                onSelect={(current) => {
                  setValue(current)
                  setOpen(false)
                }}
              >
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`}</CodeSnippet>
    </div>
  )
}
