import { Button } from "@/registry/new-york/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/new-york/ui/hover-card"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/hover-card"

export default function HoverCardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Hover Card</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Lightweight hover preview that shares the glass surface treatment with
        popovers.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Hover card component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              User preview
            </CardTitle>
            <CardDescription>
              Display contextual info without committing to a full dialog.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="muted">Hover me</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                    Operator 042
                  </p>
                  <p>Admin access • Joined 2024</p>
                  <p className="text-muted-foreground">
                    Responsible for monitoring cross-region replication status.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="hover-card" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"`}</CodeSnippet>

      <CodeSnippet>{`<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>Preview content</HoverCardContent>
</HoverCard>`}</CodeSnippet>
    </div>
  )
}
