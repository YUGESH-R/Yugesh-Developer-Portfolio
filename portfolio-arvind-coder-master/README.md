# Arvind Singh Portfolio

A dark, motion-forward personal portfolio for Arvind Singh, built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

The site is data-driven from `src/data/portfolio.json`, so profile copy, social links, experience, projects, and testimonials can be updated without changing the component code.

## Features

- Responsive hero section with chrome-gradient display typography
- Smooth anchor navigation for Home, About, Skills, Projects, and Contact
- Data-bound About, Experience, Projects, Testimonials, and Footer sections
- Sticky stacked project cards with image or styled placeholder support
- CSS-only testimonial marquee with reduced-motion fallback
- Reusable social link buttons powered by `profile.social`
- Tailwind-based dark theme with Framer Motion scroll animations

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Requirements

- Node.js 18 or newer
- npm 9 or newer

Check your local versions:

```bash
node --version
npm --version
```

## Installation

Install dependencies from the project root:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Runs the Vite development server with hot reload.

```bash
npm run build
```

Runs TypeScript project checks and creates a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for verification.

## Project Structure

```text
src/
  assets/
    img/                  # Local image assets
  components/             # React UI sections and shared components
  data/
    portfolio.json        # Main site content source
  hooks/
    usePortfolio.ts       # Typed portfolio data access
  types/
    portfolio.ts          # Portfolio data interfaces
  App.tsx                 # Section order
  index.css               # Tailwind entry and shared CSS
  main.tsx                # React mount
```

## Editing Site Content

Most content lives in:

```text
src/data/portfolio.json
```

Common updates:

- `profile`: name, bio, specialization, location, social links
- `experience`: company, role, period, summary, highlights
- `projects`: project title, subtitle, description, link, image, highlight order
- `testimonials`: quote, name, role, avatar color

Notes:

- Project cards render projects with `highlight: true` first.
- Empty project links hide the `LIVE PROJECT` button.
- Empty project images render a styled placeholder.
- Testimonial names marked with `// DUMMY:` are placeholders and should be replaced with real reviewer names when available.

## Styling Notes

- Tailwind scans `index.html` and `src/**/*.{ts,tsx}`.
- Shared chrome-gradient heading styling lives in `src/index.css` as `.hero-heading`.
- The site uses the Kanit font family from the existing Tailwind config.
- Section order is controlled in `src/App.tsx`.

## Production Build

Create the optimized production build:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

Deploy the generated `dist/` folder to any static hosting provider such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Maintenance Checklist

- Replace all `// DUMMY` testimonial values before publishing as real endorsements.
- Replace any `// FILL IN` values in `portfolio.json`.
- Add real project images to each `projects[].image` field when available.
- Run `npm run build` before deployment.
