# Omni UI

Omni UI is an opinionated fork of [shadcn/ui](https://ui.shadcn.com) with a frosted-glass, mono-uppercase aesthetic. The registry supports both React and Solid. Source files live under `registry/react/ui` and `registry/solid/ui`.

- Concept: glassmorphism-inspired surfaces, tight mono type, and tone-driven color tokens ready for cloud dashboards.
- Demo: https://munenick.github.io/omni-ui/components/

## Usage

1. **Initialize shadcn/ui**
   ```bash
   pnpm dlx shadcn@latest init
   ```

2. **Add the Omni registry** – edit your generated `components.json` so the aliases include the scope:
   ```json
   "registries": {
     "@omni": "https://munenick.github.io/omni-ui/r/{name}.json"
   }
   ```

3. **Pull components**
   ```bash
   pnpm dlx shadcn@latest add @omni/button
   ```

   For Solid:
   ```bash
   pnpm dlx shadcn@latest add @omni/solid/button
   ```

Local development still uses the standard scripts:

```bash
pnpm install
pnpm run dev
```
