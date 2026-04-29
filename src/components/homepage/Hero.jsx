import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import heroImg from "/src/assets/images/heroimg.webp";

const ROLES = ["Mobile Developer", "Full Stack Developer"];
const ROLES_BOTTOM = ["Web Developer", "Mobile Developer", "Full Stack Developer"];

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleBottomRef = useRef(null);
  const card = useRef(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleBottomIdx, setRoleBottomIdx] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: "power3.inOut",
    })
      .from(img.current, { scale: 2, duration: 3.2, ease: "power4.inOut" }, "-=3.1")
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, { opacity: 0, duration: 1, ease: "out" }, "-=2");
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      gsap.to(subtitleRef.current, {
        opacity: 0, y: -10, duration: 0.35, ease: "power2.in",
        onComplete: () => {
          setRoleIdx((i) => (i + 1) % ROLES.length);
          gsap.fromTo(subtitleRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
        },
      });
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let intervalId;
    const startDelay = setTimeout(() => {
      intervalId = setInterval(() => {
        gsap.to(subtitleBottomRef.current, {
          opacity: 0, y: -10, duration: 0.35, ease: "power2.in",
          onComplete: () => {
            setRoleBottomIdx((i) => (i + 1) % ROLES_BOTTOM.length);
            gsap.fromTo(subtitleBottomRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
          },
        });
      }, 2800);
    }, 1400);
    return () => {
      clearTimeout(startDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero relative flex flex-col items-center justify-center gap-8 w-full pt-24 pb-16 sm:h-screen sm:pt-0 sm:pb-0 select-none sm:gap-0"
      aria-label="hero"
    >
      <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold uppercase text-accent-300">
        <div className="title 2xl:py-16">
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96 overflow-visible">
            Hey, I&apos;m Wuni
          </h1>
        </div>
        <div className="title 2xl:py-16">
          <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96 font-outline-3 md:font-outline-4 text-transparent overflow-visible">
            Hey, I&apos;m Wuni
          </h1>
        </div>
        <div className="title hidden md:block 2xl:py-16">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-96">
            Hey, I&apos;m Wuni
          </h1>
        </div>
      </div>

      {/* Cycling role card — pinned to bottom-center of hero */}
      <div className="relative sm:absolute sm:bottom-[5%] left-0 right-0 flex justify-center z-20 w-full px-4 sm:px-0">
      <div
        ref={card}
        style={{
          minWidth: "320px",
          background: "#FAFAF9",
          border: "2px solid #262626",
          borderRadius: "16px",
          padding: "16px 22px",
          boxShadow: "0 20px 50px -10px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
          <span className="relative inline-flex h-2 w-2 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span
            ref={subtitleRef}
            style={{ fontFamily: "ui-monospace, SFMono-Regular, monospace", fontSize: "14px", color: "#262626", letterSpacing: "0.05em" }}
          >
            <span style={{ color: "#8C8C73" }}>{"// "}</span>
            {ROLES[roleIdx]}
          </span>
        </div>
        <div style={{ height: "1px", background: "rgba(140,140,115,0.4)", width: "100%", margin: "8px 0" }}></div>
        <div
          ref={subtitleBottomRef}
          style={{
            display: "block",
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: "14px",
            color: "#262626",
            letterSpacing: "0.05em",
            marginTop: "10px",
            paddingLeft: "20px",
          }}
        >
          <span style={{ color: "#8C8C73" }}>{"// "}</span>
          {ROLES_BOTTOM[roleBottomIdx]}
        </div>
      </div>
      </div>

      <div ref={imgContainer} className="absolute mx-auto w-[55%] overflow-hidden rounded-md">
        <img
          ref={img}
          className="scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div>
      <div ref={scroll} className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
        <span className="rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span ref={scrollLine} className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"></span>
        </div>
      </div>
    </section>
  );
}
