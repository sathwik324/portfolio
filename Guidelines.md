# 📋 Guidelines — Dev Conventions & Rules

## Project Setup
- **Framework**: React 18 + Vite (`create-react-app` → migrate to Vite if still on CRA)
- **Styling**: Pure CSS modules OR a single `styles.css` + component-level `module.css` files — NO Tailwind, NO styled-components
- **State**: `useState` / `useEffect` only — no Redux, no Zustand needed
- **Routing**: `react-router-dom` v6 for section-based navigation if needed
- **Icons**: `react-icons` (use `Fi` for Feather icons, `Si` for devicons)
- **Animations**: CSS keyframes + IntersectionObserver — no GSAP unless strictly needed
- **Fonts**: Google Fonts via `<link>` in `index.html`

---

## File Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Stats.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── projects.js      ← project data array, easy to edit
├── hooks/
│   └── useIntersection.js  ← reusable scroll reveal hook
├── styles/
│   ├── globals.css       ← CSS variables, reset, base styles
│   └── [Component].module.css
├── App.jsx
└── main.jsx
```

---

## CSS Variable Convention
All design tokens live in `:root` inside `globals.css`:
```css
:root {
  --bg-base: #0a0a0a;
  --bg-surface: #111111;
  --bg-card: #161616;
  --accent: #FF5500;
  --accent-glow: #FF7733;
  --accent-dim: #FF550033;
  --text-primary: #F0F0F0;
  --text-secondary: #888888;
  --border: #222222;
  --font-display: 'Bebas Neue', sans-serif;
  --font-heading: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  --radius: 6px;
  --max-width: 1200px;
}
```

---

## Component Rules

### Naming
- PascalCase for components: `ProjectCard.jsx`
- camelCase for hooks: `useScrollReveal.js`
- kebab-case for CSS modules: `project-card.module.css`

### Structure per component
```jsx
// 1. Imports
// 2. Data / props destructure
// 3. Hooks / handlers
// 4. JSX return
// 5. Export default
```

### NO inline styles — use CSS modules or globals.css only

---

## Data Management
All project/skills data goes in `src/data/` — never hardcoded inside JSX.

Example `projects.js`:
```js
export const projects = [
  {
    id: 1,
    title: "GoodHome",
    description: "Family communication platform like Discord",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/sathwik324/...",
    live: "https://...",
    featured: true,
  },
  // ...
];
```

---

## Animation Pattern (Scroll Reveal)
```js
// hooks/useIntersection.js
import { useEffect, useRef, useState } from 'react';

export function useIntersection(options = {}) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
```

```css
/* Usage pattern */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s var(--transition), transform 0.6s var(--transition);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Vercel Deployment

### `vercel.json` (root of project)
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### `package.json` build script must have:
```json
"scripts": {
  "build": "vite build",
  "preview": "vite preview"
}
```

### Deploy steps:
1. Push all changes to `main` branch on GitHub
2. Go to vercel.com → Import project from GitHub → `sathwik324/my-portfolio`
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy

---

## README Template
The README must include:
- Project banner / screenshot
- Live demo link (Vercel URL)
- Tech stack badges
- Features list
- Local setup instructions
- Deployment notes

---

## Quality Checklist Before Push
- [ ] Mobile responsive (test at 375px, 768px, 1280px)
- [ ] No console errors
- [ ] All links working
- [ ] Fonts loading correctly
- [ ] Scroll animations firing
- [ ] `vercel.json` present
- [ ] README updated with live URL

---

## Antigravity Prompt Style
- Keep prompts short and directive
- One task per prompt session
- Reference file paths explicitly when editing specific files