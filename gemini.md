# Gemini — Design Vision & Reference

## Project
**my-portfolio** — Personal portfolio for Sathwik, CS student focused on AI/ML + Full-Stack dev.
Stack: React 18 + Vite, deployed on Vercel.

---

## Visual Identity

### Color Palette
| Role | Value |
|------|-------|
| Background (deep) | `#0a0a0a` |
| Background (surface) | `#111111` |
| Background (card) | `#161616` |
| Primary Accent | `#FF5500` (electric orange) |
| Accent Glow | `#FF7733` |
| Accent Dark | `#CC3300` |
| Text Primary | `#F0F0F0` |
| Text Secondary | `#888888` |
| Border | `#222222` |
| Border Accent | `#FF550033` |

### Typography
- **Display / Hero**: `Bebas Neue` — bold, geometric, high impact
- **Headings**: `Syne` — modern, sharp editorial feel
- **Body / UI**: `DM Sans` — clean, readable, not generic
- **Code / Mono**: `JetBrains Mono` — for tech/code snippets

Load from Google Fonts:
```
https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap
```

---

## Aesthetic Direction
**Codename: "Black Forge"**

Think: dark brutalism meets premium tech. Like a high-end GPU manufacturer's landing page crossed with a indie dev's personal space. Concrete-dark backgrounds. Sharp orange cuts. No gradients unless they're dark-to-darker or accent glows. Strong grid. Big type. Controlled chaos.

### Key Visual Rules
1. **No white backgrounds** — everything lives in the dark palette
2. **Orange is surgical** — use for CTAs, hover states, active borders, icons only
3. **Noise texture overlay** on hero — subtle grain at 3–5% opacity for depth
4. **Glowing borders** on cards — `box-shadow: 0 0 0 1px #FF550022, 0 8px 32px #FF550011`
5. **Asymmetric layouts** — hero text left-heavy, staggered grid for projects
6. **Big bold numbers** — use Bebas Neue for section counters (01, 02, 03)
7. **Horizontal rules** — thin 1px `#222` dividers between sections
8. **No rounded corners > 8px** — keep it edgy not bubbly
9. **Cursor**: custom dot cursor that turns orange on hover over links

---

## Layout Structure

```
[NAVBAR] — fixed, blurred glass, logo left | nav links right
[HERO] — full viewport, animated text reveal, CTA buttons, floating code snippet
[ABOUT] — 2-col: left = big statement, right = skills grid with icons
[PROJECTS] — asymmetric card grid, each card has: title, tech tags, brief desc, GitHub + Live links
[SKILLS] — horizontal scrolling ticker OR masonry grid with category grouping
[STATS / NUMBERS] — animated counters: Projects, DSA problems solved, Kaggle courses, etc.
[CONTACT] — minimal, email CTA + social links
[FOOTER] — one-liner + socials
```

---

## Animation Rules
- **Page load**: staggered fade-up on hero elements (0.1s delay increments)
- **Scroll reveal**: `IntersectionObserver` — sections slide up + fade in
- **Hover on cards**: border glows orange, subtle translateY(-4px), shadow deepens
- **Hover on nav links**: orange underline slides in from left
- **CTA button**: orange fill slides in from left on hover (clip-path trick)
- **Stats**: count-up animation when section enters viewport
- **No infinite looping animations** — feels cheap. One-shot reveal only.

---

## Content Placeholders (Sathwik to fill)
- Name, tagline, 2-line bio
- List of projects: GoodHome, AI Chatbot, Portfolio, ML projects
- Skills: React, Node.js, MongoDB, Python, ML/AI tools, Java (DSA), Git
- GitHub: github.com/sathwik324
- Social links

---

## Reference Aesthetic Benchmarks
- Dark, premium — like Linear.app or Vercel's own site
- Orange energy — like Cloudflare or Remix's orange moments
- Dev portfolio vibe — like brittanychiang.com but darker and more aggressive

---

## Deployment Target
**Vercel** — `vercel.json` config included. Auto-deploy from `main` branch.
Build command: `npm run build` | Output dir: `dist`