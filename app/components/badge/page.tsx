import { Badge } from "@/registry/new-york/ui/badge"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { Separator } from "@/components/ui/separator"

export default function BadgePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Badge</h1>
        <CopyCommandButton
          command="pnpm dlx shadcn@latest add @omni/badge"
          copyCommand="pnpm dlx shadcn@latest add @omni/badge"
        />
      </div>

      <p className="text-muted-foreground">
        Compact status labels used throughout the Omni Cloud dashboard to mark
        progress, contexts, or metadata.
      </p>

      <div className="flex flex-col gap-6 rounded-lg border p-6">
        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Variants
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Inline Usage
          </h2>
          <p className="text-sm text-muted-foreground">
            Use badges inline with typography to highlight live states or
            contextual tags. They follow the mono uppercase styling from the PoC
            while remaining subtle in light and dark themes.
          </p>
          <div className="flex flex-wrap items-center gap-2 rounded-lg border px-4 py-3 text-sm">
            <span className="font-mono text-xs uppercase tracking-[0.28em]">
              Deployment
            </span>
            <Badge variant="outline">Preview</Badge>
            <Badge>Active</Badge>
            <Badge variant="secondary">Synced</Badge>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="badge" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Badge } from "@/components/ui/badge"`}</CodeSnippet>
      <CodeSnippet>{`<Badge variant="secondary">New</Badge>`}</CodeSnippet>
    </div>
  )
}
