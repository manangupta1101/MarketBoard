# MarketBoard — Design System

## Identity

- **Name**: MarketBoard (Creative Requests)
- **Tagline**: Track campaigns, crush goals
- **Style**: LearnHub-inspired — warm, playful, bold, modern-professional
- **References**: LearnHub landing page — cream background, thick navy borders, green accent, hard drop shadows, floating decorative shapes
- **Mood**: Friendly but serious. Approachable but polished. Fun but not childish.

---

## Design Principles

1. **Warm** — Cream backgrounds, soft pastels, inviting color temperature. Never cold/sterile.
2. **Bold** — Thick borders, heavy font weights, hard shadows. UI feels tangible and confident.
3. **Playful** — Large radii, pill shapes, floating decorative elements, green accents. Feels modern and fresh.
4. **Structured** — Consistent spacing, alignment, and hierarchy across all pages.
5. **Professional** — Portfolio-grade polish. Playful style does not compromise readability or usability.

---

## Color Palette

### Core Colors

| Token             | Hex       | Usage                                          |
|-------------------|-----------|-------------------------------------------------|
| `page-bg`         | `#FFF5EC` | Page background — warm cream/peach              |
| `surface`         | `#FFFFFF` | Cards, modals, header, inputs                   |
| `navy`            | `#1E293B` | Borders, headings, dark UI elements, drop shadows |
| `navy-light`      | `#334155` | Secondary dark text, lighter borders            |
| `navy-deep`       | `#0F172A` | Darkest navy — used for shadow on navy buttons  |

### Primary — Green

| Token             | Hex       | Usage                                          |
|-------------------|-----------|-------------------------------------------------|
| `green`           | `#22C55E` | Primary buttons, active states, accent dots, progress bars |
| `green-dark`      | `#16A34A` | Button hover/pressed states                     |
| `green-light`     | `#DCFCE7` | Badge backgrounds, icon containers, highlights  |
| `green-text`      | `#15803D` | Text on green-light backgrounds                 |

### Text

| Token             | Hex       | Usage                                          |
|-------------------|-----------|-------------------------------------------------|
| `text-primary`    | `#1E293B` | Headings, card titles, bold labels (= navy)     |
| `text-secondary`  | `#64748B` | Body text, descriptions, meta info              |
| `text-tertiary`   | `#94A3B8` | Placeholder text, disabled labels, subtle icons |
| `text-on-green`   | `#FFFFFF` | Text on green-filled buttons/surfaces           |
| `text-on-navy`    | `#FFFFFF` | Text on navy-filled elements                    |

### Status Colors

| Token             | Hex       | Usage                                          |
|-------------------|-----------|-------------------------------------------------|
| `status-open`     | `#3B82F6` | Blue — open/new items                           |
| `status-progress` | `#F59E0B` | Amber — in-progress items                       |
| `status-review`   | `#8B5CF6` | Violet — items in review                        |
| `status-closed`   | `#22C55E` | Green — completed/closed items                  |
| `status-error`    | `#EF4444` | Red — deleted/error items                       |

### Priority Colors

| Priority | Background | Text      | Border    |
|----------|-----------|-----------|-----------|
| Urgent   | `#FEE2E2` | `#DC2626` | `#FECACA` |
| High     | `#FEF3C7` | `#D97706` | `#FDE68A` |
| Medium   | `#DBEAFE` | `#2563EB` | `#BFDBFE` |
| Low      | `#F1F5F9` | `#64748B` | `#E2E8F0` |

### Decorative / Accent Colors

Used for floating background shapes, illustrations, and visual flair. These are always low-opacity and `pointer-events-none`.

| Token        | Hex       | Typical Shape      |
|-------------|-----------|---------------------|
| `pink`      | `#FDA4AF` | Circles             |
| `yellow`    | `#FDE047` | Squares (rotated)   |
| `cyan`      | `#A5F3FC` | Circles             |
| `lavender`  | `#C4B5FD` | Rotated squares     |
| `green-acc` | `#22C55E` | Circles             |

### Section / Column Backgrounds

Tinted pastels used as column or section backgrounds:

| Section                  | Color     | Notes                           |
|-------------------------|-----------|---------------------------------|
| Default page            | `#FFF5EC` | Warm cream                      |
| Status column — Open    | `#EFF6FF` | Very light blue                 |
| Status column — Progress| `#FFFBEB` | Very light amber                |
| Status column — Review  | `#F5F3FF` | Very light violet               |
| Status column — Closed  | `#F0FDF4` | Very light green                |
| CTA band                | `#ECFDF5` | Mint/light green band           |
| Footer                  | `#FFFFFF` | White                           |

---

## Typography

### Font Family

- **Primary:** `"DM Sans"` — geometric, modern, playful-but-professional
- **Fallback chain:** `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### Type Scale

| Role               | Size    | Weight          | Letter Spacing | Line Height | Color           |
|--------------------|---------|-----------------|----------------|-------------|-----------------|
| Page heading (h1)  | 48px    | 800 (extrabold) | -0.02em        | 1.1         | `text-primary`  |
| Section heading (h2)| 32px   | 800 (extrabold) | -0.01em        | 1.2         | `text-primary`  |
| Card title         | 14px    | 700 (bold)      | normal         | 1.4         | `text-primary`  |
| Column header      | 14px    | 800 (extrabold) | 0.05em (uppercase) | 1.4     | `text-primary`  |
| Body text          | 14px    | 500 (medium)    | normal         | 1.5         | `text-secondary` |
| Meta / small       | 12px    | 500 (medium)    | normal         | 1.5         | `text-secondary` |
| Badge label        | 11px    | 700 (bold)      | 0.05em (uppercase) | 1.3     | varies          |
| Nav link           | 14px    | 500 (medium)    | normal         | 1.4         | `text-primary`  |
| Button text        | 14px    | 700 (bold)      | normal         | 1.4         | varies          |
| Stat number        | 28px    | 800 (extrabold) | -0.01em        | 1.2         | `text-primary`  |
| Stat label         | 13px    | 500 (medium)    | normal         | 1.4         | `text-secondary` |

### Heading Accent Style

For emphasis on key words in headings (like "Anytime" in the reference), use `green` color + italic.

---

## Borders & Shadows

This is the **defining visual characteristic** of the design. Every bordered element uses thick navy borders with hard (no-blur) drop shadows.

### Border System

| Element                       | Width   | Color    | Radius         |
|-------------------------------|---------|----------|----------------|
| Cards (content cards)         | 2.5px   | `navy`   | 16px (2xl)     |
| Column containers             | 2.5px   | `navy`   | 16px (2xl)     |
| Header / navbar               | 2.5px   | `navy`   | bottom-only when sticky |
| Buttons (primary & secondary) | 2.5px   | `navy`   | 9999px (full pill) |
| Badges / pills                | 2px     | varies   | 9999px (full)  |
| Input fields                  | 2px     | `navy`   | 12px (xl)      |
| Icon containers               | 1.5px   | accent color | 12px (xl)  |
| Status dots                   | 2px     | `navy`   | 9999px (full)  |
| Modals                        | 2.5px   | `navy`   | 20px (2xl)     |
| Tabs / switcher container     | 2.5px   | `navy`   | 12px (xl)      |

### Shadow System — Hard Drop Shadows (NO BLUR)

All shadows are **sharp/hard** (0px blur) using the `navy` color. This is what gives the UI its bold, tangible, "printed" feel.

| Element              | Default Shadow          | Hover Shadow            |
|----------------------|------------------------|-------------------------|
| Cards                | `4px 4px 0px #1E293B`  | `6px 6px 0px #1E293B`  |
| Column containers    | `4px 4px 0px #1E293B`  | — (no hover)            |
| Buttons (primary)    | `3px 3px 0px #1E293B`  | `4px 4px 0px #1E293B`  |
| Buttons (secondary)  | `3px 3px 0px #1E293B`  | `4px 4px 0px #1E293B`  |
| Header switcher      | `3px 3px 0px #1E293B`  | — (no hover)            |
| Logo icon            | `2px 2px 0px #1E293B`  | — (no hover)            |
| Modals / overlays    | `8px 8px 0px #1E293B`  | — (no hover)            |
| Navy-bg buttons      | `3px 3px 0px #0F172A`  | `4px 4px 0px #0F172A`  |

### Active / Press Effect

On click/press, cards and buttons shift down+right by 2px and shadow shrinks:
- `transform: translateX(2px) translateY(2px)`
- Shadow: `2px 2px 0px navy`
- Creates a tactile "push into surface" feel

---

## Components

### Navbar

- **Background:** `surface` (white)
- **Border:** 2.5px `navy`, bottom-only when sticky
- **Height:** 64px
- **Layout:** Logo left, nav links center, auth buttons right
- **Logo:** `green` rounded-xl square with white icon + 2.5px navy border + `2px 2px 0px navy` shadow
- **Nav links:** `text-primary`, 14px, medium weight. Hover: `green` color
- **Auth:** "Log In" text link + "Start Free" green filled pill button

### Pill Badges / Section Labels

Used for section labels ("Popular Courses", "Why Choose Us") and status indicators ("Experimental").

- **Background:** `green-light` (`#DCFCE7`)
- **Text:** `green-text` (`#15803D`), 11px, bold, uppercase, tracking-wide
- **Border:** 2px `green`
- **Radius:** 9999px (full pill)
- **Optional dot indicator:** 6px `green` circle left of text

### Buttons

#### Primary (Green Filled)

- Background: `green` → hover: `green-dark`
- Text: white, 14px, bold
- Border: 2.5px `navy`
- Radius: 9999px (pill)
- Shadow: `3px 3px 0px navy` → hover: `4px 4px 0px`
- Active: shadow `2px 2px 0px`, translate down-right 1px
- CTA text often includes ` →` arrow

#### Secondary (White Outlined)

- Background: `surface` (white) → hover: `#F8FAFC`
- Text: `text-primary` (navy), 14px, bold
- Border: 2.5px `navy`
- Radius: 9999px (pill)
- Shadow: `3px 3px 0px navy` → hover: `4px 4px 0px`

#### Dark (Navy Filled)

- Background: `navy`
- Text: white, 14px, bold
- Border: 2.5px `navy`
- Radius: 9999px (pill)
- Shadow: `3px 3px 0px #0F172A` (navy-deep)
- Usage: "View All Courses →", count badges, secondary CTAs

### Cards

#### Content Card (courses, requests, features)

- Background: `surface` (white)
- Border: 2.5px `navy`
- Radius: 16px (rounded-2xl)
- Shadow: `4px 4px 0px navy`
- Padding: 16px
- Hover: translateY(-2px), shadow grows to `6px 6px 0px`
- Transition: 200ms ease-out

#### Testimonial Card

- Same as content card
- Stars: `#FDE047` (yellow) filled
- Avatar: 36px circle, colored background, bold white initial letter
- Quote text: `text-secondary`, 14px, italic

#### Feature Card (Why Choose Us style)

- Same border/shadow as content card
- Icon: 48px container, colored light background, 2px accent border, rounded-xl
- Title: 14px bold, centered
- Description: 13px medium, `text-secondary`, centered

### Icon Containers

Small rounded squares that hold type/category icons.

| Size   | Dimensions | Background     | Border           | Radius |
|--------|-----------|----------------|------------------|--------|
| Small  | 28px      | `green-light`  | 1.5px accent     | 10px   |
| Medium | 40px      | tinted light   | 1.5px accent     | 12px   |
| Large  | 48px      | tinted light   | 2px accent       | 12px   |

### Rating Badge

- Background: `green-light`
- Text: `green-text`, bold
- Border: 1.5px `green`
- Radius: 8px

### Input Fields

- Background: `surface` (white)
- Border: 2px `navy` (unfocused: lighter `#CBD5E1`)
- Focus: 2.5px `green` border
- Radius: 12px
- Padding: 12px 16px
- Text: 14px, `text-primary`
- Placeholder: `text-tertiary`
- Label: 14px, bold, `text-primary`, above input

### Modals / Dialogs

- Background: `surface` (white)
- Border: 2.5px `navy`
- Radius: 20px
- Shadow: `8px 8px 0px navy`
- Overlay scrim: `rgba(30, 41, 59, 0.4)` (navy at 40%)

### Tabs / Switcher

- Container: white bg, 2.5px navy border, rounded-xl, 4px internal padding, `3px 3px 0px navy` shadow
- Active tab: `green` background, white text, rounded-lg
- Inactive tab: transparent bg, `text-secondary`, hover: `text-primary`

### Status Dots

- Size: 12px (h-3 w-3)
- Shape: full circle
- Border: 2px `navy`
- Fill: status color

### Count Badge

- Shape: pill (9999px radius)
- Background: `navy`
- Text: white, 12px, bold
- Min-width: 24px, centered

---

## Layout & Spacing

### Spacing Scale (8px base grid)

| Token  | Value | Usage                          |
|--------|-------|--------------------------------|
| `xs`   | 4px   | Icon-to-text gap               |
| `sm`   | 8px   | Compact internal gaps          |
| `md`   | 12px  | Card internal padding gaps     |
| `base` | 16px  | Card padding, button padding   |
| `lg`   | 20px  | Between cards in columns       |
| `xl`   | 24px  | Section internal spacing       |
| `2xl`  | 32px  | Between sections               |
| `3xl`  | 48px  | Major section separators       |
| `4xl`  | 64px  | Page-level vertical rhythm     |

### Container

- Max width: 1400px
- Horizontal padding: 24px (mobile) / 32px (desktop lg+)

### Page Layout

```
Header (sticky, 64px, white bg, navy border-bottom)
  Logo + Title + Badge | Switcher / Nav | Auth Buttons
Main Content (max-w-[1400px], px-6 lg:px-8, py-6)
  View Content (Kanban / List / Dashboard)
```

### Kanban Columns

- Min width: 280px
- Max width: 320px
- Gap between columns: 20px
- Card gap within column: 12px
- Column internal padding: 12px

---

## Decorative Elements

### Floating Background Shapes

Soft, low-opacity decorative blobs scattered behind content. Always `pointer-events-none`, `position: fixed`, `z-index: 0`.

| Shape       | Color       | Size     | Position         | Opacity  | Rotation |
|-------------|-------------|----------|------------------|----------|----------|
| Circle      | `pink`      | 120-140px| Top-right area   | 0.35-0.4 | 0deg     |
| Square      | `yellow`    | 80px     | Mid-left edge    | 0.25-0.3 | 12deg    |
| Circle      | `green-acc` | 60-70px  | Bottom-right     | 0.25-0.3 | 0deg     |
| Square      | `lavender`  | 50px     | Bottom-left      | 0.2-0.25 | 45deg    |
| Circle      | `cyan`      | 40px     | Top-left area    | 0.2-0.25 | 0deg     |

### Checkmark Lists (CTA sections)

- Green checkmark SVG icon + text
- Icon color: `green`, text color: `text-secondary`

---

## Interaction & Animation

### Transition Tokens

| Property     | Duration | Easing    | Usage                    |
|-------------|----------|-----------|--------------------------|
| All          | 200ms    | ease-out  | Card hover, button hover |
| Color        | 150ms    | ease      | Link hover, tab switch   |
| Transform    | 200ms    | ease-out  | Card lift, button press  |
| Box-shadow   | 200ms    | ease-out  | Shadow grow/shrink       |

### Card Hover

1. `translateY(-2px)` — subtle lift
2. Shadow grows: `4px 4px` → `6px 6px`
3. Border/color unchanged

### Button Hover

1. Background darkens (green → green-dark, white → light gray)
2. Shadow grows: `3px 3px` → `4px 4px`

### Button Active / Press

1. `translateX(1px) translateY(1px)` — pushes into surface
2. Shadow shrinks: `3px 3px` → `2px 2px`
3. Tactile "click" feel

### Focus States

- Outline: `2.5px solid #22C55E`
- Outline-offset: `2px`
- Applied via `:focus-visible`

---

## Section Layout Patterns

### Section Header Pattern

Every content section follows this centered layout:

1. **Pill badge** — green pill centered (e.g., "Popular Courses")
2. **Heading** — h2, extrabold, centered
3. **Subtitle** — body text, `text-secondary`, centered
4. **Content** — cards/grid below

### CTA Band Pattern

- Full-width light mint background (`#ECFDF5`)
- Centered white card with navy border + `8px 8px 0px navy` shadow
- Heading + subtitle + two buttons (primary green + secondary outlined) + trust signals with checkmarks

### Footer Pattern

- White background
- 4-column layout: Brand (logo + description + social icons) | Link Column 1 | Link Column 2 | Link Column 3
- Separator: 1px `#E2E8F0` line
- Bottom bar: copyright left, legal links right

---

## Icons

- **Style:** Outlined/stroke (not filled)
- **Stroke width:** 2.5px (heavier than default, matching the bold border aesthetic)
- **Library:** Heroicons or Lucide (SVG, consistent stroke weight)
- **Sizes:** 14px (meta), 16px (nav/buttons), 20px (card icons), 24px (feature icons)
- **Color:** Inherits from parent text color

---

## Stars / Ratings

- Filled star color: `#FDE047` (yellow)
- Empty star color: `#E2E8F0` (light gray)
- Size: 14-16px
- No border on stars

---

## Avatar Circles

- Size: 36px
- Shape: Full circle
- Background: Random from palette (blue `#3B82F6`, green `#22C55E`, purple `#8B5CF6`, amber `#F59E0B`)
- Text: White, bold, single uppercase initial
- Border: None (clean look)

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

## Summary — 10 Defining Characteristics

1. **Warm cream background** (`#FFF5EC`) — never white, never gray
2. **Thick navy borders** (2.5px `#1E293B`) on every container and interactive element
3. **Hard drop shadows** (no blur, navy color, 4px offset) — the signature look
4. **Green primary accent** (`#22C55E`) for all CTAs, active states, and highlights
5. **Pill-shaped buttons and badges** (border-radius 9999px)
6. **Extrabold geometric typography** (DM Sans, weight 700-800)
7. **Playful floating decorative shapes** (pink, yellow, cyan, lavender blobs)
8. **Tactile press animations** (shadow shrink + translate on click)
9. **Rounded-2xl cards** (16px radius) with consistent hard elevation
10. **Heavier icon strokes** (2.5px) matching the bold border weight
