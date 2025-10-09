import Link from "next/link"

export default function ComponentsHomePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Components</h1>
      <p className="text-muted-foreground">
        Explore the Omni UI component library. Each page showcases the Omni-styled
        registry implementation alongside installation and usage guidelines.
      </p>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        <li>
          <Link href="/components/avatar" className="text-primary underline">
            Avatar
          </Link>
        </li>
        <li>
          <Link href="/components/button" className="text-primary underline">
            Button
          </Link>
        </li>
        <li>
          <Link href="/components/button-group" className="text-primary underline">
            Button Group
          </Link>
        </li>
        <li>
          <Link href="/components/badge" className="text-primary underline">
            Badge
          </Link>
        </li>
        <li>
          <Link href="/components/card" className="text-primary underline">
            Card
          </Link>
        </li>
        <li>
          <Link href="/components/input-group" className="text-primary underline">
            Input Group
          </Link>
        </li>
        <li>
          <Link href="/components/input" className="text-primary underline">
            Input
          </Link>
        </li>
        <li>
          <Link href="/components/label" className="text-primary underline">
            Label
          </Link>
        </li>
        <li>
          <Link href="/components/textarea" className="text-primary underline">
            Textarea
          </Link>
        </li>
        <li>
          <Link href="/components/separator" className="text-primary underline">
            Separator
          </Link>
        </li>
        <li>
          <Link href="/components/checkbox" className="text-primary underline">
            Checkbox
          </Link>
        </li>
        <li>
          <Link href="/components/command" className="text-primary underline">
            Command
          </Link>
        </li>
        <li>
          <Link href="/components/context-menu" className="text-primary underline">
            Context Menu
          </Link>
        </li>
        <li>
          <Link href="/components/radio-group" className="text-primary underline">
            Radio Group
          </Link>
        </li>
        <li>
          <Link href="/components/select" className="text-primary underline">
            Select
          </Link>
        </li>
        <li>
          <Link href="/components/dropdown-menu" className="text-primary underline">
            Dropdown Menu
          </Link>
        </li>
        <li>
          <Link href="/components/empty" className="text-primary underline">
            Empty
          </Link>
        </li>
        <li>
          <Link href="/components/tabs" className="text-primary underline">
            Tabs
          </Link>
        </li>
        <li>
          <Link href="/components/toggle" className="text-primary underline">
            Toggle
          </Link>
        </li>
        <li>
          <Link href="/components/toggle-group" className="text-primary underline">
            Toggle Group
          </Link>
        </li>
        <li>
          <Link href="/components/tooltip" className="text-primary underline">
            Tooltip
          </Link>
        </li>
        <li>
          <Link href="/components/skeleton" className="text-primary underline">
            Skeleton
          </Link>
        </li>
        <li>
          <Link href="/components/popover" className="text-primary underline">
            Popover
          </Link>
        </li>
        <li>
          <Link href="/components/hover-card" className="text-primary underline">
            Hover Card
          </Link>
        </li>
        <li>
          <Link href="/components/dialog" className="text-primary underline">
            Dialog
          </Link>
        </li>
        <li>
          <Link href="/components/drawer" className="text-primary underline">
            Drawer
          </Link>
        </li>
        <li>
          <Link href="/components/sheet" className="text-primary underline">
            Sheet
          </Link>
        </li>
        <li>
          <Link href="/components/switch" className="text-primary underline">
            Switch
          </Link>
        </li>
        <li>
          <Link href="/components/slider" className="text-primary underline">
            Slider
          </Link>
        </li>
      </ul>
    </div>
  )
}
