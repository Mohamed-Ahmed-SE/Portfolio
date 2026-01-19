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
                            onClick={() => navigate(`/projects/${project.slug}`)}
                            className="group cursor-pointer flex flex-col gap-6"
                        >
                            {/* Standardized Image Container */}
                            <div className="w-full h-[400px] overflow-hidden rounded-xl relative bg-gray-100">
                                {/* Slight overlay for text contrast if needed, but keeping transparency for full color */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Standardized Info */}
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-1">
                                    <div className="relative overflow-hidden h-8 md:h-9">
                                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:-translate-y-full">
                                            {project.name}
                                        </h3>
                                        <h3 className="absolute top-0 left-0 text-2xl md:text-3xl font-medium tracking-tight transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                                            {project.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm opacity-50 uppercase tracking-widest">
                                        {project.client} • {project.year}
                                    </p>
                                </div>
                                <span className="p-3 rounded-full border border-black/10 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <Icon icon="lucide:arrow-up-right" className="size-5" />
                                </span>
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
