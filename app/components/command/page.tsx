"use client"

import * as React from "react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/new-york/ui/command"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/command"

export default function CommandPage() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Command</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Glass command palette with mono typography and uppercase shortcuts.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Command palette</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Palette demo
            </CardTitle>
            <CardDescription>
              Uses the glass dialog and mono command list styling from the PoC.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="muted" onClick={() => setOpen(true)}>
              Open palette
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <Command>
                <CommandInput placeholder="Search actions" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Session">
                    <CommandItem onSelect={() => setOpen(false)}>
                      Launch console
                      <CommandShortcut>⌘K</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => setOpen(false)}>
                      Open docs
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Workspaces">
                    <CommandItem onSelect={() => setOpen(false)}>
                      Tokyo region
                    </CommandItem>
                    <CommandItem onSelect={() => setOpen(false)}>
                      Sandbox
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CommandDialog>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="command" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Command,
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"`}</CodeSnippet>

      <CodeSnippet>{`const [open, setOpen] = React.useState(false)

<CommandDialog open={open} onOpenChange={setOpen}>
  <Command>
    <CommandInput placeholder="Search actions" />
    <CommandList>
      <CommandItem onSelect={() => setOpen(false)}>
        Launch console
      </CommandItem>
    </CommandList>
  </Command>
</CommandDialog>`}</CodeSnippet>
    </div>
  )
}
