"use client"

import { useMemo } from "react"
import type { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"
import { DataTable } from "@/registry/new-york/ui/data-table"
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

type Deployment = {
  id: string
  service: string
  owner: string
  status: "Healthy" | "Warning" | "Degraded"
  region: string
  latencyMs: number
  incidents: number
}

const deployments: Deployment[] = [
  {
    id: "svc-telemetry",
    service: "Telemetry API",
    owner: "Observability",
    status: "Healthy",
    region: "Tokyo",
    latencyMs: 128,
    incidents: 0,
  },
  {
    id: "svc-gateway",
    service: "Ingress Gateway",
    owner: "SRE",
    status: "Warning",
    region: "Singapore",
    latencyMs: 182,
    incidents: 1,
  },
  {
    id: "svc-reports",
    service: "Reports",
    owner: "Product",
    status: "Healthy",
    region: "Frankfurt",
    latencyMs: 156,
    incidents: 0,
  },
  {
    id: "svc-billing",
    service: "Billing",
    owner: "Finance",
    status: "Degraded",
    region: "Oregon",
    latencyMs: 244,
    incidents: 3,
  },
  {
    id: "svc-ai",
    service: "Inference API",
    owner: "AI Platform",
    status: "Warning",
    region: "Tokyo",
    latencyMs: 198,
    incidents: 2,
  },
]

const columns: ColumnDef<Deployment>[] = [
  {
    accessorKey: "service",
    header: "SERVICE",
    cell: ({ row }) => (
      <div className="space-y-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em]">
          {row.getValue("service") as string}
        </p>
        <p className="text-muted-foreground text-xs">
          {row.original.id}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "owner",
    header: "OWNER",
    enableColumnFilter: true,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground/80">
        {row.getValue("owner") as string}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as Deployment["status"]
      const tone =
        status === "Healthy"
          ? "secondary"
          : status === "Warning"
            ? "outline"
            : "destructive"

      return (
        <Badge variant={tone} className="text-[10px]">
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "region",
    header: "REGION",
    cell: ({ row }) => (
      <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/80">
        {row.getValue("region") as string}
      </span>
    ),
  },
  {
    accessorKey: "latencyMs",
    header: "P95 LATENCY",
    cell: ({ row }) => (
      <span className="text-sm text-foreground/80">
        {row.original.latencyMs.toLocaleString()} ms
      </span>
    ),
  },
  {
    accessorKey: "incidents",
    header: "INCIDENTS",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground/70">
        {row.original.incidents}
      </span>
    ),
  },
]

const installCommand =
  "pnpm dlx shadcn@latest add @omni/data-table @omni/table @omni/button @omni/input @omni/select"

export default function DataTablePage() {
  const data = useMemo(() => deployments, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Data Table</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        TanStack Table primitives wrapped in the Omni glass shell: mono headers,
        uppercase controls, and frosted toolbars that mirror the PoC dashboards.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Deployment health
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Control-plane services
            </CardTitle>
            <CardDescription>
              Search, column visibility, and pagination ship with the registry
              defaults—no manual wiring required.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DataTable
              columns={columns}
              data={data}
              searchKey="service"
              toolbar={() => (
                <Button size="sm" variant="muted" className="tracking-[0.32em]">
                  Export CSV
                </Button>
              )}
              emptyMessage="No services matched your filters."
            />
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="data-table" />

      <p className="text-sm text-muted-foreground">
        The table relies on <code>@tanstack/react-table</code>. Install it with
        <code className="mx-1 rounded-sm bg-muted/50 px-1 py-[1px]">pnpm add @tanstack/react-table</code>
        if it&apos;s not already in your workspace.
      </p>

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { DataTable } from "@/components/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"

type Deployment = {
  id: string
  service: string
  status: "Healthy" | "Warning" | "Degraded"
  region: string
}

const columns: ColumnDef<Deployment>[] = [
  {
    accessorKey: "service",
    header: "SERVICE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
]

export function DeploymentTable({ data }: { data: Deployment[] }) {
  return (
    <DataTable columns={columns} data={data} searchKey="service" />
  )
}`}</CodeSnippet>
    </div>
  )
}
