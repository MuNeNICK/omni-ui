import { Button } from "@/registry/new-york/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/dialog"

export default function DialogPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Dialog</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Zero-radius modal with glass surface, matching the Omni dashboard system.
        Includes uppercase heading, description, and action footer.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Dialog component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Usage Example
            </CardTitle>
            <CardDescription>
              Trigger launches the glass dialog with mono headline and stacked
              actions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="muted">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>INSTANCE</DialogTitle>
                  <DialogDescription>
                    Allocate a new compute instance within the Tokyo region.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 text-sm text-foreground/80">
                  <p>
                    Deploying an instance will provision compute, network, and
                    observability hooks in the selected zone.
                  </p>
                  <p className="text-muted-foreground">
                    You can reconfigure after launch. Billing starts once the
                    instance reaches a running state.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="muted">Cancel</Button>
                  </DialogClose>
                  <Button>Launch</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="dialog" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"`}</CodeSnippet>

      <CodeSnippet>{`<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>INSTANCE</DialogTitle>
      <DialogDescription>Provision a new compute target.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="muted">Cancel</Button>
      <Button>Launch</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</CodeSnippet>
    </div>
  )
}
