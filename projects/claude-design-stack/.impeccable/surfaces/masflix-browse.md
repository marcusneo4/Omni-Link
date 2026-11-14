# Surface brief — MASFLIX Browse

**Target:** `masflix/app/browse/page.tsx`
**Related targets:** `masflix/app/login/page.tsx`, `masflix/app/admin/page.tsx`
**Mode:** Experience
**Visitor:** Marcus's girlfriend, arriving via surprise link

## Direction contract

THESIS: A private Netflix for two. The Netflix form carries the couple's own photos and videos, turning ordinary memories into a curated viewing experience. Refuses the generic photo-gallery and the cloud-album — this is a streaming service for one relationship.

OWN-WORLD: `#141414` ground. `#E50914` MASFLIX red as the single accent. White body text, `#b3b3b3` secondary. Bebas Neue display (headers, logo, hero titles). Geist Sans body. 16:9 card tiles with deep rich gradient placeholders — unique per memory, replaced by real media on content drop. No borders, no glass decoration, no gradient text. Custom scrollbar: 6px, `#4a4a4a` thumb on `#141414` track. Red `::selection`.

STORY: She opens the link. MASFLIX logo greets her in red on black — she immediately understands the reference. The hero billboard fills the screen with a featured memory: big Bebas Neue title, his description in his own voice, a red year pill, her location. She clicks View. The memory fills the screen. She navigates through the category rows — 2025, 2024, 2023, Our Trips, Birthdays, Date Nights, Random Moments. Each tile carries their title at the bottom; hovering on desktop reveals the full description + meta card.

FIRST VIEWPORT: Fixed nav (transparent → dark on scroll) with MASFLIX wordmark left and admin/logout right. Hero fills 85vh: deep colour-gradient background (placeholder; real photo later), bottom vignette, Bebas title at `clamp(2.8rem, 7vw, 5.5rem)`, description, date, two CTAs (white View + frosted More Info). First category row crests below the fold. The first viewport is the reveal moment — it must read as a cinematic streaming service for them, not a photo app.

FORM: Netflix visual language, confirmed brand commitment. `seed: none (pinned)` — direction named in PRODUCT.md Brand Commitments and confirmed by user: "Confirmed — Netflix UI, our photos/videos inside it."

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Scope

- Login gate: full MASFLIX brand, password auth via `MASFLIX_PASSWORD` env var, 30-day cookie
- Browse: hero + 7 category rows (3 year rows + 4 theme rows), horizontal tile scroll, full-screen viewer modal
- Viewer: full-screen overlay, keyboard nav (←/→/Esc), prev/next within category, description + meta
- Admin: upload drop zone (placeholder), memory table with category filter tabs, set-featured action, delete

## Open decisions

- Media storage backend (Vercel Blob / Supabase / Cloudinary — to decide before deploy)
- Real category names and content (Marcus drops folder when ready)
- Font: Bebas Neue via next/font/google (auto-served locally at build time)
- Tile width: 180px desktop, 140px mobile (via flex-none; row scrolls horizontally)
