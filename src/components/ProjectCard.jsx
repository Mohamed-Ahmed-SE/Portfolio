import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const ProjectCard = ({ project, index, onHover, onLeave }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const navigate = useNavigate();

    useGSAP(() => {
        // Entry Animation
        gsap.fromTo(
            cardRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                }
            }
        );
    }, []);

    const handleMouseEnter = () => {
        onHover(project);

        // Scale Up Image
        gsap.to(imageRef.current, {
            scale: 1.05,
            duration: 0.6,
            ease: "power2.out"
        });

        // Lift Content slightly
        gsap.to(contentRef.current, {
            y: -10,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        onLeave();

        gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
        });

        gsap.to(contentRef.current, {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    // Fallback accent color if none provided
    const accent = project.accentColor || "#3b82f6";
    // Construct a gradient or shadow style based on accent
    const glowStyle = {
        boxShadow: `0 20px 80px -20px ${accent}40`, // 40 = ~25% opacity hex
    };

    return (
        <div
            ref={cardRef}
            className="group relative w-full mb-20 md:mb-32 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/projects/${project.slug}`)}
        >
            {/* Main Card Container */}
            <div
                className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-500 hover:border-white/30"
                style={glowStyle}
            >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        ref={imageRef}
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-100 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Colored Tint on Hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
                        style={{ backgroundColor: accent }}
                    />
                </div>

                {/* Content Overlay */}
                <div ref={contentRef} className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">

                    {/* Top Right Arrow */}
                    <div
                        className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300"
                        style={{ color: "white" }}
                    >
                        <Icon icon="lucide:arrow-up-right" className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" />
                    </div>

                    {/* Meta Tags */}
                    <div className="flex gap-3 mb-4">
                        <span
                            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur text-white border border-white/10"
                            style={{ borderColor: `${accent}40` }}
                        >
                            {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur text-white/70 border border-white/10">
                            {project.year}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight">
                        {project.name}
                    </h2>

                    {/* Description & Tech */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                        <p className="text-white/80 max-w-lg text-lg font-light leading-relaxed truncate-lines-2">
                            {project.cinematicQuote || project.description}
                        </p>

                        <div className="flex gap-2">
                            {project.techStack?.slice(0, 3).map((t, i) => (
                                <div key={i} className="flex items-center gap-1 text-xs text-white/60 font-mono uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
