"use client"

import { useState } from "react"

import { Button } from "@/registry/new-york/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import CodeSnippet from "@/components/code-snippet"
import CopyCommandButton from "@/components/copy-command-button"
import InstallationCommands from "@/components/installation-commands"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Separator } from "@/components/ui/separator"

export default function InputOTPPage() {
  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Input OTP</h1>
        <CopyCommandButton
          command="pnpm dlx shadcn@latest add @omni/input-otp"
          copyCommand="pnpm dlx shadcn@latest add @omni/input-otp"
        />
      </div>

      <p className="text-muted-foreground">
        Slot-based OTP input fields with consistent spacing and active state
        styling.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4 min-h-[280px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">OTP input</h2>
          <div className="flex items-center gap-2">
            <OpenInV0Button name="input-otp" className="w-fit" />
          </div>
        </div>
        <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-6">
          <InputOTP value={value} onChange={setValue} maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <div className="text-sm text-muted-foreground font-mono tracking-[0.3em] uppercase">
            Value: <span className="text-foreground">{value || "------"}</span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="muted"
              onClick={() => setValue("")}
              disabled={!value}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands packageName="input-otp" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />

      <CodeSnippet>
        {`import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const [value, setValue] = useState("")

return (
  <InputOTP value={value} onChange={setValue} maxLength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
)`}
      </CodeSnippet>
    </div>
  )
}
