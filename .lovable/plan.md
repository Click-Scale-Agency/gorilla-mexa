

## Plan: Change "mexa.lv" badge to red pill style

### What changes
Replace the current "mexa.lv" badge in the "Before" card header (lines 321-323) with a pill styled like the "Demo lapa" pill, but with a red background and black text.

### Changes

**File: `src/App.tsx` (lines 321-323)**

Current:
```tsx
<span className="bg-white/15 backdrop-blur-sm border border-white/20 text-red-400 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg">
  {AUDIT.domain}
</span>
```

Replace with:
```tsx
<span className="bg-red-500 text-black text-[11px] font-bold px-3 py-1 rounded-full">
  {AUDIT.domain}
</span>
```

This mirrors the "Demo lapa" pill style (`rounded-full`, same sizing) but uses `bg-red-500 text-black` instead of `bg-highlight text-highlight-foreground`.

