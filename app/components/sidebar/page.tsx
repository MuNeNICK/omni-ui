"use client"

import { useState } from "react"
import { CheckCircle2, LayoutDashboard, Shield, Zap } from "lucide-react"

import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/registry/new-york/ui/sidebar"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/sidebar @omni/button @omni/badge"

export default function SidebarPage() {
  const [active, setActive] = useState("overview")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Sidebar</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Navigation shell with squared rails, uppercase labels, and an off-canvas
        mobile experience—all tuned to the Omni glass treatment.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Interactive demo</h2>
        </div>

        <div className="overflow-hidden rounded-none border border-border/70">
          <SidebarProvider defaultOpen className="relative flex min-h-[360px]">
            <Sidebar className="bg-muted/20">
              <SidebarHeader className="gap-4">
                <SidebarInput placeholder="Search services" />
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Overview</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        onClick={() => setActive("overview")}
                        isActive={active === "overview"}
                      >
                        <LayoutDashboard className="size-4" />
                        Control plane
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        onClick={() => setActive("security")}
                        isActive={active === "security"}
                      >
                        <Shield className="size-4" />
                        Security
                        <SidebarMenuBadge>2</SidebarMenuBadge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                  <SidebarGroupLabel>Automation</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        onClick={() => setActive("workflows")}
                        isActive={active === "workflows"}
                      >
                        <Zap className="size-4" />
                        Workflows
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuSkeleton />
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <CheckCircle2 className="size-4" />
                  Launch checks
                </Button>
              </SidebarFooter>
              <SidebarRail />
            </Sidebar>
            <SidebarInset className="flex-1 bg-background/40 p-6">
              <div className="flex items-center justify-between">
                <SidebarTrigger />
                <Badge variant="outline" className="tracking-[0.32em] uppercase">
                  {active}
                </Badge>
              </div>
              <Card className="mt-6 border-border/70">
                <CardHeader>
                  <CardTitle className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
                    {active === "overview" ? "Control plane" : active === "security" ? "Security posture" : "Workflow automations"}
                  </CardTitle>
                  <CardDescription>
                    Content area demonstrates how the inset pairs with the sidebar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  This panel inherits the frosted backdrop while the sidebar keeps
                  its glass rail and uppercase markers.
                </CardContent>
              </Card>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="sidebar" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"

<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuButton>Overview</SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>Content area</SidebarInset>
</SidebarProvider>`}</CodeSnippet>
    </div>
  )
}
