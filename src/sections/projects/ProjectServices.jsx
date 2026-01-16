import React from "react";

const services = [
    {
        title: "Digital Design",
        description: "Crafting immersive visual languages that breathe life into brands.",
        tools: ["Figma", "Spline", "After Effects"]
    },
    {
        title: "Creative Development",
        description: "Mergin WebGL and DOM to create award-winning experiences.",
        tools: ["GSAP", "Three.js", "React"]
    },
    {
        title: "Architecture",
        description: "Scalable, headless solutions built for speed and security.",
        tools: ["Next.js", "Shopify", "Sanity"]
    },
    {
        title: "Motion",
        description: "Fluid storytelling through advanced animation techniques.",
        tools: ["Rive", "Lottie", "Canvas"]
    }
];

const ProjectServices = () => {
    return (
        <section className="py-24 px-6 md:px-10 bg-white text-black border-t border-gray-100">
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row gap-20">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold tracking-tight sticky top-32">Capabilities</h3>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="group cursor-default">
                            <div className="h-[1px] w-full bg-gray-200 mb-6" />
                            <h4 className="text-xl mb-4 font-semibold">{service.title}</h4>
                            <p className="text-gray-500 mb-6 leading-relaxed font-normal">{service.description}</p>
                            <div className="flex gap-4">
                                {service.tools.map((tool, i) => (
                                    <span key={i} className="text-xs uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-full text-gray-400 group-hover:border-black group-hover:text-black transition-all">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectServices;
