# joy-portfolio

Personal site for Joy Sarkar — Senior Flutter Developer. Single-page, dark,
with a three.js hero (a phone whose screen is a live-painted canvas texture,
orbited by tech chips) and scroll-reveal sections.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@theme` tokens in `src/index.css`)
- three.js via `@react-three/fiber` + `@react-three/drei` (hero only, lazy-loaded)
- `framer-motion` for reveals, `lenis` for smooth scrolling

## Run

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serves dist/ at http://localhost:4173
```

## Where things live

| What                                  | File                                        |
| ------------------------------------- | ------------------------------------------- |
| All copy, links, numbers, projects    | `src/data.ts`                               |
| Colours, fonts, animations            | `src/index.css` (`@theme` block)            |
| 3D phone, chips, parallax             | `src/three/PhoneScene.tsx`                  |
| The fake app screens on the phone     | `src/three/screenPainter.ts`                |
| Sections                              | `src/components/*.tsx`                      |
| Resume PDF (linked from nav + hero)   | `public/resume.pdf`                         |
| App icons shown in project cards      | `public/icons/`                             |

To update the resume, replace `public/resume.pdf`. To add a project, append to
`projects` in `src/data.ts` (drop an icon in `public/icons/` or leave `icon`
unset to get a gradient tile).

## Deploy

`netlify.toml` is included: connect the repo on Netlify and it builds with
`npm run build` and publishes `dist/`. Any static host works the same way.
