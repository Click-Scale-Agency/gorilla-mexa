

## Plan: Yellow Background + Black Text for Ticker Strip

### What changes
Change the scrolling ticker strip between hero and MEXA section to have a yellow (`#C8FF24`) background with black text.

### Changes

**File: `src/App.tsx` (line 370-373)**
1. Change `backgroundColor: MEXA.green` to `backgroundColor: '#C8FF24'` on the ticker container
2. Change text `color: '#C8FF24'` to `color: '#000000'` (black) on the ticker spans

