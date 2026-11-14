# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js — React framework with App Router and Tailwind CSS. Chosen for its SSR/SSG capabilities and strong ecosystem fit for a media-heavy experience site. This is the first project in a multi-project workspace; later projects may use different stacks.

## Users

Two primary users:

1. **Creator (Marcus)** — curates and uploads their relationship photos and videos, organises them into categories, and sets the featured hero moment.
2. **Viewer (girlfriend)** — browses and relives their shared memories in an immersive, cinematic interface. The site is a surprise gift; the experience on first open matters enormously.

## Product Purpose

MASFLIX is a private, Netflix-styled relationship archive. Instead of movies and shows, the content is the couple's own photos and videos, organised into rows by moment type (trips, birthdays, random moments, etc.). The goal is to make ordinary memories feel cinematic — to give a personal relationship the production value of a streaming platform.

## Positioning

A bespoke, handcrafted gift that is too personal to be replaced by any generic photo-sharing service. The Netflix UI metaphor transforms intimate moments into a curated viewing experience. No other product does this for a specific relationship.

## Operating Context

- Accessed via browser on mobile and desktop.
- Password-protected: only the couple can open it.
- Marcus uploads and manages content; his girlfriend browses.
- May be shared as a surprise link on a special occasion (birthday, anniversary).

## Capabilities and Constraints

- **Hero banner** — one featured memory displayed prominently at the top, like Netflix's hero row.
- **Category rows** — horizontally scrollable rows of photo/video tiles grouped by theme (e.g. "Our Trips", "Birthdays", "Random Moments").
- **Full-screen viewer** — clicking a tile opens the photo or video in a full-screen modal.
- **Private access** — login or password gate required; not publicly indexed.
- Search and filter are out of scope for the first build.
- Free and open-source tools only. No paid components without approval.
- Component source: Cult UI (free components preferred).

## Brand Commitments

- Name: **MASFLIX** — a portmanteau of the creator's name and Netflix.
- The Netflix visual language (dark background, red accent, card-based grid, bold row headers) is the reference aesthetic, applied to a deeply personal context.

## Evidence on Hand

- Reference implementation: devandres-tech/Netflix-Clone (578 GitHub stars, React + CSS Grid/Flexbox). Provides layout and UI patterns to adapt.
- Content: the couple's own photos and videos (to be provided by Marcus).

## Product Principles

1. **The content is the product.** The UI's job is to make their memories feel special, not to show off the UI.
2. **First-open magic.** The girlfriend's first visit is a moment; design for that reveal, not for the tenth return visit.
3. **Intimate scale over platform scale.** MASFLIX has two users. Decisions that work for two people beat decisions that scale to thousands.

## Accessibility & Inclusion

WCAG 2.1 AA as a baseline. Keyboard navigation for the full-screen viewer. Sufficient contrast on the dark background.
