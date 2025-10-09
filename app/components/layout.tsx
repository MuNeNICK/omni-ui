import type { ReactNode } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/app-sidebar"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="relative flex gap-4 p-4">
      <SidebarProvider className="hidden w-max md:block">
        <AppSidebar className="absolute left-0 top-0" />
        <SidebarTrigger className="md:hidden" />
      </SidebarProvider>
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-4">
        <div className="mb-6 flex justify-end">
          <ThemeToggle />
        </div>
        {children}
      </div>
    </main>
  )
}
