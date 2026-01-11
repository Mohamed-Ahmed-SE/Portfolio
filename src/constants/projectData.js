export const projectData = [
    {
        id: 1,
        name: "Mobile Accessories E-commerce",
        slug: "mobile-accessories",
        year: "2024",
        client: "TechGear Inc.",
        role: "Lead Frontend Developer",
        team: "Design: Studio A, Backend: John D.",
        description:
            "A premium online store specializing in high-end phone accessories. The goal was to create a shopping experience that feels as premium as the products themselves, utilizing smooth transitions and immersive product displays.",
        challenge: "The primary challenge was to handle a large inventory of SKUs while maintaining instantaneous page loads and a fluid 60fps user experience. We also needed to integrate a complex verified reviews system without impacting performance.",
        solution: "We utilized Next.js for its robust static generation capabilities, coupled with Shopify's Storefront API. GSAP was used for all interaction designs, ensuring that animations were performant and didn't trigger layout thrashing. Images were optimized using a custom key-value store edge delivery network.",
        outcome: "The launch resulted in a 40% increase in conversion rate compared to the client's previous platform. The site won 'E-commerce Site of the Day' on Awwwards.",
        process: [
            { title: "Discovery", description: "Analyzing market trends and competitor UX/UI." },
            { title: "Prototyping", description: "High-fidelity motion prototypes in Figma & After Effects." },
            { title: "Development", description: "Component-driven architecture using React & Tailwind." },
            { title: "Testing", description: "Rigorous performance and accessibility testing." }
        ],
        // New Data Fields
        vision: {
            title: "Redefining Mobile Commerce",
            text: "We didn't just want to build a store; we wanted to build a digital flagship. The vision was to merge the tactile feeling of a physical showroom with the convenience of digital checkout. Every interaction was designed to feel heavy, substantial, and premium.",
            bgImage: "/assets/backgrounds/fabric.jpg" // Placeholder
        },
        features: [
            { title: "360° Product Viewer", desc: "Interactive WebGL model tailored for mobile touch.", icon: "lucide:rotate-3d" },
            { title: "Smart Bundling", desc: "AI-driven algorithmic suggestions that feel natural.", icon: "lucide:sparkles" },
            { title: "Instant Checkout", desc: "One-tap Apple Pay integration reducing friction.", icon: "lucide:credit-card" }
        ],
        architecture: [
            { layer: "Presentation", tech: "Next.js + Tailwind", description: "Server-side rendered for SEO, client-hydrated for interactivity." },
            { layer: "State", tech: "Zustand", description: "Lightweight global state for cart and user preferences." },
            { layer: "Animation", tech: "GSAP", description: "Timeline management for complex choreographies." },
            { layer: "Commerce", tech: "Shopify Headless", description: "Robust backend infrastructure for inventory management." }
        ],
        performance: [
            { label: "Performance", value: 98, unit: "" },
            { label: "FCP", value: 0.8, unit: "s" },
            { label: "CLS", value: 0, unit: "" }
        ],
        comparison: {
            beforeImage: "/assets/projects/old-site.jpg", // Placeholder
            afterImage: "/assets/projects/mobile-accessories-store.jpg"
        },
        learnings: {
            text: "This project taught us the importance of edge caching for dynamic content. We initially struggled with TTFB on personalized routes, but implementing a stale-while-revalidate strategy solved it.",
            nextSteps: "Future iterations will include AR preview capabilities using WebXR."
        },
        href: "https://example.com",
        image: "/assets/projects/mobile-accessories-store.jpg",
        bgImage: "/assets/backgrounds/blanket.jpg",
        gallery: [
            "/assets/projects/mobile-accessories-store.jpg",
            "/assets/projects/plant-shop.jpg",
            "/assets/projects/apple-tech-store.jpg"
        ],
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "GSAP" },
            { id: 4, name: "Shopify" },
            { id: 5, name: "Tailwind" },
        ],
    },
    {
        id: 2,
        name: "Plant Shop E-commerce",
        slug: "plant-shop",
        year: "2023",
        client: "GreenLife",
        role: "Full Stack Developer",
        team: "Solo Project",
        description:
            "An online sanctuary for plant lovers. This e-commerce platform specializes in rare and decorative plants, offering a calm, organic, and trustworthy user interface.",
        challenge: "Shipping live plants is logistically complex. The digital experience needed to reassure customers about shipping safety while providing detailed care instructions for each unique specimen.",
        solution: "We created a 'Plant Care Guide' system that dynamically links to products. The UI uses abundant whitespace and organic typography to mimic nature. A custom shipping calculator was built to estimate safe arrival times based on weather forecasts.",
        outcome: "Reduced support tickets regarding plant care by 60% and successfully scaled the business from local to nationwide.",
        process: [
            { title: "Research", description: "Interviewing plant owners and nursery managers." },
            { title: "Design", description: "Creating a design system based on organic shapes." },
            { title: "Build", description: "Next.js implementation with Contentful CMS." }
        ],
        vision: {
            title: "Digital Botany",
            text: "The web is often rigid and grid-based. We wanted this site to feel organic, growing, and alive. Subtle leaf-sway animations and a soft color palette invite the user to slow down and breathe.",
            bgImage: "/assets/backgrounds/leaves.jpg"
        },
        features: [
            { title: "Care Alerts", desc: "Automated SMS reminders for watering schedule.", icon: "lucide:droplets" },
            { title: "Visual Finder", desc: "Filter plants by light and pet-friendliness visually.", icon: "lucide:sun" },
            { title: "Live Inventory", desc: "Real-time sync with greenhouse database.", icon: "lucide:database" }
        ],
        architecture: [
            { layer: "CMS", tech: "Contentful", description: "Flexible content model for complex plant data." },
            { layer: "Frontend", tech: "Astro", description: "Islands architecture for minimal JS payload." },
            { layer: "Styling", tech: "Tailwind", description: "Rapid UI development with custom config." }
        ],
        performance: [
            { label: "SEO Score", value: 100, unit: "" },
            { label: "Load Time", value: 1.2, unit: "s" },
            { label: "Access", value: 100, unit: "" }
        ],
        comparison: {
            beforeImage: "/assets/projects/old-site.jpg",
            afterImage: "/assets/projects/plant-shop.jpg"
        },
        learnings: {
            text: "Balancing high-res photography with performance was key. We utilized AVIF formats and responsive sizing to cut bandwidth by 70%.",
            nextSteps: "Exploring a subscription model for monthly rare seeds."
        },
        href: "",
        image: "/assets/projects/plant-shop.jpg",
        bgImage: "/assets/backgrounds/curtains.jpg",
        gallery: [
            "/assets/projects/plant-shop.jpg",
            "/assets/projects/mobile-accessories-store.jpg",
            "/assets/projects/home-decor-store.jpg"
        ],
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "Stripe" },
            { id: 4, name: "Contentful" },
        ],
    },
    {
        id: 3,
        name: "Apple Tech Marketplace",
        slug: "apple-tech",
        year: "2024",
        client: "iResell",
        role: "Frontend Architect",
        team: "Design: PixelPerfect",
        description:
            "A specialized marketplace for refurbished Apple products. The site aims to restore trust in the second-hand market through a highly professional, transparent, and detailed presentation.",
        challenge: "Overcoming the stigma of 'used' products. The site needed to look as polished as Apple.com to convey quality and reliability.",
        solution: "Implemented a 360-degree product viewer and a rigorous grading system visualization. We used precise typography and micro-interactions to mirror the premium feel of the products being sold.",
        outcome: "Achieved $50k in sales in the first weekend. User trust scores (NPS) are consistently above 70.",
        process: [
            { title: "Strategy", description: "Defining the trust signals required for conversion." },
            { title: "UX", description: "Simplifying the condition grading filtering." },
            { title: "Dev", description: "Blazor WebAssembly for near-native performance." }
        ],
        vision: {
            title: "Trust by Design",
            text: "Transparency was the north star. Every pixel was placed to communicate clarity. We removed visual noise to let the product quality speak for itself.",
            bgImage: "/assets/backgrounds/tech-grid.jpg"
        },
        features: [
            { title: "Device Diagnostic", desc: "API integration to check IMEI status instantly.", icon: "lucide:shield-check" },
            { title: "Price History", desc: "Interactive chart showing market value trends.", icon: "lucide:trending-up" },
            { title: "Visual Grading", desc: "Macro photography of every scratch/dent.", icon: "lucide:zoom-in" }
        ],
        architecture: [
            { layer: "Framework", tech: "Blazor WASM", description: "C# running in the browser for complex logic." },
            { layer: "Cloud", tech: "Azure Static Web Apps", description: "Global scale distribution." },
            { layer: "Database", tech: "CosmosDB", description: "Low latency data access." }
        ],
        performance: [
            { label: "TTI", value: 0.5, unit: "s" },
            { label: "Lighthouse", value: 95, unit: "" },
            { label: "Uptime", value: 99.9, unit: "%" }
        ],
        comparison: {
            beforeImage: "/assets/projects/old-site.jpg",
            afterImage: "/assets/projects/apple-tech-store.jpg"
        },
        learnings: {
            text: "WebAssembly is powerful but heavy. We had to implement aggressive lazy loading for the .NET runtime to keep initial load fast.",
            nextSteps: "Implementing a trade-in value calculator wizard."
        },
        href: "",
        image: "/assets/projects/apple-tech-store.jpg",
        bgImage: "/assets/backgrounds/map.jpg",
        gallery: [
            "/assets/projects/apple-tech-store.jpg",
            "/assets/projects/electronics-store.jpg",
            "/assets/projects/game-store.jpg"
        ],
        frameworks: [
            { id: 1, name: "Blazor" },
            { id: 2, name: "C#" },
            { id: 3, name: "Tailwind" },
            { id: 4, name: "Azure" },
        ],
    },
    {
        id: 4,
        name: "Electronics & Gadgets",
        slug: "gadget-store",
        year: "2023",
        client: "CircuitCity V2",
        role: "UI Engineer",
        team: "Team of 4",
        description:
            "A high-volume electronics retailer. The site features tens of thousands of products, requiring a robust search and filtering engine without compromising speed.",
        challenge: "Navigation complexity. With so many categories, users often get lost. The challenge was to make a massive catalog feel manageable and browsable.",
        solution: "We designed a 'Mega Menu' that is both visual and data-dense, and implemented Algolia for instant, typo-tolerant search. A 'Compare' feature allows users to side-by-side specs easily.",
        outcome: "Search abandonment rate dropped by 25%. Product discovery time reduced by half.",
        process: [
            { title: "Audit", description: "Analyzing the failing UX of the legacy site." },
            { title: "Architecture", description: "Designing a scalable category taxonomy." },
            { title: "Frontend", description: "Vue.js SPA with state management." }
        ],
        vision: {
            title: "Order from Chaos",
            text: "The goal was to make a massive dataset feel like a curated boutique. Information architecture was the design. If the user can't find it, it doesn't exist.",
            bgImage: "/assets/backgrounds/grid.jpg"
        },
        features: [
            { title: "Vector Search", desc: "Semantic search understanding user intent.", icon: "lucide:search" },
            { title: "Spec Compare", desc: "Drag-and-drop comparison tool.", icon: "lucide:arrow-left-right" },
            { title: "Real-time Stock", desc: "Socket-based inventory updates.", icon: "lucide:refresh-cw" }
        ],
        architecture: [
            { layer: "Presentation", tech: "Vue 3", description: "Composition API for reusable logic." },
            { layer: "Data", tech: "Pinia", description: "Intuitive state management." },
            { layer: "Search", tech: "Algolia", description: "Enterprise-grade search infrastructure." }
        ],
        performance: [
            { label: "Search", value: 20, unit: "ms" },
            { label: "Hydration", value: 0.3, unit: "s" },
            { label: "DOM", value: 500, unit: "nodes" }
        ],
        comparison: {
            beforeImage: "/assets/projects/old-site.jpg",
            afterImage: "/assets/projects/electronics-store.jpg"
        },
        learnings: {
            text: "Optimizing giant DOM trees in Vue required careful use of v-memo and virtual scrolling. We learned that the framework can only do so much; architecture matters.",
            nextSteps: "Adding voice search capabilities."
        },
        href: "",
        image: "/assets/projects/electronics-store.jpg",
        bgImage: "/assets/backgrounds/poster.jpg",
        gallery: [
            "/assets/projects/electronics-store.jpg",
            "/assets/projects/apple-tech-store.jpg",
            "/assets/projects/mobile-accessories-store.jpg"
        ],
        frameworks: [
            { id: 1, name: "Vue.js" },
            { id: 2, name: "Laravel" },
            { id: 3, name: "Algolia" },
            { id: 4, name: "SCSS" },
        ],
    },
    {
        id: 5,
        name: "Home Decor Marketplace",
        slug: "home-decor",
        year: "2023",
        client: "Artisan Living",
        role: "Creative Developer",
        team: "Design: InHouse",
        description:
            "A boutique marketplace for artisan furniture and decor. The focus is on storytelling and the background of the makers.",
        challenge: "Communicating texture and build quality through a screen. Standard product photos weren't enough.",
        solution: "We implemented high-resolution 'Deep Zoom' functionality and video backgrounds for hero products. The layout changes color dynamically based on the product's material palette.",
        outcome: "Doubled online revenue quarter-over-quarter. Featured in Web Design Monthly.",
        process: [
            { title: "Concept", description: "Moodboarding textures and materials." },
            { title: "Design", description: "Creating a magazine-style layout." },
            { title: "Production", description: "Angular implementation with heavy asset optimization." }
        ],
        vision: {
            title: "Tactile Digital",
            text: "We wanted users to 'feel' the wood grain and 'touch' the velvet. Our design language relied on extreme close-ups and rich, warm tones to evoke comfort.",
            bgImage: "/assets/backgrounds/wood.jpg"
        },
        features: [
            { title: "AR Placement", desc: "View furniture in your room via WebXR.", icon: "lucide:box" },
            { title: "Maker Stories", desc: "Video profiles integrated into PDPs.", icon: "lucide:film" },
            { title: "Material Zoom", desc: "4K shader-based texture inspector.", icon: "lucide:microscope" }
        ],
        architecture: [
            { layer: "App", tech: "Angular", description: "Strict typing for enterprise scale." },
            { layer: "3D", tech: "Three.js", description: "Custom shaders for material visualization." },
            { layer: "Backend", tech: "Firebase", description: "Real-time database and auth." }
        ],
        performance: [
            { label: "Assets", value: 4, unit: "MB" }, // Intentionally high for rich media
            { label: "FPS", value: 60, unit: "" },
            { label: "Retention", value: 5, unit: "m" }
        ],
        comparison: {
            beforeImage: "/assets/projects/old-site.jpg",
            afterImage: "/assets/projects/home-decor-store.jpg"
        },
        learnings: {
            text: "Loading 4K textures is expensive. We wrote a custom progressive loader that streams quality levels based on network speed.",
            nextSteps: "Full VR showroom experience."
        },
        href: "",
        image: "/assets/projects/home-decor-store.jpg",
        bgImage: "/assets/backgrounds/table.jpg",
        gallery: [
            "/assets/projects/home-decor-store.jpg",
            "/assets/projects/plant-shop.jpg",
            "/assets/projects/curtains.jpg"
        ],
        frameworks: [
            { id: 1, name: "Angular" },
            { id: 2, name: "Three.js" },
            { id: 3, name: "Firebase" },
            { id: 4, name: "RxJS" },
        ],
    },
    {
        id: 6,
        name: "Digital Game Store",
        slug: "game-store",
        year: "2024",
        client: "Pixel Play",
        role: "Lead Engineer",
        team: "Co-op with Design Agency",
        description:
            "A digital storefront for gamers. Dark mode default, neon accents, and a focus on community and streaming integration.",
        challenge: "Competing with Steam/Epic. We needed a unique value proposition.",
        solution: "We integrated live Twitch streams directly onto product pages. Users can see the game being played live before buying. We also built a gamified loyalty system with animated badges.",
        outcome: "User retention is 3x the industry average. 'Session time' metric increased to 12 minutes.",
        process: [
            { title: "Gamification", description: "Designing the loyalty loop." },
            { title: "Integration", description: "Connecting Twitch and Discord APIs." },
            { title: "Launch", description: "SvelteKit app deployed to Edge." }
        ],
        vision: {
            title: "Player One Ready",
            text: "The UI itself is a game. Hover effects, sounds, and unlocks make browsing feel like playing. We respected the gaming aesthetic without descending into clutter.",
            bgImage: "/assets/backgrounds/neon.jpg"
        },
        features: [
            { title: "Live Streams", desc: "Twitch embed api seamless integration.", icon: "lucide:twitch" },
            { title: "XP System", desc: "Earn points for browsing and reviewing.", icon: "lucide:trophy" },
            { title: "Dark Mode", desc: "OLED-black optimized theme.", icon: "lucide:moon" }
        ],
        architecture: [
            { layer: "Framework", tech: "SvelteKit", description: "Truly reactive framework for game-like state." },
            { layer: "API", tech: "tRPC", description: "Type-safe communication with backend." },
            { layer: "Edge", tech: "Cloudflare", description: "Zero-latency content delivery." }
        ],
        performance: [
            { label: "TTFB", value: 40, unit: "ms" },
            { label: "Score", value: 100, unit: "" },
            { label: "Bundle", value: 15, unit: "kB" }
        ],
        comparison: {
            beforeImage: "/assets/projects/old-site.jpg",
            afterImage: "/assets/projects/game-store.jpg"
        },
        learnings: {
            text: "Svelte's animation engine is fantastic. We built complex transitions with zero external libraries, keeping the bundle tiny.",
            nextSteps: "Cloud gaming integration."
        },
        href: "",
        image: "/assets/projects/game-store.jpg",
        bgImage: "/assets/backgrounds/curtains.jpg",
        gallery: [
            "/assets/projects/game-store.jpg",
            "/assets/projects/electronics-store.jpg",
            "/assets/projects/mobile-accessories-store.jpg"
        ],
        frameworks: [
            { id: 1, name: "Svelte" },
            { id: 2, name: "Node.js" },
            { id: 3, name: "Twitch API" },
            { id: 4, name: "WebGL" },
        ],
    },
];
