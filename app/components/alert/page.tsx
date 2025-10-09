import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/registry/new-york/ui/alert"
import { Button } from "@/registry/new-york/ui/button"
import { CheckCheck, InfoIcon, TriangleAlert } from "lucide-react"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { Separator } from "@/components/ui/separator"

const installCommand = "pnpm dlx shadcn@latest add @omni/alert"

export default function AlertPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Alert</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Frosted notifications with uppercase mono titles. Great for surfacing
        incidents, warnings, or system wide broadcasts inside the console.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Alert variants</h2>
        </div>

        <div className="grid gap-4">
          <Alert>
            <InfoIcon />
            <AlertTitle>MAINTENANCE WINDOW</AlertTitle>
            <AlertDescription>
              Control plane upgrades start at 02:00 JST. Instances remain online;
              management APIs may respond slower for up to five minutes.
            </AlertDescription>
            <AlertActions>
              <Button variant="muted" size="sm">
                View status page
              </Button>
            </AlertActions>
          </Alert>

          <Alert variant="success">
            <CheckCheck />
            <AlertTitle>ROLLBACK COMPLETE</AlertTitle>
            <AlertDescription>
              Traffic is routed back to the stable build. All regions are serving
              requests without errors and latency is within SLO.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <TriangleAlert />
            <AlertTitle>QUOTA REACHED</AlertTitle>
            <AlertDescription>
              You are nearing the workspace secret limit. Delete unused secrets or
              request an increased quota to avoid deployment failures.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <TriangleAlert />
            <AlertTitle>INCIDENT</AlertTitle>
            <AlertDescription>
              Deployments in the Osaka region are paused while we investigate a
              networking regression. Subscribe for updates in the status center.
            </AlertDescription>
            <AlertActions>
              <Button variant="muted" size="sm">
                Subscribe updates
              </Button>
              <Button size="sm">Open status</Button>
            </AlertActions>
          </Alert>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="alert" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"`}</CodeSnippet>

      <CodeSnippet>{`<Alert variant="warning">
  <AlertTitle>QUOTA REACHED</AlertTitle>
  <AlertDescription>
    Workspace secrets are almost full. Reclaim space or request an increase.
  </AlertDescription>
  <AlertActions>
    <Button variant="muted" size="sm">
      Request increase
    </Button>
    <Button size="sm">Manage secrets</Button>
  </AlertActions>
</Alert>`}</CodeSnippet>
    </div>
  )
}
