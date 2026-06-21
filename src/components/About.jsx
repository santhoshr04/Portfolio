import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const outcomes = [
  {
    number: "01",
    title: "Clear product decisions",
    description: "Turn an uncertain idea into a focused scope, useful experience, and buildable plan.",
  },
  {
    number: "02",
    title: "Less manual work",
    description: "Find repetitive steps worth automating without making the workflow harder to maintain.",
  },
  {
    number: "03",
    title: "A stronger foundation",
    description: "Build interfaces, APIs, and integrations that can evolve as the product grows.",
  },
];

const principles = ["Think clearly", "Build reliably", "Automate wisely", "Improve continuously"];

const About = () => {
  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <motion.div variants={textVariant()} className="max-w-3xl">
          <p className={styles.sectionSubText}>Overview / 01</p>
          <h2 className={styles.sectionHeadText}>How I create value.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("left", "spring", 0.12, 0.7)}
          className="max-w-md text-sm leading-7 text-gray-500 lg:text-right"
        >
          From the first idea to a production-ready system, I connect design,
          engineering, automation, and continuous improvement in one clear process.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.article
          variants={fadeIn("right", "spring", 0.08, 0.8)}
          className="group relative min-h-[480px] overflow-hidden rounded-[30px] border border-white/10 bg-black/55 p-7 shadow-[0_30px_100px_rgba(76,29,149,0.11)] backdrop-blur-sm sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/15 blur-[90px] transition duration-700 group-hover:bg-purple-500/20" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-300">
                Product-minded engineering
              </span>
            </div>

            <div className="my-14 max-w-xl">
              <p className="text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                I don’t just write code.
                <span className="mt-2 block bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  I shape complete systems.
                </span>
              </p>
              <p className="mt-6 max-w-lg text-[15px] leading-7 text-gray-400 sm:text-base">
                I combine full-stack development, practical AI, automation, and
                interface thinking to turn complex ideas into dependable digital
                products people can actually use.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                {["Idea", "System", "Impact"].map((stage, index) => (
                  <div key={stage} className="flex flex-1 items-center gap-3">
                    <div className="flex h-9 min-w-0 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 transition group-hover:border-purple-400/20 group-hover:text-gray-200">
                      {stage}
                    </div>
                    {index < 2 && <span className="text-xs text-purple-400">→</span>}
                  </div>
                ))}
              </div>
              <div className="mt-5 h-px overflow-hidden bg-white/[0.06]">
                <motion.span
                  className="block h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-300"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 gap-4">
          {outcomes.map((outcome, index) => (
            <motion.article
              key={outcome.title}
              variants={fadeIn("up", "spring", 0.12 + index * 0.08, 0.7)}
              whileHover={{ y: -6 }}
              className="group relative min-h-[150px] overflow-hidden rounded-[26px] border border-white/10 bg-black/50 p-6 backdrop-blur-sm transition duration-300 hover:border-purple-400/35 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/0 blur-[60px] transition duration-500 group-hover:bg-purple-500/18" />
              <div className="relative flex h-full items-start gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 font-mono text-[10px] text-purple-300">
                  {outcome.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{outcome.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}

          <motion.a
            variants={fadeIn("up", "spring", 0.4, 0.7)}
            href="#work"
            className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white px-6 py-4 text-sm font-bold text-black transition hover:-translate-y-1"
          >
            See the experience behind the work
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition group-hover:rotate-45">↗</span>
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={fadeIn("", "tween", 0.25, 0.8)}
        className="mt-4 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-sm md:grid-cols-4"
      >
        {principles.map((principle, index) => (
          <div
            key={principle}
            className={`flex items-center gap-3 px-5 py-4 ${index > 0 ? "border-l border-white/[0.08]" : ""}`}
          >
            <span className="font-mono text-[9px] text-purple-400">0{index + 1}</span>
            <span className="text-xs font-medium text-gray-400">{principle}</span>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
