import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const ProjectFeatures = ({ features }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".feature-item", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, []);

    if (!features) return null;

    return (
        <section ref={containerRef} className="py-20 md:py-40 px-6 md:px-10 bg-white text-black">
            <div className="border-t border-black/10 mb-20"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-4">
                    <h3 className="text-4xl uppercase tracking-tighter mb-6">Key Features</h3>
                    <p className="text-black/60 max-w-sm">
                        Distinctive elements that define the user experience and set the product apart.
                    </p>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="feature-item group border-b border-black/10 pb-8 cursor-default"
                            onMouseEnter={() => setActiveIdx(idx)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-full transition-colors duration-500 ${activeIdx === idx ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
                                        <Icon icon={feature.icon} className="size-6" />
                                    </div>
                                    <h4 className="text-2xl font-light">{feature.title}</h4>
                                </div>
                                <span className={`text-2xl transition-transform duration-500 ${activeIdx === idx ? 'rotate-45' : ''}`}>
                                    +
                                </span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-xl text-black/60 pl-[calc(3rem+1rem)] max-w-xl leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectFeatures;
