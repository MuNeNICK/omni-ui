import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { navItems } from "@/config/nav-items"
import { COMPONENT_STATUS_META } from "@/lib/component-status"
import { cn } from "@/lib/utils"

const componentsNav = navItems.navMain.find(
  (section) => section.title === "Components"
)

export default function ComponentsHomePage() {
  const items = componentsNav?.items ?? []

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Components</h1>
        <p className="text-muted-foreground">
          Explore the Omni UI component library. Each page showcases the
          Omni-styled registry implementation alongside installation and usage
          guidelines.
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => {
          const statusMeta =
            item.status && COMPONENT_STATUS_META[item.status]

          return (
            <Link
              key={item.url}
              href={item.url}
              className="flex items-center justify-between rounded-lg border border-border/80 bg-card/40 px-4 py-3 text-sm transition hover:border-primary/60 hover:bg-card/60"
            >
              <span className="font-medium text-foreground">{item.title}</span>
              {statusMeta ? (
                <Badge
                  variant="outline"
                  className={cn(
                    "text-[10px] font-semibold uppercase tracking-wide",
                    statusMeta.className
                  )}
                >
                  {statusMeta.label}
                </Badge>
              ) : null}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
