import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectCTA = () => {
    const circleRef = useRef(null);

    useGSAP(() => {
        // Magnetic effect logic would go here, simplified hover for now
        const el = circleRef.current;

        el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.1, duration: 0.5, ease: "power2.out" });
        });

        el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.5, ease: "power2.out" });
        });

    }, []);

    return (
        <section className="h-screen w-full bg-white text-black flex items-center justify-center relative overflow-hidden z-10">
            {/* Background noise */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 flex flex-col items-center gap-10">
                <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-center leading-none">
                    Let's Build<br />The Future
                </h2>

                <div ref={circleRef} className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-black text-white flex items-center justify-center cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
                    <span className="relative z-10 text-xl font-bold uppercase tracking-widest group-hover:scale-110 transition-transform duration-300">
                        Start Now
                    </span>
                </div>
            </div>

            <div className="absolute bottom-10 w-full px-10 flex justify-between text-xs font-mono uppercase tracking-widest opacity-50">
                <span>Available for 2024</span>
                <span>Cairo, Egypt</span>
            </div>
        </section>
    );
};

export default ProjectCTA;
