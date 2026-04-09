

## Plan: Increase Text Contrast in Audit Cards

### What changes
Make the list item text in both "Before" and "After" audit cards more readable by increasing opacity/contrast.

### Changes

**File: `src/App.tsx`**

1. **List item text** (lines 330, 351): Change `text-white/70` to `text-white` for the problem/gain descriptions
2. **Subheading text** (lines 320, 341): Change `text-white/90` to `text-white` for "Vecā mājaslapa" / "Jaunā versija priekš jums"
3. **Header labels** (lines 319, 340): Change `text-red-300` to `text-red-400` and `text-blue-300` to `text-highlight` for stronger color pop
4. **Badge text** (lines 322, 343): Same color updates for consistency

