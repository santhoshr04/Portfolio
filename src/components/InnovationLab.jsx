import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const profileSignals = [
  {
    id: "innovate",
    label: "Innovate",
    number: "01",
    title: "Young Innovator Award 2024",
    description:
      "Recognition for technical leadership, innovation, and creating meaningful learning opportunities for other students.",
    tags: ["Innovation", "Leadership", "Problem solving"],
  },
  {
    id: "mentor",
    label: "Mentor",
    number: "02",
    title: "124 students guided through IoT",
    description:
      "I led hands-on sessions, supported practical projects, and helped junior learners build the confidence to enter hackathons.",
    tags: ["IoT", "Mentorship", "Project learning"],
  },
  {
    id: "compete",
    label: "Compete",
    number: "03",
    title: "National hackathon experience",
    description:
      "Smart India Hackathon and Code Asthra strengthened how I collaborate, think under pressure, and deliver against a deadline.",
    tags: ["SIH 2022", "Code Asthra 24H", "Teamwork"],
  },
];

const InnovationLab = () => {
  const [activeId, setActiveId] = useState(profileSignals[0].id);
  const activeSignal = profileSignals.find((signal) => signal.id === activeId);

  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <motion.div variants={textVariant()} className="max-w-3xl">
          <p className={styles.sectionSubText}>Impact beyond the role / 03</p>
          <h2 className={styles.sectionHeadText}>Evidence of initiative.</h2>
          <p className="mt-4 text-[16px] leading-[28px] text-secondary sm:text-[17px]">
            Recognition, mentorship, and high-pressure collaboration that show
            how I contribute beyond assigned development work.
          </p>
        </motion.div>

        <motion.a
          variants={fadeIn("left", "spring", 0.15, 0.7)}
          href="https://www.linkedin.com/in/santhoshr0415"
          target="_blank"
          rel="noreferrer"
          className="group flex w-fit items-center gap-3 rounded-2xl border border-[#0a66c2]/40 bg-[#0a66c2]/10 px-5 py-3 text-sm font-semibold text-blue-200 transition hover:-translate-y-1 hover:border-[#0a66c2] hover:bg-[#0a66c2]/20"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
          </svg>
          View full LinkedIn
          <span className="transition group-hover:translate-x-1">↗</span>
        </motion.a>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <motion.aside
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0b1020] to-[#05030b] p-6 sm:p-8"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0a66c2]/20 blur-[70px]" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 text-xl font-black text-white shadow-lg shadow-purple-500/20">
                SR
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                Verified profile
              </span>
            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              LinkedIn snapshot
            </p>
            <h3 className="mt-3 text-3xl font-black text-white">Santhosh R</h3>
            <p className="mt-2 text-sm text-purple-300">Full Stack Developer · iCrewSystems</p>
            <p className="mt-4 text-sm leading-6 text-gray-400">Greater Chennai Area</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">1K+</p>
                <p className="mt-1 text-xs text-gray-500">Followers</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">500+</p>
                <p className="mt-1 text-xs text-gray-500">Connections</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-gray-400">
                A public record of professional growth, technical contribution,
                and community involvement.
              </p>
            </div>
          </div>
        </motion.aside>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="flex min-h-[520px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025]"
        >
          <div className="grid grid-cols-3 border-b border-white/10" role="tablist" aria-label="Career dimensions">
            {profileSignals.map((signal) => {
              const isActive = signal.id === activeId;
              return (
                <button
                  key={signal.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="career-detail-panel"
                  onClick={() => setActiveId(signal.id)}
                  className={`relative border-b border-white/10 px-4 py-5 text-left transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:border-b-0 sm:border-r ${
                    isActive ? "bg-purple-500/10 text-white" : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-300"
                  }`}
                >
                  <span className="block font-mono text-[10px] text-purple-400">{signal.number}</span>
                  <span className="mt-1 block text-sm font-semibold">{signal.label}</span>
                  {isActive && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-purple-500 to-cyan-400" />}
                </button>
              );
            })}
          </div>

          <div className="relative flex flex-1 items-center p-7 sm:p-12">
            <div className="absolute right-4 top-3 select-none text-[130px] font-black leading-none text-white/[0.025] sm:text-[190px]">
              {activeSignal.number}
            </div>
            <AnimatePresence mode="wait">
              <motion.article
                id="career-detail-panel"
                key={activeSignal.id}
                role="tabpanel"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.28 }}
                className="relative max-w-2xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                  {activeSignal.label}
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
                  {activeSignal.title}
                </h3>
                <p className="mt-6 text-[15px] leading-7 text-gray-400 sm:text-base">
                  {activeSignal.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {activeSignal.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(InnovationLab, "lab");
