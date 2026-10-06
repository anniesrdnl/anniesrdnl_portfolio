# Annie Sardiniola — Portfolio

My personal portfolio: a single-page site showcasing my projects, services, journal, and tech stack.

**Live site:** [anniesrdnl-dev.vercel.app](https://anniesrdnl-dev.vercel.app/)

## Features

- Typewriter-style hero intro with a light confetti burst
- Sidebar navigation that highlights the current section as you scroll
- Project cards with live links
- Services, journal entries, and a grouped tech stack
- Responsive layout with a dedicated mobile header and bottom nav
- Respects `prefers-reduced-motion`

## Built with

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting started

Requires [Node.js](https://nodejs.org/) 20 or later.

```bash
git clone https://github.com/anniesrdnl/anniesrdnl_portfolio.git
cd anniesrdnl_portfolio
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Lint the code with ESLint            |

## Project structure

```
src/
├── components/   # Sidebar, MobileHeader, ProjectCard, ServiceCard, ...
├── data/         # portfolio.js — projects, services, journal, tech stack
├── assets/       # Images
├── App.jsx       # Page layout and sections
└── App.css       # Styles
```

Most content (projects, services, tech stack) lives in `src/data/portfolio.js`, so it can be updated without touching the components.

## Contact

Email: [anniesardiniola@gmail.com](mailto:anniesardiniola@gmail.com)
