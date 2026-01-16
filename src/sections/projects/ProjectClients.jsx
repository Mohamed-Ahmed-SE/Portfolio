import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const clients = [
    "Google", "Spotify", "Nike", "Adidas", "TechGear", "Shopify", "Netlify", "Vercel", "Linear", "Figma"
];

const ProjectClients = () => {
    const marqueeRef = useRef(null);

    useGSAP(() => {
        const tween = gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear",
            overwrite: true
        });

        return () => tween.kill();
    }, []);

    return (
        <section className="py-20 bg-zinc-900 text-white overflow-hidden whitespace-nowrap border-y border-white/5">
            <div ref={marqueeRef} className="flex gap-20 w-fit items-center">
                {[...clients, ...clients, ...clients].map((client, i) => (
                    <div key={i} className="flex items-center gap-20">
                        <span className="text-4xl md:text-6xl font-bold uppercase tracking-tight opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-default">
                            {client}
                        </span>
                        <span className="text-xl text-white/10">✦</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectClients;
