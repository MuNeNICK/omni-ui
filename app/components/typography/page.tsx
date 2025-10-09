import {
  TypographyBody,
  TypographyBodyMuted,
  TypographyCaption,
  TypographyDisplay,
  TypographyEyebrow,
  TypographyLabel,
  TypographyMetric,
  TypographyMono,
  TypographySubtitle,
  TypographyTitle,
} from "@/registry/new-york/ui/typography"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/typography"

export default function TypographyPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Typography</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Utility components that codify the Omni mono-uppercase system—display
        headlines, eyebrows, body copy, and metric styling with a consistent
        glass-era tone.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Tone & hierarchy
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Dashboard hero
            </CardTitle>
            <CardDescription>
              Combine eyebrows, display headings, and body copy to mirror the
              cloud console landing view.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <TypographyEyebrow>STATUS</TypographyEyebrow>
            <TypographyDisplay>
              Control Plane Deployment Overview
            </TypographyDisplay>
            <TypographySubtitle>
              Edge fleet, workload health, and compliance snapshots in one
              uppercase viewport.
            </TypographySubtitle>
            <TypographyBodyMuted>
              {""}Latency and error rates mirror the alerting thresholds defined
              in the platform guardrails. Use the label and caption variants to
              annotate aux metrics or timestamps.
            </TypographyBodyMuted>
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Metrics deck
            </CardTitle>
            <CardDescription>
              Mix metric, mono, caption, and label components for dense telemetry
              cards.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1">
              <TypographyLabel>Requests</TypographyLabel>
              <TypographyMetric>87.2k</TypographyMetric>
              <TypographyCaption>+12.4% vs. previous week</TypographyCaption>
            </div>
            <div className="space-y-1">
              <TypographyLabel>Latency (P95)</TypographyLabel>
              <TypographyMetric>162 ms</TypographyMetric>
              <TypographyCaption className="text-destructive">
                +28 ms variance
              </TypographyCaption>
            </div>
            <div className="space-y-1">
              <TypographyLabel>Error rate</TypographyLabel>
              <TypographyMetric>0.14%</TypographyMetric>
              <TypographyMono className="text-muted-foreground/70">
                24 incidents resolved
              </TypographyMono>
            </div>
            <div className="space-y-1">
              <TypographyLabel>Feature flag</TypographyLabel>
              <TypographyTitle>Edge cache rewrite</TypographyTitle>
              <TypographyBody>
                Rollout is limited to 35% of requests while regional soak tests
                complete.
              </TypographyBody>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="typography" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  TypographyDisplay,
  TypographyEyebrow,
  TypographySubtitle,
  TypographyBody,
} from "@/components/ui/typography"

export function Hero() {
  return (
    <div className="space-y-3">
      <TypographyEyebrow>STATUS</TypographyEyebrow>
      <TypographyDisplay>Omni Cloud Control Plane</TypographyDisplay>
      <TypographySubtitle>
        Fleet telemetry and incident response dashboard.
      </TypographySubtitle>
      <TypographyBody>
        Stay ahead of SLO drift with live metrics and automated guardrails.
      </TypographyBody>
    </div>
  )
}`}</CodeSnippet>
    </div>
  )
}
