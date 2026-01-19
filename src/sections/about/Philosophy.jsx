import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const text = textRef.current;
        const words = text.querySelectorAll(".word");

        gsap.fromTo(words,
            { y: 50, opacity: 0, filter: "blur(10px)" },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                stagger: 0.05,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            }
        );

        gsap.fromTo(".divider-line",
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            }
        );

    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-10 bg-black text-white relative flex flex-col items-center text-center">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <Icon icon="lucide:quote" className="text-4xl md:text-6xl text-[#C6A665] mx-auto mb-10 opacity-50" />

                <h2 ref={textRef} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-medium leading-[1.2] tracking-tight">
                    <span className="word inline-block">Code</span> <span className="word inline-block">is</span> <span className="word inline-block">my</span> <span className="word inline-block text-[#C6A665]">canvas.</span> <br />
                    <span className="word inline-block">I</span> <span className="word inline-block">don't</span> <span className="word inline-block">just</span> <span className="word inline-block">build</span> <span className="word inline-block">websites;</span> <br />
                    <span className="word inline-block">I</span> <span className="word inline-block">craft</span> <span className="word inline-block italic font-serif">digital</span> <span className="word inline-block italic font-serif">experiences</span> <br />
                    <span className="word inline-block">that</span> <span className="word inline-block">live,</span> <span className="word inline-block">breathe,</span> <span className="word inline-block">and</span> <span className="word inline-block">inspire.</span>
                </h2>

                <div className="divider-line w-24 h-1 bg-[#C6A665] mx-auto mt-16 mb-16 origin-center" />

                <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 text-white/50 text-sm md:text-base font-mono uppercase tracking-widest">
                    <div className="flex items-center gap-3">
                        <Icon icon="lucide:zap" />
                        <span>Performance First</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Icon icon="lucide:scan-face" />
                        <span>User Centric</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Icon icon="lucide:infinity" />
                        <span>Limitless Design</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
