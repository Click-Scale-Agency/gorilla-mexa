

## Plan: Apply ClickScale Hero Gradient Background

### What changes
Apply the same gradient background from the [Click Scale Agency](/projects/20ab001c-da0b-40ed-8c90-ed2dc2dc3b7e) hero section to Section 1 (the ClicksScale Demo Frame) in this project.

### Changes

**File: `src/App.tsx`**

1. Change the Section 1 `<section>` background from `bg-white` to the ClickScale gradient:
   `linear-gradient(135deg, #0238F4 0%, #7A1DF2 45%, #00D6C9 100%)`

2. Update text colors in the hero area to work on a dark gradient background:
   - Header: switch to transparent/blur dark style with white text
   - Heading text: white instead of gray-900, accent stays bright
   - Subtext: light gray/white tones
   - Badge pill: adjust to match the ClickScale style (highlight on dark)
   - Audit cards: keep their current styling (they have their own backgrounds)

3. Update the "Demo lapa" badge and header links to use light-on-dark color scheme

### Technical details
- The gradient is: `style={{ background: 'linear-gradient(135deg, #0238F4 0%, #7A1DF2 45%, #00D6C9 100%)' }}`
- Only Section 1 (lines ~267-360) needs color adjustments
- The header, hero text block, and badge need white/light text treatments
- Audit cards already have opaque backgrounds so they remain readable

