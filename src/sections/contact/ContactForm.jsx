import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const ContactForm = () => {
    const containerRef = useRef(null);
    const [focusedField, setFocusedField] = useState(null);

    useGSAP(() => {
        gsap.from(".form-field", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, []);

    const InputField = ({ label, type = "text", placeholder, id }) => (
        <div className={`form-field relative border-b border-black/20 ${focusedField === id ? 'border-black' : ''} transition-colors duration-500 py-4`}>
            <label htmlFor={id} className={`block text-xs uppercase tracking-widest mb-2 transition-colors duration-300 ${focusedField === id ? 'text-black opacity-100' : 'text-black opacity-40'}`}>
                {label}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    rows="4"
                    className="w-full bg-transparent outline-none text-xl md:text-3xl font-light placeholder:text-black/20 resize-none"
                    onFocus={() => setFocusedField(id)}
                    onBlur={() => setFocusedField(null)}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-xl md:text-3xl font-light placeholder:text-black/20"
                    onFocus={() => setFocusedField(id)}
                    onBlur={() => setFocusedField(null)}
                />
            )}
        </div>
    );

    return (
        <section ref={containerRef} className="px-6 md:px-10 mb-40 max-w-5xl">
            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <InputField id="name" label="What's your name?" placeholder="John Doe" />
                    <InputField id="email" type="email" label="What's your email?" placeholder="john@example.com" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <InputField id="company" label="What's the company name?" placeholder="Acme Inc." />
                    <InputField id="budget" label="What's your budget?" placeholder="$5k - $10k" />
                </div>
                <InputField id="message" type="textarea" label="Tell me about your project" placeholder="Hello, I have an idea..." />

                <div className="form-field pt-10">
                    <button className="group flex items-center gap-4 text-2xl md:text-4xl uppercase tracking-tighter hover:opacity-50 transition-opacity">
                        <span className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Icon icon="lucide:arrow-up-right" className="size-8" />
                        </span>
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
