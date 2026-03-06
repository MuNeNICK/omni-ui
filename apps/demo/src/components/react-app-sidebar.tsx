import { components } from "../lib/components"
import { COMPONENT_STATUS_META } from "@/lib/component-status"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  framework: "react" | "solid"
  currentPath: string
}

export function AppSidebar({ framework, currentPath, ...props }: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="bg-background px-4">
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {components.map((item) => {
                const url = `/${framework}/${item.name}`
                const isActive = currentPath === url || currentPath === `${url}/`
                const statusMeta = COMPONENT_STATUS_META[item.status]

                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a href={url} className="flex items-center justify-between">
                        <span>{item.title}</span>
                        {statusMeta && (
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[10px] font-semibold uppercase tracking-wide",
                              statusMeta.className
                            )}
                          >
                            {statusMeta.label}
                          </Badge>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
