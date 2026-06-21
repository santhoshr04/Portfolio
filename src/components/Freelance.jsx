import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const freelanceServices = [
  {
    number: "01",
    title: "MVP & web products",
    description: "From a focused idea to a responsive, production-ready application.",
  },
  {
    number: "02",
    title: "AI & automation",
    description: "Practical workflows that reduce repetitive work and connect your tools.",
  },
  {
    number: "03",
    title: "APIs & integrations",
    description: "Reliable backend services, third-party connections, and clean data flows.",
  },
  {
    number: "04",
    title: "UI modernization",
    description: "Sharper interfaces, responsive behavior, and a more polished user experience.",
  },
];

const engagementSteps = ["Define the outcome", "Build in clear milestones", "Test, launch & hand off"];

const Freelance = () => {
  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <motion.div variants={textVariant()} className="max-w-3xl">
          <p className={styles.sectionSubText}>Ways to work together / 05</p>
          <h2 className={styles.sectionHeadText}>Choose the right starting point.</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-secondary sm:text-[17px]">
            I take on focused freelance work where thoughtful engineering,
            automation, and a strong interface can create a clear result.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.15, 0.7)}
          className="flex w-fit items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs text-emerald-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open for freelance enquiries
        </motion.div>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {freelanceServices.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeIn("up", "spring", index * 0.08, 0.7)}
              whileHover={{ y: -6 }}
              className="group relative min-h-[220px] overflow-hidden rounded-[26px] border border-white/10 bg-black/50 p-6 backdrop-blur-sm transition duration-300 hover:border-purple-400/35 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-8 text-[100px] font-black leading-none text-white/[0.025]">
                {service.number}
              </div>
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-purple-500/0 blur-[60px] transition duration-500 group-hover:bg-purple-500/18" />

              <div className="relative flex h-full flex-col justify-between">
                <span className="font-mono text-[10px] text-purple-300">{service.number}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{service.description}</p>
                </div>
                <div className="mt-6 h-px overflow-hidden bg-white/[0.07]">
                  <span className="block h-full w-0 bg-gradient-to-r from-purple-500 to-cyan-300 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.aside
          variants={fadeIn("left", "spring", 0.2, 0.8)}
          className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-purple-950/25 via-black/60 to-cyan-950/20 p-7 shadow-[0_30px_100px_rgba(76,29,149,0.14)] backdrop-blur-sm sm:p-9"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/15 blur-[80px]" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
                A clear engagement
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight text-white">
                Focused execution.
                <span className="block text-gray-500">Production discipline.</span>
              </h3>
            </div>

            <div className="my-10 space-y-3">
              {engagementSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 font-mono text-[10px] text-purple-300">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-medium text-gray-300">{step}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="mb-5 text-xs leading-5 text-gray-500">
                You receive clean implementation, clear communication, and a
                maintainable handoff—not a mysterious black box.
              </p>
              <a
                href="#contact"
                className="group flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:-translate-y-1"
              >
                Discuss a freelance project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition group-hover:rotate-45">↗</span>
              </a>
            </div>
          </div>
        </motion.aside>
      </div>
    </>
  );
};

export default SectionWrapper(Freelance, "services");
