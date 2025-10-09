import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/new-york/ui/item"
import { Button } from "@/registry/new-york/ui/button"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/item"

export default function ItemPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Item</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Layout primitives for list rows, mirroring the card-like blocks used
        throughout the dashboard with monospaced titles.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Service list</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Active releases
            </CardTitle>
            <CardDescription>
              Items use the same border rhythm as cards, perfect for nested lists
              or resource browsers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ItemGroup className="divide-y divide-border/60">
              <Item>
                <ItemMedia variant="icon">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    API
                  </span>
                </ItemMedia>
                <ItemContent>
                  <ItemHeader>
                    <ItemTitle>GATEWAY</ItemTitle>
                    <ItemActions>
                      <Button variant="muted" size="sm">
                        VIEW LOGS
                      </Button>
                      <Button size="sm">DEPLOY</Button>
                    </ItemActions>
                  </ItemHeader>
                  <ItemDescription>
                    Handles routing for external traffic with global caching.
                  </ItemDescription>
                  <ItemFooter className="text-xs text-muted-foreground/80">
                    Last deployment 42 minutes ago
                  </ItemFooter>
                </ItemContent>
              </Item>

              <Item>
                <ItemMedia variant="icon">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    DB
                  </span>
                </ItemMedia>
                <ItemContent>
                  <ItemHeader>
                    <ItemTitle>ANALYTICS</ItemTitle>
                    <ItemActions>
                      <Button variant="muted" size="sm">
                        INSPECT
                      </Button>
                    </ItemActions>
                  </ItemHeader>
                  <ItemDescription>
                    Columnar store powering dashboards and custom queries.
                  </ItemDescription>
                </ItemContent>
              </Item>

              <ItemSeparator />

              <Item variant="muted">
                <ItemContent>
                  <ItemTitle>ARCHIVE</ItemTitle>
                  <ItemDescription>
                    Archived services retain the same layout for historical
                    context.
                  </ItemDescription>
                </ItemContent>
              </Item>
            </ItemGroup>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="item" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"`}</CodeSnippet>

      <CodeSnippet>{`<ItemGroup>
  <Item>
    <ItemContent>
      <ItemTitle>SERVICE</ItemTitle>
      <ItemDescription>Details go here.</ItemDescription>
    </ItemContent>
  </Item>
</ItemGroup>`}</CodeSnippet>
    </div>
  )
}
