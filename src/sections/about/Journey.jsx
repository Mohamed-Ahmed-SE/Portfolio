import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
    { year: "2024 - Present", role: "Fullstack Developer (MERN)", company: "Freelance", description: "Building scalable web applications, mastering MongoDB, Express, React, and Node.js ecosystems." },
    { year: "2024", role: "Beginner Flutter Dev", company: "Self-Taught", description: "Exploring cross-platform mobile development, building performant native APPs." },
    { year: "2023 - 2024", role: "UI/UX Designer", company: "Design Studio", description: "Crafting intuitive digital experiences and high-fidelity prototypes in Figma." },
];

const Journey = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".journey-row",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-10 bg-black text-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="text-[#C6A665] font-mono tracking-widest uppercase text-sm mb-2 block">The Path</span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">My Journey</h2>
                    </div>
                    <p className="text-white/50 max-w-md text-right hidden md:block">
                        A history of continuous evolution and technical mastery.
                    </p>
                </div>

                <div className="flex flex-col">
                    {EXPERIENCE.map((exp, idx) => (
                        <div key={idx} className="journey-row group flex flex-col md:flex-row md:items-center py-12 border-b border-white/10 hover:border-[#C6A665] transition-colors duration-500">

                            {/* Year - Large & Bold */}
                            <div className="md:w-1/4 mb-4 md:mb-0">
                                <span className="text-4xl md:text-5xl font-light text-white/30 group-hover:text-white transition-colors duration-500 font-mono">
                                    {exp.year}
                                </span>
                            </div>

                            {/* Role & Company */}
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A665]" />
                                    <span className="text-[#C6A665] font-mono uppercase tracking-widest text-sm">
                                        {exp.company}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="md:w-1/3 md:ml-auto">
                                <p className="text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                                    {exp.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
