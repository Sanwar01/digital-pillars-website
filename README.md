# Digital Pillars Website

Next.js, TypeScript and Tailwind website for Digital Pillars, positioned as a digital partner for UK local businesses that need better websites, software and automation.

## App Structure

- `app/` - App Router entry, layout, metadata, robots and sitemap routes.
- `components/` - reusable homepage sections and shared layout components.
- `lib/content.ts` - typed content arrays for services, sectors, packages, work and process steps.
- `app/globals.css` - Tailwind layers plus shared component classes.

## Local Development

Install dependencies and start the Next development server:

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run build
```
