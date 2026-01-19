# Awwwards Portfolio V2

A high-performance, immersive portfolio website built with modern web technologies. This project showcases advanced animations, 3D interactive elements, and smooth scrolling experiences, designed to meet the high standards of an "Awwwards" winning site. It has been expanded into a fully functional multi-page application with dynamic routing, deep-dive case studies, and a rich content strategy.

## 🚀 Overview

This portfolio serves as a showcase of creative development skills, leveraging **Three.js** for 3D graphics, **GSAP** for complex animations, and **Lenis** for silky-smooth scroll mechanics. It is built on top of **React 19** and **Vite** for a fast, responsive, and maintainable codebase.

The architecture is component-driven and highly scalable, featuring a dedicated data layer for projects and a modular animation strategy.

## ✨ Features

- **Multi-Page Routing**: Seamless navigation between Home, About, Projects, Contact, and dynamic Project Detail pages using `react-router-dom`.
- **Premium UI/UX**: distinctive aesthetic utilizing professional **Lucide** iconography via **Iconify**, replacing generic emojis for a polished, high-end feel.
- **Immersive 3D Experiences**: Integrated using React Three Fiber and Drei (Planet Hero, etc.).
- **Advanced Animations**: Powered by GSAP (ScrollTrigger, Flip, Tweens) for timeline controls and scroll triggers.
- **Smooth Scrolling**: Implemented with Lenis for a premium user feel, including a "Back to Top" smart utility.
- **Dynamic Project Case Studies**:
    -   **Vision & Story**: Parallax headers and editorial layouts.
    -   **Technical Architecture**: Visual breakdown of tech stacks.
    -   **Interactive Features**: Accordion-style feature showcases.
    -   **Performance Metrics**: Animated counters for Lighthouse scores and core vitals.
    -   **Reflection**: Key learnings and future steps sections.
- **Enhanced Pages**:
    -   **Home**: A single-page-like experience with scroll-to-section navigation.
    -   **About**: Manifesto-style Philosophy, Interactive Skill Clusters, Visual Workflow Pipeline, and Values grid.
    -   **Projects**: Filterable list (E-commerce, Web App, Creative), Client Logo Marquee, and Testimonials.
    -   **Contact**: Dedicated page with animated form status indicators and location details.
- **Responsive Design**: Mobile-first approach using Tailwind CSS v4.

## 🛠 Tech Stack

### Core
- **[React 19](https://react.dev/)**: The latest version of the library for web and native user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.
- **[React Router v7](https://reactrouter.com/)**: Client-side routing for multi-page application structure.

### Styling & Animation
- **[Tailwind CSS v4](https://tailwindcss.com/)**: A utility-first CSS framework.
- **[GSAP](https://gsap.com/)**: Professional-grade JavaScript animation library.
- **[Lenis](https://lenis.studio/)**: A lightweight and robust smooth scrolling library.
- **[Iconify](https://iconify.design/)**: Unified icon framework (utilizing **Lucide** set).

### 3D Graphics
- **[Three.js](https://threejs.org/)**: JavaScript 3D library.
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)**: React renderer for Three.js.
- **[React Three Drei](https://github.com/pmndrs/drei)**: Useful helpers for react-three-fiber.

## 🚀 Performance & Mobile Optimizations (v2.1)

A major overhaul was conducted to ensure the site performs flawlessly on mobile devices and slower networks.

### 📱 Mobile Responsiveness
-   **Typography Scaling**: Implemented fluid scaling for large headers (`banner-text-responsive`) to prevent overflow on small screens.
-   **Touch Optimization**: Adjusted touch targets for navigation and interactive elements.
-   **Layout reflows**:
    -   **Navbar**: Optimized burger menu positioning and touch areas.
    -   **Projects**: Switched mobile previews to `aspect-video` for better vertical flow.
    -   **Grids**: Reduced grid gaps on mobile (e.g., in Project Details) to improve content density.

### ⚡ Performance Tuning
-   **Code Splitting**: Implemented `React.lazy` and `Suspense` for all top-level routes to reduce initial bundle size.
-   **Manual Chunking**: Configured Vite/Rollup to split large vendor libraries (`three`, `gsap`) into separate cacheable chunks.
-   **3D Optimization**: Capped `dpr` (Device Pixel Ratio) on the Hero Canvas to `[1, 1.5]` to prevent GPU overheating on high-density mobile screens.
-   **Image Preloading**: Implemented a "Hidden Preloader" strategy for project hover images. Use of `display: hidden` divs ensures images are cached on load, enabling **instant 0ms hover interactions** without layout thrashing or visibility glitches.

### 🔄 UX Refinements
-   **Marquee Loop**: Refactored `ClientMarquee` to use a multi-set replication strategy (4x), ensuring a seamless infinite loop on even the widest 4k monitors.
-   **Scroll Pinning**: Tuned ScrollTrigger pinning durations in `ContactSummary` to ensure the user isn't stuck scrolling for too long.
-   **Project List**: Redesigned the "All Projects" page to match the premium "Works" list style from the specific home section.

## 🎨 v2.2: The About Page Overhaul & Visual Polish

A comprehensive redesign of the `AboutPage` was executed to elevate the storytelling and visual impact of the personal brand.

### ✨ New "Philosophy" Section (Editorial Layout)
-   **Split-Screen Design**: Moved away from generic centered text to a modern, editorial 2-column layout.
-   **Visual storytelling**: Features a dedicated, full-height abstract visual (`creative-abstract.png`) on the left.
-   **Typography**: Implemented crisp, left-aligned typography with a clear hierarchy ("Ethos" label, "Digital Craftsmanship" headline) for better readability and professional appeal.
-   **Animation**: Custom GSAP timeline with `clip-path` image reveal and staggered text entry.

### 🛠 Visibility & Stability Fixes
-   **Robust Animations**: Addressed critical visibility bugs where sections (`Values`, `Skills`, `Workflow`) would remain invisible. Refactored animations from `gsap.from()` to `gsap.fromTo()` with simplified triggers (`start: "top bottom"`), guaranteeing elements always render correctly regardless of scroll speed.
-   **Contrast**: Fixed "white-on-white" text issues by enforcing strictly typed backgrounds (`bg-black`, `bg-zinc-900`) and text colors across all new sections.

### 🧩 New Components
-   **`AboutHero.jsx`**: A dedicated hero with parallax image effects (`about-hero.png`) and updated personal bio.
-   **`ValuesCollaboration.jsx`**: A grid of "Core Values" cards using Glassmorphism (`backdrop-blur-xl`, `bg-white/5`) and vivid hover states.
-   **`SkillClusters.jsx`**: An interactive, categorized display of the technical stack (Frontend, Creative, Design, Backend).
-   **`ToolsWorkflow.jsx`**: A dark-themed visualization of the development pipeline (Discovery → Launch) with connecting lines and iconography.

### 👤 Personal Rebranding
-   Updated all bio content to reflect the current role: **UI/UX Designer & MERN Stack Developer**.
-   Education details updated: **2nd Year CS Student at Elshrouq Academy**.
-   Consistent tone of voice across `Hero` and `About` pages.

## ✒️ v2.3: Typography & Scroll Mechanics Refinement

This version introduces a complete typographic overhaul and normalizes scroll behaviors on the Home page based on user feedback.

### 🅰️ Typography Upgrade
-   **Replaced** `Amiamie` (System/Local font) with a premium **Google Fonts** pairing:
    -   **Headings**: `Syne` (Bold, Wide Grotesque) for distinct, high-impact titles.
    -   **Body**: `Inter` (Sans Serif) for maximum readability and modern aesthetics.
-   **Global Integration**: Applied via usage of standard CSS variables (`--font-display`, `--font-sans`) in `index.css`.

### 🖱️ Scroll Mechanics (Home Page)
-   **ServiceSummary**: Removed horizontal scrolling/parallax effects. The section now scrolls vertically and linearly.
-   **Services List**: Removed `sticky` positioning and stacking card effects. The list now flows naturally.
-   **ContactSummary**: Removed "Scroll Pinning" (`pin: true`), ensuring the section does not lock the viewport and scrolls fluidly with the document flow.

## 🎨 v2.4: Projects Page Redesign (Ultra-Clean Editorial)

A radical "V5" transformation of the Projects/Work page was executed to shift from a standard portfolio layout to a high-end, editorial design language (Swiss Style). The focus is on clarity, impact, and minimal visual noise.

### 💎 "Ultra-Clean" Design (V5)
-   **Structure**: Abandoned complex scroll-jacking and asymmetrical layouts in favor of a timeless **2-Column Editorial Grid**.
-   **Typography**: Implemented massive, static, bold typography ("SELECTED WORKS") for the Hero section, removing kinetic distractions.
-   **Theme**: Unified the entire page under a cohesive **White & Black** palette, removing dark mode gradients for a sharper, cleaner look.

### 🌟 New Components
-   **`ProjectHero.jsx`**: A stark, confident opening statement with perfectly tracked typography.
-   **`ProjectList.jsx` ("The Interactive Index")**:
    -   **Visuals**: Large 4:3 aspect ratio images in a clean grid.
    -   **Micro-Interaction**: Advanced hover states where images shift from grayscale to full color, and titles slide up to reveal secondary information.
    -   **Floating UI**: A "View Case" button appearing on hover.
-   **`CategoryNav.jsx`**: Replaced text links with modern, app-like pill buttons (`rounded-full`) for better tactile interaction.
-   **`ProjectImpact.jsx`**: Replaced standard "Awards Lists" with a **"Metrics & Impact"** section, focusing on real-world results (Users Reached, Revenue) + Press Logos (Forbes, TechCrunch).
-   **`ProjectManifesto.jsx`**: A Swiss-style typographic statement using grid alignment.
-   **`ProjectCTA.jsx`**: A magnetic "Let's Build" footer with an updated **Beige Hover State** to match the new organic aesthetic.

### 🔧 Visual Polish
-   **Navigation**: Sleek, sticky pill navigation for filtering projects.
-   **Services**: Updated `ProjectServices` to match the light theme (White/Gray/Black).
-   **Noise**: Reduced background noise grain to `0.02` opacity for a subtle, paper-like texture without the "messy" digital grain look.


## 🚀 v2.5: The Performance & Polish Update

This substantial update focused on rendering performance, mobile usability, and a complete content overhaul of the "About" and "Home" sections to better reflect a full-stack skillset.

### 📜 Certifications & Credentials
-   **Dedicated Page**: Built a new dynamic route `/certifications` to house a complete library of professional certificates.
-   **Data-Driven**: Powered by a new `certification.json` schema, allowing for easy updates.
-   **Visuals**: Certificates now feature high-quality preview images with "async" decoding for performance.

### ⚡ Performance Architecture
-   **Skeleton Loading System**: Replaced generic "Loading" text with a sophisticated `PageSkeleton` system. These skeletons (Navbar, Hero, Content) provide an instant perceived load time while heavy 3D assets fetch in the background.
-   **Image Optimization**:
    -   Implemented `loading="lazy"` and `decoding="async"` across all `ProjectCard` and `Certifications` components.
    -   Reduced Main Thread blocking time by offloading image decoding.
-   **Codebase Cleanup**: Removed legacy data files and unused exports to reduce bundle size.

### 🎨 Mobile & UI Refinements
-   **Journey Section (Desktop)**: Redesigned the "My Journey" timeline into a **Premium Minimalist Row Layout**. It now features hover interactions, improved whitespace, and a cleaner editorial look.
-   **Mobile "Core Principles"**: Fixed usability issues on touch devices by removing hover-dependency. Content in the "Values" section is now visible by default on mobile/tablet.
-   **Home Project Mobile View**: Deep refactor of the `Works` mobile card. Replaced broken background layers with a clean, high-fidelity aspect-ratio image card.
-   **Tech Stack**:
    -   Replaced WebGL with **Spline** to better represent 3D design capabilities.
    -   Fixed visibility issues for dark-mode icons (iOS, Three.js, Framer) by implementing theme-aware icon variants.

### 🏠 Home Page Strategy
-   **Service Pillars**: Updated the "Services" section to clearly define the four core pillars: **Frontend Development, Backend Systems, UI/UX Design, and Mobile Applications**.


This portfolio heavily relies on **GSAP (GreenSock Animation Platform)** to create a fluid and engaging user experience.

-   **`useGSAP` Hook**: All animations are scope-safe and React-friendly.
-   **ScrollTriggers**: Elements animate into view as the user scrolls (e.g., text reveals, image scales, counter up).
-   **Micro-Interactions**: Hover states and icon animations using GSAP for a tactile, responsive feel.
-   **Mouse Interaction**: The "Projects" page features a high-performance cursor-following preview using `gsap.quickTo`.
-   **Staggered Animations**: Lists (Skills, Experience, Awards) appear in elegant sequences.
-   **Clip-Path Reveals**: "Curtain" effects for images and section transitions.

## 🚀 v2.6: Responsiveness, Performance & Aesthetic Polish

This update focuses on unifying the design language across all pages, ensuring pixel-perfect responsiveness, and optimizing interaction performance.

### 📱 Contact Page Overhaul
-   **Split Layout Design**: reimagined the `ContactPage` with a premium desktop split-view. Contact details (Email, Phone, Socials) now side-by-side with the form.
-   **Typography**: Implemented massive, kinetic typography in `ContactHero` ("Let's start something new") for immediate visual impact.
-   **UX Improvements**: integrated specific location/time data and social links directly into the main view, removing the need for a separate footer.

### ⚡ Home Screen Optimization
-   **Zero-State Hover**: Refactored `Works.jsx` to eliminate React state updates during mouse movement.
-   **Direct DOM Manipulation**: Switched to GSAP-driven opacity/scale transforms for project previews, resulting in 60fps performance without re-renders.

### 🎨 Project Cards Standardization
-   **Unified Design**: Updated the main `ProjectsPage` list to strictly match the "Recommended Projects" card style (Fixed height, no grayscale).
-   **Interactive Typography**: Restored the "Sliding Text" hover effect where the title duplicates and scrolls up, combining clean aesthetics with dynamic motion.
-   **Alignment**: Fixed global alignment issues, ensuring all titles, metrics using `ProjectImpact`, and filters are strictly left-aligned for a Swiss-grid feel.

### 🛠 Asset & Data Management
-   **Certification Fixes**: Resolved broken image paths by correctly structuring assets in the `public` directory.
-   **New Content**: Added "Eclipse Jewelry" as a flagship project with custom dark-mode assets.

## 📦 Installation

To get this project running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd awwwards-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```
awwwards-portfolio/
├── public/                 # Static assets (images, models, etc.)
├── src/
│   ├── components/         # Reusable UI components (BackToTop, ClientMarquee, etc.)
│   ├── constants/          # Data layer
│   │   ├── index.js        # Navigation and general constants
│   │   └── projectData.js  # Rich data for project case studies
│   ├── pages/              # Route Components
│   │   ├── Home.jsx        # Landing page
│   │   ├── AboutPage.jsx   # Detailed About Me
│   │   ├── ProjectsPage.jsx # Portfolio Listing & Filtering
│   │   ├── ProjectDetailsPage.jsx # Dynamic Case Study Template
│   │   └── ContactPage.jsx # Contact Form & Info
│   ├── sections/           # Section Components
│   │   ├── about/          # (Philosophy, SkillClusters, ToolsWorkflow, Values)
│   │   ├── contact/        # (ContactHero, ContactForm, SocialsLocation)
│   │   ├── project/        # (ProjectVision, ProjectFeatures, ProjectPerformance, etc.)
│   │   ├── Navbar.jsx      # Global Navigation
│   │   ├── Hero.jsx        # Home Hero
│   │   └── ...
│   ├── App.jsx             # Main router configuration
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles and Tailwind imports
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies and scripts
```

## 📝 Customization

### Adding Projects
Edit `src/constants/projectData.js`. Add a new object to the array with the following extended structure:

```javascript
{
    id: 7,
    name: "New Project",
    slug: "new-project-slug", 
    year: "2024",
    client: "Client Name",
    role: "Your Role",
    description: "Short overview...",
    challenge: "...",
    solution: "...",
    outcome: "...",
    process: [ { title: "Step 1", description: "..." } ],
    // Deep Dive Data
    vision: { title: "Title", text: "Text...", bgImage: "/path.jpg" },
    features: [ { title: "Feature", desc: "...", icon: "lucide:icon" } ],
    architecture: [ { layer: "UI", tech: "React", description: "..." } ],
    performance: [ { label: "Score", value: 100, unit: "" } ],
    learnings: { text: "...", nextSteps: "..." },
    
    bgImage: "/path/to/hero.jpg",
    image: "/path/to/preview.jpg",
    gallery: [ "/path/1.jpg", "/path/2.jpg" ],
    frameworks: [ { id: 1, name: "React" } ]
}
```

The system will automatically generate the case study page at `/projects/new-project-slug` and add it to the Projects listing.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
