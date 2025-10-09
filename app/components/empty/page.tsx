import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/new-york/ui/empty"
import { Button } from "@/registry/new-york/ui/button"
import { Badge } from "@/registry/new-york/ui/badge"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/empty"

export default function EmptyPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Empty</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Frosted placeholder surface used when tables or dashboards have no data.
        Mono accents keep messaging consistent with the rest of the control pane.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Example</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
              No Deployments
            </CardTitle>
            <CardDescription>
              Mix media, title, description, and call-to-action to guide operators.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Empty className="p-6 md:p-12">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
                    <path
                      d="M5 5h14l-1.5 12.5a2 2 0 0 1-2 1.75H8.5a2 2 0 0 1-2-1.75L5 5Zm4 4h6M9 10v6m6-6v6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </EmptyMedia>
                <EmptyTitle>DEPLOYMENTS NOT FOUND</EmptyTitle>
                <EmptyDescription>
                  Connect a Git repository or trigger a pipeline to populate this
                  view.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button variant="ghost" className="tracking-[0.3em]">
                  Create Deployment
                </Button>
                <p className="text-xs text-muted-foreground">
                  Need help? Visit the <Badge>Runbook</Badge> or contact the SRE team.
                </p>
              </EmptyContent>
            </Empty>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="empty" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"`}</CodeSnippet>

      <CodeSnippet>{`<Empty className="p-6 md:p-12">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxIcon className="size-6" />
    </EmptyMedia>
    <EmptyTitle>NO MESSAGES</EmptyTitle>
    <EmptyDescription>
      Everything looks quiet. New alerts will appear here automatically.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button variant="ghost">Create Alert Rule</Button>
  </EmptyContent>
</Empty>`}</CodeSnippet>
    </div>
  )
}
