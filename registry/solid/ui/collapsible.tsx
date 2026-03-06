import { type ParentProps } from "solid-js"
import * as CollapsiblePrimitive from "@kobalte/core/collapsible"

function Collapsible(props: ParentProps<{ [key: string]: any }>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger(props: ParentProps<{ [key: string]: any }>) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent(props: ParentProps<{ [key: string]: any }>) {
  return (
    <CollapsiblePrimitive.Content
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
