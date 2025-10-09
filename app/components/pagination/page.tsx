import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/new-york/ui/pagination"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { Separator } from "@/components/ui/separator"

const installCommand = "pnpm dlx shadcn@latest add @omni/pagination"

export default function PaginationPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Pagination</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Square pagination controls that match the console toolbar aesthetic with
        monospaced labels and high-contrast active states.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Paged list</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Activity pages
            </CardTitle>
            <CardDescription>
              Links feel identical to the rest of the Omni controls and keep the
              zero-radius framing.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#">Prev</PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">01</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink isActive href="#">
                    02
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">03</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">12</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#">Next</PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <p className="text-xs text-muted-foreground">
              Active pages invert colors while hover and focus states echo the
              rest of the dashboard.
            </p>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="pagination" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"`}</CodeSnippet>

      <CodeSnippet>{`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#">Prev</PaginationPrevious>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">01</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive href="#">
        02
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">12</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#">Next</PaginationNext>
    </PaginationItem>
  </PaginationContent>
</Pagination>`}</CodeSnippet>
    </div>
  )
}
