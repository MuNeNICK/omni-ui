"use client"

import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form"
import { Input } from "@/registry/new-york/ui/input"
import { Button } from "@/registry/new-york/ui/button"
import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Separator } from "@/components/ui/separator"

type DemoFormValues = {
  email: string
  company: string
}

export default function FormPage() {
  const form = useForm<DemoFormValues>({
    defaultValues: {
      email: "",
      company: "",
    },
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Form</h1>
        <CopyCommandButton
          command="pnpm dlx shadcn@latest add @omni/form"
          copyCommand="pnpm dlx shadcn@latest add @omni/form"
        />
      </div>

      <p className="text-muted-foreground">
        Form primitives that integrate cleanly with React Hook Form for
        validation-aware inputs.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Form group</h2>
          <div className="flex items-center gap-2">
            <OpenInV0Button name="form" className="w-fit" />
          </div>
        </div>
        <div className="relative flex min-h-[400px] items-center justify-center">
          <div className="w-full max-w-md space-y-6 rounded-none border border-border/70 bg-card/60 p-6 shadow-[var(--glass-shadow-card)] backdrop-blur">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((values) => console.log(values))}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                      message: "Enter a valid email address",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
                          inputMode="email"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        We will contact you at this address.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  rules={{
                    required: "Company name is required",
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Omni Inc." {...field} />
                      </FormControl>
                      <FormDescription>
                        Let us know which organization this form represents.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands packageName="form" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />

      <CodeSnippet>
        {`import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const form = useForm({
  defaultValues: { email: "" },
})

return (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="you@example.com" {...field} />
            </FormControl>
            <FormDescription>This is where notifications will be sent.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  </Form>
)`}
      </CodeSnippet>
    </div>
  )
}
