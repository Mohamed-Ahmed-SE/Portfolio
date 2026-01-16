import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const awards = [
    { name: "Site of the Day", org: "Awwwards", year: "2024", count: 2 },
    { name: "Developer Award", org: "Awwwards", year: "2024", count: 1 },
    { name: "Website of the Day", org: "CSSDA", year: "2023", count: 3 },
    { name: "FWA of the Day", org: "FWA", year: "2023", count: 1 },
    { name: "Best UI/UX", org: "Behance", year: "2022", count: 5 },
    { name: "Innovation", org: "Webby", year: "2023", count: 1 }
];

const ProjectAwards = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".award-card", {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-10 bg-white text-black">
            <div className="max-w-[1800px] mx-auto">
                <h3 className="text-[12vw] font-black tracking-tighter leading-none mb-20 opacity-10">
                    HONORS
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black">
                    {awards.map((award, index) => (
                        <div key={index} className="award-card group relative p-10 border-r border-b border-black aspect-square flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 cursor-default">
                            <div className="flex justify-between items-start">
                                <span className="text-sm font-mono uppercase tracking-widest">{award.org}</span>
                                <Icon icon="lucide:trophy" className="size-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div>
                                <span className="block text-9xl font-bold tracking-tighter mb-4">{award.count}</span>
                                <h4 className="text-3xl font-bold uppercase leading-none">{award.name}</h4>
                            </div>

                            <div className="text-xs font-mono opacity-50 text-right group-hover:opacity-100">
                                {award.year}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectAwards;
