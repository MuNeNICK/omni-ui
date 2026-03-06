import { Button } from "@/registry/new-york/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="muted">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Session</DropdownMenuLabel>
        <DropdownMenuItem>Launch console</DropdownMenuItem>
        <DropdownMenuItem>Open docs</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Workspace</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="tokyo">
          <DropdownMenuRadioItem value="tokyo">
            Tokyo
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="osaka">
            Osaka
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>
          Lock deployment
          <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
