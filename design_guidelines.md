# Design Guidelines: Mithun Raj Urs T V Portfolio

## Design Approach

**Reference-Based Approach: Chaicode-Inspired Modern Portfolio**

Drawing inspiration from Chaicode's sophisticated design language while adapting it for a personal developer portfolio. The design emphasizes smooth animations, gradient text effects, clean typography, and a polished dark/light theme system.

**Key Design Principles:**
- Smooth, intentional animations that enhance rather than distract
- Gradient text treatments for emphasis and visual interest
- Clean, spacious layouts with generous breathing room
- Professional yet approachable aesthetic suitable for a developer showcase

---

## Typography

**Font Family:**
- Primary: Inter (Google Fonts)
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

**Type Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl (font-bold)
- Section Headings: text-4xl md:text-5xl (font-bold)
- Subsection Headings: text-2xl md:text-3xl (font-semibold)
- Body Large: text-lg md:text-xl (font-normal)
- Body Regular: text-base (font-normal)
- Small Text: text-sm (font-medium)
- Caption: text-xs (font-normal)

**Gradient Text Treatment:**
Apply gradient text effects (similar to Chaicode's orange gradient) to:
- Hero headline name
- Section headings
- Key call-to-action text
- "ChaiCode" styled logo treatment for name

---

## Layout System

**Spacing Primitives:**
Core spacing units: 2, 4, 6, 8, 12, 16, 20, 24, 32

**Container Strategy:**
- Max width: max-w-7xl for main content areas
- Horizontal padding: px-4 sm:px-6 lg:px-8
- Section vertical spacing: py-16 md:py-24 lg:py-32

**Grid Patterns:**
- Skills: 2 columns on mobile, 3-4 columns on tablet, 5-6 columns on desktop
- Projects: 1 column on mobile, 2 columns on desktop
- Education Timeline: Single column with left-aligned timeline indicator

---

## Component Library

### Navigation
**Fixed Header:**
- Transparent background with backdrop blur effect
- Smooth scroll navigation to sections
- Animated underline hover effects (2px height, smooth transition)
- Dark/light theme toggle button with smooth icon transition
- Responsive hamburger menu for mobile with slide-in drawer

### Hero Section
**Layout:**
- Full viewport height (min-h-screen)
- Centered content with subtle background pattern/gradient mesh
- No large hero image - focus on typography and gradient effects
- Animated gradient background similar to Chaicode's mesh pattern

**Content Structure:**
- Greeting text: "Hi, I'm" (text-lg, subtle opacity)
- Name with gradient: "Mithun Raj Urs T V" (hero headline scale)
- Role/tagline: "Full-Stack Developer & AI Enthusiast" (text-xl md:text-2xl)
- Brief one-line description
- CTA buttons: "View Projects" (primary) and "Contact Me" (secondary)
- Scroll indicator at bottom with animated bounce

### About Section
**Card Layout:**
- Large card with subtle border and backdrop blur
- Split layout: Left side - professional photo placeholder, Right side - bio content
- Contact details with icons (location, email, phone, LinkedIn)
- Animated reveal on scroll (fade-up transition)

### Education Section
**Timeline Design:**
- Vertical timeline with connecting line on left
- Education cards with hover lift effect
- Each card shows: Institution name, degree/course, year, percentage/CGPA
- Progressive reveal animation as user scrolls
- Timeline dots with gradient fill

### Projects Section
**Interactive Cards:**
- Grid layout (1 column mobile, 2 columns desktop)
- Card structure:
  - Project thumbnail/icon placeholder at top
  - Project title with gradient text
  - Tech stack badges (small pills with border)
  - Description (2-3 lines)
  - "View Details" link with arrow icon
- Hover effects:
  - Subtle 3D tilt effect (rotate on hover)
  - Shadow glow expansion
  - Scale transformation (scale-105)
  - Border gradient animation

### Skills Section
**Badge Grid:**
- Categorized skill groups with section headers
- Pill-shaped skill badges with:
  - Icon (technology logo placeholder)
  - Skill name
  - Border with hover gradient effect
  - Scale animation on hover
- Categories: Languages, Databases, Frameworks & Tools, Soft Skills

### Achievements & Certifications
**Card Grid:**
- 2-column layout on desktop, single column on mobile
- Cards with:
  - Achievement icon/badge placeholder
  - Title
  - Date/Context
  - Fade-in animation on scroll
  - Hover lift effect

### Contact Section
**Two-Column Layout:**
- Left: Contact form with fields:
  - Name (full width)
  - Email (full width)
  - Message (textarea, full width)
  - Submit button with loading state
  - Form fields with animated focus states (border gradient on focus)
- Right: Contact information card:
  - Email, phone with icons
  - Social links (LinkedIn, GitHub) with hover effects
  - "Let's Connect" heading with gradient

**Floating Action Button:**
- Fixed position bottom-right
- "Let's Connect" text with LinkedIn icon
- Pulse animation
- Backdrop blur background
- Visible on scroll past hero section

### Footer
**Clean Layout:**
- Centered content
- Copyright notice
- Social media icon links with hover scale
- "Built with Next.js" badge
- Back to top button with smooth scroll

---

## Animations & Interactions

**Animation Library:**
Use Framer Motion for all animations

**Scroll Animations:**
- Section reveals: Fade-up with stagger (0.1s delay between elements)
- Parallax effects: Subtle vertical movement on scroll (hero background)
- Progress indicator: Thin line at top showing scroll progress

**Hover States:**
- Cards: Lift (translateY(-4px)) + shadow expansion
- Buttons: Scale (1.05) + subtle shadow
- Links: Gradient underline expansion
- Skill badges: Scale (1.1) + border glow

**Transition Timings:**
- Fast: 150ms (small UI elements)
- Medium: 300ms (cards, buttons)
- Slow: 500ms (section reveals, theme toggle)
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1)

**Theme Toggle:**
- Smooth color transitions (300ms)
- Icon rotation animation
- No jarring flashes

---

## Images

**No Large Hero Image:**
The hero section uses gradient backgrounds and animated mesh patterns similar to Chaicode, not a large photo.

**Image Placements:**
1. **About Section:** Professional headshot (400x400px) - rounded with subtle border, positioned left side of about card
2. **Project Thumbnails:** Placeholder graphics or project screenshots (600x400px) at top of each project card
3. **Achievement Icons:** Small decorative icons (64x64px) for achievements and certifications
4. **Background Patterns:** Subtle animated gradient mesh in hero section similar to Chaicode's design

All images should have:
- Rounded corners (rounded-lg or rounded-xl)
- Subtle borders
- Lazy loading
- Alt text for accessibility
- Responsive sizing with object-fit cover

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 640px (single column, stacked navigation)
- Tablet: 640px - 1024px (2 columns for appropriate sections)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations:**
- Hamburger menu with smooth slide-in drawer
- Touch-friendly tap targets (min 44px)
- Reduced animation complexity
- Simplified project card layouts
- Single-column skill badges
- Reduced font sizes with optimized hierarchy