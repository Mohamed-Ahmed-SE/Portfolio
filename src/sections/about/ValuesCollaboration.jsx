import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const ValuesCollaboration = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".value-card", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-10 bg-black text-white">
            <h2 className="text-4xl md:text-6xl font-light mb-20 tracking-tighter text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                <div className="value-card p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors duration-500">
                    <Icon icon="lucide:heart" className="text-4xl mb-6 text-white" />
                    <h3 className="text-2xl mb-4 text-white">Empathy First</h3>
                    <p className="text-white/60 leading-relaxed font-light">
                        Understanding the user is not a checklist item; it is the foundation of every decision. I build for humans, not browsers.
                    </p>
                </div>
                <div className="value-card p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors duration-500">
                    <Icon icon="lucide:search" className="text-4xl mb-6 text-white" />
                    <h3 className="text-2xl mb-4 text-white">Obsessive Detail</h3>
                    <p className="text-white/60 leading-relaxed font-light">
                        The integrity of a system is found in its smallest parts. I care about the whitespace, the micro-interaction, and the millisecond.
                    </p>
                </div>
                <div className="value-card p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors duration-500">
                    <Icon icon="lucide:zap" className="text-4xl mb-6 text-white" />
                    <h3 className="text-2xl mb-4 text-white">Playful Curiosity</h3>
                    <p className="text-white/60 leading-relaxed font-light">
                        Great work is born from experimentation. I maintain a sandbox mindset, always asking "what if" and pushing the tech to its limits.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ValuesCollaboration;
