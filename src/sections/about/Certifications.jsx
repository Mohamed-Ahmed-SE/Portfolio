import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import certificationData from "../../constants/certification.json";

const Certifications = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useGSAP(() => {
        gsap.from(".cert-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%"
            }
        });
    }, []);

    // Only show the first 3 on the About page
    const previewCerts = certificationData.slice(0, 3);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-10 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
                    <div>
                        <span className="text-[#C6A665] font-mono uppercase tracking-widest text-sm mb-2 block">Validation</span>
                        <h2 className="text-4xl md:text-6xl font-light text-white">Certifications</h2>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-white/50 max-w-md text-right mb-6">
                            Continuous learning is the core of my career. Here are the milestones marking my journey.
                        </p>
                        <button
                            onClick={() => navigate('/certifications')}
                            className="flex items-center gap-2 text-[#C6A665] hover:text-white transition-colors uppercase font-mono text-sm tracking-widest border-b border-[#C6A665] pb-1"
                        >
                            Show All Certifications
                            <Icon icon="lucide:arrow-right" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {previewCerts.map((cert, i) => (
                        <div key={i} className="cert-card group relative p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-[#C6A665]/50 transition-colors duration-500 overflow-hidden">

                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A665] opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full pointer-events-none" />

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

                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-white/5 text-3xl text-white group-hover:text-[#C6A665] transition-colors">
                                    <Icon icon={cert.icon} />
                                </div>
                                <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded-full">{cert.date}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">{cert.title}</h3>
                            <p className="text-white/50">{cert.issuer}</p>

                            <Icon icon="lucide:arrow-right" className="absolute bottom-8 right-8 text-white/20 w-6 h-6 group-hover:text-[#C6A665] group-hover:translate-x-1 transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
