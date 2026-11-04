# Viktor Johansson — Portfolio

A modern, minimalist portfolio built with React, TypeScript, and Vite. The design leans into a monochrome aesthetic, negative space, and clear typographic hierarchy to keep focus on content.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Lucide](https://img.shields.io/badge/Lucide-React-000000?logo=lucide&logoColor=white)](https://lucide.dev)
[![CSS](https://img.shields.io/badge/CSS-Modules-2965f1?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Overview

This portfolio showcases selected projects, a short bio, and a clean modal-driven project viewer. It’s responsive and accessible, with language support via a simple i18n setup.

## Aesthetics & Design Challenge

I challenged myself to:
- Keep the site fully monochrome to reduce visual noise and emphasize structure.
- Use negative space and scale to create a natural information hierarchy.
- Avoid heavy frameworks on the styling side; prefer straightforward CSS modules and semantic HTML.

The result is a calm, readable interface where content leads and decoration follows.

## Quick Start

```bash
npm install
npm run dev
```
Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```
Outputs production files to the `dist/` folder.

## Deploy

- Optimized for Vercel; see `vercel.json` for defaults.
- Typical settings: build `npm run build`, output `dist`, install `npm install`.

## SEO & synlighet

Sajten är en React-SPA, men `npm run build` prerendrar hela innehållet till
`dist/index.html` via `scripts/prerender.mjs` (körs automatiskt som `postbuild`).
Det gör att Google och AI-crawlers som inte kör JavaScript ändå ser texten.

Allt som rör titel, beskrivning, canonical, Open Graph och JSON-LD finns i
`src/seo/config.ts`. Ändra domän där om sajten flyttas till en egen domän, och
uppdatera samtidigt `public/robots.txt` och `public/sitemap.xml`.

Övriga filer:

- `public/robots.txt` – tillåter sökmotorer och AI-botar, pekar på sitemapen.
- `public/sitemap.xml` – skickas in till Google/Bing.
- `public/llms.txt` – kort maskinläsbar sammanfattning för AI-assistenter.

### Bilder

Bilderna i `public/` är WebP. När du lägger till nya skärmdumpar eller foton:

```bash
npm run optimize:images
```

Skriptet skalar ned till max 1400 px (porträtt till 900 px), skriver `.webp` och
genererar dessutom `public/og-image.jpg`. Referera sedan till `.webp`-filen i
`src/data/projects.ts`.

### Google Search Console

1. Logga in på [search.google.com/search-console](https://search.google.com/search-console) med ditt Google-konto.
2. Lägg till `viktorjohansson.vercel.app` som property.
3. Välj verifiering med HTML-tagg och klistra in taggen i `index.html` där kommentaren finns.
4. Deploya, klicka Verifiera.
5. Skicka in `https://viktorjohansson.vercel.app/sitemap.xml` under Sitemaps.

Bing Webmaster Tools kan importera samma property och är värt att göra eftersom
Bing bland annat ligger bakom en del av det ChatGPT söker på.

## License

© 2026 Viktor Johansson
