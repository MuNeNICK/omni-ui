import { splitProps, createSignal, createEffect, createContext, useContext, onCleanup, type ParentProps, type JSX } from "solid-js"
import createEmblaCarousel from "embla-carousel-solid"
import { ArrowLeft, ArrowRight } from "lucide-solid"
import { cn } from "@/registry/solid/lib/utils"
import { Button } from "@/registry/solid/ui/button"

type CarouselApi = ReturnType<typeof createEmblaCarousel>[1]

type CarouselProps = {
  opts?: any
  plugins?: any
  orientation?: "horizontal" | "vertical"
  setApi?: (api: any) => void
}

type CarouselContextProps = {
  carouselRef: any
  api: () => any
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: () => boolean
  canScrollNext: () => boolean
  orientation: () => string
}

const CarouselContext = createContext<CarouselContextProps>()

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within a <Carousel />")
  return context
}

function Carousel(props: ParentProps<JSX.HTMLAttributes<HTMLDivElement> & CarouselProps>) {
  const [local, rest] = splitProps(props, ["class", "children", "opts", "plugins", "orientation", "setApi"])
  const orientation = () => local.orientation || "horizontal"

  const [emblaRef, emblaApi] = createEmblaCarousel(
    () => ({
      ...local.opts,
      axis: orientation() === "horizontal" ? "x" : "y",
    }),
    () => local.plugins || []
  )

  const [canScrollPrev, setCanScrollPrev] = createSignal(false)
  const [canScrollNext, setCanScrollNext] = createSignal(false)

  const onSelect = (api: any) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }

  createEffect(() => {
    const api = emblaApi()
    if (!api) return
    onSelect(api)
    const onReInit = () => onSelect(api)
    const onSelectEvt = () => onSelect(api)
    api.on("reInit", onReInit)
    api.on("select", onSelectEvt)
    onCleanup(() => {
      api.off("reInit", onReInit)
      api.off("select", onSelectEvt)
    })
  })

  createEffect(() => {
    const api = emblaApi()
    if (api && local.setApi) local.setApi(api)
  })

  const scrollPrev = () => emblaApi()?.scrollPrev()
  const scrollNext = () => emblaApi()?.scrollNext()

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); scrollPrev() }
    else if (event.key === "ArrowRight") { event.preventDefault(); scrollNext() }
  }

  return (
    <CarouselContext.Provider
      value={{
        carouselRef: emblaRef,
        api: emblaApi,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        orientation,
      }}
    >
      <div
        onKeyDown={handleKeyDown}
        class={cn("relative", local.class)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...rest}
      >
        {local.children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent(props: ParentProps<JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, rest] = splitProps(props, ["class", "children"])
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} class="overflow-hidden" data-slot="carousel-content">
      <div class={cn("flex", orientation() === "horizontal" ? "-ml-4" : "-mt-4 flex-col", local.class)} {...rest}>
        {local.children}
      </div>
    </div>
  )
}

function CarouselItem(props: ParentProps<JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, rest] = splitProps(props, ["class", "children"])
  const { orientation } = useCarousel()
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      class={cn("min-w-0 shrink-0 grow-0 basis-full", orientation() === "horizontal" ? "pl-4" : "pt-4", local.class)}
      {...rest}
    >
      {local.children}
    </div>
  )
}

function CarouselPrevious(props: any) {
  const [local, rest] = splitProps(props, ["class", "variant", "size"])
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
      data-slot="carousel-previous"
      variant={local.variant ?? "outline"}
      size={local.size ?? "icon"}
      class={cn(
        "absolute size-8 rounded-full",
        orientation() === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        local.class
      )}
      disabled={!canScrollPrev()}
      onClick={scrollPrev}
      {...rest}
    >
      <ArrowLeft />
      <span class="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext(props: any) {
  const [local, rest] = splitProps(props, ["class", "variant", "size"])
  const { orientation, scrollNext, canScrollNext } = useCarousel()
  return (
    <Button
      data-slot="carousel-next"
      variant={local.variant ?? "outline"}
      size={local.size ?? "icon"}
      class={cn(
        "absolute size-8 rounded-full",
        orientation() === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        local.class
      )}
      disabled={!canScrollNext()}
      onClick={scrollNext}
      {...rest}
    >
      <ArrowRight />
      <span class="sr-only">Next slide</span>
    </Button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel }
export type { CarouselApi }
