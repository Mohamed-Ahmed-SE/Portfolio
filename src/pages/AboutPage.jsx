import React, { useRef } from "react";
import Navbar from "../sections/Navbar";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// New Sections
import Philosophy from "../sections/about/Philosophy";
import SkillClusters from "../sections/about/SkillClusters";
import ToolsWorkflow from "../sections/about/ToolsWorkflow";
import ValuesCollaboration from "../sections/about/ValuesCollaboration";

gsap.registerPlugin(ScrollTrigger);

const experience = [
    { year: "2024 - Present", role: "Senior Frontend Engineer", company: "TechCorp", description: "Leading the migration to a modern React stack and optimizing core web vitals." },
    { year: "2022 - 2024", role: "Creative Developer", company: "Digital Agency", description: "Built award-winning experiential websites using Three.js and GSAP." },
    { year: "2020 - 2022", role: "Full Stack Developer", company: "StartupInc", description: "Developed scalable APIs and responsive frontends for a high-growth SaaS product." },
];

const awards = [
    { year: "2024", title: "Site of the Day", organization: "Awwwards", project: "Mobile Accessories Store" },
    { year: "2023", title: "Best UI Design", organization: "CSS Design Awards", project: "Plant Shop" },
    { year: "2023", title: "Developer Award", organization: "Awwwards", project: "Portfolio v1" },
];

const AboutPage = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Experience Stagger
        gsap.from(".experience-item", {
            x: -50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#experience",
                start: "top 80%",
            },
        });

        // Awards Stagger
        gsap.from(".award-item", {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#awards",
                start: "top 85%",
            },
        });

    }, { scope: containerRef });

    const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;

    const bio = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
  
  My journey began with a curiosity for how things work, leading me to deconstruct and rebuild everything digital I could get my hands on. Today, that curiosity drives me to push the boundaries of what's possible on the web.`;

    return (
        <div ref={containerRef} className="bg-black min-h-screen text-white rounded-b-4xl pb-20">
            <Navbar />

            {/* Hero / Intro */}
            <section className="pt-40 pb-20">
                <AnimatedHeaderSection
                    subTitle={"The Person Behind the Code"}
                    title={"About Me"}
                    text={text}
                    textColor={"text-white"}
                    withScrollTrigger={false}
                />
            </section>

            {/* Personal Story */}
            <section className="px-10 mb-32 flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl">
                    <img
                        src="/images/man.jpg"
                        alt="Profile"
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="w-full lg:w-1/2 text-xl md:text-2xl font-light leading-relaxed text-white/80">
                    <AnimatedTextLines text={bio} />
                </div>
            </section>

            {/* 1. Philosophy (Manifesto) */}
            <Philosophy />

            {/* 2. Skills (Interactive Clusters) */}
            <SkillClusters />

            {/* 3. Values (Grid) */}
            <ValuesCollaboration />

            {/* 4. Tools & Workflow (Pipeline) */}
            <ToolsWorkflow />

            {/* Experience Section */}
            <section id="experience" className="px-10 mb-32 mt-32">
                <h2 className="text-4xl md:text-6xl mb-16 font-light uppercase tracking-tighter">Journey</h2>
                <div className="space-y-12 border-l border-white/20 pl-8 md:pl-16 relative">
                    {experience.map((exp, idx) => (
                        <div key={idx} className="experience-item relative">
                            <span className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 bg-black border-2 border-white rounded-full"></span>
                            <span className="text-white/50 text-sm md:text-lg tracking-widest">{exp.year}</span>
                            <h3 className="text-3xl md:text-4xl mt-2 mb-1">{exp.role}</h3>
                            <h4 className="text-xl md:text-2xl text-white/70 mb-4">{exp.company}</h4>
                            <p className="text-lg text-white/60 font-light max-w-2xl">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="px-10 mb-20">
                <h2 className="text-4xl md:text-6xl mb-16 font-light uppercase tracking-tighter">Recognition</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {awards.map((award, idx) => (
                        <div key={idx} className="award-item border border-white/20 p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                            <span className="text-sm text-white/50 tracking-widest block mb-4">{award.year}</span>
                            <h3 className="text-2xl mb-2">{award.title}</h3>
                            <p className="text-white/70 mb-1">{award.organization}</p>
                            <p className="text-sm text-white/50 italic">{award.project}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
