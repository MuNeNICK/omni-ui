import { Button } from "@/registry/new-york/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/new-york/ui/drawer"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/drawer"

export default function DrawerPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Drawer</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Sliding panel with a glass surface and square edges. Ideal for config
        sidebars and mobile-first interactions.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Drawer component</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Quick actions
            </CardTitle>
            <CardDescription>
              Drawer content inherits the same zero-radius look with mono title.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="muted">Open drawer</Button>
              </DrawerTrigger>
              <DrawerContent className="data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-md">
                <DrawerHeader>
                  <DrawerTitle>PROJECT</DrawerTitle>
                  <DrawerDescription>
                    Adjust project settings before broadcasting to the network.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="space-y-3 px-4 text-sm text-foreground/80">
                  <p>Switch environments, adjust API tokens, and manage access.</p>
                  <p className="text-muted-foreground">
                    Changes apply instantly across all connected control planes.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="muted">Dismiss</Button>
                  </DrawerClose>
                  <Button>Save changes</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="drawer" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"`}</CodeSnippet>

      <CodeSnippet>{`<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>PROJECT</DrawerTitle>
      <DrawerDescription>Update project settings.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button variant="muted">Cancel</Button>
      <Button>Save</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}</CodeSnippet>
    </div>
  )
}
