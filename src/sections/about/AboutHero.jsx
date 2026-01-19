import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const AboutHero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
            .from(".hero-title-line", { y: 100, opacity: 0, stagger: 0.15, duration: 1, rotateX: -20 }, "-=0.5")
            .from(".hero-role", { x: -50, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
            .from(".hero-scroll", { y: -20, opacity: 0, duration: 0.8 }, "-=0.3");

    }, []);

    const roles = [
        "Fullstack Developer (MERN)",
        "Beginner Flutter Developer",
        "UI/UX Designer"
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 bg-black overflow-hidden pt-20">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#C6A665]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="hero-label flex items-center gap-4 mb-8 text-[#C6A665] font-mono text-sm uppercase tracking-widest">
                    <span className="w-10 h-[1px] bg-[#C6A665]" />
                    <span>The Architect</span>
                </div>

                <h1 ref={titleRef} className="hidden">About Me</h1>

                <div className="flex flex-col gap-2 mb-16">
                    <div className="overflow-hidden">
                        <div className="hero-title-line text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9]">
                            CRAFTING
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="hero-title-line text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                            DIGITAL
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="hero-title-line text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#C6A665] tracking-tighter leading-[0.9]">
                            REALITY
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-l border-white/20 pl-8">
                    {roles.map((role, i) => (
                        <div key={i} className="hero-role text-xl md:text-2xl text-white/60 font-light flex items-center gap-3">
                            <Icon icon="lucide:code-2" className="text-[#C6A665]" />
                            {role}
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs uppercase tracking-widest group cursor-pointer hover:text-[#C6A665] transition-colors">
                <span>Explore</span>
                <Icon icon="lucide:arrow-down" className="animate-bounce" />
            </div>

        </section>
    );
};

export default AboutHero;
