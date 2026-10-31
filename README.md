# sudheer-029.github.io

Personal portfolio of **Sudheer Bishnoi, AI Automation Engineer** — live at <https://sudheer-029.github.io/>.

## Stack

- React 19 + Vite, Tailwind CSS v4 (theme tokens in `src/index.css`)
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Editing content

All copy lives in [`src/data.js`](src/data.js): hero text, headline numbers, case studies, smaller builds, experience and skills. Layout components in `src/components/` only read from it.

| What | Where |
| --- | --- |
| Shared colours | `src/theme.js` |
| Scroll-reveal + reduced-motion helpers | `src/hooks.js` |
| Architecture diagrams linked from case studies | `public/diagrams/` |
| Social preview image (1200×630) | `public/og-image.png` |

### Adding the CV

1. Put the PDF in `public/resumes/` (e.g. `public/resumes/Sudheer_Bishnoi_CV.pdf`).
2. Set `cvUrl: '/resumes/Sudheer_Bishnoi_CV.pdf'` in `person` inside `src/data.js`.

The "Download CV" buttons in the hero and contact section appear only when `cvUrl` is set.

## Run locally

```bash
npm ci
npm run dev      # http://localhost:5173
npm run lint
npm run build    # output in dist/
```

## Accessibility

- Text colours meet WCAG AA contrast on the dark background.
- Animations and the typing terminal are switched off for visitors with `prefers-reduced-motion`.
- Visible focus outlines on every link and button; the mobile menu exposes `aria-expanded`.
