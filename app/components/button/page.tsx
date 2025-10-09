import { ArrowRight } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Separator } from "@/components/ui/separator"

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Button</h1>
        <CopyCommandButton
          command="pnpm dlx shadcn@latest add @omni/button"
          copyCommand="pnpm dlx shadcn@latest add @omni/button"
        />
      </div>

      <p className="text-muted-foreground">
        Sharp, uppercase button system used across the Omni Cloud dashboard PoC.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Button component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="button" className="w-fit" />
          </div>
        </div>
        <div className="relative flex min-h-[400px] items-center justify-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Variants
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="muted">Muted</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Sizes
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Icon button">
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="icon-sm" aria-label="Icon button small">
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="icon-lg" aria-label="Icon button large">
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                asChild
              </p>
              <Button asChild variant="link">
                <a href="https://example.com" target="_blank" rel="noreferrer">
                  External Link
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />

      <InstallationCommands packageName="button" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />

      <CodeSnippet>{`import { Button } from "@/components/ui/button"`}</CodeSnippet>

      <CodeSnippet>{`<Button variant="outline" size="lg">Launch Console</Button>
<Button asChild variant="link">
  <a href="/docs/button">View docs</a>
</Button>`}</CodeSnippet>
    </div>
  )
}
