# Bolelwane Precast Construction — Website

Production-ready website for **Bolelwane Precast Construction**, rebranded from the WebDevPro Ultra Max 5 master template.

React 18 + TypeScript + Vite + Tailwind · multi-page routing · animated hero slider · gallery · FAQ · testimonials · Contact page with validated quote form and map · PWA (manifest, install prompt, offline page, service worker) · mobile bottom menu · interactive WhatsApp lead assistant.

## Where to edit things
| What | File |
| --- | --- |
| Phone / WhatsApp number, booking fee, price list, provinces, payment terms, service dropdown options | `src/config/site.ts` |
| Customer reviews (empty = "share your feedback" panel is shown) | `src/data/reviews.ts` |
| Photos | `public/images/` (referenced from `src/config/site.ts`) |
| Logo / favicon / app icons | `public/logo.svg`, `public/icons/` |
| Social share image | `public/og-image.jpg` |
| Brand colours (navy + gold) | `tailwind.config.js` (`amber` = gold, `stone` = navy) |
| Page title / SEO / share metadata | `index.html` |
| App name & colours when installed | `public/manifest.json` |

## Development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Deploy (GitHub + Vercel)
1. Push the repository contents to GitHub.
2. Import the repo in Vercel → Framework: **Vite**, Build: `npm run build`, Output: `dist`.
3. `vercel.json` already handles direct-route / refresh support.
4. After you have your domain, open `index.html` and add the canonical link, and make the `og:image` / `twitter:image` URLs absolute (e.g. `https://yourdomain.co.za/og-image.jpg`) so WhatsApp/Facebook previews show the image.

See `MASTER-TEMPLATE-5-GUIDE.md` for the master-template rules.
