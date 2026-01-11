import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quote = "I believe that code is not just functionality; it's a medium for expression. In a digital world cluttered with noise, I strive to create experiences that are clear, intuitive, and profoundly human. Technology should recede, leaving only the emotion of the interaction.";

const Philosophy = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        // Safe splitting that doesn't rely on potentially modified DOM
        const words = quote.split(" ");
        textRef.current.innerHTML = words.map(word => `<span class="inline-block mr-[0.2em] opacity-0 translate-y-full">${word}</span>`).join(" ");

        gsap.to(textRef.current.children, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.02,
            ease: "power4.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, []);

    return (
        <section ref={containerRef} className="py-20 md:py-40 px-6 md:px-10 bg-white min-h-[60vh] flex flex-col justify-center">
            <h2 className="text-sm uppercase tracking-widest opacity-50 mb-12">Manifesto</h2>
            <div className="max-w-5xl">
                <p ref={textRef} className="text-3xl md:text-5xl lg:text-7xl font-light leading-[1.1] text-black">
                    {quote}
                </p>
            </div>
        </section>
    );
};

export default Philosophy;
