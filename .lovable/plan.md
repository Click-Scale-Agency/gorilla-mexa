

## Plan: Make both ticker ribbons thinner and less aggressive

Keep the same `#C8FF24` yellow color but reduce visual weight.

### Changes

**File: `src/index.css`**
- Reduce `.warning-stripes` height from `8px` to `4px`
- Make stripe pattern narrower: change stripe widths from `10px` to `6px`

**File: `src/App.tsx`** (both ticker blocks — lines 367 & 713)
- Change padding from `py-2` to `py-1`
- Change font size from `text-base` to `text-sm`
- Change font weight from `font-black` to `font-bold`
- Reduce letter spacing from `tracking-[0.15em]` to `tracking-[0.1em]`

Result: same yellow color scheme, but noticeably thinner and more refined ribbons.

