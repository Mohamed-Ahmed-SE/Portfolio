import React, { useRef } from "react";
import Navbar from "../sections/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import certificationData from "../constants/certification.json";

const CertificationsPage = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".cert-item",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out"
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="bg-black min-h-screen text-white">
            <Navbar />

            <main className="pt-40 px-6 md:px-10 max-w-7xl mx-auto pb-20">
                <header className="mb-20">
                    <span className="text-[#C6A665] font-mono tracking-widest uppercase text-sm block mb-4">
                        Credentials
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        All Certifications
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationData.map((cert) => (
                        <div key={cert.id} className="cert-item p-6 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-[#C6A665]/50 transition-colors duration-300 group overflow-hidden">

                            {/* Certificate Image */}
                            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/5">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#C6A665]/10 transition-colors">
                                    <Icon icon={cert.icon} className="text-3xl text-white group-hover:text-[#C6A665] transition-colors" />
                                </div>
                                <span className="font-mono text-xs text-white/30 border border-white/10 px-3 py-1 rounded-full">
                                    {cert.date}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-1 group-hover:text-[#C6A665] transition-colors leading-tight">
                                {cert.title}
                            </h3>
                            <div className="text-white/50 text-xs font-mono mb-4 uppercase tracking-wider">
                                {cert.issuer}
                            </div>
                            <p className="text-zinc-400 leading-relaxed text-sm line-clamp-3">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CertificationsPage;
