import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york/ui/collapsible"
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
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const installCommand = "pnpm dlx shadcn@latest add @omni/collapsible"

export default function CollapsiblePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Collapsible</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Primitive disclosure container that handles open and close state without
        imposing layout or styling. Ideal when you need to toggle dense content
        regions while keeping full control of the presentation.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Collapsible demo
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Build Step Summary
            </CardTitle>
            <CardDescription>
              Toggle the collapsed region to reveal the raw build logs while the
              summary stays visible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Collapsible className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm text-muted-foreground">
                  Build #2487 completed in 3m21s on cluster-02.
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm">
                    View logs
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="rounded-md border bg-muted/40 p-4 text-sm text-muted-foreground">
                <pre className="whitespace-pre-wrap">
{`> pnpm install
> pnpm run build

✓ lint passed
✓ unit tests passed
✓ artifact uploaded to registry`}
                </pre>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="collapsible" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"`}</CodeSnippet>

      <CodeSnippet>{`<Collapsible>
  <CollapsibleTrigger>View logs</CollapsibleTrigger>
  <CollapsibleContent>
    {/* expanded content */}
  </CollapsibleContent>
</Collapsible>`}</CodeSnippet>
    </div>
  )
}
