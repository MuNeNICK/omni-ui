import {
  ScrollArea,
  ScrollBar,
} from "@/registry/new-york/ui/scroll-area"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/scroll-area"

const regions = [
  "Tokyo",
  "Osaka",
  "Singapore",
  "Frankfurt",
  "Oregon",
  "Sydney",
  "Virginia",
  "Mumbai",
  "Jakarta",
  "London",
  "Seoul",
]

export default function ScrollAreaPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Scroll Area</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Frameless viewport with glass borders and custom rails that match the
        console&apos;s sharp chrome.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Region overview
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Active deployments
            </CardTitle>
            <CardDescription>
              Scrollbars mirror the muted metal rails used in other layout
              surfaces.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48 w-full">
              <ul className="flex flex-col gap-3 p-4 text-sm text-muted-foreground">
                {regions.map((region) => (
                  <li
                    key={region}
                    className="flex items-center justify-between border border-border/50 bg-muted/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80"
                  >
                    {region}
                    <span className="text-xs normal-case tracking-normal text-foreground/70">
                      12 services
                    </span>
                  </li>
                ))}
              </ul>
              <ScrollBar orientation="vertical" />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="scroll-area" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"`}</CodeSnippet>

      <CodeSnippet>{`<ScrollArea className="h-48 w-full">
  <div className="p-4">Content</div>
  <ScrollBar orientation="vertical" />
</ScrollArea>`}</CodeSnippet>
    </div>
  )
}
