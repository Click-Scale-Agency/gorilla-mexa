

## Plan: Remove the 3rd (bottom) warning stripe ticker

Remove the ticker block at lines 910-922 in `src/App.tsx` — the one just above the footer that says "ŠEIT SĀKAS JŪSU DEMO LAPA". The other two tickers (top of page and after demo section) remain unchanged.

### Changes

**File: `src/App.tsx`** — Delete lines 910-922 (the entire `<div>` block containing warning-stripes and scrolling text before the footer).

