import React, { useRef, useState } from "react";
import Navbar from "../sections/Navbar";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import ClientMarquee from "../components/ClientMarquee";
import { projectData as projects } from "../constants/projectData";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Filters = ["All", "E-commerce", "Web App", "Creative"];

const ProjectsPage = () => {
    const overlayRefs = useRef([]);
    const previewRef = useRef(null);
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const text = `A curated selection of work that
    defines my approach to digital
    product design and engineering.`;

    const mouse = useRef({ x: 0, y: 0 });
    const moveX = useRef(null);
    const moveY = useRef(null);

    useGSAP(() => {
        // Preview hover effect
        moveX.current = gsap.quickTo(previewRef.current, "x", {
            duration: 0.8,
            ease: "power3.out",
        });
        moveY.current = gsap.quickTo(previewRef.current, "y", {
            duration: 0.8,
            ease: "power3.out",
        });

        // Initial Project List Entry
        gsap.from("#project-item", {
            y: 100,
            opacity: 0,
            delay: 0.2,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
        });

        // Reveal new sections on scroll
        gsap.utils.toArray(".reveal-section").forEach((section) => {
            gsap.from(section, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            });
        });

    }, [activeFilter]); // Re-animate on filter change

    const handleMouseEnter = (index) => {
        if (window.innerWidth < 768) return;
        setCurrentIndex(index);

        const el = overlayRefs.current[index];
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.fromTo(
            el,
            { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                duration: 0.4,
                ease: "power2.out",
            }
        );

        gsap.to(previewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (index) => {
        if (window.innerWidth < 768) return;
        setCurrentIndex(null);

        const el = overlayRefs.current[index];
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.to(el, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            duration: 0.3,
            ease: "power2.in",
        });

        gsap.to(previewRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
        moveX.current(mouse.current.x);
        moveY.current(mouse.current.y);
    };

    const handleProjectClick = (slug) => {
        navigate(`/projects/${slug}`);
    };

    // Simple keyword based filtering
    const filteredProjects = projects.filter(p => {
        if (activeFilter === "All") return true;
        const searchStr = (p.name + p.description + p.frameworks.map(f => f.name).join(" ")).toLowerCase();
        if (activeFilter === "E-commerce") return searchStr.includes("store") || searchStr.includes("shop");
        if (activeFilter === "Web App") return searchStr.includes("app") || searchStr.includes("dashboard");
        if (activeFilter === "Creative") return searchStr.includes("3d") || searchStr.includes("experience");
        return true;
    });

    return (
        <div className="bg-white min-h-screen pb-20 cursor-default" onMouseMove={handleMouseMove}>
            <Navbar />

            <div className="pt-40">
                <AnimatedHeaderSection
                    subTitle={"Selected Works 2023-2024"}
                    title={"All Projects"}
                    text={text}
                    textColor={"text-black"}
                />
            </div>

            {/* Filters */}
            <div className="px-6 md:px-10 mt-12 mb-8 flex flex-wrap gap-4">
                {Filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2 rounded-full border border-black transition-all duration-300 ${activeFilter === filter
                                ? "bg-black text-white"
                                : "bg-transparent text-black hover:bg-black/5"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="flex flex-col font-light relative mb-20 min-h-[50vh]">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        id="project-item"
                        className="relative flex flex-col gap-1 py-10 cursor-pointer group md:gap-0 border-b border-black/10 transition-colors duration-300"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        onClick={() => handleProjectClick(project.slug)}
                    >
                        {/* overlay */}
                        <div
                            ref={(el) => {
                                overlayRefs.current[index] = el;
                            }}
                            className="absolute inset-0 hidden md:block bg-black -z-10 pointer-events-none"
                            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
                        />

                        {/* title & logic */}
                        <div className="flex flex-col md:flex-row justify-between items-baseline px-10 text-black transition-all duration-500 md:group-hover:px-14 md:group-hover:text-white">
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-mono opacity-50 hidden md:block">0{index + 1}</span>
                                <h2 className="lg:text-[60px] text-[32px] leading-none uppercase tracking-tighter">
                                    {project.name}
                                </h2>
                            </div>
                            <div className="flex items-center gap-4 mt-4 md:mt-0">
                                <span className="text-sm uppercase tracking-widest opacity-60 md:group-hover:opacity-100">{project.client}</span>
                                <Icon icon="lucide:arrow-up-right" className="md:size-8 size-6" />
                            </div>
                        </div>

                        {/* framework tags */}
                        <div className="flex px-10 md:px-14 mt-4 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 text-black/60 md:group-hover:text-white/60">
                            {project.frameworks.map((framework) => (
                                <p key={framework.id}>{framework.name}</p>
                            ))}
                        </div>

                        {/* mobile preview */}
                        <div className="relative flex items-center justify-center px-10 md:hidden h-[300px] mt-6">
                            <img
                                src={project.image}
                                alt={`${project.name}-preview`}
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>
                    </div>
                ))}

                {/* Floating preview */}
                <div
                    ref={previewRef}
                    className="fixed top-0 left-0 z-50 overflow-hidden pointer-events-none w-[400px] h-[300px] hidden md:block opacity-0 rounded-lg shadow-2xl"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    {currentIndex !== null && filteredProjects[currentIndex] && (
                        <img
                            src={filteredProjects[currentIndex].image}
                            alt="preview"
                            className="object-cover w-full h-full"
                        />
                    )}
                </div>
            </div>

            {/* MARQUEE */}
            <ClientMarquee />

            {/* PROCESS SECTION */}
            <section className="px-6 md:px-10 mb-40 reveal-section">
                <h3 className="text-sm uppercase tracking-widest opacity-50 mb-12">My Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Discovery", desc: "Understanding the core problem, audience, and business goals." },
                        { title: "Strategy", desc: "Defining the technical architecture and user experience roadmap." },
                        { title: "Execution", desc: "Agile development with continuous feedback and rigorous testing." },
                        { title: "Launch", desc: "Deployment, performance optimization, and handover." }
                    ].map((step, idx) => (
                        <div key={idx} className="border-t border-black/20 pt-6">
                            <span className="text-xs font-mono opacity-40 mb-2 block">0{idx + 1}</span>
                            <h4 className="text-xl mb-3">{step.title}</h4>
                            <p className="text-black/60 font-light leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIAL SECTION */}
            <section className="bg-black text-white py-32 px-6 md:px-10 mb-40 reveal-section">
                <div className="max-w-4xl mx-auto text-center">
                    <Icon icon="lucide:quote" className="size-12 mx-auto mb-8 opacity-50" />
                    <p className="text-3xl md:text-5xl font-light leading-tight mb-10">
                        "Mohamed is one of those rare developers who truly understands design. He doesn't just build what you ask for; he elevates it."
                    </p>
                    <div className="text-sm uppercase tracking-widest opacity-60">
                        <p>Sarah Jenkins</p>
                        <p className="opacity-50">Product Director, TechGear Inc.</p>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="px-6 md:px-10 mb-20 reveal-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h3 className="text-4xl uppercase tracking-tighter mb-4">FAQ</h3>
                        <p className="text-black/60">Common questions about collaborations.</p>
                    </div>
                    <div className="lg:col-span-8 space-y-10">
                        {[
                            { q: "Are you available for freelance?", a: "Yes, I am currently accepting new projects for Q3 2024. Please stick to email for inquiries." },
                            { q: "What is your tech stack?", a: "I specialize in the React ecosystem (Next.js, Remix) combined with WebGL (Three.js) for immersive experiences." },
                            { q: "Do you do design?", a: "I focus on creative engineering but often collaborate with designers to bridge the gap between Figma and code." }
                        ].map((faq, idx) => (
                            <div key={idx} className="border-b border-black/10 pb-8">
                                <h4 className="text-xl mb-4">{faq.q}</h4>
                                <p className="text-black/60 font-light">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProjectsPage;
