# Personal Site Template

A minimal, institutional-tone Next.js personal site. Black/white/gray, no color, optimized for VC and institutional readers.

Built with Next.js 15 App Router, TypeScript, Geist fonts. Light + dark mode. Subtle breathing background animation. Resend integration for the contact form.

## Pages

- **Home** — single tagline hero
- **Experience** — current / past / education with metrics
- **Events** — chronological event list with metrics topbar
- **Contact** — form + social links
- **Writing** — placeholder

## Local development

1. `npm install`
2. Copy `.env.local.example` to `.env.local` and fill in (only needed if you want the contact form to work locally):

```
   RESEND_API_KEY=re_xxx
   CONTACT_TO_EMAIL=your-email@gmail.com
   CONTACT_FROM_EMAIL=onboarding@resend.dev
```

3. Replace placeholder content in:
   - `app/page.tsx` — your tagline
   - `app/experience/page.tsx` — your roles, education, tools
   - `app/events/page.tsx` — events list
   - `app/contact/page.tsx` — your social links
   - `app/components/Nav.tsx` — your name and social URLs
   - `app/layout.tsx` — site metadata

4. Add your assets:
   - `public/cv.pdf` — your CV
   - `app/icon.jpg` — favicon
   - `public/images/profile.jpg` — your photo (or remove from `app/page.tsx`)

5. `npm run dev` — open http://localhost:3000

## License

MIT
