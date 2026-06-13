# Portfolio — Neftali Hernández

My personal portfolio: a fast, minimal site built with Astro. Showcases my
work experience, projects, and skills, with full English/Spanish support.

## Tech stack

- [Astro](https://astro.build) — static site, View Transitions for smooth navigation
- [React](https://react.dev) islands for interactive bits
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- i18n (`es` / `en`) and a light/dark theme

## Development

All commands run from the root of the project:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `bun install`   | Install dependencies                         |
| `bun dev`       | Start the dev server at `localhost:4321`     |
| `bun build`     | Build the production site to `./dist/`       |
| `bun preview`   | Preview the production build locally         |

## Project structure

```text
src/
├── assets/        # Images, brand logos, icons
├── components/    # Astro + React components
├── i18n/          # Translations (es / en)
├── layouts/       # Base layout
├── lib/           # Utilities
├── pages/         # Routes (/ and /en)
└── styles/        # Global styles
```
