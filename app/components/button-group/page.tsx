import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/registry/new-york/ui/button-group"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/button-group"

export default function ButtonGroupPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Button Group</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Glass wrapper that keeps related actions aligned. Mix buttons, text
        segments, and separators to form compact toolbars or segmented controls.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Toolbar examples
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Deployment Controls
            </CardTitle>
            <CardDescription>
              Combine ghost buttons with separators for a compact command strip.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Button variant="ghost">Deploy</Button>
                <ButtonGroupSeparator />
                <Button variant="ghost">Preview</Button>
                <ButtonGroupSeparator />
                <Button variant="ghost">Promote</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="muted">Pause</Button>
                <ButtonGroupSeparator />
                <Button variant="muted">Resume</Button>
              </ButtonGroup>
            </div>

            <div className="flex flex-wrap items-start gap-6">
              <ButtonGroup orientation="vertical" className="min-w-[180px]">
                <ButtonGroupText className="justify-between text-[9px] tracking-[0.36em]">
                  REGION
                </ButtonGroupText>
                <Button variant="ghost" className="justify-between text-[10px] tracking-[0.28em]">
                  Tokyo <span className="text-muted-foreground">JP-1</span>
                </Button>
                <ButtonGroupSeparator orientation="horizontal" />
                <Button variant="ghost" className="justify-between text-[10px] tracking-[0.28em]">
                  Singapore <span className="text-muted-foreground">SG-1</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup>
                <ButtonGroupText>VIEW</ButtonGroupText>
                <Button variant="ghost">List</Button>
                <ButtonGroupSeparator />
                <Button variant="ghost">Board</Button>
                <ButtonGroupSeparator />
                <Button variant="ghost">Graph</Button>
              </ButtonGroup>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="button-group" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"`}</CodeSnippet>

      <CodeSnippet>{`<ButtonGroup>
  <Button variant="ghost">Deploy</Button>
  <ButtonGroupSeparator />
  <Button variant="ghost">Preview</Button>
  <ButtonGroupSeparator />
  <Button variant="ghost">Promote</Button>
</ButtonGroup>`}</CodeSnippet>
    </div>
  )
}
