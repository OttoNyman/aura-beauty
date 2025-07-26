# Copilot Instructions for Aura Beauty Landing (Next.js)

## Project Architecture
- Built with Next.js App Router (`app/`), using server and client components.
- Multilingual support via middleware (`middleware.js`) and language-specific routing (`app/[lang]/`).
- Dictionaries for translations are stored in `dictionaries/ru.json` and `dictionaries/en.json`.
- Main UI components are in `app/components/` and are imported explicitly in pages.
- Custom interactive components (e.g., `AsciiArtMusicCanvas.js`) use translations from dictionaries and are client components (`"use client"`).
- Static assets (images) are in `public/images/` and referenced with absolute paths (e.g., `/images/photo1.jpg`).

## Developer Workflows
- Start dev server: `npm run dev` (or `yarn dev`)
- Hot reload is enabled for all files in `app/`.
- No custom test or build scripts beyond Next.js defaults.
- For i18n, update dictionaries and ensure new keys are used in components.
- Remote images must be whitelisted in `next.config.mjs` under `images.remotePatterns`.

## Patterns & Conventions
- All imports must be explicit; auto-import is not enabled by default (install VS Code extension for React snippets if needed).
- Use dynamic import for dictionaries in pages (see `app/[lang]/page.js`).
- Client components must be marked with `"use client"` at the top of the file.
- All user-facing text should be sourced from the appropriate dictionary file for translation.
- Middleware handles locale detection and redirects; see `middleware.js` for logic.
- Page-level components receive `dict` prop for translations.
- Use only `/images/...` for static assets, not relative or public-prefixed paths.

## Integration Points
- Uses `@formatjs/intl-localematcher` and `negotiator` for locale matching in middleware.
- Uses `next/font/google` for font optimization.
- No backend/API integration; all data is static or client-side.

## Example: Adding a Translatable Component
1. Add keys to both `dictionaries/en.json` and `dictionaries/ru.json`.
2. Import and use the dictionary in your page/component.
3. Pass the relevant translation as a prop to your component.
4. Mark new interactive components as client components if using hooks.

## Key Files & Directories
- `app/[lang]/page.js` — main page logic, imports all UI components
- `app/components/` — reusable UI and interactive components
- `dictionaries/` — translation files
- `middleware.js` — locale detection and redirect logic
- `next.config.mjs` — Next.js config, including remote image domains
- `public/images/` — static assets

---

If any conventions or workflows are unclear, please request clarification or examples from the user.
