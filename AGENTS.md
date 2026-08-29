## Project Overview

This is the new website for **FIZJOMAT** — a physiotherapy clinic in Gliwice, Poland (ul. Sowińskiego 72).

**Goal:** Replace the old WebWave site at `fizjomat.com.pl` with this Astro static site. The migration is in progress — the new site is not yet live on the production domain.

### Current deployment
- GitHub repo: `github.com/fizjomat/website`
- Hosting: Cloudflare Pages — auto-deploys on every push to `main`
- Current staging URL: `fizjomat.pages.dev` or `fizjomat.com`
- Production domain (not yet switched): `fizjomat.com.pl`

### Switching to production
When ready to go live on `fizjomat.com.pl`:
1. In Cloudflare Dashboard → Pages → Custom Domains → add `fizjomat.com.pl`
2. Remove the `SITE_URL` env var in Cloudflare Pages (or set it to `https://fizjomat.com.pl`)
3. Push any change to `main` to trigger a fresh build

### Domain configuration
The canonical site URL is controlled by the `SITE_URL` environment variable in Cloudflare Pages.
Default (when unset): `https://fizjomat.com.pl`. Override with the staging URL during development.

### What's on the site
- Single-page layout: Hero, Gallery (7 photos), O nas, Usługi (6 services), Zespół (2 therapists), Kontakt
- Service detail pages: `/uslugi/[slug]`
- Blog: `/blog` and `/blog/[slug]`
- PDFs in `public/`: `cennik.pdf`, `pierwsza-wizyta.pdf`

### Team & booking
- **Michał Klapuch** → `booksy.com/pl-pl/310393_fizjomat-michal-klapuch_fizjoterapia_12795_gliwice`
- **Szymon Mączko** → `booksy.com/pl-pl/337615_szymon-maczko-fizjoterapia-i-trening_fizjoterapia_12795_gliwice`

### Contact form
Uses [Web3Forms](https://web3forms.com). Access key in `src/pages/index.astro` is registered to `fizjomat@gmail.com`. Submissions forwarded by email — no backend needed.

### Social media
- Facebook: `https://www.facebook.com/profile.php?id=61592140524615`
- Instagram: `https://www.instagram.com/fizjomat.michal.klapuch/`

### Old site reference
The previous site was built with WebWave and is still live at `fizjomat.com.pl`. It is a single-page site with no subpages, no blog, and no service detail pages. The new Astro site is a superset of its content.

---

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
