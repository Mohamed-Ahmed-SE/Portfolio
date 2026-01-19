import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectHero = () => {
    const containerRef = useRef(null);
    return (
        <section ref={containerRef} className="pt-40 pb-20 px-6 md:px-10 bg-white text-black flex flex-col items-start justify-center">
            <div className="text-left w-full">
                <span className="block text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-6">
                    Our Portfolio
                </span>
                <h1 className="text-[12vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter uppercase">
                    Selected<br className="md:hidden" /> Works
                </h1>
                <div className="mt-10 flex flex-col md:flex-row justify-start gap-4 md:gap-10 text-xs font-mono text-gray-400 uppercase tracking-widest">
                    <span>( 2023 — 2024 )</span>
                    <span className="hidden md:inline-block">/</span>
                    <span>Cairo, Egypt</span>
                </div>
            </div>
        </section>
    );
};

export default ProjectHero;
