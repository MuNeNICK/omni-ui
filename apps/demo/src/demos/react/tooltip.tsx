import { Button } from "@/registry/new-york/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="muted">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent side="top" align="center">
          LAUNCH CONSOLE
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
