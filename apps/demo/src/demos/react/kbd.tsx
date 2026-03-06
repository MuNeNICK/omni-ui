import { Kbd, KbdGroup } from "@/registry/new-york/ui/kbd"

export default function KbdDemo() {
  return (
    <div className="flex flex-col gap-4">
      <KbdGroup>
        <Kbd>CTRL</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>SHIFT</Kbd>
        <Kbd>ALT</Kbd>
        <Kbd>F</Kbd>
      </KbdGroup>
    </div>
  )
}
