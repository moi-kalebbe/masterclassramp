

## Performance Optimization Plan

### Current Issues Identified

1. **Heavy image formats**: Hero uses `background.png` and `beca_e_lucas.png` (PNG). Bio images use `.png` files. Logo carousel uses 10 PNG files. WebP versions exist for some images but aren't used.
2. **No lazy loading on sections below the fold**: All components are eagerly imported and rendered.
3. **Font loading**: Inter font loads all 6 weights (400-900) but could use `font-display: swap` more explicitly and reduce weights.
4. **Unused preload**: `index.html` preloads `/images/hero-bg.webp` which doesn't exist (actual path is a Vite-processed asset).
5. **Each CtaButton instance creates its own QualificationFormModal**: The modal is duplicated in every CTA (appears ~4 times on the page), meaning the heavy Dialog component is mounted multiple times.
6. **Logo carousel duplicates all images** in DOM for infinite scroll effect (20 img tags for 10 logos).
7. **No `will-change` or `contain` hints** on animated elements (carousel).

### Optimization Plan

#### 1. Use WebP images where available
- `HeroSection`: switch `beca_e_lucas.png` → use WebP version or convert
- `MetodosSection`: `rebeca-bio.png` and `lucas-bio.png` → keep as-is (no WebP available), but add `fetchpriority="low"`
- `LogosCarouselSection`: logos are small PNGs, acceptable but add proper `width`/`height` attributes to prevent layout shift

#### 2. Lazy load below-fold sections
- Use `React.lazy()` + `Suspense` for sections below HeroSection: `ProblemaSection`, `LogosCarouselSection`, `SolucaoSection`, `MetodosSection`, `ParaVoceSection`
- This splits the bundle and defers loading of non-critical sections

#### 3. Hoist QualificationFormModal to a single instance
- Move the modal state and component to `Index.tsx` (or a context)
- Pass `openModal` callback down to each `CtaButton` instead of each button owning its own modal
- Reduces DOM nodes and JS from ~4 modal instances to 1

#### 4. Fix index.html
- Remove the broken preload for `/images/hero-bg.webp`
- Add `fetchpriority="high"` to the hero background image
- Reduce font weights to only those used: 400, 600, 700, 800, 900 (check if 500 is actually used)

#### 5. Optimize carousel animation
- Add `will-change: transform` to the scrolling container
- Add `contain: layout style paint` to prevent repaints from affecting the rest of the page
- Add explicit `width`/`height` on logo images to prevent CLS

#### 6. Add image dimensions
- Add `width` and `height` attributes to all `<img>` tags to prevent Cumulative Layout Shift (CLS)

### Files to modify

| File | Change |
|---|---|
| `src/pages/Index.tsx` | Lazy-load sections, hoist modal to single instance |
| `src/components/CtaButton.tsx` | Accept `onClick` prop instead of managing own modal |
| `src/components/HeroSection.tsx` | Use WebP for mentor image, remove broken preload ref |
| `src/components/LogosCarouselSection.tsx` | Add `will-change`, `contain`, image dimensions |
| `src/components/MetodosSection.tsx` | Add image dimensions |
| `index.html` | Remove broken preload, optimize font request |
| `src/index.css` | Add `contain` utility if needed |

### What stays the same
- All visual design, colors, typography, layout, and spacing
- All content and copy
- All interactions and form behavior

