import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const TECH_CATEGORIES = [
    {
        title: "Frontend Power",
        icon: "lucide:layout",
        skills: [
            { name: "React", icon: "logos:react" },
            { name: "Next.js", icon: "logos:nextjs-icon" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        ]
    },
    {
        title: "Creative & 3D",
        icon: "lucide:box",
        skills: [
            { name: "Three.js", icon: "skill-icons:threejs-dark" },
            { name: "GSAP", icon: "logos:greensock-icon" },

            { name: "Framer", icon: "simple-icons:framer" },
        ]
    },
    {
        title: "Backend & Data",
        icon: "lucide:server",
        skills: [
            { name: "Node.js", icon: "logos:nodejs-icon" },
            { name: "Express", icon: "simple-icons:express" },
            { name: "MongoDB", icon: "logos:mongodb-icon" },
            { name: "Firebase", icon: "logos:firebase" },
        ]
    },
    {
        title: "Mobile (Flutter)",
        icon: "lucide:smartphone",
        skills: [
            { name: "Flutter", icon: "logos:flutter" },
            { name: "Dart", icon: "logos:dart" },
            { name: "Android", icon: "logos:android-icon" },
            { name: "iOS", icon: "simple-icons:apple" },
        ]
    }
];

const SkillClusters = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".tech-category",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%", // Trigger earlier
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-10 bg-black text-white relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A665]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-12 md:mb-20">
                    <span className="text-[#C6A665] font-mono uppercase tracking-widest text-sm mb-2 block">The Engine</span>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">Technology Stack</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {TECH_CATEGORIES.map((cat, idx) => (
                        <div key={idx} className="tech-category p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-[#C6A665]/30 transition-all duration-500 backdrop-blur-sm group">

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-white/5 text-[#C6A665]">
                                    <Icon icon={cat.icon} className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold">{cat.title}</h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex flex-col items-center gap-3 group/icon">
                                        <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-3xl transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:border-[#C6A665]/50 shadow-lg shadow-black/50">
                                            <Icon icon={skill.icon} />
                                        </div>
                                        <span className="text-xs font-mono text-white/50 group-hover/icon:text-white transition-colors">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillClusters;
