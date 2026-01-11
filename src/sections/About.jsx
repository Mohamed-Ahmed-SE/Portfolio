import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;

  const introText = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
  When I’m not shipping:`;

  const hobbies = [
    { icon: "lucide:zap", text: "Open-sourcing my latest experiment (or hacking on yours)" },
    { icon: "lucide:video", text: "Teaching devs on Twitch/YouTube—because rising tides lift all ships" },
    { icon: "lucide:mountain", text: "Rock climbing (problem-solving with real stakes)" },
    { icon: "lucide:guitar", text: "Strumming chords while CI pipelines pass (multitasking at its finest)" }
  ];

  const imgRef = useRef(null);
  const hobbiesRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });

    // Animate hobbies list
    if (hobbiesRef.current) {
      gsap.from(hobbiesRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: hobbiesRef.current,
          start: "top 85%",
        }
      });
    }
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <div className="w-full flex flex-col gap-6">
          <AnimatedTextLines text={introText} className={"w-full"} />
          <div ref={hobbiesRef} className="flex flex-col gap-4 mt-2">
            {hobbies.map((hobby, index) => (
              <div key={index} className="flex items-center gap-4">
                <Icon icon={hobby.icon} className="text-2xl md:text-3xl shrink-0 text-white" />
                <span className="leading-relaxed">{hobby.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
