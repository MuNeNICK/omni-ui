import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "./react-app-sidebar"

interface ComponentsLayoutProps {
  framework: "react" | "solid"
  currentPath: string
  children: React.ReactNode
}

export function ComponentsLayout({ framework, currentPath, children }: ComponentsLayoutProps) {
  return (
    <SidebarProvider defaultOpen className="min-h-svh bg-background">
      <AppSidebar
        framework={framework}
        currentPath={currentPath}
        className="top-16 h-[calc(100vh-4rem)] border-border/60 md:border-r"
      />
      <SidebarInset className="flex-1">
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-6">
          <div className="flex justify-start md:hidden">
            <SidebarTrigger size="icon" />
          </div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
