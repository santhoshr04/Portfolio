import { motion } from "framer-motion";

import { NeuralCoreCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-transparent pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div
        className={`relative z-10 mx-auto grid min-h-[calc(90vh-7rem)] max-w-7xl items-center gap-6 pb-10 ${styles.paddingX} lg:grid-cols-[0.92fr_1.08fr] lg:gap-8`}
      >
        <div className="relative z-30 min-w-0 py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-purple-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-gray-400">
              Santhosh · Digital builder
            </span>
          </motion.div>

          <h1 className="select-none text-[58px] font-black uppercase leading-[0.8] tracking-[-0.075em] sm:text-[78px] lg:text-[84px] xl:text-[94px]">
            <motion.span
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
              className="block text-white"
            >
              Build.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7, ease: "easeOut" }}
              className="block text-transparent [-webkit-text-stroke:1px_rgba(196,181,253,0.65)]"
            >
              Automate.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7, ease: "easeOut" }}
              className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text pb-4 text-transparent"
            >
              Evolve.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <a
              href="#about"
              className="group flex items-center gap-4 rounded-full border border-white/15 bg-white px-2 py-2 pl-6 text-sm font-bold text-black transition hover:-translate-y-1 hover:border-purple-300"
            >
              See how I work
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition group-hover:rotate-45">
                ↗
              </span>
            </a>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-gray-500">
              Full stack × AI × Automation
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: "easeOut" }}
          className="relative z-10 h-[430px] min-w-0 overflow-hidden bg-transparent sm:h-[520px] lg:h-[620px]"
        >
          <div className="pointer-events-none absolute left-0 top-1/2 z-20 hidden h-[72%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-purple-300/20 to-transparent lg:block" />
          <div className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing">
            <NeuralCoreCanvas />
          </div>

          <motion.div
            animate={{ opacity: [0.25, 0.75, 0.25] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute bottom-7 right-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-gray-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Interactive core
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-gray-700 sm:flex">
        <span>Scroll</span>
        <span className="h-px w-10 bg-gray-800" />
        <span>Explore</span>
      </div>
    </section>
  );
};

export default Hero;
