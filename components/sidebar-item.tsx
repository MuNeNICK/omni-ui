"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

type Status = "done" | "wip" | "todo" | "unchanged"

type SidebarItemProps = {
  item: {
    title: string
    url: string
    status?: Status
  }
}

const STATUS_STYLES: Record<Status, { label: string; className: string }> = {
  done: {
    label: "Done",
    className: "border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:border-emerald-300/40 dark:bg-emerald-300/10 dark:text-emerald-200",
  },
  wip: {
    label: "In Progress",
    className:
      "border-amber-500/30 bg-amber-500/15 text-amber-600 dark:border-amber-300/40 dark:bg-amber-300/10 dark:text-amber-200",
  },
  todo: {
    label: "Todo",
    className:
      "border-border/60 bg-transparent text-muted-foreground dark:text-neutral-400",
  },
  unchanged: {
    label: "No Change",
    className:
      "border-slate-500/30 bg-transparent text-muted-foreground dark:text-slate-300",
  },
}

export default function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === item.url
  const status = item.status && STATUS_STYLES[item.status]

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
