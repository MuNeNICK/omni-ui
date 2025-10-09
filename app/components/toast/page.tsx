"use client"

import { useCallback } from "react"
import Link from "next/link"
import { toast } from "sonner"
import { AlertTriangle, CheckCircle2, Info } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Toaster } from "@/registry/new-york/ui/sonner"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/sonner"

export default function ToastPage() {
  const fireToast = useCallback(() => {
    toast("Control plane window", {
      description: "Deployments pause at 02:00 JST while upgrades roll out.",
      action: {
        label: "View runbook",
        onClick: () => toast.success("Runbook opened"),
      },
    })
  }, [])

  const fireWarning = useCallback(() => {
    toast.warning("Latency rising", {
      description: "Ingress in Singapore is above the target budget.",
    })
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <Toaster position="top-right" richColors />

      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Toast</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Toast notifications leverage the <strong>Sonner</strong> package with the
        Omni glass styling preset. Instead of a dedicated toast component, install
        <code className="mx-1 rounded-sm bg-muted/50 px-1 py-[1px]">@omni/sonner</code>
        and follow the Sonner usage patterns.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Sonner quick demo
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Use the Sonner toaster
            </CardTitle>
            <CardDescription>
              Trigger toasts with the <code>toast</code> helper—no extra wrapper
              component required.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <Button onClick={fireToast} className="justify-start gap-3">
              <Info className="size-4" />
              Show info toast
            </Button>
            <Button
              variant="ghost"
              onClick={fireWarning}
              className="justify-start gap-3"
            >
              <AlertTriangle className="size-4" />
              Show warning toast
            </Button>
            <Button
              variant="muted"
              onClick={() => toast.success("Rollback complete")}
              className="justify-start gap-3"
            >
              <CheckCircle2 className="size-4" />
              Show success toast
            </Button>
          </CardContent>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground">
        Looking for the full API and variant examples? Visit the {
        <Link
          href="/components/sonner"
          className="text-foreground underline underline-offset-4"
        >
          Sonner page
        </Link>
        } for an in-depth breakdown.
      </p>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="sonner" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export function Demo() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <button onClick={() => toast("Maintenance window", {
        description: "Deployments pause at 02:00 JST.",
      })}>
        Trigger toast
      </button>
    </>
  )
}`}</CodeSnippet>
    </div>
  )
}
