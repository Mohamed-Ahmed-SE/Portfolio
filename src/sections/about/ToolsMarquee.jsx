import React from "react";
import ClientMarquee from "../../components/ClientMarquee";
// reusing ClientMarquee logic or building a custom simple one. 
// Since specific instructions were "marquee with tools", a dedicated simple scrolling list is best.
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TOOLS = [
    { name: "GitHub", icon: "mdi:github" },
    { name: "Git", icon: "mdi:git" },
    { name: "VS Code", icon: "vscode-icons:file-type-vscode" },
    { name: "Antigravity", icon: "mdi:robot-happy-outline" }, // Placeholder for Antigravity
    { name: "Figma", icon: "logos:figma" },
    { name: "Postman", icon: "logos:postman-icon" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "MongoDB Atlas", icon: "simple-icons:mongodb" },
    { name: "HTML5", icon: "logos:html-5" },
    { name: "CSS3", icon: "logos:css-3" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "React", icon: "logos:react" },
    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
];

const ToolsMarquee = () => {
    // Determine how many times to repeat for seamless loop
    // Minimal logic: similar to ClientMarquee but specifically for tools

    return (
        <section className="py-20 bg-black text-white overflow-hidden relative">
            <div className="mb-10 text-center">
                <span className="text-sm font-mono uppercase tracking-widest text-[#C6A665]">My Arsenal</span>
                <h2 className="text-3xl md:text-4xl font-light mt-2">Tools & Environment</h2>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex space-x-12 animate-infinite-scroll w-max hover:pause">
                {/* Render Twice for Loop */}
                {[...TOOLS, ...TOOLS, ...TOOLS].map((tool, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 group cursor-default">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                            <Icon icon={tool.icon} className="grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{tool.name}</span>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-33.33%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default ToolsMarquee;
