import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york/ui/toggle-group"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/toggle-group"

export default function ToggleGroupPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Toggle Group</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Bundled toggles with shared borders for mutually exclusive choices.
        Perfect for segmented filters or formatting toolbars.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Toggle group component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Segment control
            </CardTitle>
            <CardDescription>
              Uses the same squared toggles with shared borders for clarity.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ToggleGroup type="single" defaultValue="preview" aria-label="View mode">
              <ToggleGroupItem value="preview">Preview</ToggleGroupItem>
              <ToggleGroupItem value="diff">Diff</ToggleGroupItem>
              <ToggleGroupItem value="raw">Raw</ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup type="multiple" defaultValue={["logs"]} aria-label="Panels">
              <ToggleGroupItem value="metrics">Metrics</ToggleGroupItem>
              <ToggleGroupItem value="logs">Logs</ToggleGroupItem>
              <ToggleGroupItem value="alerts">Alerts</ToggleGroupItem>
            </ToggleGroup>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="toggle-group" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`}</CodeSnippet>

      <CodeSnippet>{`<ToggleGroup type="single" defaultValue="preview">
  <ToggleGroupItem value="preview">Preview</ToggleGroupItem>
  <ToggleGroupItem value="diff">Diff</ToggleGroupItem>
</ToggleGroup>`}</CodeSnippet>
    </div>
  )
}
