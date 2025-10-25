# Mithun Raj Urs T V - Portfolio Website

## Overview
A modern, animated personal portfolio website for Mithun Raj Urs T V - Full-Stack Developer & AI Enthusiast. The portfolio showcases professional experience, education, skills, projects, achievements, certifications, and provides a contact form.

**Tech Stack:** React, TypeScript, Vite, Express, Tailwind CSS, shadcn/ui

**Design Inspiration:** Chaicode's modern, minimal aesthetic with smooth animations and gradient accents

**Color Scheme:** Orange gradient palette (from-orange-400 via-orange-500 to-orange-600) used consistently throughout

**Live URL:** Hosted on Replit (to be published)

## Project Architecture

### Frontend (Client)
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** wouter (lightweight routing)
- **State Management:** React hooks + Context API (ThemeContext)
- **Forms:** Native form handling with fetch API
- **Animations:** Tailwind CSS animations + custom keyframes

### Backend (Server)
- **Framework:** Express.js with TypeScript
- **API Validation:** Zod schemas
- **Storage:** In-memory storage (MemStorage)
- **Port:** 5000 (unified frontend + backend)

### Key Features
1. **Dark/Light Theme Toggle** - Smooth transitions with localStorage persistence
2. **Scroll Progress Indicator** - Reactive orange gradient bar at top of page
3. **Smooth Scroll Navigation** - Navbar links smoothly scroll to sections
4. **Animated Hero Section** - Gradient text effects with background mesh
5. **Floating LinkedIn Button** - Appears on scroll with pulse animation
6. **Contact Form** - Full validation with backend API integration
7. **Responsive Design** - Mobile-first approach, works on all devices
8. **SEO Optimized** - Complete meta tags, Open Graph, and Twitter cards

## Design Guidelines
The project follows strict design guidelines documented in `design_guidelines.md`:

- **Orange Gradient Everywhere:** All primary accents use from-orange-400 via-orange-500 to-orange-600
- **No Custom Hover States:** Relies on shadcn's built-in hover-elevate system
- **Inter Font Family:** Typography hierarchy with weights 300-900
- **Smooth Animations:** Fade-up, slide-down, bounce-subtle, pulse-glow
- **Consistent Spacing:** Small (1rem), Medium (2rem), Large (4rem)
- **Three Text Color Levels:** Default, Secondary (muted-foreground), Tertiary
- **Card-based Layout:** Elevated cards with subtle borders and shadows

## Recent Changes (October 25, 2025)

### Completed Tasks
1. **Schema & Frontend** - Built all React components with exceptional visual quality
   - Hero, Navbar, About, Education, Skills, Projects, Achievements, Contact, Footer, FloatingConnectButton
   - Dark/light theme toggle with ThemeContext
   - Scroll progress indicator (reactive with state)
   - Smooth scroll navigation with active section highlighting
   - Contact form with validation

2. **Backend** - Implemented contact form API
   - POST /api/contact endpoint with Zod validation
   - Error handling for validation and server errors
   - In-memory storage for contact messages

3. **Integration & Polish**
   - Connected contact form to backend API
   - Enhanced SEO metadata with keywords, author, Open Graph, Twitter cards
   - Fixed all architect-identified issues:
     - Changed all gradients to orange (removed blue/green from Projects)
     - Removed custom hover states from buttons
     - Made scroll progress indicator reactive with state

## File Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with scroll progress
│   │   ├── Hero.tsx            # Hero section with gradient text
│   │   ├── About.tsx           # About section with contact info
│   │   ├── Education.tsx       # Timeline with animated reveals
│   │   ├── Skills.tsx          # Categorized skill badges
│   │   ├── Projects.tsx        # Kalika & BioPredict cards
│   │   ├── Achievements.tsx    # Achievement cards
│   │   ├── Contact.tsx         # Contact form with API integration
│   │   ├── Footer.tsx          # Social links
│   │   └── FloatingConnectButton.tsx  # LinkedIn CTA
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Dark/light theme provider
│   ├── pages/
│   │   └── Home.tsx            # Main page combining all sections
│   ├── App.tsx                 # Router and theme provider
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles + custom properties
├── index.html                  # SEO metadata + Inter font
└── public/                     # Static assets

server/
├── routes.ts                   # API routes (/api/contact)
├── storage.ts                  # Storage interface + MemStorage
└── index.ts                    # Express server

shared/
└── schema.ts                   # Zod schemas + TypeScript types

design_guidelines.md            # Comprehensive design system
tailwind.config.ts              # Tailwind + custom animations
```

## API Endpoints

### POST /api/contact
Submit a contact form message

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your message! I'll get back to you soon."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message",
  "errors": []  // Optional Zod validation errors
}
```

## Running the Project

```bash
npm run dev
```

This starts both the Express backend and Vite frontend on port 5000.

The workflow "Start application" is configured to run this command automatically.

## Development Notes

- **No Mock Data:** All data in the portfolio is real, authentic information
- **No Custom Hover States:** Always use hover-elevate and active-elevate-2 utilities
- **Orange Gradient Only:** Never use blue, green, or other color gradients
- **Scroll Progress Must Be Reactive:** Uses scrollProgress state, not window.scrollY directly
- **Theme Toggle:** Properly toggles 'dark' class on document.documentElement
- **Responsive First:** All components designed mobile-first with breakpoints for sm, md, lg, xl

## Contact Information
- **Name:** Mithun Raj Urs T V
- **Email:** mithunursmithun@gmail.com
- **Phone:** +91-9900418013
- **Location:** Bengaluru, Karnataka
- **LinkedIn:** https://www.linkedin.com/in/mithun-raj-urs-t-v/
- **GitHub:** https://github.com/Mithun3110

## Next Steps (Future Enhancements)
1. Add email integration service (Formspree/SendGrid) for actual email delivery
2. Add animations on scroll using Intersection Observer
3. Add blog section for technical articles
4. Implement project detail pages
5. Add testimonials section
6. Add resume download functionality
7. Performance optimization (lazy loading, code splitting)
8. Analytics integration (Google Analytics/Plausible)

## Testing
- Browser console logs show no errors
- All LSP diagnostics clean
- HMR (Hot Module Replacement) working correctly
- Contact form successfully sends to backend API
- Dark/light theme toggle works smoothly
- Scroll progress indicator updates correctly
- All animations perform smoothly

## User Preferences
- Prefer orange gradient consistently throughout the design
- Follow Chaicode's modern, minimal aesthetic
- Use smooth, subtle animations (not overdone)
- Maintain high visual quality and attention to detail
- Always test thoroughly before completion
