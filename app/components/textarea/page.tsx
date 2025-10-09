import { Label } from "@/registry/new-york/ui/label"
import { Textarea } from "@/registry/new-york/ui/textarea"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/textarea @omni/label"

export default function TextareaPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Textarea</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Multi-line field with the same muted glass treatment and focus accents as
        the input system, sized for feedback forms and log streaming blocks.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Textarea component</h2>
        </div>

        <div className="grid gap-4">
          <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Support Form
            </CardTitle>
            <CardDescription>
              Larger text areas inherit the same glass treatment for multi-line
              feedback.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Textarea id="subject" placeholder="Access issue on ap-tokyo-1" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="details">Message</Label>
              <Textarea
                id="details"
                placeholder="Describe the behaviour you're seeing..."
                className="min-h-40"
              />
            </div>
          </CardContent>
        </Card>

          <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Read-Only
            </CardTitle>
            <CardDescription>
              Example of piping logs into the component while preserving
              monospaced styling.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Label htmlFor="logs" className="opacity-70">
              Latest Logs
            </Label>
            <Textarea
              id="logs"
              readOnly
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
              defaultValue={`[10:21:08] CONNECT ap-tokyo-1 → compute
[10:21:11] SYNC    config state | success
[10:21:18] INFO    scale set at 4 replicas`}
            />
          </CardContent>
        </Card>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="textarea" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"`}</CodeSnippet>

      <CodeSnippet>{`<div className="grid gap-2">
  <Label htmlFor="details">Message</Label>
  <Textarea id="details" placeholder="Describe the behaviour you're seeing..." />
</div>`}</CodeSnippet>
    </div>
  )
}
