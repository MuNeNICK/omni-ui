import { Label } from "@/registry/new-york/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/new-york/ui/radio-group"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/radio-group @omni/label"

export default function RadioGroupPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Radio Group</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Circular selectors tuned with the same flat border system. Works great
        for plan or region pickers in forms.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Radio group component</h2>
        </div>

        <div className="grid gap-4">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Data Residency
              </CardTitle>
              <CardDescription>
                Choose a primary region where workloads should be deployed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="tokyo" className="grid gap-3">
                <label className="flex items-center gap-3">
                  <RadioGroupItem value="tokyo" id="tokyo" />
                  <Label htmlFor="tokyo" className="m-0">
                    Tokyo (ap-tokyo-1)
                  </Label>
                </label>
                <label className="flex items-center gap-3">
                  <RadioGroupItem value="osaka" id="osaka" />
                  <Label htmlFor="osaka" className="m-0">
                    Osaka (ap-osaka-1)
                  </Label>
                </label>
                <label className="flex items-center gap-3 opacity-50">
                  <RadioGroupItem value="singapore" id="singapore" disabled />
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
                    Singapore (coming soon)
                  </span>
                </label>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="radio-group" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"`}</CodeSnippet>

      <CodeSnippet>{`<RadioGroup defaultValue="tokyo" className="grid gap-2">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="tokyo" id="tokyo" />
    <Label htmlFor="tokyo">Tokyo</Label>
  </div>
</RadioGroup>`}</CodeSnippet>
    </div>
  )
}
