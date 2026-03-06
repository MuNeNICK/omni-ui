import { splitProps, Show, type ParentProps, type JSX, type ValidComponent } from "solid-js"
import type { ContentProps, DescriptionProps, DynamicProps, LabelProps, OverlayProps } from "@corvu/drawer"
import DrawerPrimitive from "@corvu/drawer"

import { cn } from "@/registry/solid/lib/utils"

const Drawer = DrawerPrimitive
const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerPortal = DrawerPrimitive.Portal
const DrawerClose = DrawerPrimitive.Close

type DrawerOverlayProps<T extends ValidComponent = "div"> = OverlayProps<T> & {
  class?: string
}

const DrawerOverlay = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerOverlayProps<T>>
) => {
  const [, rest] = splitProps(props as DrawerOverlayProps, ["class"])
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-background/70 backdrop-blur-md data-[transitioning]:transition-opacity data-[transitioning]:duration-300",
        props.class
      )}
      {...rest}
    />
  )
}

type DrawerContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
  class?: string
  children?: JSX.Element
}

const DrawerContent = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerContentProps<T>>
) => {
  const [, rest] = splitProps(props as DrawerContentProps, ["class", "children"])
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        class={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col border border-border/60 bg-muted/60 text-foreground shadow-[var(--glass-shadow-outline-strong)] backdrop-blur-[8px] after:absolute after:inset-x-0 after:top-full after:h-1/2 after:bg-inherit data-[transitioning]:transition-transform data-[transitioning]:duration-300 md:select-none",
          "rounded-none",
          props.class
        )}
        {...rest}
      >
        <div class="mx-auto mt-4 hidden h-1.5 w-28 bg-foreground/20 sm:block" />
        {props.children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader(props: ParentProps<{ class?: string } & JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="drawer-header"
      class={cn("flex flex-col gap-2 border-b border-border/60 p-4", local.class)}
      {...rest}
    />
  )
}

function DrawerFooter(props: ParentProps<{ class?: string } & JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="drawer-footer"
      class={cn("mt-auto flex flex-col gap-2 border-t border-border/60 p-4", local.class)}
      {...rest}
    />
  )
}

type DrawerTitleProps<T extends ValidComponent = "div"> = LabelProps<T> & {
  class?: string
}

const DrawerTitle = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerTitleProps<T>>
) => {
  const [, rest] = splitProps(props as DrawerTitleProps, ["class"])
  return (
    <DrawerPrimitive.Label
      data-slot="drawer-title"
      class={cn("font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground", props.class)}
      {...rest}
    />
  )
}

type DrawerDescriptionProps<T extends ValidComponent = "div"> = DescriptionProps<T> & {
  class?: string
}

const DrawerDescription = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerDescriptionProps<T>>
) => {
  const [, rest] = splitProps(props as DrawerDescriptionProps, ["class"])
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      class={cn("text-sm text-foreground/80", props.class)}
      {...rest}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
