import { Label } from "@/registry/new-york/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/select @omni/label"

export default function SelectPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Select</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Dropdown menu styled with the same square surface as inputs, plus
        uppercase grouping labels for long lists.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Select component</h2>
        </div>

        <div className="grid gap-4">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Region Picker
              </CardTitle>
              <CardDescription>
                Square trigger and flat dropdown to match the PoC form system.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Label htmlFor="region">Region</Label>
              <Select defaultValue="tokyo">
                <SelectTrigger id="region" className="min-w-[220px]">
                  <SelectValue placeholder="Select a region" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectLabel>Asia Pacific</SelectLabel>
                    <SelectItem value="tokyo">Tokyo</SelectItem>
                    <SelectItem value="osaka">Osaka</SelectItem>
                    <SelectItem value="singapore" disabled>
                      Singapore (coming soon)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="oregon">Oregon</SelectItem>
                    <SelectItem value="virginia">Virginia</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="select" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`}</CodeSnippet>

      <CodeSnippet>{`<Select defaultValue="tokyo">
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Select a region" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="tokyo">Tokyo</SelectItem>
    <SelectItem value="osaka">Osaka</SelectItem>
  </SelectContent>
</Select>`}</CodeSnippet>
    </div>
  )
}
