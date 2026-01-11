import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const activeSkills = [
    { category: "Frontend", items: ["React", "Next.js", "Vue", "Svelte", "TypeScript"] },
    { category: "Creative", items: ["GSAP", "Three.js", "WebGL", "Canvas", "GLSL"] },
    { category: "Design", items: ["Figma", "UI/UX", "Motion", "After Effects", "Blender"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Firebase", "AWS"] }
];

const SkillClusters = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".skill-chip", {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: {
                amount: 1,
                grid: "auto",
                from: "center"
            },
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });
    }, []);

    return (
        <section ref={containerRef} className="py-20 px-6 md:px-10 bg-zinc-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {activeSkills.map((cluster, idx) => (
                    <div key={idx} className="flex flex-col gap-6">
                        <h3 className="text-xl font-light border-b border-black/10 pb-4">{cluster.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {cluster.items.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="skill-chip px-4 py-2 bg-white border border-black/5 rounded-full text-sm hover:border-black/30 hover:shadow-md transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillClusters;
