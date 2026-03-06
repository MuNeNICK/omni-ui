import { splitProps, type ParentProps } from "solid-js"
import * as AlertDialogPrimitive from "@kobalte/core/alert-dialog"
import { type VariantProps } from "class-variance-authority"
import { Button, buttonVariants } from "@/registry/solid/ui/button"
import { cn } from "@/registry/solid/lib/utils"

function AlertDialog(props: ParentProps<{ [key: string]: any }>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger(props: ParentProps<{ [key: string]: any }>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal(props: ParentProps<{ [key: string]: any }>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-background/70 backdrop-blur-md transition-opacity",
        "data-[expanded]:animate-in data-[expanded]:fade-in-0",
        "data-[closed]:animate-out data-[closed]:fade-out-0",
        local.class
      )}
      {...rest}
    />
  )
}

function AlertDialogContent(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class", "children"])
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        onInteractOutside={(e: Event) => e.preventDefault()}
        class={cn(
          "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-6 border border-border/60 bg-muted/60 px-6 py-6 text-foreground shadow-[var(--glass-shadow-outline-strong)] backdrop-blur-[8px]",
          "data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95",
          "data-[closed]:animate-out data-[closed]:zoom-out-95",
          "rounded-none",
          local.class
        )}
        {...rest}
      >
        {local.children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  )
}

function AlertDialogHeader(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="alert-dialog-header"
      class={cn("flex flex-col gap-3", local.class)}
      {...rest}
    />
  )
}

function AlertDialogFooter(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="alert-dialog-footer"
      class={cn(
        "flex flex-col gap-3 border-t border-border/60 pt-4 sm:flex-row sm:justify-end sm:gap-2",
        local.class
      )}
      {...rest}
    />
  )
}

function AlertDialogTitle(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      class={cn(
        "font-mono text-xs uppercase tracking-[0.36em] text-muted-foreground",
        local.class
      )}
      {...rest}
    />
  )
}

function AlertDialogDescription(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      class={cn("text-sm text-foreground/80 leading-relaxed", local.class)}
      {...rest}
    />
  )
}

type ButtonStyleProps = VariantProps<typeof buttonVariants>

function AlertDialogAction(props: ParentProps<{ class?: string; variant?: ButtonStyleProps["variant"]; size?: ButtonStyleProps["size"]; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class", "children", "variant", "size"])
  return (
    <AlertDialogPrimitive.CloseButton
      as={Button}
      variant={local.variant ?? "default"}
      size={local.size}
      class={cn(
        "border-destructive/60 text-destructive before:bg-destructive hover:border-destructive hover:bg-destructive hover:text-background focus-visible:ring-destructive/30",
        local.class
      )}
      {...rest}
    >
      {local.children}
    </AlertDialogPrimitive.CloseButton>
  )
}

function AlertDialogCancel(props: ParentProps<{ class?: string; variant?: ButtonStyleProps["variant"]; size?: ButtonStyleProps["size"]; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class", "children", "variant", "size"])
  return (
    <AlertDialogPrimitive.CloseButton
      as={Button}
      variant={local.variant ?? "muted"}
      size={local.size}
      class={cn(
        "hover:border-foreground hover:bg-muted/60 focus-visible:ring-ring/30",
        local.class
      )}
      {...rest}
    >
      {local.children}
    </AlertDialogPrimitive.CloseButton>
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
