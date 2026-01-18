import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
    {
        title: "Empathy First",
        subtitle: "Building for Humans",
        desc: "Understanding the user is not a checklist item; it is the foundation of every decision.",
        icon: "lucide:heart",
        color: "text-[#C6A665]"
    },
    {
        title: "Obsessive Detail",
        subtitle: "Pixel Perfection",
        desc: "The integrity of a system is found in its smallest parts. I care about the whitespace.",
        icon: "lucide:search",
        color: "text-[#C6A665]"
    },
    {
        title: "Playful Curiosity",
        subtitle: "Sandbox Mindset",
        desc: "Great work is born from experimentation. I maintain a sandbox mindset, always asking 'what if'.",
        icon: "lucide:zap",
        color: "text-[#C6A665]"
    }
];

const ValuesCollaboration = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".value-row",
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-10 bg-zinc-950 text-white relative">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24">
                    <h2 className="text-4xl md:text-7xl font-light tracking-tighter mb-4">Core Principles</h2>
                    <div className="w-full h-[1px] bg-white/10" />
                </div>

                <div className="flex flex-col gap-10">
                    {VALUES.map((val, idx) => (
                        <div key={idx} className="value-row group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-white/5 hover:border-white/20 transition-colors duration-500">

                            <div className="flex items-center gap-8 md:w-1/3">
                                <span className="text-xs font-mono text-white/30">0{idx + 1}</span>
                                <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[#C6A665] transition-colors duration-300">
                                    {val.title}
                                </h3>
                            </div>

                            <div className="md:w-1/3 mt-4 md:mt-0">
                                <div className={`text-xl font-mono uppercase tracking-widest transition-opacity duration-300 ${val.color} opacity-100 translate-y-0 md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0`}>
                                    {val.subtitle}
                                </div>
                            </div>

                            <div className="md:w-1/3 mt-6 md:mt-0 max-w-sm">
                                <p className="transition-colors duration-300 leading-relaxed font-light text-white md:text-white/50 md:group-hover:text-white">
                                    {val.desc}
                                </p>
                            </div>

                            <Icon icon={val.icon} className="absolute right-0 text-9xl transition-opacity duration-500 pointer-events-none opacity-5 md:opacity-0 md:group-hover:opacity-10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesCollaboration;
