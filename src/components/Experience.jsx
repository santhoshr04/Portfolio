import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <motion.div variants={textVariant()} className="max-w-3xl">
          <p className={styles.sectionSubText}>Professional proof / 02</p>
          <h2 className={styles.sectionHeadText}>Experience that ships.</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-secondary sm:text-[17px]">
            Roles where I turned requirements into working software, collaborated
            with teams, and improved products beyond the first release.
          </p>
        </motion.div>

        <motion.a
          variants={fadeIn("left", "spring", 0.15, 0.7)}
          href="#lab"
          className="group flex w-fit items-center gap-3 text-sm font-semibold text-purple-300 transition hover:text-purple-200"
        >
          See impact beyond the roles
          <span className="transition group-hover:translate-x-1">↓</span>
        </motion.a>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company_name}-${experience.date}`}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/50 p-6 backdrop-blur-sm transition duration-300 hover:border-purple-400/30 hover:shadow-[0_24px_80px_rgba(76,29,149,0.12)] sm:p-8 ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/0 blur-[80px] transition duration-500 group-hover:bg-purple-500/15" />
            <div className="pointer-events-none absolute right-4 top-2 font-mono text-[110px] font-black leading-none text-white/[0.02]">
              0{index + 1}
            </div>

            <div className={`relative ${index === 0 ? "lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:gap-12" : ""}`}>
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-2">
                    <img
                      src={experience.icon}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                      {experience.company_name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-gray-600">{experience.date}</p>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-black leading-tight text-white sm:text-3xl">
                  {experience.title}
                </h3>
              </div>

              <ul className={`${index === 0 ? "mt-8 lg:mt-0" : "mt-8"} space-y-4`}>
                {experience.points.slice(0, 3).map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-gray-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8 h-px overflow-hidden bg-white/[0.07]">
              <span className="block h-full w-0 bg-gradient-to-r from-purple-500 to-cyan-300 transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
