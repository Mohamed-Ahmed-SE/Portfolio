import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "../../components/AnimatedHeaderSection";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        // Parallax effect for the hero image
        gsap.to(imageRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    const text = `UI/UX Designer & MERN Stack Dev
    Beginner Flutter Developer
    CS Student (Born 2006)`;

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden"
        >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                    ref={imageRef}
                    src="/images/about-hero.png"
                    alt="Creative Developer"
                    className="w-full h-[120%] object-cover object-top opacity-80"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 pt-40 px-6 sm:px-10">
                <AnimatedHeaderSection
                    subTitle={"The Person Behind the Code"}
                    title={"About Me"}
                    text={text}
                    textColor={"text-white"}
                    withScrollTrigger={false}
                />
            </div>
        </section>
    );
};

export default AboutHero;
