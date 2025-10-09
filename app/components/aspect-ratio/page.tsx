import { AspectRatio } from "@/registry/new-york/ui/aspect-ratio"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/aspect-ratio"

export default function AspectRatioDocsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Aspect Ratio</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Wrapper component that maintains a fixed ratio while letting the child
        fill the available slot. The Omni version applies the frosted panel and
        mono labelling used throughout the console.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Examples</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Media Preview
            </CardTitle>
            <CardDescription>
              Lock telemetry tiles or video stills to consistent dimensions without
              manual spacing.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AspectRatio ratio={16 / 9}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.35),transparent_60%)]" />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-background/80 via-background/5 to-transparent p-4">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/80">
                    Throughput
                  </p>
                  <p className="text-sm text-foreground">42.8k msg/s</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/60">
                  Live
                </span>
              </div>
            </AspectRatio>

            <AspectRatio ratio={1} className="max-w-xs">
              <div className="absolute inset-0 grid place-content-center bg-muted/40">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/80">
                  Workspace
                </span>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="aspect-ratio" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { AspectRatio } from "@/components/ui/aspect-ratio"`}</CodeSnippet>

      <CodeSnippet>{`<AspectRatio ratio={16 / 9}>
  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-transparent to-slate-900" />
  <div className="absolute inset-0 flex items-end justify-between p-4">
    <span className="font-mono text-[10px] uppercase tracking-[0.32em]">Region</span>
    <span className="text-sm">Tokyo</span>
  </div>
</AspectRatio>`}</CodeSnippet>
    </div>
  )
}
