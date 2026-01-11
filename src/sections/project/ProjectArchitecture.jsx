import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectArchitecture = ({ architecture }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".arch-card", {
            x: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });
    }, []);

    if (!architecture) return null;

    return (
        <section ref={containerRef} className="py-20 px-6 md:px-10 bg-zinc-50 border-y border-black/5">
            <h3 className="text-sm uppercase tracking-widest opacity-50 mb-16 text-center">Technical Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {architecture.map((layer, idx) => (
                    <div key={idx} className="arch-card bg-white p-8 rounded-xl shadow-sm border border-black/5 hover:border-black/20 transition-colors duration-300">
                        <span className="text-xs uppercase tracking-wider text-blue-600 mb-4 block">{layer.layer}</span>
                        <h4 className="text-2xl mb-4 font-medium">{layer.tech}</h4>
                        <p className="text-sm text-black/60 leading-relaxed">
                            {layer.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectArchitecture;
