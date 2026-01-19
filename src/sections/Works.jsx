import { Icon } from "@iconify/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projectData as projects } from "../constants/projectData";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const previewImagesRef = useRef([]); // Refs for all potential preview images
  const navigate = useNavigate();

  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  // Constants
  const DISPLAY_COUNT = 6;
  const visibleProjects = projects.slice(0, DISPLAY_COUNT);

  useGSAP(() => {
    // QuickTo setup for cursor following
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    // Initial animation for list items
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;

    // 1. Animate specific list item overlay
    const el = overlayRefs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      gsap.fromTo(
        el,
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          duration: 0.15,
          ease: "power2.out",
        }
      );
    }

    // 2. Animate global preview container visibility
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // 3. Reveal the SPECIFIC image for this project
    const imgEl = previewImagesRef.current[index];
    if (imgEl) {
      // Ensure all other images are hidden immediately or fade out quickly?
      // For responsiveness, just setting opacity works best.
      // We loop through all to reset others and show current one.
      previewImagesRef.current.forEach((img, i) => {
        if (!img) return;
        if (i === index) {
          gsap.to(img, { opacity: 1, duration: 0, overwrite: true }); // Instant switch or fast fade? Instant avoids ghosting.
        } else {
          gsap.set(img, { opacity: 0 }); // Hide others instantly
        }
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;

    // 1. Reset list item overlay
    const el = overlayRefs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 0.2,
        ease: "power2.in",
      });
    }

    // 2. Hide global preview container
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });

    // Note: We don't necessarily need to hide the specific image inside here, 
    // as the parent container fades out.
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    if (moveX.current) moveX.current(mouse.current.x);
    if (moveY.current) moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />
            {/* framework */}
            <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile preview image */}
            <div className="relative w-full px-10 md:hidden mt-6 mb-10">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 border border-black/5">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}

        {/* desktop Floating preview image container - Persistent, No Re-renders */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
        >
          <div className="relative w-full h-full aspect-video">
            {visibleProjects.map((project, index) => (
              <img
                key={project.id}
                ref={(el) => (previewImagesRef.current[index] = el)}
                src={project.image}
                alt={project.name}
                className="absolute inset-0 object-cover w-full h-full opacity-0"
              // All hidden by default, toggled via GSAP
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hidden Preloader: Still useful to force browser to cache them if not already visible */}
      <div className="hidden">
        {visibleProjects.map((p) => (
          <img key={p.id} src={p.image} alt="preload" />
        ))}
      </div>
    </section>
  );
};

export default Works;
