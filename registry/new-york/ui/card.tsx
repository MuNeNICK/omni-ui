import * as React from "react"

import { cn } from "@/registry/new-york/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative rounded-none",
        "before:pointer-events-none before:absolute before:-inset-[1.5px] before:-z-10 before:block before:rounded-none before:bg-[image:var(--glass-gradient-card-light)] before:opacity-60",
        "after:pointer-events-none after:absolute after:-inset-[1.5px] after:-z-20 after:hidden after:rounded-none after:bg-[image:var(--glass-gradient-card-dark)] after:opacity-85 dark:after:block",
        "shadow-[var(--glass-shadow-card)]",
        "dark:shadow-[var(--glass-shadow-card-dark)]"
      )}
    >
      <div
        data-slot="card"
        className={cn(
          "relative flex flex-col gap-6 rounded-none border border-border/60 bg-card text-card-foreground",
          "shadow-[var(--glass-shadow-card-inner-light)]",
          "dark:border-[color:var(--glass-highlight-strong)] dark:bg-neutral-950 dark:shadow-[var(--glass-shadow-card-inner-dark)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 py-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] border-b border-border/70 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-card-foreground", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 py-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center justify-between gap-3 border-t border-border/70 px-6 py-4 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
