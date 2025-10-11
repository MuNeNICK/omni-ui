import Link from "next/link"

import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Separator } from "@/registry/new-york/ui/separator"
import CodeSnippet from "@/components/code-snippet"
import { ThemeToggle } from "@/components/theme-toggle"

const steps = [
  {
    title: "Initialize shadcn/ui",
    description: "Start a project with shadcn tooling so Omni UI can plug into the familiar workflow.",
    code: `pnpm dlx shadcn@latest init`,
  },
  {
    title: "Register the Omni scope",
    description: "Tell the CLI where to fetch components by extending the generated components.json file.",
    code: `"registries": {
  "@omni": "https://munenick.github.io/omni-ui/r/{name}.json"
}`,
  },
  {
    title: "Install components",
    description: "Pull Omni-styled building blocks on demand. The CLI wires files into your project automatically.",
    code: `pnpm dlx shadcn@latest add @omni/button`,
  },
]

export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh max-w-4xl flex-col gap-10 px-6 py-16">
      <div className="flex justify-end"><ThemeToggle /></div>
      <section className="flex flex-col gap-6 text-balance">
        <Badge className="w-fit tracking-[0.32em]">omni ui registry</Badge>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Frosted dashboards, ready to drop in
          </h1>
          <p className="text-lg text-muted-foreground">
            Omni UI is a shadcn/ui fork with glass surfaces, mono typography, and tone-controlled color tokens.
            Wire the registry into your project and keep shipping.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link href="/components">
              <span className="relative z-10 tracking-[0.2em]">
                Browse components
              </span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="tracking-[0.28em]">
            <a href="https://github.com/MuNeNICK/omni-ui" target="_blank" rel="noreferrer">
              <span className="relative z-10 tracking-[0.2em]">
                View repository
              </span>
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Get started</h2>
          <p className="text-sm text-muted-foreground">
            Follow the steps below to point shadcn&apos;s CLI at the Omni registry. Each component on{" "}
            <Link href="/components" className="underline underline-offset-4">
              /components
            </Link>{" "}
            showcases the final output.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-border/60 bg-muted/30 backdrop-blur">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.32em] text-muted-foreground/80">
                  <span className="rounded-full border border-border/70 px-2 py-0.5">
                    Step {index + 1}
                  </span>
                  {step.title}
                </div>
                <CardTitle className="text-sm font-semibold tracking-tight">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeSnippet>{step.code}</CodeSnippet>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-4" />

      <section className="space-y-3 text-sm text-muted-foreground">
        <p>
          Omni UI keeps shadcn&apos;s project structure intact: custom variants live under{" "}
          <code className="rounded bg-muted px-1 py-[1px] text-xs">registry/new-york/ui</code> while reference
          implementations stay in <code className="rounded bg-muted px-1 py-[1px] text-xs">components/ui</code>. Use the
          CLI to pull the Omni versions and edit locally as needed.
        </p>
        <p>
          Ready to explore? Head to{" "}
          <Link href="/components" className="underline underline-offset-4">
            the component gallery
          </Link>{" "}
          to see every primitive in action.
        </p>
      </section>
    </main>
  )
}
