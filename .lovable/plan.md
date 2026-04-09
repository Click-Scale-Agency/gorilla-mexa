
## Plan: Add MEXA Logo to Nav + Yellow "DEMO lapa" Pill

### What changes
Add the uploaded MEXA logo to the navigation bar (left side, next to ClickScale logo) and ensure the yellow pill badge says "DEMO lapa".

### Changes

**1. Copy uploaded logo to project**
- Copy `user-uploads://Screenshot_2026-04-09_at_21.23.12.png` to `src/assets/mexa-logo-nav.png`

**2. File: `src/App.tsx`**
- Import the MEXA nav logo: `import mexaLogoNav from "@/assets/mexa-logo-nav.png"`
- In the nav bar (line ~271-276), add the MEXA logo image between the ClickScale logo and the subtitle text, with a small vertical separator
- The yellow pill (line 283-285) already says "Demo lapa" — update text to "DEMO lapa" (uppercase DEMO)

### Visual result
- Nav shows: [ClickScale logo] | [MEXA logo] ... [link] [DEMO lapa yellow pill]
- MEXA logo sized to ~h-8 to match ClickScale logo
- Yellow pill text becomes "DEMO lapa"
