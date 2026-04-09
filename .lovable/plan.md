

## Plan: Replace "48 st. laikā" with Nav-Style Pill

### What changes
Replace the `{AUDIT.timeTag}` badge in the "After" card header (line 345-347) with a pill styled like the nav "Demo lapa" pill — yellow background with dark text.

### Changes

**File: `src/App.tsx` (lines 345-347)**
- Replace the current `<span>` with a pill matching the nav style: `bg-highlight text-highlight-foreground text-[11px] font-bold px-3 py-1 rounded-full`
- Keep the text as "Demo lapa" to match the nav pill exactly

