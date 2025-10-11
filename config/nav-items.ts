import type { ComponentStatus } from "@/lib/component-status"

type ComponentNavItem = {
  title: string
  status: ComponentStatus
  slug?: string
}

const toSlug = (title: string) =>
  title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")

const componentItems: ComponentNavItem[] = [
  { title: "Accordion", status: "done" },
  { title: "Alert", status: "done" },
  { title: "Alert Dialog", status: "done" },
  { title: "Aspect Ratio", status: "unchanged" },
  { title: "Avatar", status: "done" },
  { title: "Badge", status: "done" },
  { title: "Breadcrumb", status: "done" },
  { title: "Button", status: "done" },
  { title: "Button Group", status: "done" },
  { title: "Calendar", status: "unchanged" },
  { title: "Card", status: "done" },
  { title: "Carousel", status: "done" },
  { title: "Chart", status: "unchanged" },
  { title: "Checkbox", status: "done" },
  { title: "Collapsible", status: "unchanged" },
  { title: "Combobox", status: "done" },
  { title: "Command", status: "done" },
  { title: "Context Menu", status: "done" },
  { title: "Data Table", status: "done" },
  { title: "Date Picker", status: "done" },
  { title: "Dialog", status: "done" },
  { title: "Drawer", status: "done" },
  { title: "Dropdown Menu", status: "done" },
  { title: "Empty", status: "unchanged" },
  { title: "Field", status: "unchanged" },
  { title: "React Hook Form", status: "unchanged", slug: "react-hook-form" },
  { title: "Hover Card", status: "done" },
  { title: "Input", status: "done" },
  { title: "Input Group", status: "done" },
  { title: "Input OTP", status: "done", slug: "input-otp" },
  { title: "Item", status: "done" },
  { title: "Kbd", status: "done", slug: "kbd" },
  { title: "Label", status: "done" },
  { title: "Menubar", status: "done" },
  { title: "Navigation Menu", status: "done", slug: "navigation-menu" },
  { title: "Pagination", status: "done" },
  { title: "Popover", status: "done" },
  { title: "Progress", status: "done" },
  { title: "Radio Group", status: "done", slug: "radio-group" },
  { title: "Resizable", status: "unchanged" },
  { title: "Scroll Area", status: "unchanged", slug: "scroll-area" },
  { title: "Select", status: "done" },
  { title: "Separator", status: "done" },
  { title: "Sheet", status: "done" },
  { title: "Sidebar", status: "unchanged" },
  { title: "Skeleton", status: "done" },
  { title: "Slider", status: "done" },
  { title: "Sonner", status: "done" },
  { title: "Spinner", status: "done" },
  { title: "Switch", status: "done" },
  { title: "Table", status: "unchanged" },
  { title: "Tabs", status: "done" },
  { title: "Textarea", status: "done" },
  { title: "Toast", status: "done" },
  { title: "Toggle", status: "done" },
  { title: "Toggle Group", status: "done", slug: "toggle-group" },
  { title: "Tooltip", status: "done" },
  { title: "Typography", status: "done" },
]

export const navItems = {
  navMain: [
    {
      title: "Components",
      items: componentItems.map(({ title, status, slug }) => ({
        title,
        status,
        url: `/components/${slug ?? toSlug(title)}`,
      })),
    },
  ],
}
