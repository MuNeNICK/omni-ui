import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/new-york/ui/navigation-menu"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/navigation-menu"

export default function NavigationMenuPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Navigation Menu</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Mega-menu navigation with uppercase triggers and frosted dropdown panels
        consistent with the registry&apos;s overlay language.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Product nav
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Platform switcher
            </CardTitle>
            <CardDescription>
              Dropdown sheet inherits the same square borders as cards and
              drawers.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>PRODUCTS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-3 sm:w-[480px] sm:grid-cols-2">
                      <NavigationMenuLink className="border border-border/60 bg-muted/40 p-3">
                        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground">
                          Control Plane
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          Manage clusters, roll out deployments, and inspect
                          environment health.
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="border border-border/60 bg-muted/40 p-3">
                        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground">
                          Observability
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          Dashboards, alert routing, and log tailing across all
                          services.
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>DOCS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-3 sm:w-[320px]">
                      <NavigationMenuLink className="border border-border/60 bg-muted/40 p-3">
                        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground">
                          API Reference
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          REST, GraphQL, and CLI endpoints for the Omni platform.
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="border border-border/60 bg-muted/40 p-3">
                        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground">
                          Guides
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          Migration playbooks and best practices for operators.
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="navigation-menu" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"`}</CodeSnippet>

      <CodeSnippet>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>PRODUCTS</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Control Plane</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</CodeSnippet>
    </div>
  )
}
