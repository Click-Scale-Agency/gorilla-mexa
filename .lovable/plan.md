

## Plan: Add Scrolling Text Ticker Between Hero and MEXA Section

### What changes
Insert a horizontal scrolling ticker/marquee between the hero section (Section 1) and the MEXA showcase (Section 2) with bold electronic/digital display font, green background, and repeating text: **MEX JAUNĀ MĀJAS LAPA ⭐️ MEX JAUNĀ MĀJAS LAPA ⭐️**

### Changes

**File: `src/App.tsx` (between line 367 and 369)**
- Add a new `<div>` with green background (`MEXA.green`) containing a CSS-animated marquee
- The marquee contains the text repeated multiple times for seamless looping
- Use inline `@keyframes marquee` via a `<style>` tag or Tailwind animation
- Apply a bold, electronic/tablo-style font (monospace or digital display feel) — use `font-mono font-black uppercase tracking-widest`

**File: `tailwind.config.ts`**
- Add `marquee` keyframe: `0% { transform: translateX(0) }` to `100% { transform: translateX(-50%) }`
- Add `animate-marquee` utility: `marquee 15s linear infinite`

**File: `src/index.css`**
- Import a digital/electronic display font from Google Fonts: `Orbitron` (bold electronic tablo style)

### Visual result
- Full-width green bar with white text
- Text slides continuously left-to-right in a loop
- Bold electronic font gives a "digital display board" feel
- Sits as a visual divider between the gradient hero and the MEXA green section

