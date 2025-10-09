import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/label"

export default function LabelPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Label</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Monospaced, uppercase labels that align with the Omni control-plane
        typography system. Labels respond to invalid states and pair with Inputs
        or other field elements.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Label component</h2>
        </div>

        <div className="grid gap-4">
          <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Default
            </CardTitle>
            <CardDescription>
              Labels paired with inputs inherit the PoC typography rhythm.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="project">Project Name</Label>
              <Input id="project" placeholder="Aurora" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="owner">Owner</Label>
              <Input id="owner" placeholder="team@omni.cloud" />
            </div>
          </CardContent>
        </Card>

          <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Invalid State
            </CardTitle>
            <CardDescription>
              Demonstrates label and field responses when validation fails.
            </CardDescription>
          </CardHeader>
          <CardContent className="group/field grid gap-2" data-invalid="true">
            <Label
              htmlFor="region"
              className="group-data-[invalid=true]/field:text-destructive"
            >
              Region
            </Label>
            <Input
              id="region"
              placeholder="Select region"
              aria-invalid
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
            />
            <p className="text-[12px] text-destructive">
              Region is required to deploy resources.
            </p>
          </CardContent>
        </Card>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="label" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Label } from "@/components/ui/label"`}</CodeSnippet>

      <CodeSnippet>{`<div className="grid gap-2">
  <Label htmlFor="project">Project Name</Label>
  <Input id="project" placeholder="Aurora" />
</div>`}</CodeSnippet>
    </div>
  )
}
