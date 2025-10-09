import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/tabs"

export default function TabsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Tabs</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Uppercase tab triggers using the flat, glass border system. Great for
        switching between sections inside cards or dashboards.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Tabs component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Overview Tabs
            </CardTitle>
            <CardDescription>
              Tabs sit directly on the same surface as cards for a seamless look.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Tabs defaultValue="usage" className="w-full">
              <TabsList>
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="latency">Latency</TabsTrigger>
                <TabsTrigger value="errors">Errors</TabsTrigger>
              </TabsList>
              <div className="border border-border/60 bg-muted/40 p-4">
                <TabsContent value="usage">
                  <p className="text-sm text-muted-foreground">
                    Requests over the last 24 hours peaked at 1.2M/min.
                  </p>
                </TabsContent>
                <TabsContent value="latency">
                  <p className="text-sm text-muted-foreground">
                    Median latency sits at 128ms across all regions.
                  </p>
                </TabsContent>
                <TabsContent value="errors">
                  <p className="text-sm text-muted-foreground">
                    Error rate remains below 0.08% with automated retries.
                  </p>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="tabs" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`}</CodeSnippet>

      <CodeSnippet>{`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="metrics">Metrics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview panel</TabsContent>
</Tabs>`}</CodeSnippet>
    </div>
  )
}
