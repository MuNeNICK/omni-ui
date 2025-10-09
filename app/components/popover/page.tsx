import { Button } from "@/registry/new-york/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/popover"

export default function PopoverPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Popover</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Lightweight hover/click surface sharing the glass styling from other
        overlays.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Popover component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Resource summary
            </CardTitle>
            <CardDescription>
              Popovers use the same square, glass surface as menus and tooltips.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="muted">Show summary</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex flex-col gap-3 text-sm text-foreground/80">
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                    Capsule 74b
                  </p>
                  <p>Active nodes: 12</p>
                  <p>Latency avg: 128ms</p>
                  <p className="text-muted-foreground">
                    Replica auto-scaling configured between 4 and 16 pods.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="popover" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"`}</CodeSnippet>

      <CodeSnippet>{`<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Analytics summary</PopoverContent>
</Popover>`}</CodeSnippet>
    </div>
  )
}
