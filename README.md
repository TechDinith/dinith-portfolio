# Dinith Rukantha — Portfolio

A recruiter-focused software engineering portfolio built with Next.js (App Router) and plain CSS. No database, API keys, analytics, or third-party runtime services are required.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command             | Purpose                              |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Production build                     |
| `npm run start`     | Serve the production build           |
| `npm run typecheck` | `tsc --noEmit`                       |
| `npm run lint`      | ESLint (flat config)                 |
| `npm run icons`     | Regenerate favicon / Apple / OG icon |

## Before publishing

1. **Set your production URL.** Copy `.env.example` to `.env.local` and set
   `NEXT_PUBLIC_SITE_URL`. This drives the canonical link, Open Graph/Twitter
   previews, `sitemap.xml` and `robots.txt`. The fallback is
   `https://dinith-rukantha.vercel.app`.
   On Vercel, set it under **Project Settings → Environment Variables**.
2. **Verify every external project URL** is still publicly available — a dead
   link on a live project is the fastest way to lose a recruiter.
3. **Re-check the employment wording** if your role or tenure changes.
4. **Refresh the CV PDF** in `public/` when your experience changes, then
   update the size shown on the card (it is read from disk at build time, so
   it updates automatically).

## Structure

```
app/
  layout.tsx        metadata, fonts, JSON-LD Person schema
  page.tsx          all page content
  globals.css       single stylesheet
  components/
    MobileNav.tsx   hamburger menu (<=880px)
    DocumentCard.tsx  CV / cover letter download card
  icon.svg, favicon.ico, apple-icon.png, opengraph-image.png
  robots.ts, sitemap.ts
lib/site.ts         name, links, document list, site URL
public/
  Dinith_Rukantha_CV.pdf
  Dinith_Rukantha_Cover_Letter.pdf
scripts/make-icons.py   icon generator (needs Python + Pillow)
```

## Deploy to Vercel

Push this folder to GitHub, then import the repository into Vercel. Vercel
detects Next.js automatically. Set `NEXT_PUBLIC_SITE_URL` in the Vercel project
settings.

## Notes

- Fonts are self-hosted via `next/font` — no third-party requests at runtime.
- All downloadable PDFs are plain text PDFs (ATS-readable), not images.
- Versions are pinned exactly in `package.json` for reproducible deploys.

## Content safety

The portfolio uses only claims and projects represented in the supplied CV and
cover letter, plus the additional skills the owner confirmed. It intentionally
avoids confidential implementation details, internal company metrics, private
architecture information, testimonials, or invented achievements. Skill entries
marked "(basics)" reflect the level stated in the CV. No project metrics or
user counts are claimed anywhere on the site.

### Skills added beyond the current CV

These appear on the site but are **not yet in `Dinith_Rukantha_CV.pdf`**. Update
the CV to match, otherwise the site and CV disagree:

| Site entry                    | Where it goes in the CV                                            |
| ----------------------------- | ----------------------------------------------------------------- |
| `Tailwind CSS` (primary)      | `Frontend` in Technical Skills — already listed, but not ranked    |
| `Material UI (MUI)`           | `Frontend` line in Technical Skills — **new**                      |
| `Ant Design`                  | `Frontend` line — already present                                   |
| `Claude Code`, `OpenCode`     | `AI / APIs` line in Technical Skills — **new**                      |
| `React.js` on Student Portal  | `KEY PROJECTS` → Student Portal description — **new**              |
| `Elstar Admin` + Tailwind     | `KEY PROJECTS` → Student Portal description — **new**              |

Suggested Technical Skills edit, replacing the `Frontend:` and `AI / APIs:` lines:

```
Frontend: React.js · Next.js · GatsbyJS · React Native · Redux · Redux-Saga · Redux-Thunk ·
Tailwind CSS (primary) · Ant Design · Material UI · Sass · Elstar · Axios
AI / APIs & Agents: OpenAI · Anthropic · Claude Code · OpenCode
```

And for `Student Portal — The Students Visa`, add the frontend to the existing
sentence so it matches the site:

> Self-service portal enabling students to track visa application progress,
> upload and manage documents, schedule consultations, and monitor case status
> in real time. The React.js frontend is built on the Elstar React admin
> template with Tailwind CSS, on top of a multi-tenant Spring Boot back end with
> AWS S3 document storage and MySQL/MongoDB persistence.

### Note on the Elstar template

`Elstar` is a third-party commercial React admin template
(https://elstar.themenate.net). The site's project card links only to the
Student Portal itself, not to the template, so the link list stays
unambiguous. The template is credited by name in the description instead, which
is the honest framing: the portal is the candidate's work, the template is
third-party.

### Known, accepted divergence

The CV PDF is intentionally left as-is at the owner's request. The site is a
strict superset of the CV: everything on the CV appears on the site, and the
site additionally lists `Material UI`, `Claude Code`, `OpenCode`, the Elstar
frontend detail, and marks Tailwind CSS as primary. A recruiter may notice the
site lists more than the CV; that is low risk because the site is additive, but
it is worth aligning the CV at the next natural revision.


