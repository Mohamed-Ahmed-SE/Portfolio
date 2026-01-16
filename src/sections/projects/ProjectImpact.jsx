import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    { label: "Users Reached", value: "10M+" },
    { label: "Revenue Generated", value: "$500M" },
    { label: "Awards Won", value: "25+" },
    { label: "Global Clients", value: "40+" }
];

const press = [
    "Forbes", "TechCrunch", "Awwwards", "HackerNews", "ProductHunt"
];

const ProjectImpact = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".metric-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-10 bg-white text-black">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                    <h3 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                        IMPACT<br />& REACH
                    </h3>
                    <p className="max-w-md text-lg text-gray-500 leading-relaxed text-right md:text-left">
                        We don't just build websites. We build digital assets that drive real-world business results and shape culture.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-black/10 pt-10 mb-20">
                    {metrics.map((m, i) => (
                        <div key={i} className="metric-item">
                            <h4 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">{m.value}</h4>
                            <span className="text-sm font-mono uppercase tracking-widest text-gray-500">{m.label}</span>
                        </div>
                    ))}
                </div>

                {/* Press/Featured */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-black/10 pt-10">
                    <span className="text-xs font-mono uppercase tracking-widest mb-6 md:mb-0">Featured In</span>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale">
                        {press.map((p, i) => (
                            <span key={i} className="text-xl md:text-2xl font-bold uppercase tracking-tighter hover:opacity-100 transition-opacity cursor-default">{p}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectImpact;
