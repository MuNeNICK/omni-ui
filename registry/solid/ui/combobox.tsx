import { splitProps, type ParentProps, type JSX, Show } from "solid-js"
import * as ComboboxPrimitive from "@kobalte/core/combobox"
import { CheckIcon, ChevronsUpDownIcon, SearchIcon } from "lucide-solid"
import { cn } from "@/registry/solid/lib/utils"

function Combobox(props: any) {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />
}

function ComboboxTrigger(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class", "children"])
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      class={cn(
        "inline-flex w-fit items-center justify-between gap-2 border border-border/60 bg-muted/60 px-3 text-[11px] font-mono uppercase tracking-[0.28em] text-foreground/85 shadow-[var(--glass-shadow-outline)] transition-[border,background,color,box-shadow] outline-none",
        "focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[placeholder]:text-muted-foreground/70",
        "h-10 min-w-[10rem]",
        "rounded-none",
        local.class
      )}
      {...rest}
    >
      {local.children}
      <ComboboxPrimitive.Icon>
        <ChevronsUpDownIcon class="size-3.5 shrink-0 opacity-60" />
      </ComboboxPrimitive.Icon>
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxContent(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Content
        data-slot="combobox-content"
        class={cn(
          "relative z-50 max-h-[var(--kb-popper-content-available-height)] min-w-[12rem] origin-[var(--kb-combobox-content-transform-origin)] overflow-hidden border border-border/60 bg-muted/60 text-foreground shadow-[var(--glass-shadow-outline)] backdrop-blur-[6px]",
          "data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
          "rounded-none",
          local.class
        )}
        {...rest}
      >
        <ComboboxPrimitive.Listbox class="p-1" />
      </ComboboxPrimitive.Content>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxControl(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Control
      data-slot="combobox-control"
      class={cn("flex items-center", local.class)}
      {...rest}
    />
  )
}

function ComboboxInput(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      class={cn(
        "flex h-10 w-full border border-border/60 bg-muted/40 px-3 py-2 text-sm text-foreground/90 shadow-[var(--glass-shadow-inset)] transition-[border,background,color,box-shadow] outline-none placeholder:text-muted-foreground/70 disabled:cursor-not-allowed disabled:opacity-50 rounded-none",
        "focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        local.class
      )}
      {...rest}
    />
  )
}

function ComboboxSearch(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="combobox-search"
      class={cn("flex items-center gap-2 border-b border-border/60 px-3", local.class)}
    >
      <SearchIcon class="size-4 shrink-0 opacity-50" />
      <ComboboxPrimitive.Input
        class="flex h-12 w-full bg-transparent py-3 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/75 outline-none placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:opacity-50"
        {...rest}
      />
    </div>
  )
}

function ComboboxList(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Listbox
      data-slot="combobox-list"
      class={cn("max-h-60 scroll-py-1 overflow-y-auto overflow-x-hidden p-1", local.class)}
      {...rest}
    />
  )
}

function ComboboxEmpty(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="combobox-empty"
      class={cn("py-6 text-center text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground/70", local.class)}
      {...rest}
    />
  )
}

function ComboboxGroup(props: ParentProps<{ class?: string } & JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="combobox-group"
      role="group"
      class={cn("overflow-hidden p-1 text-foreground", local.class)}
      {...rest}
    />
  )
}

function ComboboxGroupLabel(props: ParentProps<{ class?: string } & JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="combobox-group-label"
      class={cn(
        "px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70",
        local.class
      )}
      {...rest}
    />
  )
}

function ComboboxSeparator(props: ParentProps<{ class?: string } & JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      data-slot="combobox-separator"
      role="separator"
      class={cn(
        "pointer-events-none -mx-1 my-1 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent",
        local.class
      )}
      {...rest}
    />
  )
}

function ComboboxItem(props: ParentProps<{ class?: string; [key: string]: any }>) {
  const [local, rest] = splitProps(props, ["class", "children"])
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      class={cn(
        "relative flex w-full cursor-default items-center gap-3 px-3 py-2 text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground/90 outline-hidden select-none transition-[background,color]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
        "hover:bg-foreground hover:text-background",
        "data-[highlighted]:bg-foreground data-[highlighted]:text-background",
        "data-[selected]:bg-foreground data-[selected]:text-background",
        "rounded-none",
        local.class
      )}
      {...rest}
    >
      <span class="absolute right-2 flex size-3.5 items-center justify-center">
        <ComboboxPrimitive.ItemIndicator>
          <CheckIcon class="size-4" />
        </ComboboxPrimitive.ItemIndicator>
      </span>
      <ComboboxPrimitive.ItemLabel>{local.children}</ComboboxPrimitive.ItemLabel>
    </ComboboxPrimitive.Item>
  )
}

export {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxSearch,
  ComboboxList,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxSeparator,
  ComboboxItem,
}
