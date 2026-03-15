# Marketing Track Board

Marketing campaign tracker (Jira-like, for our team). 500–600 concurrent users. Portfolio-grade code (recruiter-reviewed).

## Tech Stack

Next.js App Router + TypeScript, Tailwind CSS, Supabase (Postgres/Auth/Realtime), Zustand, dnd-kit or @hello-pangea/dnd, Recharts or Chart.js

## Commands

- `npm run dev` / `npm run build` / `npm run lint`

## Code Standards

- Strict TypeScript — no `any`, proper interfaces/types
- Named exports, arrow function components, kebab-case files, PascalCase components
- Tailwind only — no CSS files. Colocate component + types + hooks
- Extract components at ~100 lines. Separate UI / data-fetching / logic
- Error handling everywhere, loading states on all async ops
- Accessible HTML (semantic elements, labels, ARIA, keyboard nav)
- No hardcoded values — use constants/env/config
- Debounce expensive ops, memoize expensive computations

## Performance

- Prefer Server Components, minimize client JS
- Paginate lists — never fetch unbounded data
- Supabase Realtime: subscribe selectively, unsubscribe on unmount
- Optimistic updates for mutations. Cache static data (team members, categories)
- Lazy-load heavy components (charts, modals) with `dynamic()`

## Supabase Rules

- Server client in Server Components/API routes, browser client in Client Components only
- Never expose service_role key client-side
- RLS on every table — no frontend-only access control
- Regenerate types after schema changes: `npx supabase gen types typescript`
- Validate inputs client + server. Handle race conditions in collaborative features
