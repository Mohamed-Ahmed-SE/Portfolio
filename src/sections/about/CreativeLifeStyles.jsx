import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreativeLifeStyles = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Reveal animation
        gsap.from(".creative-img", {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
        });
    }, []);

    return (
        <section ref={containerRef} className="py-20 px-6 sm:px-10 bg-black">
            <h2 className="text-4xl md:text-6xl font-light mb-16 text-white uppercase tracking-tighter">
                In The Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-[1400px] mx-auto">
                {/* Abstract Art - Code as Expression */}
                <div className="creative-img group relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-square">
                    <img
                        src="/images/creative-abstract.png"
                        alt="Code as Art"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <p className="text-white text-xl font-light tracking-widest uppercase">
                            Code as Art
                        </p>
                    </div>
                </div>

                {/* Workspace - Where Magic Happens */}
                <div className="creative-img group relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-square md:mt-24">
                    <img
                        src="/images/creative-workspace.png"
                        alt="Workspace"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <p className="text-white text-xl font-light tracking-widest uppercase">
                            The Lab
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativeLifeStyles;
