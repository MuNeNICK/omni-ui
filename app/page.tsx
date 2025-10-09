export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col gap-4 px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">omni-ui</h1>
      <p className="text-muted-foreground text-lg">
        Welcome to the omni-ui registry. Browse documentation under
        <span className="font-semibold"> /components</span> to explore the custom component library.
      </p>
      <p className="text-sm text-muted-foreground">
        Use `pnpm dlx shadcn@latest add @omni/button` to install the button component.
      </p>
    </main>
  )
}
