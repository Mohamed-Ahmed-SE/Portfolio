import React, { useState } from "react";
import { Icon } from "@iconify/react";

const testimonials = [
    {
        quote: "Mohamed doesn't just write code; he engineers emotions. The site didn't just perform well, it made our customers feel something.",
        author: "Sarah Jenkins",
        role: "Product Director, TechGear"
    },
    {
        quote: "A master of his craft. The attention to motion and interaction detail is unmatched in the industry.",
        author: "David Chen",
        role: "Founder, GreenLife"
    },
    {
        quote: "We threw complex requirements at him, and he returned a masterpiece. Fast, reliable, and incredibly creative.",
        author: "Elena Rodriguez",
        role: "CTO, CircuitCity V2"
    }
];

const ProjectTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-32 px-6 md:px-10 bg-black text-white relative">
            <div className="max-w-4xl mx-auto text-center">
                <Icon icon="lucide:quote" className="size-16 mx-auto mb-10 text-white/20" />

                <div className="min-h-[300px] flex items-center justify-center relative">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center items-center ${i === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        >
                            <p className="text-3xl md:text-5xl font-light leading-tight mb-10">
                                "{t.quote}"
                            </p>
                            <div>
                                <h5 className="text-lg font-bold uppercase tracking-widest mb-1">{t.author}</h5>
                                <p className="text-sm text-white/50">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${i === activeIndex ? 'bg-white' : 'bg-white/20 hover:bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectTestimonials;
