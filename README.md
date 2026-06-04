# Àṣà Party Rentals — Website

> Your celebration deserves the best setup. We bring the chairs, canopies, tables, and everything in between — right to your venue.

A modern, mobile-first website for a Nigerian event-equipment rental business. Built with Next.js and Tailwind CSS, designed to convert visitors into WhatsApp inquiries and quote requests.

---

## Features

- Browsable inventory catalogue with category filtering
- Quote cart — customers select items and submit a single request
- WhatsApp CTA integration with pre-filled messages
- Mobile-first responsive design optimised for Nigerian smartphone users
- CMS-powered inventory (no code needed to add/update items)
- Google Maps embed and contact form
- SEO-ready with LocalBusiness structured data

---

## Tech Stack

| Tool | Purpose |
|---|---|
|react 
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Sanity](https://sanity.io) | Headless CMS for inventory management |
| [Formspree](https://formspree.io) | Serverless form handling |
| [Vercel](https://vercel.com) | Hosting and deployment |
| [Cloudinary](https://cloudinary.com) | Image optimisation and CDN |

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- A Sanity account (free tier is fine)
- A Formspree account for the quote form

### 1. Clone the repository

```bash
git clone https://github.com/your-org/asa-party-rentals.git
cd asa-party-rentals
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token

# Formspree
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=2348012345678

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
asa-party-rentals/
├── app/                     # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── inventory/
│   │   ├── page.tsx         # Catalogue listing
│   │   └── [slug]/page.tsx  # Item detail page
│   ├── quote/page.tsx       # Quote request form
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── faq/page.tsx
├── components/
│   ├── ui/                  # Reusable UI primitives (Button, Card, Badge…)
│   ├── layout/              # Header, Footer, Navigation
│   ├── inventory/           # ItemCard, CategoryFilter, QuoteCart
│   └── home/                # HeroSection, Testimonials, HowItWorks
├── lib/
│   ├── sanity.ts            # Sanity client setup
│   ├── queries.ts           # GROQ queries for inventory data
│   └── whatsapp.ts          # WhatsApp URL builder
├── public/
│   └── images/              # Static assets (logo, fallback images)
├── sanity/
│   └── schemas/             # Sanity content type definitions
│       ├── product.ts
│       ├── category.ts
│       └── testimonial.ts
├── styles/
│   └── globals.css          # Tailwind base + custom design tokens
├── .env.example
├── next.config.js
├── tailwind.config.ts
└── README.md
```

---

## Design System

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| Aso-oke Gold (primary) | `#D4961A` | CTAs, headings, highlights |
| Aso-oke Gold light | `#F9CB4A` | Hover states, badges |
| Adire Burgundy (secondary) | `#962020` | Navigation, footer, tags |
| Calabash Green (accent) | `#2E7D2E` | WhatsApp CTA, availability, success |
| Harmattan Clay (neutral) | `#FAF7F2` | Page background |
| Clay mid | `#C4B49E` | Borders, muted elements |
| Body text | `#2E2018` | All body copy |

### Typography

- **Display / Headings:** DM Serif Display
- **Body / UI:** DM Sans

Both fonts loaded from Google Fonts and subsetted for performance.

### Tailwind Configuration

Custom colours and fonts are registered in `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      gold: { DEFAULT: '#D4961A', light: '#F9CB4A', dark: '#9A6100' },
      burgundy: { DEFAULT: '#962020', light: '#F3BEBE', dark: '#6B0F0F' },
      green: { DEFAULT: '#2E7D2E', light: '#B6DFB6', dark: '#1B4D1B' },
      clay: { DEFAULT: '#C4B49E', light: '#FAF7F2', dark: '#5A4535' },
    },
    fontFamily: {
      serif: ['DM Serif Display', 'Georgia', 'serif'],
      sans: ['DM Sans', 'system-ui', 'sans-serif'],
    },
  },
}
```

---

## CMS — Managing Inventory

The inventory catalogue is managed via Sanity Studio. To run the studio locally:

```bash
cd sanity
npm install
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) to access the CMS dashboard.

### Adding a new item

1. Log in to Sanity Studio
2. Click **Products → Create New**
3. Fill in: name, category, description, price per day, minimum order, availability status
4. Upload product photos
5. Click **Publish** — the website updates automatically

---

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to link your Vercel account and project. All environment variables must be added in the Vercel dashboard under **Settings → Environment Variables**.

### Deploy Sanity Studio

```bash
cd sanity
npx sanity deploy
```

This publishes the CMS to `https://your-studio-name.sanity.studio`.

---

## WhatsApp Integration

The floating WhatsApp button and quote-form redirect use a URL builder in `lib/whatsapp.ts`:

```ts
export function buildWhatsAppUrl(message: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in your `.env.local` with the full international number (no `+`, no spaces), e.g. `2348012345678`.

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 85 |
| Largest Contentful Paint | < 2.5 s |
| Cumulative Layout Shift | < 0.1 |
| First Input Delay | < 100 ms |
| Bundle size (JS) | < 150 KB gzipped |

---

## SEO

- `app/layout.tsx` includes a global `<head>` with Open Graph and Twitter Card meta tags
- Each page overrides `metadata` for page-specific titles and descriptions
- `app/sitemap.ts` auto-generates `sitemap.xml` from all inventory slugs
- `public/robots.txt` is pre-configured
- `app/page.tsx` includes `application/ld+json` LocalBusiness schema

---

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and test locally
3. Open a pull request with a clear description of what changed and why
4. Request a review before merging to `main`

---

## License

Private — all rights reserved. This codebase is proprietary to Àṣà Party Rentals.

---

## Contact

For development queries, contact the project lead. For business enquiries, reach the client directly via WhatsApp or phone as listed on the website.





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
