import { Kbd, KbdGroup } from "@/registry/new-york/ui/kbd"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/kbd"

export default function KbdPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Keyboard</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Monospaced, minimal keycaps that rely on the same border palette as the
        rest of the Omni command surfaces.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Shortcut hints
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Command palette
            </CardTitle>
            <CardDescription>
              Keycaps keep the zero-radius border and glass-like inset shadow.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <KbdGroup>
              <Kbd>CTRL</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
            <KbdGroup>
              <Kbd>SHIFT</Kbd>
              <Kbd>ALT</Kbd>
              <Kbd>F</Kbd>
            </KbdGroup>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="kbd" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Kbd, KbdGroup } from "@/components/ui/kbd"`}</CodeSnippet>

      <CodeSnippet>{`<KbdGroup>
  <Kbd>CTRL</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}</CodeSnippet>
    </div>
  )
}
