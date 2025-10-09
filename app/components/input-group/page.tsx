import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/new-york/ui/input-group"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/input-group"

export default function InputGroupPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Input Group</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Combine inputs, buttons, and status labels inside a frosted frame. Perfect
        for search bars, segmented filters, and command strips in the Omni Cloud
        console.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Examples</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Search & Filters
            </CardTitle>
            <CardDescription>
              Text addons and ghost actions stay flush with the glass surface.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <InputGroup>
              <InputGroupAddon>SEARCH</InputGroupAddon>
              <InputGroupInput placeholder="Find services" />
              <InputGroupButton variant="ghost" size="icon-sm">
                <span className="sr-only">Run search</span>
                <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
                  <path
                    d="m21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </InputGroupButton>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon align="inline-start">OWNER</InputGroupAddon>
              <InputGroupInput placeholder="team@omni.dev" />
              <InputGroupAddon align="inline-end" className="gap-1">
                <Badge variant="outline">SRE</Badge>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupText>https://</InputGroupText>
              <InputGroupInput placeholder="cloud.omni.dev" />
              <InputGroupButton size="xs">Copy</InputGroupButton>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon align="block-start">NOTES</InputGroupAddon>
              <InputGroupTextarea placeholder="Add runbook context" rows={4} />
              <InputGroupAddon align="block-end">
                <Button variant="ghost" className="px-3 text-[10px] tracking-[0.32em]">
                  Attach
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="input-group" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"`}</CodeSnippet>

      <CodeSnippet>{`<InputGroup>
  <InputGroupAddon>SEARCH</InputGroupAddon>
  <InputGroupInput placeholder="Find services" />
  <InputGroupButton size="icon-sm" variant="ghost">
    <SearchIcon className="size-4" />
  </InputGroupButton>
</InputGroup>`}</CodeSnippet>
    </div>
  )
}
