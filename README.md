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

## 🎞️ Animation Strategy

This portfolio heavily relies on **GSAP (GreenSock Animation Platform)** to create a fluid and engaging user experience.

-   **`useGSAP` Hook**: All animations are scope-safe and React-friendly.
-   **ScrollTriggers**: Elements animate into view as the user scrolls (e.g., text reveals, image scales, counter up).
-   **Micro-Interactions**: Hover states and icon animations using GSAP for a tactile, responsive feel.
-   **Mouse Interaction**: The "Projects" page features a high-performance cursor-following preview using `gsap.quickTo`.
-   **Staggered Animations**: Lists (Skills, Experience, Awards) appear in elegant sequences.
-   **Clip-Path Reveals**: "Curtain" effects for images and section transitions.

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
