"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york/ui/resizable"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/resizable"

export default function ResizablePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Resizable</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Split panels with sharp handles and frosted dividers—perfect for log
        viewers, console layouts, and side-by-side comparisons.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Log explorer</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Monitor view
            </CardTitle>
            <CardDescription>
              Drag the handles to resize each pane; glass dividers stay crisp in both orientations.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[320px]">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={35} className="border border-border/60 bg-muted/30 p-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Services
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>control-plane</li>
                  <li>ingress-gateway</li>
                  <li>billing</li>
                  <li>reports</li>
                </ul>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={65} className="flex flex-col">
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={60} className="border border-border/60 bg-muted/30 p-4">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                      Live metrics
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Stream duration: 14m 22s — Latency steady at 162ms.
                    </p>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={40} className="border border-border/60 bg-background/30 p-4">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                      Log tail
                    </h3>
                    <pre className="mt-3 h-full overflow-auto text-xs leading-relaxed text-muted-foreground/80">
{`02:11:01 edge-cache rewrite enabled
02:11:03 ingress latency 164ms (target 180ms)
02:11:10 billing job completed (duration 48s)`}
                    </pre>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="resizable" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={75}>Main content</ResizablePanel>
</ResizablePanelGroup>`}</CodeSnippet>
    </div>
  )
}
