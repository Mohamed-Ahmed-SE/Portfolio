import React, { useRef, useEffect } from "react";
import Navbar from "../sections/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { projectData as projects } from "../constants/projectData";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// New Sections
import ProjectVision from "../sections/project/ProjectVision";
import ProjectFeatures from "../sections/project/ProjectFeatures";
import ProjectArchitecture from "../sections/project/ProjectArchitecture";
import ProjectPerformance from "../sections/project/ProjectPerformance";
import ProjectLearnings from "../sections/project/ProjectLearnings";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailsPage = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useGSAP(() => {
        if (!project) return;

        // Refresh ScrollTrigger to ensure positions are correct after route change
        ScrollTrigger.refresh();

        const tl = gsap.timeline();

        tl.from(".project-title", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
            .from(".project-meta", {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5")
            .from(".project-hero-img", {
                scale: 1.1,
                clipPath: "inset(100% 0 0 0)",
                duration: 1.5,
                ease: "power4.inOut"
            }, "-=0.5");

        gsap.utils.toArray(".reveal-text").forEach((el) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                }
            });
        });

    }, [project]);

    if (!project) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <h1 className="text-4xl">Project Not Found</h1>
            </div>
        );
    }

    // Get next 2 projects simply by filtering out current and taking first 2
    const nextProjects = projects.filter(p => p.id !== project.id).slice(0, 2);

    return (
        <div ref={containerRef} className="bg-white min-h-screen pb-20">
            <Navbar />

            {/* Header */}
            <header className="pt-40 px-6 md:px-10 mb-10">
                <h1 className="project-title text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] font-light uppercase tracking-tighter mb-12">
                    {project.name}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-t border-black/20 py-8">
                    <div className="project-meta flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-widest opacity-50">Client</span>
                        <span className="text-lg leading-tight">{project.client || "Confidential"}</span>
                    </div>
                    <div className="project-meta flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-widest opacity-50">Role</span>
                        <span className="text-lg leading-tight">{project.role || "Developer"}</span>
                    </div>
                    <div className="project-meta flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-widest opacity-50">Year</span>
                        <span className="text-lg leading-tight">{project.year || "2024"}</span>
                    </div>
                    <div className="project-meta flex flex-col gap-2 lg:col-span-2">
                        <span className="text-xs uppercase tracking-widest opacity-50">Team</span>
                        <span className="text-lg leading-tight">{project.team || "Solo"}</span>
                    </div>
                </div>
                <div className="project-meta mt-8">
                    <span className="text-xs uppercase tracking-widest opacity-50 block mb-3">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                        {project.frameworks.map(f => (
                            <span key={f.id} className="px-3 py-1 border border-black/10 rounded-full text-sm hover:bg-black hover:text-white transition-colors cursor-default">
                                {f.name}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            <section className="px-4 md:px-10 mb-20 h-[50vh] md:h-[80vh] w-full">
                <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                        src={project.bgImage}
                        alt={project.name}
                        className="project-hero-img w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* 1. Performance Metrics (Hook) */}
            <ProjectPerformance performance={project.performance} />

            {/* Description / Challenge / Solution */}
            <section className="px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-40">
                <div className="lg:col-span-4 reveal-text">
                    <h3 className="text-sm uppercase tracking-widest opacity-50 mb-6">The Overview</h3>
                    <p className="text-lg font-light leading-relaxed text-black/80">
                        {project.description}
                    </p>
                </div>
                <div className="lg:col-span-1"></div>
                <div className="lg:col-span-7 reveal-text space-y-12">
                    <div>
                        <h3 className="text-sm uppercase tracking-widest opacity-50 mb-4">The Challenge</h3>
                        <p className="text-2xl md:text-3xl font-light leading-snug">
                            {project.challenge}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest opacity-50 mb-4">The Solution</h3>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Vision (Cinematic Break) */}
            <ProjectVision vision={project.vision} />

            {/* 3. Architecture (Technical Deep Dive) */}
            <ProjectArchitecture architecture={project.architecture} />

            {/* 4. Features (Interactive) */}
            <ProjectFeatures features={project.features} />

            {/* Process Section */}
            {project.process && (
                <section className="px-6 md:px-10 mb-40 mt-40">
                    <h3 className="reveal-text text-4xl md:text-6xl mb-16 font-light uppercase tracking-tighter">The Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {project.process.map((step, idx) => (
                            <div key={idx} className="reveal-text border-t border-black/20 pt-6">
                                <span className="text-xs font-mono opacity-50 mb-2 block">0{idx + 1}</span>
                                <h4 className="text-xl mb-2">{step.title}</h4>
                                <p className="text-sm opacity-60 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Gallery */}
            <section className="px-4 md:px-10 mb-40">
                <h3 className="reveal-text text-sm uppercase tracking-widest opacity-50 mb-8 ml-2">Visuals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {project.gallery && project.gallery.map((img, idx) => (
                        <div key={idx} className={`reveal-text overflow-hidden rounded-xl ${idx === 0 ? 'md:col-span-2' : ''}`}>
                            <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Outcome */}
            <section className="px-6 md:px-10 mb-20 bg-black text-white rounded-3xl py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center reveal-text">
                    <h3 className="text-sm uppercase tracking-widest opacity-50 mb-8">The Result</h3>
                    <p className="text-3xl md:text-5xl font-light leading-tight">
                        "{project.outcome}"
                    </p>
                </div>
            </section>

            {/* 5. Learnings (Reflection) */}
            <ProjectLearnings learnings={project.learnings} />

            {/* More Selected Works */}
            <section className="px-6 md:px-10 mb-20">
                <div className="flex justify-between items-end mb-12 reveal-text">
                    <h3 className="text-4xl md:text-6xl font-light uppercase tracking-tighter">More Selected Works</h3>
                    <button
                        onClick={() => navigate('/projects')}
                        className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
                    >
                        View All Works <Icon icon="lucide:arrow-right" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {nextProjects.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => navigate(`/projects/${p.slug}`)}
                            className="group cursor-pointer reveal-text"
                        >
                            <div className="w-full h-[400px] overflow-hidden rounded-xl mb-6 relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-2xl mb-2 group-hover:underline decoration-1 underline-offset-4">{p.name}</h4>
                                    <p className="text-sm opacity-50 uppercase tracking-widest">{p.client} • {p.year}</p>
                                </div>
                                <span className="p-3 rounded-full border border-black/10 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <Icon icon="lucide:arrow-up-right" className="size-5" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16 md:hidden">
                    <button
                        onClick={() => navigate('/projects')}
                        className="flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
                    >
                        View All Works <Icon icon="lucide:arrow-right" />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default ProjectDetailsPage;
