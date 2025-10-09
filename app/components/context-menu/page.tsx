import { Button } from "@/registry/new-york/ui/button"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/registry/new-york/ui/context-menu"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/context-menu"

export default function ContextMenuPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Context Menu</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Right-click menu with the same glass styling as dropdowns and popovers.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Context menu component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Workspace actions
            </CardTitle>
            <CardDescription>
              Uses the same glass dropdown surface for contextual actions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <Button variant="muted">Right click me</Button>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuLabel>Session</ContextMenuLabel>
                <ContextMenuItem>Launch console</ContextMenuItem>
                <ContextMenuItem>Open docs</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuLabel>Theme</ContextMenuLabel>
                <ContextMenuRadioGroup value="dark">
                  <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                  Lock deployment
                  <ContextMenuShortcut>⇧⌘L</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="context-menu" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"`}</CodeSnippet>

      <CodeSnippet>{`<ContextMenu>
  <ContextMenuTrigger>Open</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Launch console</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</CodeSnippet>
    </div>
  )
}
