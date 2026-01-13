import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const uniqueLogos = [
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
        // Move -25% (one full set of 4)
        gsap.to(scrollerRef.current, {
            xPercent: -25,
            duration: 10,
            ease: "none",
            repeat: -1,
        });
    }, []);

    // Create 4 sets to ensure coverage of even largest screens
    const items = [...uniqueLogos, ...uniqueLogos, ...uniqueLogos, ...uniqueLogos];

    return (
        <section className="py-20 w-full overflow-hidden bg-white border-y border-black/5 mb-20">
            <h3 className="text-center text-sm uppercase tracking-widest opacity-40 mb-12">Trusted By Industry Leaders</h3>
            <div className="flex w-max" ref={scrollerRef}>
                {items.map((logo, idx) => (
                    <div key={idx} className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer mx-10">
                        <Icon icon={logo.icon} className="h-10 w-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientMarquee;
