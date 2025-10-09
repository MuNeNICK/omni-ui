import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/new-york/ui/menubar"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/menubar"

export default function MenubarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Menubar</h1>
        <CopyCommandButton
          command={installCommand}
          copyCommand={installCommand}
        />
      </div>

      <p className="text-muted-foreground">
        Application-style menu with zero-radius triggers and uppercase labels,
        mirroring the PoC&apos;s command surfaces.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">App menu</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Command surface
            </CardTitle>
            <CardDescription>
              Hard-edged surface, monospaced triggers, and glassy dropdown align
              with other Omni overlays.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>FILE</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    NEW PROJECT
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    OPEN…
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>EXPORT</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>JSON</MenubarItem>
                      <MenubarItem>YAML</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem variant="destructive">DELETE</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>VIEW</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel inset>Toggle</MenubarLabel>
                  <MenubarCheckboxItem checked>SIDEBAR</MenubarCheckboxItem>
                  <MenubarCheckboxItem>CONSOLE</MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarLabel inset>Themes</MenubarLabel>
                  <MenubarRadioGroup value="dark">
                    <MenubarRadioItem value="light">LIGHT</MenubarRadioItem>
                    <MenubarRadioItem value="dark">DARK</MenubarRadioItem>
                    <MenubarRadioItem value="system">SYSTEM</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="menubar" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"`}</CodeSnippet>

      <CodeSnippet>{`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>FILE</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</CodeSnippet>
    </div>
  )
}
