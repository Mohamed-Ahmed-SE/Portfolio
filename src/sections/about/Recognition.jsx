import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const AWARDS = [
    { year: "2024", title: "Top Rated Talent", organization: "Upwork", project: "Client Satisfaction" },
    { year: "2024", title: "Creative Developer", organization: "Awwwards Academy", project: "Course Completion" },
    { year: "2023", title: "Best UI Design", organization: "Local Hackathon", project: "Eco App" },
];

const Recognition = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".award-row",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-10 bg-black text-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-20">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Recognition</h2>
                    <Icon icon="lucide:trophy" className="text-5xl text-[#C6A665]" />
                </div>

                <div className="grid grid-cols-1">
                    {AWARDS.map((award, idx) => (
                        <div key={idx} className="award-row flex flex-col md:flex-row items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors duration-300 px-6 rounded-xl cursor-default group">
                            <span className="text-white/30 font-mono text-xl md:w-1/4">{award.year}</span>
                            <h3 className="text-2xl md:text-4xl font-bold md:w-2/4 group-hover:text-[#C6A665] transition-colors">{award.title}</h3>
                            <div className="md:w-1/4 text-right">
                                <p className="text-white/60">{award.organization}</p>
                                <p className="text-xs text-white/40 uppercase tracking-widest">{award.project}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recognition;
