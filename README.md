# Fati Sango — Professional Portfolio

A single-page portfolio for **Fati Sango**, social entrepreneur and business analyst based in **Kigali, Rwanda**. The site presents her story, education, skills, ventures, and impact metrics with a clear editorial layout and accessible, performant front-end delivery.

**Live positioning (site summary):** Designing practical, scalable systems that respond to community needs, with emphasis on social enterprise, AI-enabled service workflows, business analytics, CRM/MIS, and monitoring and evaluation.

---

## Contents

| Section        | Purpose |
|----------------|---------|
| **Hero**       | Introduction, portrait, primary calls to action |
| **Impact**     | Key quantitative highlights |
| **About**      | Narrative, mission, core values |
| **Education**  | Learning path (timeline) |
| **Skills**     | Expertise grid and languages |
| **Projects**   | Ventures and programmes with outbound links |
| **Contact**    | Direct details and contact form (client-side demo) |
| **Footer**     | Quick links, social profiles, copyright |

Copy and structured data (projects, education, metrics, social links) live in **`src/data/content.ts`** so updates do not require hunting through components.

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Runtime | **React 19** + **TypeScript** |
| Build | **Vite 8** |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`, design tokens in `src/index.css`) |
| Motion | **Framer Motion** (section entrances, hero, counters) |
| SEO | **react-helmet-async** (title, meta, Open Graph) + **JSON-LD** `Person` schema in `App.tsx` |
| Quality | **ESLint** (React Hooks, refresh rules) |

Fonts: **Montserrat** (Google Fonts), loaded from `index.html`.

---

## Implementation strategies

1. **Separation of content and UI**  
   All long-form copy, project CTAs, education rows, impact numbers, and social URLs are centralized in **`src/data/content.ts`** (and types in **`src/types`**). Components focus on layout, motion, and accessibility.

2. **Design system**  
   Brand colors (`primary`, `cta`, `surface`, `canvas`, `ink`) and **`cta-light`** for hero accents are defined in **`src/index.css`** under `@theme`, keeping typography and color consistent across sections.

3. **Performance**  
   Static Vite build; images use appropriate `loading`/`decoding` where applicable; hero assets prioritized for first paint.

4. **Accessibility**  
   Landmarks (`main`, `header`, `footer`, `nav`), heading hierarchy, `aria-labelledby` / `aria-label` on key regions, and visible focus paths on interactive elements.

5. **SEO & sharing**  
   Unique meta description per deployment via Helmet; Open Graph and Twitter card tags; structured data for person and location.

6. **Responsive behavior**  
   Mobile navigation (details/summary pattern), stacked grids on small viewports, multi-column layouts from `md`/`lg` breakpoints.

7. **Contact form**  
   Submissions are handled **in the browser only** in this demo (no backend). For production, replace the handler in **`Contact.tsx`** with your API or form service.

---

## Getting started

**Requirements:** Node.js 20+ (recommended).

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run ESLint |

---

## Project layout (high level)

```
public/           # Static assets (e.g. favicon, hero portrait)
src/
  components/     # Page sections and UI (Hero, About, Navbar, …)
  data/content.ts # Copy, projects, education, links
  types/          # TypeScript interfaces
  index.css       # Tailwind import + @theme tokens
  App.tsx         # Shell, Helmet, JSON-LD, section order
```

---

## Deployment

Output is a **static site** in **`dist/`** after `npm run build`. Host on any static host (Netlify, Vercel, GitHub Pages, S3, etc.). Set the site URL in your host’s environment if you add canonical or OG image URLs later.

---

## Credits

**Fati Sango** — Social Entrepreneur \| Business Analyst, Kigali, Rwanda.

Repository: **sango-portfolio** (private).
