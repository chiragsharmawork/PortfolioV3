# Portfolio V3 - Upgrades (Batches 5, 6, 7)

This plan covers content & project depth, visual identity, and personal brand upgrades to transform the portfolio into a premium, technically strong developer portfolio.

## User Review Required
No breaking backend changes are made, but significant visual and structural changes to project data, about page, home hero, and work archive are included. Please review the updated UI flow and animations.

## Proposed Changes

### 1. Data Architecture
#### [MODIFY] `src/data/projects.ts`
- Extend `Project` type with `shortDescription`, `gallery`, `problem`, `solution`, `approach`, `challenges`, `outcome`, `learnings`, `highlights`.
- Update project statuses to `LIVE`, `BUILDING`, `EXPERIMENT`, `ARCHIVED`.
- Add robust `CaseStudy` fields for Vertex and OMNIX.

### 2. Work Archive & Project Pages
#### [MODIFY] `src/app/work/WorkClient.tsx`
- Add A-Z sorting, status filtering, and "Clear filters".
- Redesign project cards to surface status, year, category, technologies, and short outcome.
- Build clean empty states.

#### [MODIFY] `src/app/work/[slug]/page.tsx`
- Implement dynamic mini case study layouts (Overview, Problem, Approach, System, Tech, Challenges, Outcome).
- Enhance OMNIX with technical flow narrative.
- Enhance Vertex with business/product narrative.

### 3. Visual Identity & Hero Redesign
#### [MODIFY] `src/components/hero/Hero.tsx`
- Redesign composition: Left for typography (Name, Role, Statement, CTA), Right for large editorial portrait crop with subtle grid/metadata overlays.

#### [MODIFY] `src/components/hero/WhatIBuild.tsx`
- Transform "The Intersection" into a signature scroll-driven SVG/node activation visual story (WEB -> AI -> AUTOMATION -> INTELLIGENT SYSTEMS -> OMNIX).

#### [MODIFY] `src/components/layout/Navbar.tsx` & `src/components/layout/Footer.tsx`
- Ensure micro-interactions, consistent personal brand, and exact semantic routes.

### 4. Personal Brand & Storytelling
#### [MODIFY] `src/app/about/page.tsx`
- Rebuild storytelling flow: WHO I AM -> HOW I GOT HERE -> WHAT I LIKE BUILDING -> HOW I THINK -> CURRENT LEARNING -> CURRENTLY BUILDING -> BEYOND CODE.
- Add visual vertical timeline.

#### [MODIFY] `src/app/services/page.tsx`
- Refine services text to exact requested positioning.
- Update process to: DISCOVER, PLAN, BUILD, TEST, ITERATE.

#### [MODIFY] `src/app/contact/page.tsx` & `src/components/layout/ContactCTA.tsx`
- Elevate "Let's build something useful." positioning. Ensure availability and social links are prominent.

## Verification Plan
### Automated Tests
- `npm run lint`
- `npm run build`

### Manual Verification
- Test responsive mobile/tablet layouts.
- Test keyboard navigation.
- Ensure all animations respect `prefers-reduced-motion`.
- Validate metadata and SEO routes.
