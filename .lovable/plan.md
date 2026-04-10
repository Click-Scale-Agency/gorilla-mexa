

## Plan: Add warning stripes to scrolling ticker

### What changes
Add diagonal black-and-yellow hazard stripes as top and bottom borders on the scrolling ticker, similar to caution tape. Keep the existing lime/yellow background and text unchanged. No skull icons.

### Changes

**File: `src/App.tsx`** (lines 367-376)

Replace the ticker wrapper with a structure that has:
1. A top stripe bar — a thin div (~10-12px) with a repeating diagonal stripe pattern (black + yellow) using CSS `repeating-linear-gradient`
2. The existing scrolling text (unchanged)
3. A bottom stripe bar — same as the top

**File: `src/index.css`**

Add a utility class `.warning-stripes` with the repeating diagonal stripe pattern:
```css
.warning-stripes {
  background: repeating-linear-gradient(
    -45deg,
    #000 0px, #000 10px,
    #C8FF24 10px, #C8FF24 20px
  );
  height: 12px;
}
```

This gives the caution-tape look with diagonal stripes framing the text on top and bottom.

