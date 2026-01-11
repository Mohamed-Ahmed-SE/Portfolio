import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const steps = [
    { title: "Understand", icon: "lucide:brain-circuit" },
    { title: "Strategize", icon: "lucide:map" },
    { title: "Design", icon: "lucide:pen-tool" },
    { title: "Develop", icon: "lucide:code-2" },
    { title: "Refine", icon: "lucide:sparkles" },
    { title: "Deliver", icon: "lucide:rocket" }
];

const ToolsWorkflow = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });

        tl.from(".workflow-step", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        })
            .from(".workflow-line", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1,
                ease: "power3.inOut"
            }, "-=0.5");

    }, []);

    return (
        <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-10 overflow-hidden">
            <div className="mb-20">
                <h3 className="text-sm uppercase tracking-widest opacity-50 mb-4">My Workflow</h3>
                <p className="text-2xl font-light max-w-xl">From chaos to clarity. A systematic approach to solving complex problems.</p>
            </div>

            <div className="relative">
                <div className="workflow-line absolute top-1/2 left-0 w-full h-[1px] bg-black/10 -z-10 hidden md:block" />
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="workflow-step flex flex-col items-center text-center bg-white p-4">
                            <div className="w-16 h-16 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center mb-6">
                                <Icon icon={step.icon} className="size-6 opacity-60" />
                            </div>
                            <h4 className="text-lg font-light">{step.title}</h4>
                            <span className="text-xs opacity-30 mt-2 font-mono">0{idx + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsWorkflow;
