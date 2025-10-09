import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york/ui/table"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/table"

const rows = [
  { region: "Tokyo", status: "Healthy", latency: "128 ms" },
  { region: "Singapore", status: "Updating", latency: "164 ms" },
  { region: "Frankfurt", status: "Healthy", latency: "142 ms" },
  { region: "Oregon", status: "Warning", latency: "210 ms" },
]

export default function TablePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Table</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Data grids with monospaced headers, tight grid borders, and muted rows
        that match analytics panels in the PoC.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Region status table
          </h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Edge latency snapshot
            </CardTitle>
            <CardDescription>
              Table container keeps the same hard-edged surface as other
              registry components.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Latency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.region}>
                    <TableCell className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground">
                      {row.region}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground/80">
                      {row.status}
                    </TableCell>
                    <TableCell className="text-sm text-foreground/80">
                      {row.latency}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption>Last sync 4 minutes ago.</TableCaption>
            </Table>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="table" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"`}</CodeSnippet>

      <CodeSnippet>{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Region</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Tokyo</TableCell>
      <TableCell>Healthy</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</CodeSnippet>
    </div>
  )
}
