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
cover letter. It intentionally avoids confidential implementation details,
internal company metrics, private architecture information, testimonials, or
invented achievements. The technical stack mirrors the CV's own skill categories
(Core, Intermediate · AWS, Agentic AI, AI Integrations, Exposure, Testing,
Programming, Tools, Learning) and lists only skills the CV lists. No project
metrics or user counts are claimed anywhere on the site.

### CV alignment

The site is kept in sync with `Dinith_Rukantha_CV.pdf`. The CV covers the full
technical skill set — including Material UI, Ant Design, Claude Code, OpenCode,
DeepSeek, AWS EventBridge and PostgreSQL — and the site presents the same
experience, projects and skills.

### Note on the Elstar template

`Elstar` is a third-party commercial React admin template
(https://elstar.themenate.net). The site's project card links only to the
Student Portal itself, not to the template, so the link list stays
unambiguous. The template is credited by name in the description instead, which
is the honest framing: the portal is the candidate's work, the template is
third-party.

### Site-specific detail

The only detail on the site that goes beyond the CV is the `Elstar` React admin
template credited in the Student Portal description (see above).


