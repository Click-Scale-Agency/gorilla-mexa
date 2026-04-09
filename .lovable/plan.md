

## Plan: Place Logo and Status Pill in Two Columns

### What changes
Arrange the MEXA logo and the "Personalizēta demonstrācija — MEXA" pill side-by-side in a horizontal row with two columns, instead of the current stacked vertical layout.

### Changes

**File: `src/App.tsx` (lines 291-303)**
1. Wrap the logo (`img`) and the status pill (`div` with pulsing dot) in a `flex flex-row items-center justify-center gap-8` container
2. Remove `mb-6` from the logo (spacing now handled by gap)
3. Remove `mb-8` from the pill (spacing now handled by parent)
4. Add `mb-8` to the new row container for spacing below before the heading

