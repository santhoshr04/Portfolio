import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const featuredTechnologies = new Set(["React JS", "Laravel", "AdonisJS", "Fusion Pro"]);

const getCategory = (name) => {
  if (["HTML 5", "CSS 3", "JavaScript", "TypeScript", "React JS", "Tailwind CSS", "Three.js"].includes(name)) {
    return "Interface";
  }
  if (["Laravel", "php", "Node JS", "AdonisJS", "MongoDB", "MySQL"].includes(name)) {
    return "Backend";
  }
  if (["Postman", "n8n", "OpenAI API"].includes(name)) return "Automation";
  if (name === "figma") return "Design";
  if (name === "Fusion Pro") return "Virtualization";
  return "Development tool";
};

const Tech = () => {
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <motion.div variants={textVariant()} className="max-w-3xl">
          <p className={styles.sectionSubText}>Technologies I work with / 04</p>
          <h2 className={styles.sectionHeadText}>My technology stack.</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-secondary sm:text-[17px]">
            These are the languages, frameworks, creative tools, and development
            environments I use to design, build, automate, test, and ship products.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.15, 0.7)}
          className="flex w-fit items-center gap-5 rounded-2xl border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-md"
        >
          <div>
            <p className="font-mono text-lg font-bold text-white">{technologies.length}</p>
            <p className="text-[9px] uppercase tracking-[0.22em] text-gray-600">Tools online</p>
          </div>
          <span className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Ready
          </div>
        </motion.div>
      </div>

      <div className="relative mt-12 overflow-hidden rounded-[30px] border border-white/10 bg-black/45 p-3 shadow-[0_30px_100px_rgba(76,29,149,0.1)] backdrop-blur-sm sm:p-5">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative grid grid-flow-dense grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6">
          {technologies.map((technology, index) => {
            const isFeatured = featuredTechnologies.has(technology.name);

            return (
              <motion.article
                key={technology.name}
                variants={fadeIn("up", "spring", index * 0.04, 0.6)}
                whileHover={{ y: -6, scale: 1.01 }}
                onPointerMove={handlePointerMove}
                className={`group relative isolate overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07060a]/90 transition duration-300 hover:border-purple-400/35 hover:shadow-[0_16px_50px_rgba(124,58,237,0.14)] ${
                  isFeatured
                    ? "min-h-[220px] md:col-span-2"
                    : "min-h-[180px]"
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(260px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(139,92,246,0.2), transparent 68%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.035] to-transparent" />
                <div className="pointer-events-none absolute -right-3 -top-8 font-mono text-[92px] font-black leading-none text-white/[0.025]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                      {getCategory(technology.name)}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-800 transition duration-300 group-hover:bg-purple-300 group-hover:shadow-[0_0_12px_rgba(216,180,254,0.9)]" />
                  </div>

                  <div className={`flex items-center ${isFeatured ? "gap-5" : "flex-col gap-3 text-center"}`}>
                    <div
                      className={`relative flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-inner transition duration-500 group-hover:rotate-3 group-hover:border-purple-300/30 group-hover:bg-purple-500/[0.08] ${
                        isFeatured ? "h-20 w-20" : "h-16 w-16"
                      }`}
                    >
                      <div className="absolute inset-2 rounded-xl bg-purple-400/0 blur-xl transition group-hover:bg-purple-400/15" />
                      {technology.icon ? (
                        <img
                          src={technology.icon}
                          alt=""
                          className={`${isFeatured ? "h-12 w-12" : "h-10 w-10"} relative object-contain transition duration-500 group-hover:scale-110`}
                        />
                      ) : (
                        <span
                          className="relative font-mono text-sm font-black tracking-[-0.04em] transition duration-500 group-hover:scale-110"
                          style={{ color: technology.accent }}
                        >
                          {technology.monogram}
                        </span>
                      )}
                    </div>
                    <div className={isFeatured ? "min-w-0" : ""}>
                      <h3 className={`${isFeatured ? "text-xl" : "text-sm"} font-bold text-gray-200 transition group-hover:text-white`}>
                        {technology.name}
                      </h3>
                      {isFeatured && (
                        <p className="mt-1 text-xs text-gray-600">Core workflow technology</p>
                      )}
                    </div>
                  </div>

                  <div className="h-px overflow-hidden bg-white/[0.06]">
                    <span className="block h-full w-0 bg-gradient-to-r from-purple-500 to-cyan-300 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <motion.div
        variants={fadeIn("", "tween", 0.25, 0.7)}
        className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-black/40 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-sm text-gray-500">
          Tools are selected for the outcome—not added for decoration.
        </p>
        <a href="#services" className="group flex items-center gap-3 text-sm font-semibold text-purple-300 transition hover:text-purple-200">
          See what I can build for you
          <span className="transition group-hover:translate-x-1">→</span>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
