// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    slug: "mobile-accessories",
    year: "2024",
    client: "TechGear Inc.",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    challenge: "The client needed a high-performance e-commerce platform that could handle thousands of SKUs while maintaining sub-second load times and a premium user experience.",
    solution: "We built a headless commerce solution using Next.js and Shopify, implementing rigorous caching strategies and image optimization. The UI features smooth page transitions and a custom cart experience.",
    outcome: "Conversion rates increased by 40% within the first month of launch, and the site maintained a 98/100 Lighthouse performance score.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    gallery: ["/assets/projects/mobile-accessories-store.jpg", "/assets/projects/mobile-accessories-store.jpg"],
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    slug: "plant-shop",
    year: "2023",
    client: "GreenLife",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    challenge: "Creating a digital experience that felt as organic and calming as the physical store, while managing complex shipping logistics for live plants.",
    solution: "We designed a minimalist interface with heavy use of negative space and botanical typography. A custom inventory system manages plant care guides alongside product data.",
    outcome: "The brand successfully expanded from local delivery to nationwide shipping, with a return customer rate of 35%.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    gallery: ["/assets/projects/plant-shop.jpg", "/assets/projects/plant-shop.jpg"],
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    slug: "apple-tech",
    year: "2024",
    client: "iResell",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    challenge: "Building trust in the refurbished electronics market through transparent condition grading and a professional, reassuring design language.",
    solution: "We implemented a verified seller system and a 360-degree product view component. The design closely mirrors Apple's own aesthetic to foster familiarity.",
    outcome: "A record-breaking launch weekend with over $50k in sales and zero security incidents.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    gallery: ["/assets/projects/apple-tech-store.jpg", "/assets/projects/apple-tech-store.jpg"],
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    slug: "gadget-store",
    year: "2023",
    client: "CircuitCity V2",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    challenge: "Managing a massive catalog with robust filtering without overwhelming the user.",
    solution: "We engineered a faceted search engine with instant feedback. The layout uses modular grid systems to highlight featured products without clutter.",
    outcome: "Search abandonment dropped by 25% and average order value increased by 15%.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    gallery: ["/assets/projects/electronics-store.jpg", "/assets/projects/electronics-store.jpg"],
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    slug: "home-decor",
    year: "2023",
    client: "Artisan Living",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    challenge: "Showcasing high-end textures and materials through a screen.",
    solution: "We utilized high-resolution image serving with zoom capabilities and mood-board style layouts. The color palette adapts to the dominant colors of the product being viewed.",
    outcome: "Featured in 'Web Design Monthly' and doubled the client's online revenue quarter-over-quarter.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    gallery: ["/assets/projects/home-decor-store.jpg", "/assets/projects/home-decor-store.jpg"],
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    slug: "game-store",
    year: "2024",
    client: "Pixel Play",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    challenge: "Competing with established giants by offering a more personalized, community-driven storefront.",
    solution: "Integrated Twitch streams directly into product pages and built a gamified loyalty program. The dark-mode-first design appeals specifically to the gaming demographic.",
    outcome: "User retention is 3x the industry average, with users spending an average of 12 minutes per session.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    gallery: ["/assets/projects/game-store.jpg", "/assets/projects/game-store.jpg"],
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ali.sanatidev/reels/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ali-sanati/" },
  { name: "GitHub", href: "https://github.com/Ali-Sanati" },
];
