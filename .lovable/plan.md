

## Plan: Move CTA button under the title

### What changes
Move the "Skatīt demonstrāciju" button and its subtitle text from below the audit cards to directly under the main heading, before the description paragraph. Remove the floating/bouncing animation to make it flow naturally.

### Changes

**File: `src/App.tsx`**

1. **Remove the CTA block from its current location** (lines 357-364) — the `<button>` and the `<p>` with "Bezmaksas demonstrācija" text.

2. **Insert the CTA block inside the `max-w-2xl` intro div** (after line 306, the closing `</h1>` tag, before the `<p>` description) — place the button and subtitle between the title and the description paragraph.

3. **Remove `animate-float`** from the button classes so it flows naturally in the layout. Keep the rest of the styling (highlight background, glow shadow, hover effects).

The resulting structure will be:
```
<h1>Title</h1>
<button>Skatīt demonstrāciju</button>
<p>Bezmaksas demonstrācija...</p>
<p>Zemāk redzat...</p>
```

