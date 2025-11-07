# Design Guidelines: Technical Developer Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like Linear, GitHub, and Vercel - clean, dark-themed, performance-focused interfaces that prioritize content readability and professional presentation.

## Core Design Principles
1. **Professional Minimalism**: Clean layouts with purposeful whitespace
2. **Technical Credibility**: Design reflects precision and technical expertise
3. **Research-Ready**: Typography and layout support both code and academic content presentation

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: Inter, 600-700 weight
- Body: Inter, 400-500 weight
- Code/Technical: Inter, 400 weight (monospace fallback where appropriate)

**Hierarchy**:
- Hero Title (Name): 4xl-6xl, font-weight 700
- Hero Subtitle (Title): xl-2xl, font-weight 500
- Hero Tagline: lg-xl, font-weight 400
- Section Headings: 2xl-3xl, font-weight 600
- Card Titles: lg-xl, font-weight 600
- Body Text: base-lg, font-weight 400
- Captions/Labels: sm-base, font-weight 500

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent vertical rhythm
- Section padding: py-20 to py-32 desktop, py-12 to py-16 mobile
- Component spacing: gap-6 to gap-8
- Content max-width: max-w-6xl for sections, max-w-4xl for text-heavy content

## Component Library

### Navigation Bar
- Fixed position with backdrop blur
- Logo/Name on left, navigation links on right
- Smooth scroll to sections with active state highlighting (underline or accent color indicator)
- Mobile: Hamburger menu with slide-in overlay
- Height: h-16 to h-20

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Vertical stack: Name → Title → Tagline → CTA button
- "Hire Me" button: Large, prominent, blurred background if over imagery
- Subtle gradient background or geometric pattern (dark with blue accents)
- NO large hero image - focus on typography and minimal background treatment

### About Section
- Two-column layout on desktop (60/40 split): Text left, supporting visual/stats right
- Single column on mobile
- Professional headshot placeholder (circular, 300x300px) on right column
- Text formatted with comfortable line-height (1.7-1.8)

### Skills Section
- Grid layout: 2 columns mobile, 4 columns desktop
- Each skill card contains:
  - Icon (Heroicons or Font Awesome)
  - Skill name
  - Progress bar or proficiency indicator
  - Brief descriptor text
- Cards with subtle hover lift effect

### Projects Section
- Grid: 1 column mobile, 2 columns tablet, 2-3 columns desktop
- Each project card:
  - Placeholder image (16:9 aspect ratio, 600x400px)
  - Project title
  - 2-3 line description
  - Tech stack tags (small pills)
  - Two buttons side-by-side: "View Demo" (primary) and "View Code" (secondary/ghost)
- Card hover: Subtle scale and shadow increase

### Contact Section
- Two-column layout: Form (60%) left, Contact info (40%) right
- Form fields: Name, Email (both single line), Message (textarea)
- Single "Send Message" button below form
- Right column: Email, LinkedIn icons with links, short collaboration message
- Background: Slightly lighter than main background for visual separation

### Footer
- Single row: Copyright text left, "Technical Developer & Research Writer" right
- Social icons centered or right-aligned
- Minimal height: py-8

## Images

**Image Strategy**:
- **Hero**: NO large background image - use gradient/pattern instead
- **About**: Professional headshot (circular crop, 300x300px)
- **Projects**: 4 placeholder screenshots (600x400px each, 16:9 ratio)
  - Dashboard interface mockup
  - Report document preview
  - Chart/visualization screenshot
  - Documentation portal interface

## Animations

Use sparingly:
- Fade-in on scroll for section content (opacity 0 to 1, translate-y)
- Navigation bar background blur on scroll
- Hover states: Subtle scale (1.02-1.05) and shadow for cards/buttons
- Smooth scroll behavior for navigation
- No autoplay animations, carousels, or distracting motion

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility

- High contrast text (light text on dark background)
- Focus states with visible outline
- Semantic HTML structure
- ARIA labels for icon-only buttons
- Form labels and error states

## Performance Considerations

- Lazy load project images
- Optimize and compress all images (WebP format preferred)
- Minimal JavaScript (smooth scroll, active nav, form validation only)
- Icon CDN (Font Awesome or Heroicons)
- Single Google Fonts link (Inter with weights: 400, 500, 600, 700)