import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { useLenis } from "lenis/react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);
    const lenis = useLenis();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    useGSAP(() => {
        if (isVisible) {
            gsap.to(buttonRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)",
            });
        } else {
            gsap.to(buttonRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [isVisible]);

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.5 });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <button
            ref={buttonRef}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[90] p-4 bg-black text-white rounded-full shadow-lg opacity-0 scale-0 hover:bg-black/80 transition-colors duration-300 group"
            aria-label="Scroll to top"
        >
            <Icon
                icon="lucide:arrow-up"
                className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
            />
        </button>
    );
};

export default BackToTop;
