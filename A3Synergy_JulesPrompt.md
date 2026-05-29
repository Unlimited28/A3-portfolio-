# Jules AI Build Prompt — A3 Synergy Portfolio Website

---

## PROJECT BRIEF

Build a **premium, production-ready portfolio website** for **A3 Synergy** — a CAC-registered Nigerian web design and digital studio. This is the agency's primary sales asset. Every design and engineering decision must communicate one thing: *we build websites that make businesses money.*

The target audience is Nigerian and African business owners — ambitious, mobile-first, skeptical of online transactions, and highly responsive to credibility signals (registration, real portfolio, testimonials, transparent pricing).

This is not a generic freelancer portfolio. It must look and feel like a **boutique agency with a global sensibility and deep African roots.**

---

## TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Load via Google Fonts — use `next/font/google`
- **Deployment:** Vercel-ready (no env vars required for core portfolio functionality)
- **Images:** Use `next/image` throughout. Source images from Unsplash where needed.

---

## TYPOGRAPHY

This is critical. Typography IS the design.

- **Display font:** `Cormorant Garamond` — weights 400, 600, 700. Use for all hero headlines, section titles, and large numbers. This gives a classic, consulting-firm gravitas.
- **Body font:** `DM Sans` — weights 300, 400, 500. Use for all body copy, labels, nav, and UI text.
- Apply `font-feature-settings: 'kern' 1, 'liga' 1` to all display text.
- Letter-spacing on uppercase labels: `tracking-widest` (0.15em minimum).
- All section headlines should be large and confident — minimum `text-5xl` on desktop, never small or timid.

---

## COLOR SYSTEM

Define these as CSS custom properties in `globals.css`:

```css
:root {
  --bg:          #08080A;       /* near-black base */
  --surface:     #0F0F12;       /* card / section backgrounds */
  --surface-alt: #141418;       /* alternate rows, modals */
  --border:      #1C1C22;       /* all dividers and card borders */
  --accent:      #B8975A;       /* gold — primary brand accent */
  --accent-soft: #D4B483;       /* lighter gold for hover states */
  --accent-dim:  rgba(184,151,90,0.12); /* gold tint backgrounds */
  --text:        #EDE8DF;       /* warm off-white primary text */
  --text-muted:  #6B6860;       /* secondary/label text */
  --text-warm:   #C9C2B4;       /* body copy */
}
```

**Accent rationale:** Gold (`#B8975A`) communicates premium, trust, and African excellence — deliberately avoiding generic tech blue or lime green. This is a consulting-grade colour for a studio that works with hotels and investment groups.

---

## DESIGN PRINCIPLES

1. **Generous whitespace.** Sections breathe. Never cramped. Padding: `py-24` minimum on all sections, `py-32` on hero and featured sections.
2. **Grid discipline.** Strict 12-column grid. Use CSS Grid, not just flex. Asymmetric layouts preferred — a headline spanning 7 columns with a pull-quote in the remaining 5 is more interesting than centered text.
3. **Gold accents are earned.** Use the accent color sparingly — on the most important words in headlines (via `<span>`), on CTA buttons, on active nav states, and on hover borders. Never spray it everywhere.
4. **No rounded corners on primary containers.** Cards, buttons, and sections use `rounded-none` or `rounded-sm` (2px max). Sharp edges communicate precision and professionalism.
5. **Borders over shadows.** Use `border border-[var(--border)]` instead of `shadow`. Shadows feel cheap at this tier.
6. **Micro-animations via Framer Motion:**
   - On page load: staggered `fadeUp` (y: 24 → 0, opacity 0 → 1, duration 0.6s, stagger 0.1s per child)
   - On scroll: `whileInView` with `once: true`, threshold `0.2`
   - On hover: subtle border color transition and `y: -2` translate on project cards
   - Never: spinning loaders, bouncing elements, or distracting animations

---

## SITE STRUCTURE

Build the following pages under the Next.js App Router:

```
app/
  layout.tsx          ← global layout with nav + footer
  page.tsx            ← home (all sections)
  work/
    page.tsx          ← full project grid
    [slug]/
      page.tsx        ← individual case study
  services/page.tsx
  pricing/page.tsx
  contact/page.tsx
```

---

## PAGE: HOME (`/`)

Build the following sections in order:

### 1. NAV

- Fixed top nav, transparent on load, gains `background: var(--surface)` + `backdrop-filter: blur(16px)` + `border-bottom: 1px solid var(--border)` after 60px scroll
- Left: Logo — small gold square containing "A3" in Cormorant Garamond bold, beside "SYNERGY" in DM Sans 700, tracking-widest, uppercase
- Center: links — Work, Services, Pricing, Contact (DM Sans, 12px, uppercase, tracking-widest, color: var(--text-muted), hover: var(--accent))
- Right: "Start a Project →" button — border 1px solid var(--accent), text var(--accent), background transparent, hover: background var(--accent), text #08080A. No border-radius. Padding: 10px 24px.

---

### 2. HERO

Full viewport height (`min-h-screen`). Dark, editorial, commanding.

**Layout:** Asymmetric grid. Left column (7/12): headline + subtext + CTAs. Right column (5/12): a vertically stacked set of 3 small credential tiles (see below).

**Background:**
- Base: `var(--bg)`
- Subtle noise texture overlay using an SVG filter (feTurbulence) at 3% opacity — adds tactility without being visible
- A single thin horizontal gold line (`border-t border-[var(--accent)]` at 30% opacity) running full width at the very top of the hero content area

**Headline (Cormorant Garamond, font-weight 700):**
```
We Build Websites
That Work for
African Business.
```
- Font size: `text-[72px]` desktop, `text-[40px]` mobile
- Line height: 1.05
- The word **"African"** is in `var(--accent)` color
- No bold or italic mixing — pure weight creates the hierarchy

**Subheadline (DM Sans 300, 18px, var(--text-warm)):**
```
A3 Synergy is a CAC-registered Nigerian digital studio.
We deliver high-converting, mobile-first websites for
businesses across Nigeria and Africa — in 7 to 14 days.
```

**CTAs (row, gap-4):**
1. "View Our Work" — filled gold button (`bg-[var(--accent)] text-[#08080A]`), DM Sans 700, tracking-wider, no border-radius, padding 14px 36px
2. "Get a Free Quote →" — text-only link, var(--text-muted), DM Sans 500, with an underline that animates from left on hover using a CSS pseudo-element

**Right column credential tiles (3 stacked, border border-[var(--border)], padding 16px 20px):**
```
Tile 1: "CAC Registered" | "Fully registered Nigerian business"
Tile 2: "7–14 Days" | "Average website delivery time"
Tile 3: "Mobile-First" | "Every project built for smartphones first"
```
Each tile: label in DM Sans 11px uppercase tracking-widest var(--text-muted), value in Cormorant Garamond 22px var(--text).

**Scroll indicator:** Bottom center — thin animated line (height animates 0 → 24px on loop) in var(--accent) with "Scroll" text in 10px uppercase below.

---

### 3. TICKER / MARQUEE

Full-width ticker strip between hero and next section.
- `border-y border-[var(--border)]`, `py-4`, `overflow-hidden`
- Repeating items (DM Sans 12px, uppercase, tracking-widest, var(--text-muted)):
  `Web Design · E-Commerce · SEO Setup · Booking Systems · Brand Identity · Next.js · React · Nigeria · Africa · 7-Day Delivery · CAC Registered · Landing Pages ·`
- CSS `animation: marquee 30s linear infinite` — smooth, not snappy

---

### 4. SELECTED WORK

Section label: `SELECTED WORK` (DM Sans 11px, uppercase, tracking-widest, var(--text-muted))
Section headline: `Three Projects. Three Industries. One Standard.` (Cormorant Garamond 56px)

**Project grid:** 3 cards in a row on desktop, stacked on mobile. Each card is a `<Link>` to `/work/[slug]`.

**Card anatomy:**
- `border border-[var(--border)]` container, no border-radius
- Top: project image area, height 260px, `overflow-hidden`. On hover, image scales to 1.04 via Framer Motion `whileHover`. Image has a subtle gradient overlay (bottom: `from-[var(--bg)] to-transparent`)
- Bottom: content pad `p-6`
  - Industry tag: DM Sans 11px, uppercase, tracking-widest, border border-[var(--border)], padding 3px 10px, var(--text-muted)
  - Project name: Cormorant Garamond 28px, font-weight 600, `mt-3`
  - One-line description: DM Sans 14px, var(--text-warm), `mt-2`
  - Result callout: small box `bg-[var(--accent-dim)] border border-[var(--accent)] border-opacity-20 p-3 mt-4` — "📈 [result in one line]" in DM Sans 13px var(--accent)
  - "View Case Study →" link: DM Sans 13px, var(--text-muted), hover: var(--accent). Animate `→` translateX(4px) on hover.

**The three real projects (use exactly this data):**

---

**Project 1 — Grand Commodores Hotel & Suites**
- Slug: `grand-commodores`
- Industry tag: `Hospitality`
- Live URL: `https://grand-hotels.vercel.app`
- Image: Unsplash — luxury hotel lobby, warm lighting. Query: `luxury hotel lobby Nigeria gold`
- Description: Full multi-page luxury hotel website for a 50-suite property on Victoria Island, Lagos.
- Result: `Full booking website live — rooms, amenities, gallery, reviews, admin portal`
- Deliverables: Custom Next.js build · Multi-page architecture (Home, Rooms, Amenities, Gallery, Reviews, Contact, Booking) · Admin portal · SEO metadata · Mobile-responsive · Vercel deployment
- Stack: Next.js · Tailwind CSS · Vercel
- Package: Premium

---

**Project 2 — Saint Hub Group**
- Slug: `saint-hub`
- Industry tag: `Corporate / Investment`
- Live URL: `https://saint-hub-beta.vercel.app`
- Image: Unsplash — modern Nigerian office or corporate building. Query: `modern Lagos corporate office Nigeria`
- Description: Corporate brand website for a Nigerian multi-industry investment group with 6 active subsidiaries across tech, fashion, education, trading, fragrance, and automotive.
- Result: `6-subsidiary group website — brand identity, individual sub-pages per company`
- Deliverables: Group holding website · 6 individual subsidiary pages (Gadgets, Collections, Education, Perfumery, Trading, Cars) · WhatsApp CTA integration · Corporate brand system · Vercel deployment
- Stack: Next.js · Tailwind CSS · Vercel
- Package: Premium

---

**Project 3 — Nexus Grand Hotel & Suites**
- Slug: `nexus-grand`
- Industry tag: `Hospitality`
- Live URL: `https://nexus-hotel.vercel.app`
- Image: Unsplash — executive hotel suite or rooftop pool. Query: `luxury hotel suite Lagos executive`
- Description: Luxury hotel website for an executive property on Victoria Island, featuring Naira-priced room listings, WhatsApp booking integration, and a full amenities showcase.
- Result: `WhatsApp booking live — Deluxe (₦120k), Executive (₦250k), Presidential (₦450k) rooms`
- Deliverables: Multi-page hotel site · Room listings with Naira pricing · WhatsApp booking flow · Testimonials · Amenities · Gallery · Contact
- Stack: Next.js · Tailwind CSS · Vercel
- Package: Premium

---

Below the 3 cards: a centered `"View All Work →"` link in DM Sans 14px var(--text-muted), hover: var(--accent).

---

### 5. ABOUT / CREDIBILITY STRIP

2-column layout. Left (5/12): large Cormorant Garamond headline. Right (7/12): body copy + credential list.

**Headline:**
```
A Digital Studio
Built for the
African Market.
```
(Cormorant Garamond 52px, 700, line-height 1.05)

**Body copy (DM Sans 16px, var(--text-warm), line-height 1.75):**
```
A3 Synergy was built with one insight: most Nigerian businesses 
are losing customers every day to competitors who simply have 
a better website.

We fix that. We build fast, mobile-first, results-driven websites 
and we deliver them in 7 to 14 days — not months. Every project 
is backed by our CAC registration, transparent pricing, and 
ongoing support after launch.
```

**Credential list (4 items, each on its own row with a left gold bar):**
- `CAC Registered Business` — "Full legal standing. You're protected."
- `Next.js & React Stack` — "Built with the same tech as Fortune 500 companies."
- `WhatsApp-First Process` — "We communicate the way Nigeria does business."
- `50% Deposit, 50% on Delivery` — "You only pay in full when you love the result."

Each item: left border `border-l-2 border-[var(--accent)] pl-4`, label in DM Sans 14px var(--text) 500, description in DM Sans 13px var(--text-muted).

---

### 6. SERVICES

Full-width section, `bg-[var(--surface)]`, `border-y border-[var(--border)]`.

Section label: `WHAT WE BUILD`
Section headline: `Everything Your Business Needs Online.` (Cormorant Garamond 48px)

**Service list — 8 items in a 2-column grid on desktop, 1 column on mobile:**

Each item: `border-b border-[var(--border)] py-6 flex justify-between items-start gap-6`

| Service Name | Description | Tag |
|---|---|---|
| Business Website Design | Custom, mobile-first sites built to convert visitors to paying customers | Core |
| Landing Pages | High-converting single pages for product launches, campaigns, or lead capture | Core |
| Website Redesign | Modernising outdated sites — faster, mobile-first, built for results | Core |
| E-Commerce Stores | Online shops with Paystack and Flutterwave payment integration | Growth |
| Booking & Appointment Systems | Online scheduling for hotels, salons, clinics, tutors, and service businesses | Growth |
| SEO & Google Business Setup | Get found on Google — meta tags, speed, indexing, and Google Business Profile | Core |
| Monthly Maintenance | Updates, backups, security monitoring, and content edits on retainer | Recurring |
| Brand Identity & Logo Design | Logo, colour palette, and brand guidelines for a cohesive professional presence | Growth |

Tag pill styling: DM Sans 10px uppercase tracking-widest — Core: `border border-[var(--border)] text-[var(--text-muted)]` — Growth: `border border-[var(--accent)] border-opacity-30 text-[var(--accent)] bg-[var(--accent-dim)]` — Recurring: same as Growth

---

### 7. PRICING

Section headline: `Simple Packages.` / `No Hidden Fees.` (Cormorant Garamond 48px)
Subtext: `50% deposit to start. 50% on delivery. Accept Paystack, Flutterwave, and bank transfer.`

**4-column pricing grid (1 column mobile, 2 tablet, 4 desktop):**

| Package | Naira | USD | Note | Featured |
|---|---|---|---|---|
| Starter | ₦150,000 – ₦250,000 | ~$100–$170 | First-time businesses | No |
| Business | ₦300,000 – ₦600,000 | ~$200–$400 | Most popular | **YES** |
| Premium | ₦700,000 – ₦1,500,000 | ~$450–$1,000 | Serious growth | No |
| Maintenance | ₦30,000 – ₦80,000/mo | ~$20–$55/mo | Ongoing support | No |

**Card:** `border border-[var(--border)] p-8`
- Featured (Business) card: `border-[var(--accent)]` — a thin gold top bar (`h-[2px] bg-[var(--accent)] w-full`) + "Most Popular" label
- Package name: DM Sans 11px uppercase tracking-widest var(--text-muted)
- Price: Cormorant Garamond 28px font-weight 700, var(--accent) if featured, var(--text) otherwise
- USD equivalent: DM Sans 13px var(--text-muted)
- Divider then features list with gold `✓` checkmarks
- CTA at bottom: "Get Started →" — text link var(--text-muted) hover var(--accent)

**Starter features:** 3 pages · Mobile-responsive · Contact form · Basic SEO · Google Maps · WhatsApp button
**Business features:** Up to 7 pages · Blog · Social links · Google Analytics · 1 month support · Everything in Starter
**Premium features:** Custom design · E-commerce or booking · Advanced SEO · Performance optimization · 3 months support · Everything in Business
**Maintenance features:** Monthly content updates · Security monitoring · Daily backups · Performance checks · Priority WhatsApp support

---

### 8. CONTACT

2-column layout on desktop. Left (5/12): headline, trust signals, direct WhatsApp CTA. Right (7/12): form.

**Left:**
Headline: `Let's Build Something That Works.` (Cormorant Garamond 44px)
Body: `Tell us about your business and we'll respond within 24 hours on WhatsApp. No pressure. No technical jargon.`

Then 3 trust rows (icon + text):
- 🏛️ CAC-registered Nigerian business
- 💬 We respond within 24 hours on WhatsApp
- 🔒 50% deposit only — pay the rest when you're happy

**Right (form fields — no `<form>` tags, use controlled state + `onClick`):**
- Full Name (input)
- Business Name (input)
- WhatsApp Number (input, placeholder: `+234 801 234 5678`)
- Service Needed (select: Business Website / Landing Page / Website Redesign / E-Commerce / Booking System / SEO Setup / Maintenance / Not sure)
- Tell us about your business (textarea, 4 rows)
- Submit button: full-width, `bg-[var(--accent)] text-[#08080A]`, DM Sans 700, uppercase, tracking-wider, no border-radius, padding 16px. Label: `"Send Message — We'll WhatsApp You Within 24 Hours"`
- On submit: validate name + business + whatsapp not empty, then show a success state (no API call needed — just a UI state change with a confirmation message)

---

### 9. FOOTER

`border-t border-[var(--border)] py-12`

3-column layout:
- Col 1: Logo + tagline ("Building African businesses online since day one.") + "CAC Registered · Nigeria" in small text
- Col 2: Navigation links (Work, Services, Pricing, Contact)
- Col 3: Contact info (WhatsApp number placeholder, email placeholder)

Bottom bar: `border-t border-[var(--border)] pt-6 mt-8` — "© 2025 A3 Synergy. All rights reserved." left, "Built in Nigeria. Deployed globally." right — both DM Sans 12px var(--text-muted).

---

## PAGE: INDIVIDUAL CASE STUDY (`/work/[slug]`)

Each case study page should feel like an editorial magazine spread, not a template.

**Layout:**
- Hero: full-width image (height 480px, `object-fit: cover`), overlaid with a dark gradient bottom-to-top. Project name in Cormorant Garamond 64px positioned at the bottom-left over the image.
- Below: 2-column layout — Left (8/12): case study body. Right (4/12): sticky sidebar with project metadata.

**Body content:**
- Industry tag + live site link (`"View Live Site →"` in var(--accent))
- `Overview` section: 2–3 paragraph description of the project
- `The Challenge` section: what the client needed solved
- `What We Built` section: bulleted deliverables list (use the deliverables from each project above)
- `Stack Used` section: tech tags (Next.js, Tailwind CSS, Vercel, etc.)
- Result callout box: `bg-[var(--accent-dim)] border border-[var(--accent)] border-opacity-20 p-6` with the project result

**Sidebar (sticky, `border border-[var(--border)] p-6`):**
- Client name
- Industry
- Package
- Stack
- "View Live Site →" button (gold, full-width)
- "Start a Similar Project →" link to `/contact`

---

## PAGE: `/work`

Full project grid — same cards as homepage but with all 3 projects shown. Add a filter row at the top: `All | Hospitality | Corporate` — filter cards client-side with Framer Motion `AnimatePresence` for smooth enter/exit.

---

## QUALITY REQUIREMENTS

- **Lighthouse score target:** 90+ on Performance, Accessibility, Best Practices, SEO
- **All images:** use `next/image` with proper `alt` text, `width`, `height`, and `priority` on above-fold images
- **All pages:** include proper `<title>` and `<meta description>` via Next.js `metadata` export
- **No hydration errors:** ensure all client components are marked `"use client"` only where necessary
- **TypeScript:** use throughout — no `any` types
- **Responsive:** fully functional at 375px (iPhone SE), 768px (tablet), 1280px+ (desktop)
- **Accessibility:** all interactive elements keyboard-navigable, all images have alt text, color contrast ratio meets WCAG AA

---

## FILES TO CREATE

```
app/layout.tsx
app/globals.css
app/page.tsx
app/work/page.tsx
app/work/[slug]/page.tsx
app/services/page.tsx
app/pricing/page.tsx
app/contact/page.tsx
components/Nav.tsx
components/Footer.tsx
components/ProjectCard.tsx
components/CaseStudyHero.tsx
components/ContactForm.tsx
lib/projects.ts          ← project data as typed constants
```

---

## FINAL INSTRUCTION TO JULES

Do not use placeholder text. Do not use lorem ipsum. Every word of copy in this prompt is intentional — use it exactly as written. Build all pages completely, not partially. The goal is a site that a Nigerian hotel or investment group visits and immediately trusts enough to spend ₦300,000–₦1,500,000.

This is a premium agency's primary sales tool. Build it accordingly.
