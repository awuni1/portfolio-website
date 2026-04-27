import { useRef } from "react";

const TECH_COLORS = {
  React: "#61DAFB",
  "React Native": "#61DAFB",
  "Next.js": "#111111",
  Nextjs: "#111111",
  TailwindCSS: "#06B6D4",
  "Tailwind CSS": "#06B6D4",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  "Node.js": "#5FA04E",
  Python: "#3776AB",
  Django: "#0C4B33",
  Firebase: "#FFCA28",
  PostgreSQL: "#336791",
  MySQL: "#4479A1",
  "Spring Boot": "#6DB33F",
  "ChatGPT API": "#10A37F",
  HTML: "#E34F26",
  CSS: "#1572B6",
  GSAP: "#88CE02",
  Figma: "#F24E1E",
  Webflow: "#4353FF",
  Expo: "#000020",
};

function colorFor(tool) {
  const key = Object.keys(TECH_COLORS).find(
    (k) => k.toLowerCase() === tool.trim().toLowerCase()
  );
  return key ? TECH_COLORS[key] : "#8C8C73";
}

export default function Projects({ name, img, alt, type, link, year, tools }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1200px) rotateY(${x * 5}deg) rotateX(${
      -y * 5
    }deg) translateZ(0)`;
  };

  const handleLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    }
  };

  const toolList = tools.split("•").map((t) => t.trim()).filter(Boolean);

  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group relative inline-block w-full overflow-hidden rounded-lg duration-500 ease-out hover:rounded-3xl"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.4s ease, border-radius 0.5s ease",
          boxShadow:
            "0 10px 30px -10px rgba(0,0,0,0.15), 0 4px 12px -4px rgba(0,0,0,0.1)",
        }}
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <img
          loading="lazy"
          className="w-full duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
        {/* Hover overlay */}
        <div
          className="pointer-events-none absolute inset-0 flex items-end justify-end p-6 opacity-0 duration-500 ease-out group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to top, rgba(14,14,12,0.55) 0%, rgba(14,14,12,0) 50%)",
          }}
        >
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white backdrop-blur-md">
            View →
          </span>
        </div>
      </a>
      <div className="mt-4">
        <div className="mb-3 flex flex-wrap gap-2">
          <p className="rounded-full border border-secondary-600 bg-transparent px-4 py-1 font-mono text-body-4 text-secondary-600 2xl:text-2xl">
            {year}
          </p>
          {toolList.map((tool) => (
            <span
              key={tool}
              className="flex items-center gap-1.5 rounded-full border border-secondary-600/60 bg-secondary-100 px-3 py-1 font-mono text-body-4 text-secondary-700 2xl:text-2xl"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: colorFor(tool) }}
              />
              {tool}
            </span>
          ))}
        </div>
        <div className="2xl:space-y-3">
          <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
            {name}
          </h3>
          <p className="text-body-2 2xl:text-4xl font-light text-primary-400">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}
