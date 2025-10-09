import { Slider } from "@/registry/new-york/ui/slider"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/slider"

export default function SliderPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Slider</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Glassy slider with sharp edges and muted track that fits the Omni form
        system.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Slider component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Capacity
            </CardTitle>
            <CardDescription>
              Used for intensity controls and resource allocations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/80">
                Storage
              </span>
              <Slider defaultValue={[60]} max={100} step={5} />
            </div>
            <div className="space-y-2 opacity-60">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
                Throughput
              </span>
              <Slider defaultValue={[20, 80]} max={100} step={10} />
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="slider" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Slider } from "@/components/ui/slider"`}</CodeSnippet>

      <CodeSnippet>{`<Slider defaultValue={[50]} max={100} step={5} />`}</CodeSnippet>
    </div>
  )
}
