import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york/ui/accordion"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/accordion"

export default function AccordionPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Accordion</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Glass disclosure list with uppercase triggers. Perfect for status panels
        and feature breakdowns inside the Omni dashboard.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Accordion component
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Release Notes
            </CardTitle>
            <CardDescription>
              Each section expands into a frosted panel with the same mono
              typography used across the control plane.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              className="max-w-xl"
              defaultValue="observability"
            >
              <AccordionItem value="deployments">
                <AccordionTrigger>DEPLOYMENTS</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>
                      Rollouts now default to progressive traffic shifting. You
                      can still opt into immediate cutovers from the CLI.
                    </p>
                    <p className="text-muted-foreground">
                      Surge usage is surfaced in the instances table with
                      realtime deltas.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="observability">
                <AccordionTrigger>OBSERVABILITY</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>
                      Metrics explorer gains latency histograms and exportable
                      alert templates.
                    </p>
                    <p className="text-muted-foreground">
                      Webhooks integrate directly with PagerDuty and Opsgenie.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="security">
                <AccordionTrigger>SECURITY</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>
                      SSO groups can now be mapped to workspace roles with
                      fine-grained permissions.
                    </p>
                    <p className="text-muted-foreground">
                      Session duration limits can be configured per environment.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="accordion" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"`}</CodeSnippet>

      <CodeSnippet>{`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>DEPLOYMENTS</AccordionTrigger>
    <AccordionContent>
      Rollouts default to progressive traffic shifting.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeSnippet>
    </div>
  )
}
