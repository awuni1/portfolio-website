import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
  ];

  const toolBoxItems = [
    "JavaScript",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "React Native",
    "Expo",
    "UI/UX Design",
    "MySQL",
    "Firebase",
    "Git/GitHub",
    "Tailwind CSS",
    "React",
    "Django",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading number="02" title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I work across web, mobile, and intelligent systems —
          building full stack solutions that solve real-world problems. With
          every project, my goal is to deliver scalable, user-focused
          experiences that make a meaningful impact."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are the tools I reach for to ship reliable,
          scalable products — from frontend to backend, mobile to AI-driven
          features. I am always exploring new technologies that sharpen my
          craft and expand what I can build."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
