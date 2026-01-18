import React, { useRef } from "react";
import Navbar from "../sections/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// New Sections
import AboutHero from "../sections/about/AboutHero";
import Philosophy from "../sections/about/Philosophy";
import SkillClusters from "../sections/about/SkillClusters";
import ToolsMarquee from "../sections/about/ToolsMarquee";
import Certifications from "../sections/about/Certifications";
import ValuesCollaboration from "../sections/about/ValuesCollaboration";
import Journey from "../sections/about/Journey"; // NEW
import Recognition from "../sections/about/Recognition"; // NEW

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const containerRef = useRef(null);

    // Page Transition
    useGSAP(() => {
        gsap.to(containerRef.current, { visibility: "visible", duration: 0.1 });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-black min-h-screen text-white rounded-b-4xl pb-20 invisible">
            <Navbar />

            {/* 1. Hero */}
            <AboutHero />

            {/* 2. Philosophy (Manifesto) */}
            <Philosophy />

            {/* 3. Global Tech Stack */}
            <SkillClusters />

            {/* 4. Tools Marquee */}
            <ToolsMarquee />

            {/* 5. Values & Principles */}
            <ValuesCollaboration />

            {/* 6. Professional Journey */}
            <Journey />

            {/* 7. Certifications */}
            <Certifications />

            {/* 8. Recognition & Awards */}
            <Recognition />

        </div>
    );
};

export default AboutPage;
