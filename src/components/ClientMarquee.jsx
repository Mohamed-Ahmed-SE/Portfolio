import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const logos = [
    { name: "Google", icon: "logos:google-icon" },
    { name: "Spotify", icon: "logos:spotify-icon" },
    { name: "Airbnb", icon: "logos:airbnb-icon" },
    { name: "Netflix", icon: "logos:netflix-icon" },
    { name: "Adobe", icon: "logos:adobe-icon" },
    { name: "Microsoft", icon: "logos:microsoft-icon" },
    // Duplicate for seamless loop
    { name: "Google", icon: "logos:google-icon" },
    { name: "Spotify", icon: "logos:spotify-icon" },
    { name: "Airbnb", icon: "logos:airbnb-icon" },
    { name: "Netflix", icon: "logos:netflix-icon" },
    { name: "Adobe", icon: "logos:adobe-icon" },
    { name: "Microsoft", icon: "logos:microsoft-icon" },
];

const ClientMarquee = () => {
    const scrollerRef = useRef(null);

    useGSAP(() => {
        gsap.to(scrollerRef.current, {
            xPercent: -50,
            duration: 20,
            ease: "none",
            repeat: -1,
        });
    }, []);

    return (
        <section className="py-20 w-full overflow-hidden bg-white border-y border-black/5 mb-20">
            <h3 className="text-center text-sm uppercase tracking-widest opacity-40 mb-12">Trusted By Industry Leaders</h3>
            <div className="flex w-[200%] gap-20" ref={scrollerRef}>
                {logos.map((logo, idx) => (
                    <div key={idx} className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer">
                        <Icon icon={logo.icon} className="h-10 w-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientMarquee;
