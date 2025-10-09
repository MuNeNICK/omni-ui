import { Separator } from "@/registry/new-york/ui/separator"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"

export default function SeparatorPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Separator</h1>
        <CopyCommandButton
          command="pnpm dlx shadcn@latest add @omni/separator"
          copyCommand="pnpm dlx shadcn@latest add @omni/separator"
        />
      </div>

      <p className="text-muted-foreground">
        Lightweight divider that separates groups of content horizontally or
        vertically.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Horizontal
            </h2>
            <div className="space-y-2 rounded-lg border px-6 py-4">
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Section Label
              </div>
              <Separator />
              <p className="text-sm text-muted-foreground">
                Use the separator to create visual breathing room between
                related blocks of content.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Vertical
            </h2>
            <div className="flex h-20 items-stretch justify-center gap-6 rounded-lg border px-6 py-6">
              <span className="flex items-center font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Item
              </span>
              <Separator orientation="vertical" />
              <span className="flex items-center font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Item
              </span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="separator" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Separator } from "@/components/ui/separator"`}</CodeSnippet>
      <CodeSnippet>{`<Separator className="my-6" />`}</CodeSnippet>
    </div>
  )
}
