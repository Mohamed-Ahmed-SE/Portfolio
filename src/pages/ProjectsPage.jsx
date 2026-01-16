import React, { useState } from "react";
import Navbar from "../sections/Navbar";
import ProjectHero from "../sections/projects/ProjectHero";
import ProjectManifesto from "../sections/projects/ProjectManifesto";
import CategoryNav from "../sections/projects/CategoryNav";
import ProjectList from "../sections/projects/ProjectList";
import ProjectImpact from "../sections/projects/ProjectImpact";
import ProjectServices from "../sections/projects/ProjectServices"; // Re-using, might need visual tweak to be light
import ProjectClients from "../sections/projects/ProjectClients";
import ProjectTestimonials from "../sections/projects/ProjectTestimonials";
import ProjectCTA from "../sections/projects/ProjectCTA";
import { projectData } from "../constants/projectData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CATEGORIES = [
    { id: "all", label: "All" },
    { id: "uiux", label: "UI / UX" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
];

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [filteredProjects, setFilteredProjects] = useState(projectData);

    const handleCategoryChange = (catId) => {
        if (catId === activeCategory) return;

        gsap.to(".project-grid-container", {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                setActiveCategory(catId);
                const newProjects = catId === "all"
                    ? projectData
                    : projectData.filter(p => p.category === catId);
                setFilteredProjects(newProjects);

                gsap.to(".project-grid-container", {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: 0.1,
                    clearProps: "all"
                });
            }
        });
    };

    return (
        <div className="bg-white min-h-screen w-full relative selection:bg-black selection:text-white overflow-x-hidden text-black font-sans">
            <Navbar />

            <main>
                <ProjectHero />
                <CategoryNav
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                    categories={CATEGORIES}
                />

                <div className="project-grid-container">
                    <ProjectList projects={filteredProjects} />
                </div>

                <ProjectManifesto />

                {/* Visual Break */}
                <div className="h-px w-full bg-gray-100" />

                <ProjectImpact />
                <ProjectServices />
                <ProjectClients />
                <ProjectTestimonials />
                <ProjectCTA />
            </main>
        </div>
    );
};

export default ProjectsPage;
