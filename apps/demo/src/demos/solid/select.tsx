import { Label } from "@/registry/solid/ui/label"
import {
  Select,
  SelectContent,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/solid/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/solid/ui/card"

type Region = {
  value: string
  label: string
  disabled?: boolean
}

type RegionGroup = {
  label: string
  options: Region[]
}

const regionGroups: RegionGroup[] = [
  {
    label: "Asia Pacific",
    options: [
      { value: "tokyo", label: "Tokyo" },
      { value: "osaka", label: "Osaka" },
      { value: "singapore", label: "Singapore (coming soon)", disabled: true },
    ],
  },
  {
    label: "North America",
    options: [
      { value: "oregon", label: "Oregon" },
      { value: "virginia", label: "Virginia" },
    ],
  },
]

export default function SelectDemo() {
  const defaultOption = regionGroups[0].options[0]

  return (
    <Card class="border-border/70">
      <CardHeader>
        <CardTitle class="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Region Picker
        </CardTitle>
        <CardDescription>
          Square trigger and flat dropdown to match the PoC form system.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-2">
        <Label for="region">Region</Label>
        <Select
          options={regionGroups}
          optionValue="value"
          optionTextValue="label"
          optionDisabled="disabled"
          optionGroupChildren="options"
          defaultValue={defaultOption}
          placeholder="Select a region"
          sectionComponent={(props: any) => (
            <SelectGroupLabel>{props.section.rawValue.label}</SelectGroupLabel>
          )}
          itemComponent={(props: any) => (
            <SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
          )}
        >
          <SelectTrigger id="region" class="min-w-[220px]">
            <SelectValue<Region>>
              {(state: any) => state.selectedOption()?.label}
            </SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
      </CardContent>
    </Card>
  )
}
