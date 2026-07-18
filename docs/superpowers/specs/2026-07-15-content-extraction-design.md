# Content extraction design

**Date:** 2026-07-15  
**Status:** Approved for implementation planning  
**Goal:** Move all editable marketing copy out of page/component TSX into a top-level `content/` folder so copy can be edited in one clear place without touching layout code.

## Problem

Shared lists already live in `lib/content.ts` (services, projects, FAQs, site contact info). Page headlines, SEO meta, CTAs, section intros, form labels, nav labels, and Final CTA copy are still hardcoded across:

- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/our-work/page.tsx`, `app/contact/page.tsx`
- `components/Header.tsx`, `components/Footer.tsx`, `components/FinalCta.tsx`, `components/Marquee.tsx`

Editing site wording requires hunting through JSX.

## Decision

Use a top-level `content/` folder with:

- **One shared file** for site-wide / multi-page data
- **One content file per page** for page-specific copy

No CMS, Markdown, or i18n in this change.

## Folder layout

```tsx
content/
  site.ts        # shared across pages and components
  home.ts
  about.ts
  services.ts
  our-work.ts
  contact.ts
  index.ts       # barrel re-exports (optional convenience)
```

Imports use the existing `@/*` path alias, e.g. `@/content/home`, `@/content/site`.

## Ownership of data

### `content/site.ts`

Owns anything used by more than one page or by shared chrome:

| Export | Consumers |
| ------ | ---------- |
| `SITE` (name, email, phone, address, tagline, socials) | Footer, Contact |
| Nav + footer link lists | Header, Footer |
| `SERVICES` | Home, Services, Contact, Marquee |
| `INDUSTRIES` | Home, About |
| Final CTA copy (eyebrow, headline, body, CTA labels/hrefs) | `FinalCta` |
| Marquee extra labels (beyond service titles) | `Marquee` |

Single-page catalogs live with their page (below), not in `site.ts`.

Legacy / unused exports currently in `lib/content.ts` (`services`, `sectors`, `packages`, `featuredWork`, `processSteps` — lowercase) have no live consumers under the current `app/` routes and should be dropped during migration. Do not invent new consumers for dead data. Update `README.md` if it still points at `lib/content.ts`.

### Per-page files

Each page file owns copy unique to that route, including lists only rendered on that page:

| File | Contents |
| ------ | ---------- |
| `home.ts` | SEO; hero (eyebrow, headline lines, accent line, body, CTAs); `BENEFITS`; `TESTIMONIALS`; services-preview section headers/link label; about-preview (eyebrow, headline, body, CTA, image src/alt) |
| `about.ts` | SEO; hero; stats; mission; differentiators (including icon imports); office images (src/alt); section headers |
| `services.ts` | SEO; hero; `STEPS`; `FAQS`; process section headers; FAQ section headers |
| `our-work.ts` | SEO; hero; `PROJECTS`; `FILTERS`; empty-state message |
| `contact.ts` | SEO; hero; form field definitions (labels, placeholders, required flags); form submit labels; sidebar section labels |

Pages keep animation, layout, and interactivity. Content files hold strings, lists, URLs, and icon component references (same Lucide pattern as today's `SERVICES`).

## Page / component changes

1. Replace inline strings with imports from the matching content module.
2. Update `Header`, `Footer`, `FinalCta`, and `Marquee` to read from `content/site.ts`.
3. Delete `lib/content.ts` after all imports point at `@/content/...`.
4. Grep for residual marketing strings and `lib/content` imports; fix any leftovers.
5. No visual or behavioral changes — copy and structure must render the same.

## Icon and image handling

- Lucide icons used as editorial data (services, differentiators) are imported inside the content files and passed through as components.
- Editorial image URLs and alt text live in content objects.
- Decorative / layout-only images that are inseparable from a specific layout flourish can stay in the page only if they have no editable marketing text; prefer moving them when they describe brand/space content.

## Out of scope

- CMS, Markdown, or remote content APIs
- Internationalization
- Redesign, rebranding, or copy rewrites
- Changing routes or component APIs beyond accepting content props / imports

## Success criteria

- Editing any page's visible marketing copy only requires opening that page's content file (or `site.ts` for shared chrome/catalog).
- Pages and shared components contain no hardcoded marketing headlines, body copy, SEO titles/descriptions, CTA labels, or contact details.
- Site looks and behaves identically after the migration.
- `lib/content.ts` is removed.
