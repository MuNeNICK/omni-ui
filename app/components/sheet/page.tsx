import { Button } from "@/registry/new-york/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york/ui/sheet"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/sheet"

export default function SheetPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Sheet</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Sliding sheet component with the same glass surface as drawers and
        dialogs. Great for mobile-first flows.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Sheet component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Mobile settings
            </CardTitle>
            <CardDescription>
              Sheets slide over content while keeping the glass look and mono title.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="muted">Open sheet</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>CHECKS</SheetTitle>
                  <SheetDescription>
                    Review automated diagnostics before deploying to production.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-3 px-4 text-sm text-foreground/80">
                  <p>Runtime integrity passed.</p>
                  <p>Network policy matches template.</p>
                  <p className="text-muted-foreground">
                    Estimated rollout time: 2m 14s.
                  </p>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="muted">Cancel</Button>
                  </SheetClose>
                  <Button>Confirm rollout</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="sheet" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"`}</CodeSnippet>

      <CodeSnippet>{`<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>CHECKS</SheetTitle>
      <SheetDescription>Review diagnostics.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}</CodeSnippet>
    </div>
  )
}
