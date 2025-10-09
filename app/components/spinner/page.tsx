import { Spinner } from "@/registry/new-york/ui/spinner"
import { Button } from "@/registry/new-york/ui/button"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/spinner"

export default function SpinnerPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Spinner</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Lucide-based loader with softened foreground glow that pairs with the
        Omni glassmorphism surfaces.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Loading cues</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Button + inline states
            </CardTitle>
            <CardDescription>
              Spinners inherit the surrounding text color for easy integration in
              HUD elements.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            <Button disabled className="gap-2">
              <Spinner className="size-3.5" />
              DEPLOYING
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Spinner />
              <span>Fetching cluster metrics…</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="spinner" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Spinner } from "@/components/ui/spinner"`}</CodeSnippet>

      <CodeSnippet>{`<Button disabled>
  <Spinner className="mr-2" />
  Loading
</Button>`}</CodeSnippet>
    </div>
  )
}
