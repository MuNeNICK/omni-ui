"use client"

import { useCallback } from "react"
import { toast } from "sonner"

import { Button } from "@/registry/new-york/ui/button"
import { Toaster } from "@/registry/new-york/ui/sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { CheckCheck, InfoIcon, TriangleAlert } from "lucide-react"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { Separator } from "@/components/ui/separator"

const installCommand = "pnpm dlx shadcn@latest add @omni/sonner"

export default function SonnerPage() {
  const handleInfo = useCallback(() => {
    toast("Maintenance window", {
      description: "Control plane upgrades begin at 02:00 JST.",
      icon: <InfoIcon className="size-3.5" />,
    })
  }, [])

  const handleSuccess = useCallback(() => {
    toast.success("Rollback complete", {
      description: "Traffic is routing through the stable build again.",
    })
  }, [])

  const handleWarning = useCallback(() => {
    toast.warning("Quota reached", {
      description: "Workspace secrets are almost full.",
    })
  }, [])

  const handleError = useCallback(() => {
    toast.error("Incident detected", {
      description: "Deployments in Osaka are paused while we investigate.",
      cancel: {
        label: "Dismiss",
        onClick: () => toast.dismiss(),
      },
    })
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <Toaster position="top-right" richColors />

      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Toasts (Sonner)</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Toast layout now mirrors Alert exactly—square frame, frosted glass,
        mono headline, and variant-colored accent bar with matching icons.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Interactive demo
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Trigger notifications
            </CardTitle>
            <CardDescription>
              Each toast shares the Alert component’s structure, colors, and
              icon treatments.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <Button
              variant="muted"
              className="justify-start gap-3"
              onClick={handleInfo}
            >
              <InfoIcon className="size-4" />
              Show info toast
            </Button>
            <Button className="justify-start gap-3" onClick={handleSuccess}>
              <CheckCheck className="size-4" />
              Show success toast
            </Button>
            <Button
              variant="ghost"
              className="justify-start gap-3"
              onClick={handleWarning}
            >
              <TriangleAlert className="size-4" />
              Show warning toast
            </Button>
            <Button
              variant="muted"
              className="justify-start gap-3"
              onClick={handleError}
            >
              <TriangleAlert className="size-4" />
              Show error toast
            </Button>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="sonner" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"`}</CodeSnippet>

      <CodeSnippet>{`<Toaster position="top-right" />

toast.error("Incident", {
  description: "Deployments in Osaka are paused.",
  icon: <TriangleAlert className="size-3.5" />,
})`}</CodeSnippet>
    </div>
  )
}
