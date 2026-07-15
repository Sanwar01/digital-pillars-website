# Mobile responsive polish design

**Date:** 2026-07-15  
**Status:** Approved in chat; awaiting spec confirmation  
**Goal:** Polish the mobile experience site-wide (~375px+) without redesigning desktop. Fix nav UX, scale type/viewport issues, tighten cramped sections, and make the contact planner usable on phones.

## Problem

Layouts mostly stack via `grid-cols-1` → `md:` / `lg:`, but mobile UX still suffers from:

1. Mobile nav that does not close on navigate, has tiny tap targets, and allows background scroll
2. Oversized display headlines and `100vh` heroes that clip on mobile browsers
3. Cramped stats, filters, and FAQ triggers
4. Contact planner Calendly embed at a fixed tall height that fights smooth scroll

## Decision

**Fix in place** with existing Tailwind patterns and shared components. No separate mobile design system, no page-level layout forks.

## Scope

### In scope

| Area | Changes |
|------|---------|
| **Header** | Close menu on pathname change and link/CTA tap; larger mobile link tap targets (`py-3`+); lock body/Lenis scroll while open; smaller logo on mobile (`~36px`) |
| **Type & viewport** | Cap hero/display scales (e.g. `text-4xl` floors under `vw`); `min-h-dvh` on heroes; softer Final CTA title on small screens |
| **Shared sections** | FAQ triggers wrap safely (`min-w-0`); stats grids tighter padding/type; Our Work filters scroll or tighter pills; modest marquee / service-card spacing tweaks |
| **Contact planner** | Responsive Calendly height; email CTA above embed on small screens; reduce Lenis vs iframe friction where practical |

### Out of scope

- Visual redesign or new brand tokens
- New breakpoint system beyond existing Tailwind defaults
- Desktop-only layout changes except where shared components require it
- CMS / content changes (unless fixing broken `/listings` links that affect all viewports)

## Pages / files expected to change

- `components/Header.tsx`, `components/Logo.tsx` (or header-only size prop)
- `components/FinalCta.tsx`, `components/Marquee.tsx`, `components/Reveal.tsx` (optional margin)
- `components/ProjectPlanner.tsx`, `components/SmoothScroll.tsx` (if needed for Lenis)
- `components/ui/accordion.tsx` and/or FAQ markup on services/contact
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/our-work/page.tsx`, `app/contact/page.tsx`
- Possibly `app/globals.css` / `components/PageShell.tsx` for `dvh` / safe-area

## Success criteria

On ~375px width:

1. Mobile menu closes after navigation and while interacting with its links/CTA
2. Menu links are easy to tap; body does not scroll behind the open menu
3. Heroes and Final CTA fit without clipping primary CTAs / unreadably large titles
4. FAQ questions wrap; stats and filter chips are usable
5. Contact planner result is scrollable without a single 680px iframe dominating the first screen
6. Desktop (≥768px) appearance remains essentially unchanged

## Approach rejected

- Full mobile-first CSS rewrite (too large, regression risk)
- Duplicate mobile-only page trees (hard to maintain)
