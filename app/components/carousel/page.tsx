"use client"

import { useState } from "react"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/new-york/ui/carousel"
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

const installCommand = "pnpm dlx shadcn@latest add @omni/carousel @omni/button"

const slides = [
  {
    title: "Staging",
    description: "Rolling deploy across Tokyo cluster",
    status: "Healthy",
  },
  {
    title: "Production",
    description: "Canary at 35% traffic in Singapore",
    status: "Monitoring",
  },
  {
    title: "Failover",
    description: "Osaka cluster warming standby nodes",
    status: "Warm",
  },
]

export default function CarouselPage() {
  const [index, setIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Carousel</h1>
        <CopyCommandButton command={installCommand} copyCommand={installCommand} />
      </div>

      <p className="text-muted-foreground">
        Embla-powered slider with square navigation paddles, mono labels, and
        responsive layouts tailored to the Omni control panel.
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Deployment summary</h2>
        </div>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Environment rotation
            </CardTitle>
            <CardDescription>
              Use the carousel controls or keyboard arrows to inspect environment snapshots.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <Carousel
              className="w-full"
              setApi={(instance) => {
                setApi(instance)
                instance?.on("select", () => setIndex(instance.selectedScrollSnap()))
              }}
            >
              <CarouselContent className="-ml-6">
                {slides.map((slide) => (
                  <CarouselItem key={slide.title} className="pl-6">
                    <div className="flex flex-col gap-3 rounded-none border border-border/70 bg-muted/30 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.12)]">
                      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/80">
                        {slide.status}
                      </span>
                      <h3 className="text-xl font-semibold uppercase tracking-[0.12em]">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {slide.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="mt-4 flex items-center justify-center gap-2">
              {slides.map((_, slideIndex) => (
                <Button
                  key={slideIndex}
                  variant={index === slideIndex ? "default" : "muted"}
                  size="icon-sm"
                  className="size-8"
                  onClick={() => {
                    api?.scrollTo(slideIndex)
                    setIndex(slideIndex)
                  }}
                >
                  <span className="sr-only">Go to slide {slideIndex + 1}</span>
                  {slideIndex + 1}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator className="my-2" />

      <InstallationCommands packageName="carousel" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator className="my-2" />

      <CodeSnippet>{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

<Carousel>
  <CarouselContent>
    {["one", "two", "three"].map((item) => (
      <CarouselItem key={item}>{item}</CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</CodeSnippet>
    </div>
  )
}
