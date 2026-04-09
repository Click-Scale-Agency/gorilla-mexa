

## Plan: Apply ClickScale Hero Formatting

### What changes
Match the ClickScale Agency hero section's polished formatting: floating pill navigation bar, Inter font, highlight-colored CTA button (#C8FF24 yellow-green), refined typography, and glassmorphism styling.

### Changes

**1. `src/index.css` — Add Inter font import and CSS variables**
- Add `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`
- Add `--font-heading: 'Inter'` and `--font-body: 'Inter'` CSS variables
- Add `--highlight: 76 100% 57%` and `--highlight-foreground: 220 29% 6%` color variables
- Add font-family rules for headings and body

**2. `tailwind.config.ts` — Add highlight color and glow shadows**
- Add `highlight` color tokens (`DEFAULT`, `foreground`, `hover`)
- Add `fontFamily` with `heading` and `body` using the CSS variables
- Add `boxShadow` entries: `glow-yellow`, `glow-yellow-lg` for the CTA glow effect

**3. `src/App.tsx` — Restyle the header and CTA button**

**Header (lines 268-287):**
- Replace the flat transparent header with a floating pill/island nav bar (rounded-full, centered, with backdrop-blur and subtle border) matching the ClickScale `Header.tsx` pattern
- White background with blur on scroll, clean rounded-full shape
- Logo + nav links + "Demo lapa" badge + "Apskati mūsu citus klientus" button all inside the pill

**CTA Button (lines 354-359):**
- Change from `bg-blue-600` to the ClickScale highlight yellow-green: `bg-[#C8FF24] text-gray-900` with `shadow-glow-yellow` and `hover:shadow-glow-yellow-lg hover:-translate-y-1 hover:scale-105`
- Add `rounded-lg font-semibold` matching ClickScale button styling
- Keep the existing bounce and pulse animations

**Typography:**
- Apply `font-['Inter']` to the hero section
- Heading: keep `font-extrabold` but ensure Inter renders
- Subtext: keep current sizing

### Technical details
- Files modified: `src/index.css`, `tailwind.config.ts`, `src/App.tsx`
- The floating nav pill is CSS-only (no framer-motion needed) — uses `rounded-full bg-white/90 backdrop-blur-xl shadow-xl border`
- The CTA highlight color `#C8FF24` maps to `hsl(76 100% 57%)`

