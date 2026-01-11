import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const SocialsLocation = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".footer-item", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
            }
        });
    }, []);

    return (
        <footer ref={containerRef} className="bg-black text-white px-6 md:px-10 py-20 rounded-t-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
                <div className="footer-item">
                    <h3 className="text-sm uppercase tracking-widest opacity-50 mb-8">Socials</h3>
                    <div className="flex flex-col gap-4 items-start">
                        {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
                            <a key={social} href="#" className="text-2xl md:text-4xl font-light hover:underline decoration-1 underline-offset-4 decoration-white/50">{social}</a>
                        ))}
                    </div>
                </div>

                <div className="footer-item">
                    <h3 className="text-sm uppercase tracking-widest opacity-50 mb-8">Location & Time</h3>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl md:text-4xl font-light">Cairo, Egypt</p>
                        <div className="flex items-center gap-2 opacity-60">
                            <Icon icon="lucide:clock" />
                            <span>{new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit' })} GMT+2</span>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-sm uppercase tracking-widest opacity-50 mb-4">Email</h3>
                        <a href="mailto:hello@mohamedahmed.dev" className="text-xl md:text-3xl font-light hover:text-white/70 transition-colors">hello@mohamedahmed.dev</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center opacity-40 text-sm footer-item">
                <p>&copy; {new Date().getFullYear()} Mohamed Ahmed. All Rights Reserved.</p>
                <p>Designed & Developed with ❤️</p>
            </div>
        </footer>
    );
};

export default SocialsLocation;
