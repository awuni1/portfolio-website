import { useState } from "react";
import mansa from "/src/assets/images/mansaweb.png";
import bihr from "/src/assets/images/bihr.png";
import learnova from "/src/assets/images/learnovate.jpeg";
import mansaAdmin from "/src/assets/images/mansa-admin.png";
import gasppy from "/src/assets/images/gasppy.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

const PROJECTS = [
  {
    id: "mansa",
    layout: "col-span-1 md:col-span-12",
    category: "Full-stack",
    props: {
      link: "#",
      img: mansa,
      alt: "Mansa-to-Mansa website mockup",
      name: "Mansa-to-Mansa Website",
      type: "Full Stack Development",
      year: "2025",
      tools: "React • Node.js • TailwindCSS",
    },
  },
  {
    id: "bihr",
    layout: "col-span-1 pt-0 md:col-span-7 md:pt-16",
    category: "Frontend",
    props: {
      link: "#",
      img: bihr,
      alt: "BridgeCare Institute for Health Research website mockup",
      name: "BridgeCare Institute for Health Research",
      type: "Frontend Development",
      year: "2026",
      tools: "Next.js",
    },
  },
  {
    id: "mansa-admin",
    layout: "col-span-1 pt-0 md:col-span-5 md:pt-80",
    category: "Full-stack",
    props: {
      link: "#",
      img: mansaAdmin,
      alt: "Mansa Admin System mockup",
      name: "Mansa Admin System",
      type: "Full Stack Development",
      year: "2025",
      tools: "React • Django • PostgreSQL",
    },
  },
  {
    id: "gasppy",
    layout: "col-span-1 h-fit pt-0 md:col-span-8 md:pt-20",
    category: "Frontend",
    props: {
      link: "#",
      img: gasppy,
      alt: "Gassppy website mockup",
      name: "Gassppy Website",
      type: "Frontend Development",
      year: "2026–Present",
      tools: "React • TailwindCSS",
    },
  },
  {
    id: "learnova",
    layout: "col-span-1 h-fit md:col-span-4",
    category: "Mobile",
    props: {
      link: "#",
      img: learnova,
      alt: "Learnova smart learning app mockup",
      name: "Learnova — Smart Learning App",
      type: "Project Management • Mobile App Development",
      year: "2025",
      tools: "React Native • Spring Boot • Firebase • PostgreSQL • ChatGPT API",
    },
  },
];

const FILTERS = ["All", "Frontend", "Mobile", "Full-stack"];

export default function Works({ forwardedRef }) {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <Heading number="03" title="Projects" />

      {/* Filter chips */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {FILTERS.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-5 py-2 font-mono text-body-4 uppercase tracking-widest transition-all duration-300 2xl:text-2xl ${
                isActive
                  ? "border-accent-400 bg-accent-400 text-secondary-100"
                  : "border-secondary-600/60 bg-transparent text-secondary-700 hover:border-accent-400 hover:text-accent-400"
              }`}
              aria-pressed={isActive}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {visible.map((p) => (
          <div
            key={p.id}
            className={`${p.layout} animate-fadeInUp`}
            style={{ animationDuration: "500ms" }}
          >
            <Projects {...p.props} />
          </div>
        ))}
      </div>
    </section>
  );
}
