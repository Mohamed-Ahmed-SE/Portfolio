import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectVision = ({ vision }) => {
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        tl.to(bgRef.current, {
            yPercent: 30,
            ease: "none",
        });

        gsap.from(".vision-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".vision-text-container",
                start: "top 80%",
            }
        });

    }, []);

    if (!vision) return null;

    return (
        <section ref={containerRef} className="relative w-full py-40 overflow-hidden text-white">
            <div
                ref={bgRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%] -z-10"
            >
                <div className="absolute inset-0 bg-black/80 z-10" />
                <img
                    src={vision.bgImage}
                    alt="Vision Background"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="container mx-auto px-6 md:px-10 vision-text-container">
                <div className="max-w-4xl">
                    <h2 className="vision-text text-sm uppercase tracking-[0.2em] mb-8 text-white/50">The Vision</h2>
                    <h3 className="vision-text text-4xl md:text-7xl font-light leading-[1.1] mb-12">
                        {vision.title}
                    </h3>
                    <p className="vision-text text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
                        {vision.text}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectVision;
