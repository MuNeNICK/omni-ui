import { Toggle } from "@/registry/new-york/ui/toggle"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/toggle"

export default function TogglePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Toggle</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Square mono toggles that slot into filter bars or toolbar actions. Uses
        the same uppercase tone as other chips.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Toggle component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Toolbar actions
            </CardTitle>
            <CardDescription>
              Toggles apply the same flat styling seen in the dashboard PoC.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Toggle aria-label="Toggle bold" defaultPressed>
              Bold
            </Toggle>
            <Toggle aria-label="Toggle italic">Italic</Toggle>
            <Toggle aria-label="Toggle underline" disabled>
              Underline
            </Toggle>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="toggle" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Toggle } from "@/components/ui/toggle"`}</CodeSnippet>

      <CodeSnippet>{`<Toggle aria-label="Toggle italic">Italic</Toggle>`}</CodeSnippet>
    </div>
  )
}
