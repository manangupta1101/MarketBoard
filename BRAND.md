# MarketBoard — Design System

## Identity

- **Name**: MarketBoard (Creative Requests)
- **Tagline**: Track campaigns, crush goals
- **Style**: Notion-inspired SaaS — minimal, structured, calm, professional
- **References**: Notion, Linear, Vercel Dashboard

---

## Design Principles

1. **Minimal** — Remove clutter. Every element earns its place.
2. **Structured** — Consistent spacing, alignment, and hierarchy across all pages.
3. **Readable** — Typography-first design. Content is king.
4. **Calm** — Muted colors, subtle borders, soft shadows. No visual noise.
5. **Professional** — Portfolio-grade polish. Looks like a real shipped product.

---

## Colors

All colors are defined as CSS custom properties in `globals.css`.

| Token             | Value               | Usage                                    |
| ----------------- | ------------------- | ---------------------------------------- |
| `--background`    | `#f7f7f5`           | Page background (warm neutral gray)      |
| `--surface`       | `#ffffff`           | Cards, modals, inputs                    |
| `--surface-hover` | `#fafaf9`           | Surface hover state                      |
| `--surface-active`| `#f5f5f3`           | Surface active/pressed state             |
| `--surface-secondary` | `#f0f0ee`       | Secondary surfaces (tab backgrounds)     |
| `--border`        | `#e8e5e0`           | Default borders (1px, subtle)            |
| `--border-hover`  | `#d4d0ca`           | Border hover state                       |
| `--border-focus`  | `#9ca3af`           | Border focus state                       |
| `--primary`       | `#2383e2`           | Primary accent (muted blue)              |
| `--primary-hover` | `#1b6ec2`           | Primary hover                            |
| `--primary-light` | `#e8f0fe`           | Primary tinted background                |
| `--text-primary`  | `#1a1a1a`           | Headings, body text                      |
| `--text-secondary`| `#6b7280`           | Descriptions, secondary info             |
| `--text-tertiary` | `#9ca3af`           | Placeholders, meta text                  |
| `--success`       | `#0f766e`           | Success states                           |
| `--warning`       | `#b45309`           | Warning states                           |
| `--error`         | `#dc2626`           | Error states                             |

> Light-only. No dark mode. No gradients. Minimal color usage.

---

## Typography

| Role            | Style                                                         |
| --------------- | ------------------------------------------------------------- |
| Font family     | Geist Sans (`--font-geist-sans`), fallback: system            |
| Page title      | `text-2xl font-semibold tracking-tight`                       |
| Section title   | `text-lg font-semibold`                                       |
| Card title      | `text-base font-semibold`                                     |
| Body text       | `text-sm text-[var(--text-primary)]`                          |
| Labels          | `text-sm font-medium text-[var(--text-primary)]`              |
| Meta text       | `text-xs text-[var(--text-tertiary)]`                         |
| Links           | `font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]` |

---

## Spacing System (8px grid)

| Token         | Value  | Common Use                 |
| ------------- | ------ | -------------------------- |
| `--space-1`   | `4px`  | Tight gaps                 |
| `--space-2`   | `8px`  | Icon gaps, small padding   |
| `--space-3`   | `12px` | Compact padding            |
| `--space-4`   | `16px` | Standard padding           |
| `--space-6`   | `24px` | Card padding, section gaps |
| `--space-8`   | `32px` | Page padding               |
| `--space-12`  | `48px` | Section spacing            |
| `--space-16`  | `64px` | Large section spacing      |

---

## Border Radius

| Token            | Value    | Usage                              |
| ---------------- | -------- | ---------------------------------- |
| `--radius-sm`    | `6px`    | Badges, small buttons              |
| `--radius-md`    | `8px`    | Inputs, buttons, tabs              |
| `--radius-lg`    | `12px`   | Cards, modals, containers          |
| `--radius-xl`    | `16px`   | Modal overlays                     |
| `--radius-full`  | `9999px` | Avatars, pills                     |

---

## Shadows

| Token              | Usage                              |
| ------------------ | ---------------------------------- |
| `--shadow-xs`      | Buttons, subtle elevation          |
| `--shadow-sm`      | Cards, surfaces                    |
| `--shadow-md`      | Dropdowns, popovers                |
| `--shadow-lg`      | Floating panels                    |
| `--shadow-overlay` | Modals                             |

> All shadows are soft, low-opacity. No hard/offset shadows.

---

## Page Layout Standard

Every app page uses a consistent structure:

```
AppHeader (sticky, 56px height)
  Logo + Title + Role Badge | Email + Actions + Logout
Main Content (max-w-[1400px], px-6 lg:px-8, py-6)
  TabToggle (view switcher)
  Active View Content
```

---

## Role-based Access Control

| Role     | Can See                | Can Do                                     |
| -------- | ---------------------- | ------------------------------------------ |
| Admin    | All requests           | Manage team, assign, move, delete, CRUD    |
| Editor   | Only assigned requests | Move forward, view Kanban + List only      |
| Member   | Only own requests      | Create requests, view status updates       |

New signups always get `member` role.

---

## View Components

| View       | Component          | Access               |
| ---------- | ------------------ | -------------------- |
| Kanban     | `KanbanBoard`      | Admin, Editor, Member|
| List       | `ListView`         | Admin, Editor, Member|
| Dashboard  | `DashboardView`    | Admin only           |
| Team Panel | `TeamPanel`        | Admin only (sidebar) |

---

## Cards & Surfaces

| Element        | Style                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Card           | `bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)]` |
| Card padding   | `p-4` (sm), `p-6` (md), `p-8` (lg)                                   |
| Modal          | `rounded-[var(--radius-xl)] shadow-[var(--shadow-overlay)]`           |
| Modal overlay  | `bg-black/40 backdrop-blur-[2px]`                                     |

---

## Kanban Board

- 4 columns: Open, In Progress, Review, Closed
- Columns use tinted backgrounds (blue, amber, violet, emerald)
- Cards show: type icon, title, priority badge, description, requester, assignee, date
- Consistent 280–320px column width
- Scrollable columns with max-height

---

## Buttons

| Variant    | Style                                                                |
| ---------- | -------------------------------------------------------------------- |
| Primary    | Blue fill, white text, subtle shadow                                 |
| Secondary  | White fill, border, dark text                                        |
| Ghost      | No background, muted text, hover highlight                           |
| Danger     | Red fill, white text                                                 |
| Sizes      | `sm` (text-xs), `md` (text-sm), `lg` (text-sm, more padding)        |

---

## Inputs

- Border: `border border-[var(--border)]`
- Radius: `rounded-[var(--radius-md)]`
- Padding: `px-3.5 py-2`
- Focus: `border-[var(--primary)] ring-2 ring-[var(--primary)]/10`
- Hover: `border-[var(--border-hover)]`
- Labels: `text-sm font-medium` (sentence case, not uppercase)

---

## Badges

- Rounded: `rounded-[var(--radius-sm)]`
- Colors: `default`, `blue`, `green`, `yellow`, `red`, `gray`
- Variants: `default` (tinted bg), `outline` (border), `filled` (solid)
- Text: `text-xs font-medium`

---

## General Rules

1. **Subtle borders** — `border border-[var(--border)]` (1px, never 2px)
2. **Rounded corners** — All interactive and container elements use radius tokens
3. **Soft shadows** — Low-opacity, no hard offset shadows
4. **Clean typography** — `font-semibold` for headings, `font-medium` for labels
5. **Sentence case** — Labels and headings use sentence case, not ALL CAPS
6. **CSS custom properties** — All colors/spacing/radius reference `var(--token)`
7. **No blur effects** on content — only modal overlays get subtle blur
8. **Consistent hover states** — Border darkens, background lightens
9. **Transitions** — All interactive elements use `transition-all` with duration tokens
10. **Accessibility** — Focus rings, aria attributes, semantic HTML on all components
