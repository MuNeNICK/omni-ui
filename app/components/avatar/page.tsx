import {
  Avatar,
  AvatarFallback,
} from "@/registry/new-york/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Badge } from "@/registry/new-york/ui/badge"

import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { Separator } from "@/components/ui/separator"

const installCommand = "pnpm dlx shadcn@latest add @omni/avatar"

export default function AvatarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Avatar</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Frosted avatar tiles with status badges. Mono fallback initials keep
        rosters aligned even when profile images are missing.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Roster</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Platform Team
            </CardTitle>
            <CardDescription>
              Status lights float outside the frame so initials stay perfectly
              centered across the grid.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <Avatar status="online">
                  <AvatarFallback>HS</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm text-foreground">Haru Sato</p>
                  <Badge variant="outline">Region Lead</Badge>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Avatar status="away">
                  <AvatarFallback>MN</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm text-foreground">Mina Nikaido</p>
                  <Badge variant="outline">Security</Badge>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Avatar status="offline">
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm text-foreground">Akira Kato</p>
                  <Badge variant="outline">SRE</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="avatar" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { Avatar, AvatarFallback } from "@/components/ui/avatar"`}</CodeSnippet>

      <CodeSnippet>{`<Avatar status="online">
  <AvatarFallback>MM</AvatarFallback>
</Avatar>`}</CodeSnippet>
    </div>
  )
}
