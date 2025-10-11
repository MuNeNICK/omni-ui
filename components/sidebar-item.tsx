"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import type { ComponentStatus } from "@/lib/component-status"
import { COMPONENT_STATUS_META } from "@/lib/component-status"
import { cn } from "@/lib/utils"

type SidebarItemProps = {
  item: {
    title: string
    url: string
    status?: ComponentStatus
  }
}

export default function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === item.url
  const status = item.status && COMPONENT_STATUS_META[item.status]

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link href={item.url} className="flex items-center justify-between">
          <span>{item.title}</span>
          {status && (
            <Badge
              variant="outline"
              className={cn(
                "text-[10px] font-semibold uppercase tracking-wide",
                status.className
              )}
            >
              {status.label}
            </Badge>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
