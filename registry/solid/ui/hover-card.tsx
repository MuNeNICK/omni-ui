import { splitProps, type ParentProps } from "solid-js"
import * as HoverCardPrimitive from "@kobalte/core/hover-card"
import { cn } from "@/registry/solid/lib/utils"

function HoverCard(props: ParentProps<{ [key: string]: any }>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger(props: ParentProps<{ [key: string]: any }>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        class={cn(
          "relative z-50 w-64 border border-border/60 bg-muted/60 px-4 py-4 text-foreground shadow-[var(--glass-shadow-outline)] backdrop-blur-[6px]",
          "data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95 data-[closed]:animate-out data-[closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "rounded-none outline-hidden",
          local.class
        )}
        {...rest}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
