import { Switch } from "@/registry/new-york/ui/switch"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/switch"

export default function SwitchPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Switch</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Square-edged switch that matches the rest of the Omni form controls and
        overlays.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Switch component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Preferences
            </CardTitle>
            <CardDescription>
              Toggle states render with the same glass treatment as inputs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/80">
                Auto backups
              </span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between opacity-60">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
                Public access
              </span>
              <Switch disabled />
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="switch" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Switch } from "@/components/ui/switch"`}</CodeSnippet>

      <CodeSnippet>{`<Switch defaultChecked />`}</CodeSnippet>
    </div>
  )
}
