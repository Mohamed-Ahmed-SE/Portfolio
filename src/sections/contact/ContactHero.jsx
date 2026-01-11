import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactHero = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".contact-title", {
            y: 100,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
        })
            .from(".status-indicator", {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
            }, "-=0.5");

    }, []);

    return (
        <section ref={containerRef} className="pt-40 px-6 md:px-10 mb-20">
            <h1 className="text-[clamp(3.5rem,8vw,9rem)] leading-[0.9] font-light uppercase tracking-tighter mb-12">
                <div className="overflow-hidden"><span className="contact-title block">Let's start</span></div>
                <div className="overflow-hidden"><span className="contact-title block">something</span></div>
                <div className="overflow-hidden"><span className="contact-title block">new together</span></div>
            </h1>

            <div className="status-indicator inline-flex items-center gap-3 px-4 py-2 bg-green-100 border border-green-200 rounded-full">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-800 uppercase tracking-wide">Available for new projects</span>
            </div>
        </section>
    );
};

export default ContactHero;
