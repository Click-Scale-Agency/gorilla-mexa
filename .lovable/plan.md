

## Plan: Thinner ticker + new text + duplicate ticker before footer

### Changes

**File: `src/App.tsx`**

1. **Ticker text & size** (lines 367-376): Change `py-4` to `py-2`, change `text-2xl` to `text-base`, and update text from `ŠĪ IR TIKAI DEMO LAPA` to `ŠEIT SĀKAS JŪSU DEMO LAPA`.

2. **Add same warning-stripe ticker before footer** (before line 898): Insert an identical ticker block (warning stripes + scrolling text) right after the skills/team section closes and before the footer `<div className="border-t border-gray-100 bg-gray-50">`.

**File: `src/index.css`**

3. **Make stripes thinner**: Change `.warning-stripes` height from `12px` to `8px`.

