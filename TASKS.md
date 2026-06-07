# E-commerce Product Showcase with 3D Viewer — Development Roadmap

**Stack:** React (Vite) · TypeScript · Tailwind CSS · Three.js + React Three Fiber · Framer Motion · Zustand · pnpm · Vercel

**Workflow:** One task → build → stop → wait for `commit` or `next` → repeat.

---

## Phase 1 — Project Setup & UI Foundation

### Task 1: Initialize project scaffold

**What you'll build**
- Vite + React + TypeScript project initialized with pnpm
- ESLint configured (via Vite template defaults)
- Base folder structure: `src/components`, `src/pages`, `src/data`, `src/types`, `src/hooks`, `src/store`, `src/assets`
- `.gitignore`, basic `README.md` stub

**Why it comes at this point**
- Nothing else can be built without a running project shell and consistent directory layout.

**Files created or modified**
- `package.json`, `pnpm-lock.yaml`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`
- `src/main.tsx`, `src/App.tsx`, `src/vite-env.d.ts`
- `src/components/`, `src/pages/`, `src/data/`, `src/types/`, `src/hooks/`, `src/store/`, `src/assets/`
- `.gitignore`, `README.md`

**Suggested commit:** `chore: init vite react typescript project with pnpm`

---

### Task 2: Configure Tailwind CSS

**What you'll build**
- Tailwind CSS v4 (or v3 per Vite compatibility) installed and wired into Vite
- Global base styles, CSS variables for theme tokens (colors, fonts, spacing)
- Tailwind config with custom brand palette and font family

**Why it comes at this point**
- All UI components depend on Tailwind being ready before any styling work begins.

**Files created or modified**
- `tailwind.config.js` (or `postcss.config.js` if using v4 setup)
- `src/index.css`
- `package.json` (dev dependencies)

**Suggested commit:** `chore: configure tailwind css and design tokens`

---

### Task 3: Set up routing and app shell layout

**What you'll build**
- React Router v7 with routes: `/`, `/products`, `/products/:id`
- Root layout with `<Outlet />` placeholder for page content
- Responsive container wrapper and base typography applied globally

**Why it comes at this point**
- Pages and navigation components need a router and shared layout before individual pages are built.

**Files created or modified**
- `src/main.tsx` (wrap with `BrowserRouter`)
- `src/App.tsx` (route definitions)
- `src/components/layout/RootLayout.tsx`
- `src/pages/HomePage.tsx` (placeholder)
- `src/pages/ProductListPage.tsx` (placeholder)
- `src/pages/ProductDetailPage.tsx` (placeholder)
- `package.json` (react-router-dom)

**Suggested commit:** `feat: add react router and root layout shell`

---

### Task 4: Define product types and mock data

**What you'll build**
- TypeScript interfaces: `Product`, `Category`, `ProductVariant`
- Mock product dataset (~8–12 products) with images, prices, categories, descriptions, and 3D model paths (placeholder URLs for now)
- Data access helper: `getProducts()`, `getProductById()`, `getProductsByCategory()`

**Why it comes at this point**
- All product UI (cards, listings, detail pages, 3D viewer) needs typed, consistent data before components are built.

**Files created or modified**
- `src/types/product.ts`
- `src/data/products.ts`
- `src/data/index.ts`

**Suggested commit:** `feat: add product types and mock data`

---

### Task 5: Build navigation bar

**What you'll build**
- Responsive `Navbar` with logo, nav links (Home, Products), mobile hamburger menu
- Active route highlighting
- Sticky top positioning with backdrop blur

**Why it comes at this point**
- Navbar is the first real UI component and unblocks building all routed pages with consistent navigation.

**Files created or modified**
- `src/components/layout/Navbar.tsx`
- `src/components/layout/RootLayout.tsx` (integrate Navbar)
- `src/components/ui/IconButton.tsx` (optional small helper)

**Suggested commit:** `feat: add responsive navigation bar`

---

### Task 6: Build footer component

**What you'll build**
- Site footer with brand name, nav links, social placeholders, copyright
- Integrated into root layout below page content

**Why it comes at this point**
- Completes the app shell so every page has consistent top and bottom chrome before page content is built.

**Files created or modified**
- `src/components/layout/Footer.tsx`
- `src/components/layout/RootLayout.tsx`

**Suggested commit:** `feat: add site footer component`

---

### Task 7: Build reusable product card component

**What you'll build**
- `ProductCard` displaying image, name, price, category badge
- Hover scale/shadow effect (CSS-only for now; Framer Motion comes later)
- Link to product detail page

**Why it comes at this point**
- Product cards are reused on the homepage and listing page — build once before those pages.

**Files created or modified**
- `src/components/product/ProductCard.tsx`
- `src/components/product/ProductCardGrid.tsx`

**Suggested commit:** `feat: add reusable product card component`

---

### Task 8: Build homepage

**What you'll build**
- Hero section with headline, CTA button linking to `/products`
- Featured products grid (first 4 from mock data)
- Category highlight strip

**Why it comes at this point**
- Homepage is the entry point; it depends on layout, nav, product data, and product cards all being ready.

**Files created or modified**
- `src/pages/HomePage.tsx`
- `src/components/home/HeroSection.tsx`
- `src/components/home/FeaturedProducts.tsx`
- `src/components/home/CategoryStrip.tsx`

**Suggested commit:** `feat: build homepage with hero and featured products`

---

### Task 9: Build product listing page with category filters

**What you'll build**
- Full product grid on `/products`
- Category filter pills (All, Electronics, Fashion, etc.) — client-side filtering
- Product count label and empty state when no results

**Why it comes at this point**
- Listing page combines product cards and filtering logic; it comes after cards and data helpers exist.

**Files created or modified**
- `src/pages/ProductListPage.tsx`
- `src/components/product/CategoryFilter.tsx`
- `src/hooks/useProductFilter.ts`

**Suggested commit:** `feat: add product listing page with category filters`

---

### Task 10: Build product detail page (static layout)

**What you'll build**
- Product detail page at `/products/:id` with: title, price, description, category, variant selector (size/color placeholders)
- Two-column layout: image gallery on left, product info on right
- "Add to Cart" and "Add to Wishlist" buttons (UI only — wired in Phase 3)
- 404 state for invalid product IDs

**Why it comes at this point**
- Detail page layout must exist before the 3D viewer slot and image gallery are added in subsequent tasks.

**Files created or modified**
- `src/pages/ProductDetailPage.tsx`
- `src/components/product/ProductInfo.tsx`
- `src/components/product/ProductNotFound.tsx`

**Suggested commit:** `feat: add product detail page layout`

---

### Task 11: Build image gallery component

**What you'll build**
- `ImageGallery` with main image display and thumbnail strip
- Click/swipe to switch images
- Responsive: stacked on mobile, side-by-side on desktop

**Why it comes at this point**
- Gallery is a self-contained component slotted into the detail page; building it separately keeps the commit focused.

**Files created or modified**
- `src/components/product/ImageGallery.tsx`
- `src/pages/ProductDetailPage.tsx` (integrate gallery)

**Suggested commit:** `feat: add product image gallery component`

---

## Phase 2 — 3D Viewer & Interactive Experience

### Task 12: Install and configure React Three Fiber

**What you'll build**
- Install `@react-three/fiber`, `@react-three/drei`, `three`
- `Canvas` wrapper component with responsive sizing and Suspense fallback
- Verify a basic spinning box renders in isolation (dev test component, removed before commit or kept as story)

**Why it comes at this point**
- 3D dependencies and canvas setup must be proven working before building the actual product viewer.

**Files created or modified**
- `package.json`
- `src/components/viewer/CanvasWrapper.tsx`
- `src/components/viewer/LoadingFallback.tsx`

**Suggested commit:** `feat: install and configure react three fiber`

---

### Task 13: Build interactive 3D product viewer

**What you'll build**
- `ProductViewer3D` component loading GLB/GLTF models via `useGLTF`
- OrbitControls: rotate and zoom
- Auto-rotate toggle (optional, off by default)
- Viewer toolbar overlay (reset view, zoom in/out buttons)

**Why it comes at this point**
- Core 3D interaction is the heart of Phase 2; it depends on R3F being configured (Task 12).

**Files created or modified**
- `src/components/viewer/ProductViewer3D.tsx`
- `src/components/viewer/ViewerControls.tsx`
- `src/assets/models/` (placeholder `.glb` model or remote URL in mock data)

**Suggested commit:** `feat: add interactive 3d product viewer with orbit controls`

---

### Task 14: Add dynamic lighting and environment to 3D viewer

**What you'll build**
- `<Environment preset="studio" />` from drei for realistic reflections
- Adjustable directional + ambient lighting
- Optional HDRI environment map per product (via mock data field)

**Why it comes at this point**
- Lighting polish comes after the viewer skeleton works; it significantly improves visual quality before integration.

**Files created or modified**
- `src/components/viewer/ProductViewer3D.tsx`
- `src/components/viewer/SceneLighting.tsx`
- `src/types/product.ts` (add `modelUrl`, `environmentPreset` fields if not already present)

**Suggested commit:** `feat: add dynamic lighting and environment to 3d viewer`

---

### Task 15: Integrate 3D viewer into product detail page

**What you'll build**
- Tab or toggle on detail page: "Photos" vs "3D View"
- 3D viewer renders the product's model from mock data
- Graceful fallback message when a product has no 3D model

**Why it comes at this point**
- Integration connects the viewer to real product data on the page users already navigate to.

**Files created or modified**
- `src/pages/ProductDetailPage.tsx`
- `src/components/product/MediaToggle.tsx`
- `src/data/products.ts` (ensure all products have `modelUrl`)

**Suggested commit:** `feat: integrate 3d viewer into product detail page`

---

### Task 16: Add Framer Motion page transitions

**What you'll build**
- Install `framer-motion`
- `AnimatePresence` wrapper for route transitions (fade + slide)
- Staggered entrance animations on product grids

**Why it comes at this point**
- Page structure and all major routes exist; transitions polish navigation without blocking functional work.

**Files created or modified**
- `package.json`
- `src/components/layout/PageTransition.tsx`
- `src/App.tsx` (wrap routes)
- `src/components/product/ProductCardGrid.tsx` (stagger animation)

**Suggested commit:** `feat: add framer motion page transitions and grid animations`

---

### Task 17: Add hover effects and micro-interactions

**What you'll build**
- Framer Motion hover/tap animations on product cards, buttons, and filter pills
- Navbar mobile menu open/close animation
- Image gallery thumbnail active indicator animation

**Why it comes at this point**
- Builds on Framer Motion being installed; micro-interactions refine existing components rather than adding new pages.

**Files created or modified**
- `src/components/product/ProductCard.tsx`
- `src/components/product/CategoryFilter.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/product/ImageGallery.tsx`

**Suggested commit:** `feat: add hover effects and micro-interactions`

---

### Task 18: Add loading and skeleton states

**What you'll build**
- Skeleton placeholders for product cards, detail page, and 3D viewer while content loads
- Suspense boundary around 3D viewer with branded loading spinner
- Simulated async data fetch hook (prepares for optional backend later)

**Why it comes at this point**
- All major views exist; loading states improve perceived performance before advanced features are added.

**Files created or modified**
- `src/components/ui/Skeleton.tsx`
- `src/components/ui/Spinner.tsx`
- `src/components/viewer/LoadingFallback.tsx`
- `src/hooks/useProducts.ts`
- `src/pages/ProductListPage.tsx`, `src/pages/ProductDetailPage.tsx` (use async hook)

**Suggested commit:** `feat: add loading skeletons and suspense fallbacks`

---

## Phase 3 — Advanced Features, Optimization & Deployment

### Task 19: Set up Zustand store for cart and wishlist

**What you'll build**
- Zustand stores: `useCartStore`, `useWishlistStore`
- Actions: add, remove, update quantity (cart), toggle (wishlist)
- Persist to `localStorage` via `zustand/middleware`

**Why it comes at this point**
- Cart and wishlist UI (Tasks 20–21) need shared state before buttons on the detail page can be wired up.

**Files created or modified**
- `package.json` (zustand)
- `src/store/cartStore.ts`
- `src/store/wishlistStore.ts`
- `src/types/cart.ts`

**Suggested commit:** `feat: add zustand cart and wishlist stores`

---

### Task 20: Wire cart and wishlist UI

**What you'll build**
- Cart icon with item count badge in Navbar
- Slide-out cart drawer: line items, quantity controls, subtotal, remove button
- Wishlist heart toggle on product cards and detail page
- `/wishlist` page listing saved products

**Why it comes at this point**
- Depends on Zustand stores (Task 19) and existing product components.

**Files created or modified**
- `src/components/cart/CartDrawer.tsx`
- `src/components/cart/CartItem.tsx`
- `src/components/wishlist/WishlistButton.tsx`
- `src/pages/WishlistPage.tsx`
- `src/components/layout/Navbar.tsx`
- `src/App.tsx` (add `/wishlist` route)
- `src/pages/ProductDetailPage.tsx` (wire buttons)

**Suggested commit:** `feat: add cart drawer and wishlist ui`

---

### Task 21: Add product search

**What you'll build**
- Search input in Navbar (desktop inline, mobile in menu)
- Client-side search across product name, description, and category
- Search results dropdown with keyboard navigation; full results on `/products?q=...`

**Why it comes at this point**
- Search extends the existing listing/filter infrastructure without requiring backend.

**Files created or modified**
- `src/components/search/SearchBar.tsx`
- `src/components/search/SearchResults.tsx`
- `src/hooks/useProductSearch.ts`
- `src/pages/ProductListPage.tsx` (read `q` query param)
- `src/components/layout/Navbar.tsx`

**Suggested commit:** `feat: add product search with query param support`

---

### Task 22: Add advanced filtering and sorting

**What you'll build**
- Filter sidebar/drawer: price range slider, category multi-select, in-stock toggle
- Sort dropdown: price low→high, high→low, name A→Z, newest
- Active filter chips with clear-all

**Why it comes at this point**
- Builds on listing page and search from Tasks 9 and 21; completes the product discovery experience.

**Files created or modified**
- `src/components/product/FilterPanel.tsx`
- `src/components/product/SortDropdown.tsx`
- `src/components/product/ActiveFilters.tsx`
- `src/hooks/useProductFilter.ts` (extend with price, sort)
- `src/pages/ProductListPage.tsx`

**Suggested commit:** `feat: add advanced filtering and sorting`

---

### Task 23: Add dark/light mode toggle

**What you'll build**
- Theme context or Zustand theme store with `light` / `dark` / `system` modes
- Toggle button in Navbar
- Tailwind `dark:` variants applied across all components
- Persist preference to `localStorage`

**Why it comes at this point**
- All UI components exist; theming is a cross-cutting polish pass best done once the full UI is stable.

**Files created or modified**
- `src/store/themeStore.ts`
- `src/components/ui/ThemeToggle.tsx`
- `src/components/layout/Navbar.tsx`
- `src/index.css` (dark mode CSS variables)
- `tailwind.config.js` (`darkMode: 'class'`)
- Various component files (add `dark:` classes)

**Suggested commit:** `feat: add dark and light mode toggle`

---

### Task 24: Optimize image loading

**What you'll build**
- Lazy loading on all product images (`loading="lazy"`, Intersection Observer fallback)
- Blur-up placeholder or dominant-color skeleton while images load
- Responsive `srcSet` or fixed aspect-ratio containers to prevent layout shift

**Why it comes at this point**
- Performance pass on existing image-heavy pages before 3D optimization and deployment.

**Files created or modified**
- `src/components/ui/LazyImage.tsx`
- `src/components/product/ProductCard.tsx`
- `src/components/product/ImageGallery.tsx`

**Suggested commit:** `perf: optimize image loading with lazy load and placeholders`

---

### Task 25: Optimize 3D rendering performance

**What you'll build**
- `useGLTF.preload()` for models on listing hover or detail page mount
- `dpr` capped on mobile (`[1, 1.5]`) to reduce GPU load
- Dispose geometries/materials on unmount
- Optional low-poly fallback model field in mock data

**Why it comes at this point**
- 3D viewer is fully integrated; optimization targets real bottlenecks after features are complete.

**Files created or modified**
- `src/components/viewer/ProductViewer3D.tsx`
- `src/components/viewer/CanvasWrapper.tsx`
- `src/hooks/usePreloadModel.ts`

**Suggested commit:** `perf: optimize 3d model preloading and render performance`

---

### Task 26: Accessibility and UX consistency pass

**What you'll build**
- Semantic HTML audit: landmarks, heading hierarchy, alt text on all images
- Keyboard navigation for cart drawer, filters, gallery, 3D viewer controls
- Focus visible styles, ARIA labels on icon buttons
- Reduced-motion media query respect (disable Framer animations)

**Why it comes at this point**
- Final quality pass before deployment; all features must exist to audit comprehensively.

**Files created or modified**
- Multiple component files (ARIA, semantics)
- `src/hooks/useReducedMotion.ts`
- `src/components/layout/PageTransition.tsx` (respect reduced motion)

**Suggested commit:** `fix: improve accessibility and keyboard navigation`

---

### Task 27: Configure Vercel deployment

**What you'll build**
- `vercel.json` with SPA rewrite rules (`/* → /index.html`)
- Environment-agnostic build verified locally (`pnpm build`)
- README deployment section with Vercel one-click deploy instructions

**Why it comes at this point**
- App is feature-complete and optimized; deployment config is the last step before going live.

**Files created or modified**
- `vercel.json`
- `README.md`

**Suggested commit:** `chore: add vercel deployment configuration`

---

### Task 28: Final documentation

**What you'll build**
- Complete `README.md`: project overview, tech stack, folder structure, local dev setup, 3D model guide, deployment steps
- Inline JSDoc on key hooks and store actions

**Why it comes at this point**
- Documentation reflects the finished application; writing it last ensures accuracy.

**Files created or modified**
- `README.md`
- `src/store/cartStore.ts`, `src/hooks/useProducts.ts` (JSDoc comments)

**Suggested commit:** `docs: add project documentation and setup guide`

---

## Optional — Backend (skip unless requested)

### Task 29 (Optional): Express API with MongoDB

**What you'll build**
- `server/` directory: Express + TypeScript API
- MongoDB product schema, seed script, REST endpoints: `GET /products`, `GET /products/:id`
- Frontend `useProducts` hook switched from mock data to API calls

**Why it comes at this point**
- Only needed if you want a real backend; frontend is fully functional with mock data without this task.

**Files created or modified**
- `server/index.ts`, `server/routes/products.ts`, `server/models/Product.ts`
- `server/package.json`
- `src/hooks/useProducts.ts`
- `.env.example`

**Suggested commit:** `feat: add express api with mongodb product endpoints`

---

## Summary

| Phase | Tasks | Focus |
|-------|-------|-------|
| 1 — Setup & UI | 1–11 | Scaffold, layout, pages, components |
| 2 — 3D & Motion | 12–18 | R3F viewer, Framer Motion, loading states |
| 3 — Polish & Ship | 19–28 | Cart, search, theme, perf, a11y, deploy |
| Optional | 29 | Express + MongoDB backend |

**Total: 28 core tasks (+ 1 optional)**

---

## Decisions locked in

| Choice | Decision |
|--------|----------|
| Framework | React (Vite) — not Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| 3D | Three.js + React Three Fiber + drei |
| Animation | Framer Motion |
| State | Zustand (cart, wishlist, theme) + React hooks |
| Data | Mock JSON (backend optional, Task 29) |
| Package manager | pnpm |
| Deploy | Vercel |
