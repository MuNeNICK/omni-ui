"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator, FieldSet, FieldTitle } from "@/registry/new-york/ui/field"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/new-york/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york/ui/select"
import { Switch } from "@/registry/new-york/ui/switch"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/field @omni/input @omni/select @omni/radio-group @omni/switch"

export default function FieldPage() {
  const [env, setEnv] = useState("staging")
  const [notify, setNotify] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Field</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Layout primitives for the Omni form system—uppercase labels, glass dividers,
        and responsive spacing that keeps complex forms aligned.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Environment form</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Rollout configuration
            </CardTitle>
            <CardDescription>
              Mix vertical and responsive rows to match the PoC form spacing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldSet>
              <FieldGroup>
                <Field orientation="responsive">
                  <FieldLabel htmlFor="service">Service</FieldLabel>
                  <FieldContent>
                    <Input id="service" placeholder="control-plane" />
                    <FieldDescription>
                      The slug used for dashboard navigation and API prefixes.
                    </FieldDescription>
                  </FieldContent>
                </Field>

                <Field orientation="responsive">
                  <FieldLabel htmlFor="owner">Owner</FieldLabel>
                  <FieldContent>
                    <Select defaultValue="sre">
                      <SelectTrigger id="owner" className="w-full">
                        <SelectValue placeholder="Select owner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sre">SRE</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="platform">Platform</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldDescription>
                      Used for escalation workflows and audit tagging.
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldGroup>

              <FieldSeparator>Rollout policy</FieldSeparator>

              <FieldGroup>
                <Field orientation="vertical">
                  <FieldTitle>
                    <span>Environment</span>
                    <Badge variant="outline" className="ml-2">{env}</Badge>
                  </FieldTitle>
                  <FieldContent>
                    <RadioGroup
                      value={env}
                      onValueChange={setEnv}
                      className="grid gap-2"
                    >
                      {[
                        { value: "staging", label: "Staging" },
                        { value: "production", label: "Production" },
                        { value: "failover", label: "Failover" },
                      ].map((option) => (
                        <Label
                          key={option.value}
                          className="flex items-center gap-3 rounded-none border border-border/60 bg-muted/40 px-4 py-3"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          {option.label}
                        </Label>
                      ))}
                    </RadioGroup>
                  </FieldContent>
                </Field>

                <Field orientation="responsive">
                  <FieldLabel>Notifications</FieldLabel>
                  <FieldContent>
                    <div className="flex items-center gap-3">
                      <Switch checked={notify} onCheckedChange={setNotify} id="notify" />
                      <label htmlFor="notify" className="text-sm text-muted-foreground">
                        Slack alerts during canary
                      </label>
                    </div>
                    <FieldDescription>
                      Toggle to notify the incident channel when metrics drift.
                    </FieldDescription>
                  </FieldContent>
                  <FieldError>
                    {!notify && "Alerts are required for production rollouts."}
                  </FieldError>
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field orientation="horizontal" className="justify-end gap-3">
                  <Button variant="ghost" size="sm" className="tracking-[0.3em]">
                    Cancel
                  </Button>
                  <Button size="sm" className="tracking-[0.3em]">
                    <CheckCircle2 className="mr-2 size-3" />
                    Save changes
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="field" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import { FieldSet, Field, FieldLabel, FieldContent } from "@/components/ui/field"

<FieldSet>
  <Field>
    <FieldLabel htmlFor="name">Name</FieldLabel>
    <FieldContent>
      <Input id="name" placeholder="Service name" />
    </FieldContent>
  </Field>
</FieldSet>`}</CodeSnippet>
    </div>
  )
}
