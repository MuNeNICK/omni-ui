import { Checkbox } from "@/registry/new-york/ui/checkbox"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/checkbox @omni/label"

export default function CheckboxPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Checkbox</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Square checkboxes with the same flat, glass treatment as other controls.
        Includes support for disabled and indeterminate states.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Checkbox component</h2>
        </div>

        <div className="grid gap-4">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Preferences
              </CardTitle>
              <CardDescription>
                Toggles inherit the mono uppercase labels used in forms.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <label className="group/field flex items-center gap-3">
                <Checkbox id="alerts" defaultChecked />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/90">
                  Alerts
                </span>
              </label>
              <label className="group/field flex items-center gap-3">
                <Checkbox id="reports" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/90">
                    Weekly reports
                  </span>
              </label>
              <label className="group/field flex items-center gap-3 opacity-50">
                <Checkbox id="beta" disabled />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
                  Beta features
                </span>
              </label>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="checkbox" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"`}</CodeSnippet>

      <CodeSnippet>{`<div className="flex items-center space-x-2">
  <Checkbox id="alerts" defaultChecked />
  <Label htmlFor="alerts">Alerts</Label>
</div>`}</CodeSnippet>
    </div>
  )
}
