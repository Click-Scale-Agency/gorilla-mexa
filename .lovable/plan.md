

## Plan: Bouncing CTA Button + Scroll-Tease Animation

### What the user wants
The "Skatīt demonstrāciju" button should bounce to draw attention, and the page should do a subtle "peek scroll" animation on load — scrolling down slightly and snapping back — to signal that there's content below and the visitor should scroll or click the button.

### Changes

**1. Add custom keyframes to `tailwind.config.ts`**
- Add a `bounce-gentle` keyframe for the CTA button — a smooth, repeating vertical bounce
- Add a `chevron-bounce` keyframe for the down arrow inside the button

**2. Add scroll-tease effect in `src/App.tsx`**
- On mount (after a 2-second delay), use `window.scrollTo` to smoothly scroll down ~120px, then after a short pause scroll back to top — giving the illusion the page is "pulling" the user down
- This only fires once (first visit), using a ref to prevent repeats
- Apply the `animate-bounce-gentle` class to the CTA button
- Add a pulsing glow/shadow effect to the button to make it feel alive and clickable
- Animate the ChevronDown icon with a separate bounce rhythm

**3. Styling details**
- Button gets a subtle pulsing blue shadow (`box-shadow` animation) that breathes
- The bounce is gentle and organic — not cartoonish — using cubic-bezier easing
- ChevronDown arrow bounces independently with a slight delay offset to feel natural
- After the scroll-tease completes, the button bounce intensifies slightly as if saying "click me"

### Technical details

Files modified:
- `tailwind.config.ts` — add 2 new keyframes (`bounce-gentle`, `pulse-glow`) and corresponding animation utilities
- `src/App.tsx` — add `useEffect` for the scroll-tease on mount, apply animation classes to button and chevron, wrap ChevronDown in animated span

