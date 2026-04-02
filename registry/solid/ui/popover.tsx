import { splitProps, type ComponentProps } from "solid-js"
import * as PopoverPrimitive from "@kobalte/core/popover"
import { cn } from "@/registry/solid/lib/utils"

function Popover(props: ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger(props: ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent(props: ComponentProps<typeof PopoverPrimitive.Content>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        class={cn(
          "relative z-50 w-72 border border-border/60 bg-muted/60 px-4 py-4 text-foreground shadow-[var(--glass-shadow-outline)] backdrop-blur-[6px]",
          "data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95 data-[closed]:animate-out data-[closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "rounded-none outline-hidden",
          local.class
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor(props: ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
