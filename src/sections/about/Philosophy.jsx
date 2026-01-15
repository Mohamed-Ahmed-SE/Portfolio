import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quote = "Code is not just functionality; it's a medium for expression. In a digital world cluttered with noise, I strive to create experiences that are clear, intuitive, and profoundly human.";

const Philosophy = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        // Reveal image
        tl.from(imageRef.current, {
            clipPath: "inset(0 100% 0 0)",
            duration: 1.5,
            ease: "power4.out"
        })
            // Reveal text content
            .from(textRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=1");

    }, []);

    return (
        <section ref={sectionRef} className="bg-black min-h-screen flex flex-col md:flex-row overflow-hidden relative">

            {/* Left Column: Visual */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
                <div ref={imageRef} className="absolute inset-0 w-full h-full">
                    <img
                        src="/images/creative-abstract.png"
                        alt="Digital Art"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay */}
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-20 lg:p-32 bg-zinc-900 border-l border-white/5">
                <div ref={textRef} className="max-w-xl">
                    <span className="inline-block text-purple-400 uppercase tracking-[0.2em] text-xs font-bold mb-8">
                        Our Ethos
                    </span>

                    <h2 className="text-3xl md:text-5xl font-light text-white mb-10 leading-tight">
                        Digital <br /> <span className="font-serif italic text-white/50">Craftsmanship</span>
                    </h2>

                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-12">
                        {quote}
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-white/20" />
                        <span className="text-white/40 text-sm uppercase tracking-widest">
                            Est. 2024
                        </span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Philosophy;
