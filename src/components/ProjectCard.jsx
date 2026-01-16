import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const ProjectCard = ({ project, index, onHover, onLeave }) => {
    const cardRef = useRef(null);
    const titleText = useRef(null); // The actual text element
    const accentLine = useRef(null);
    const navigate = useNavigate();

    useGSAP(() => {
        gsap.fromTo(
            cardRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
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

        // Title Shift
        gsap.to(titleText.current, {
            x: 30,
            color: project.accentColor || "#fff",
            skewX: -10,
            duration: 0.6,
            ease: "power3.out"
        });

        // Line Expand
        gsap.to(accentLine.current, {
            width: "100%",
            backgroundColor: project.accentColor || "#fff",
            duration: 0.8,
            ease: "power3.out"
        });
    };

    const handleMouseLeave = () => {
        onLeave();

        gsap.to(titleText.current, {
            x: 0,
            color: "white",
            skewX: 0,
            duration: 0.6,
            ease: "power3.out"
        });

        gsap.to(accentLine.current, {
            width: "0%",
            duration: 0.6,
            ease: "power3.out"
        });
    };

    return (
        <div
            ref={cardRef}
            className={`group relative w-full py-24 md:py-32 border-b border-white/5 cursor-pointer ${index % 2 === 0 ? 'ml-0' : 'md:ml-[20%]'} max-w-[90vw] z-10`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/projects/${project.slug}`)}
        >
            <div className="flex flex-col gap-6 relative z-10">

                {/* Metadata Row */}
                <div className="flex items-center gap-6 text-xs md:text-sm font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors duration-500">
                    <span>0{index + 1}</span>
                    <span className="w-12 h-[1px] bg-white/20" />
                    <span>{project.category}</span>
                    <span className="ml-auto md:ml-0">{project.year}</span>
                </div>

                {/* Massive Title */}
                <div className="relative overflow-hidden py-2">
                    <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.85] text-white transition-opacity duration-500">
                        <span ref={titleText} className="inline-block origin-left">{project.name}</span>
                    </h2>
                    {/* Accent Line */}
                    <div ref={accentLine} className="h-2 mt-4 bg-white/0 w-0" />
                </div>

                {/* Description & Tags */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed">
                        {project.cinematicQuote || project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {project.techStack?.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
