# naveenanand.com — personal site of Naveen Anand Gunalan

Engineering Leader · Architect · Builder.
Next.js 16 + TypeScript + Tailwind v4, fully static export (`output: "export"`) — no server required.

## Commands

```bash
npm install        # once
npm run dev        # local dev at http://localhost:3000
npm run build      # static export → ./out
```

Everything in `./out` is the deployable site.

## Editing content (no component changes needed)

All copy lives in typed data files under `src/data/`:

| File | What it controls |
|---|---|
| `profile.ts` | name, titles, email, LinkedIn, resume path, credibility metrics |
| `projects.ts` | the 5 Selected Systems + full case-study content |
| `experience.ts` | career timeline + resume page bullets + education |
| `technologies.ts` | Technology Explorer categories and tech→system relationships |
| `philosophy.ts` | "How I approach hard problems", operating range, business→production loop |
| `exploring.ts` | "Currently Exploring" cards |

To update the resume PDF: replace `public/resume/Naveen-Anand-Gunalan-Resume.pdf` (same filename) and rebuild.

To add a patent record later: the Patents section copy is in `src/app/page.tsx` (§ "Inventing new interfaces") — designed to become data-driven when real patent metadata is provided.

Routes reserved for the future: `/writing` (technical posts) and `/lab` (experiments) — add `src/app/writing/page.tsx` etc. when ready; nav is in `src/components/Nav.tsx`.

## Analytics (off by default, privacy-conscious)

`src/lib/analytics.ts` is a no-op unless a provider is configured.
To enable Plausible: set `NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible` at build time and add the Plausible `<script>` to `src/app/layout.tsx`. Events already instrumented: `resume_click`, `linkedin_click`, `contact_click`, `project_view`.

## Deploying to www.naveenanand.com

The site is pure static files — any of these work:

**Option A — Cloudflare Pages / Netlify / Vercel (recommended: free, automatic HTTPS)**
1. Push this folder to a GitHub repo.
2. Create a project on the platform; set build command `npm run build`, output directory `out`.
3. Add custom domain `www.naveenanand.com` (and apex redirect), then update the DNS records at your registrar as the platform instructs (CNAME for `www`).
4. HTTPS certificates are provisioned automatically — this also permanently fixes the expired-certificate problem on the old host.

**Option B — keep the existing host**
Upload the *contents* of `out/` to the web root via FTP/cPanel (replacing the old site). Note: the expired SSL certificate is a hosting-account issue — renew it (most hosts offer free Let's Encrypt) or visitors will still see warnings on https://.

After deploy, verify: `https://www.naveenanand.com/sitemap.xml`, `/robots.txt`, the resume download, and the OG preview (paste the URL into LinkedIn's Post Inspector).

## Structure

```
src/
  app/            routes: / /work /work/[slug] /ai /spatial /leadership /about /resume + 404, sitemap, robots
  components/     Nav, Footer, HeroGraph, MetricStrip, SystemCard, ArchitectureDiagram,
                  SystemFlow, BeamformingViz, TactilityPipeline, TechnologyExplorer,
                  Timeline, OperatingRange, CommandPalette (⌘K — try `whoami`), Reveal, Section
  data/           all site content (see table above)
  lib/            analytics abstraction
public/           resume PDF, og.png social image
```
