import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectPerformance = ({ performance }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray(".perf-value").forEach((el) => {
            const finalValue = parseFloat(el.getAttribute("data-value"));
            gsap.fromTo(el,
                { innertText: 0 },
                {
                    innerHTML: finalValue,
                    duration: 2,
                    ease: "power2.out",
                    snap: { innerHTML: 0.1 },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        });

        gsap.from(".perf-item", {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, []);

    if (!performance) return null;

    return (
        <section ref={containerRef} className="py-20 px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
                {performance.map((metric, idx) => (
                    <div key={idx} className="perf-item text-center">
                        <div className="flex items-end justify-center gap-1 mb-2">
                            <span
                                className="perf-value text-5xl md:text-7xl font-light tracking-tighter"
                                data-value={metric.value}
                            >
                                0
                            </span>
                            <span className="text-xl md:text-2xl mb-2 opacity-50">{metric.unit}</span>
                        </div>
                        <p className="text-xs uppercase tracking-widest opacity-40">{metric.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectPerformance;
