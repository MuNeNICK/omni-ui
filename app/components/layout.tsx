import type { ReactNode } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen className="min-h-svh bg-background">
      <AppSidebar className="top-16 h-[calc(100vh-4rem)] border-border/60 md:border-r" />
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
