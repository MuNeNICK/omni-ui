import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { Button } from "@/registry/new-york/ui/button"
import { Badge } from "@/registry/new-york/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function CardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Card</h1>
        <CopyCommandButton
          command="pnpm dlx shadcn@latest add @omni/card"
          copyCommand="pnpm dlx shadcn@latest add @omni/card"
        />
      </div>

      <p className="text-muted-foreground">
        Structured container with header, content, and footer slots tailored for
        the Omni Cloud dashboard layout.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Card component</h2>
        </div>

        <Card className="divide-y divide-border">
          <CardHeader>
            <div>
              <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-card-foreground/80 dark:text-card-foreground/70">
                Usage
              </CardTitle>
              <CardDescription className="mt-2 text-base text-card-foreground">
                Daily Active Sessions
              </CardDescription>
            </div>
            <CardAction>
              <Badge variant="outline">Live</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <span className="text-4xl font-semibold tracking-tight text-card-foreground">
                  3,482
                </span>
                <p className="text-sm text-muted-foreground">
                  +12.4% vs previous cycle
                </p>
              </div>
              <Button size="sm">View report</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-mono uppercase tracking-[0.28em] text-card-foreground/70">
                Next update
              </span>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <span className="text-muted-foreground">In 15 minutes</span>
            </div>
          </CardFooter>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="card" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"`}</CodeSnippet>
      <CodeSnippet>{`<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <p>Card content</p>\n  </CardContent>\n</Card>`}</CodeSnippet>
    </div>
  )
}
