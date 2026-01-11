import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectLearnings = ({ learnings }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".learning-reveal", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, []);

    if (!learnings) return null;

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                <div className="learning-reveal">
                    <h3 className="text-sm uppercase tracking-widest opacity-50 mb-6 text-red-500">Challenges & Learnings</h3>
                    <p className="text-lg leading-relaxed text-black/80">
                        {learnings.text}
                    </p>
                </div>
                <div className="learning-reveal">
                    <h3 className="text-sm uppercase tracking-widest opacity-50 mb-6 text-green-600">What's Next</h3>
                    <p className="text-lg leading-relaxed text-black/80">
                        {learnings.nextSteps}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectLearnings;
