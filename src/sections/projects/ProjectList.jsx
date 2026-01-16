import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const ProjectList = ({ projects }) => {
    const navigate = useNavigate();

    return (
        <section className="py-20 px-6 md:px-10 bg-white text-black">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer flex flex-col gap-6"
                            onClick={() => navigate(`/projects/${project.slug}`)}
                        >
                            {/* Image Container with Cinematic Reveal */}
                            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative rounded-sm">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 grayscale"
                                />
                                {/* Overlay gradient that fades out on hover */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                                {/* Floating 'View' Button / Icon that appears */}
                                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-gray-100 shadow-xl z-10">
                                    <Icon icon="lucide:arrow-up-right" className="text-black size-5" />
                                </div>
                            </div>

                            {/* Minimal Info with Staggered Hover */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-baseline relative overflow-hidden">
                                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none transition-transform duration-500 origin-left group-hover:-translate-y-full">
                                        {project.name}
                                    </h3>
                                    {/* Duplicate title that slides up */}
                                    <h3 className="absolute top-0 left-0 text-3xl md:text-4xl font-semibold tracking-tight leading-none transition-transform duration-500 origin-left translate-y-full group-hover:translate-y-0 text-gray-400">
                                        {project.name}
                                    </h3>

                                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                                        {project.year}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-500 font-medium group-hover:text-black transition-colors">
                                        {project.client}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span className="text-sm text-gray-400 capitalize">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length === 0 && (
                    <div className="py-40 text-center text-gray-400">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectList;
