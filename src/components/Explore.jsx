import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

import { StarsCanvas } from "./canvas";

const shootingStars = [
  { top: "12%", left: "68%", delay: 0.4, duration: 2.8, length: 150 },
  { top: "31%", left: "18%", delay: 3.2, duration: 3.4, length: 110 },
  { top: "62%", left: "77%", delay: 5.4, duration: 2.6, length: 130 },
  { top: "76%", left: "34%", delay: 7.5, duration: 3.1, length: 95 },
];

const opportunityStats = [
  { value: "01", label: "Right opportunity" },
  { value: "01", label: "Right person" },
  { value: "01", label: "Right moment" },
  { value: "∞", label: "Possible directions" },
];

const Explore = () => {
  const destinationRef = useRef(null);
  const [destinationVisible, setDestinationVisible] = useState(false);
  const [signalReady, setSignalReady] = useState(false);
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  const springX = useSpring(magneticX, { stiffness: 180, damping: 16 });
  const springY = useSpring(magneticY, { stiffness: 180, damping: 16 });

  useEffect(() => {
    const destination = destinationRef.current;
    if (!destination) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setDestinationVisible(entry.isIntersecting),
      { threshold: 0.45 },
    );
    observer.observe(destination);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (destinationRef.current) {
        window.scrollTo({ top: destinationRef.current.offsetTop, behavior: "auto" });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!destinationVisible) {
      setSignalReady(false);
      return undefined;
    }

    const timer = setTimeout(() => setSignalReady(true), 5000);
    return () => clearTimeout(timer);
  }, [destinationVisible]);

  const handleMagneticMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    magneticX.set((event.clientX - bounds.left - bounds.width / 2) * 0.18);
    magneticY.set((event.clientY - bounds.top - bounds.height / 2) * 0.18);
  };

  const resetMagneticPosition = () => {
    magneticX.set(0);
    magneticY.set(0);
  };

  return (
    <main className="relative min-h-[300vh] overflow-hidden bg-black text-white">
      <StarsCanvas />

      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.08] blur-[150px]" />

        {shootingStars.map((star) => (
          <motion.div
            key={`${star.top}-${star.left}`}
            className="absolute h-px origin-right -rotate-45"
            style={{ top: star.top, left: star.left, width: star.length }}
            initial={{ x: 160, y: -160, opacity: 0 }}
            animate={{ x: [160, -360], y: [-160, 360], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 5.5,
              ease: "easeOut",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-white via-purple-300/80 to-transparent shadow-[4px_0_12px_rgba(255,255,255,0.75)]" />
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_5px_rgba(216,180,254,0.8)]" />
          </motion.div>
        ))}
      </div>

      <nav className="fixed inset-x-0 top-0 z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-16">
        <Link to="/" className="text-sm font-bold text-white transition hover:text-purple-300">
          Santhosh.Dev
        </Link>
        <Link
          to="/"
          className="text-xs text-gray-500 transition hover:text-white"
        >
          Exit exploration ×
        </Link>
      </nav>

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-12 pt-24 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-purple-400" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-purple-300">
              The nature of opportunity
            </p>
          </div>

          <h1 className="mt-8 text-[48px] font-black leading-[0.98] tracking-[-0.05em] sm:text-[72px] lg:text-[92px]">
            One moment can
            <span className="block bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-200 bg-clip-text pb-2 text-transparent">
              change the direction.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Opportunity appears when preparation, visibility, and timing align.
            The right person does not need every chance—only the right one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-14 grid grid-cols-2 overflow-hidden rounded-[24px] border border-white/10 bg-black/35 backdrop-blur-md lg:grid-cols-4"
        >
          {opportunityStats.map((stat, index) => (
            <div key={stat.label} className={`p-5 sm:p-6 ${index > 0 ? "border-l border-white/10" : ""}`}>
              <p className="font-mono text-2xl font-black text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 9, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[9px] uppercase tracking-[0.32em] text-gray-600"
        >
          Follow the signal ↓
        </motion.div>
      </section>

      <section className="relative z-10 flex min-h-[110vh] items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 2 }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.42em] text-gray-700">Quiet space</p>
          <p className="mt-4 text-sm text-gray-700">Most opportunities begin before they are visible.</p>
        </motion.div>
      </section>

      <section
        ref={destinationRef}
        className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24"
      >
        <div className="mx-auto w-full max-w-4xl text-center">
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="group mb-10 inline-flex flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-gray-600 transition hover:text-purple-300"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm transition group-hover:-translate-y-1 group-hover:border-purple-300/30">
              ↑
            </span>
            Scroll up to explore the nature of opportunity
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-purple-300">
              You arrived at the answer first
            </p>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              I think you found
              <span className="block bg-gradient-to-r from-purple-300 to-cyan-200 bg-clip-text text-transparent">
                the right one here.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              A good opportunity becomes meaningful when someone is prepared to
              understand it, build it, and carry it forward.
            </p>
          </motion.div>

          <div className="mt-14 flex min-h-[120px] items-center justify-center">
            {!signalReady ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: destinationVisible ? 1 : 0 }}
                className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-gray-600"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                Recognizing the signal...
              </motion.div>
            ) : (
              <motion.a
                href="/#contact"
                onPointerMove={handleMagneticMove}
                onPointerLeave={resetMagneticPosition}
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
                className="group relative flex h-28 w-28 items-center justify-center rounded-full border border-purple-300/30 bg-white text-black shadow-[0_0_80px_rgba(168,85,247,0.28)] sm:h-32 sm:w-32"
              >
                <span className="relative z-10 text-lg font-black uppercase tracking-[0.1em]">Go ↗</span>
                <span className="absolute inset-2 rounded-full border border-black/10 transition duration-500 group-hover:scale-110" />
                <span className="absolute -inset-5 -z-10 animate-ping rounded-full border border-purple-300/20" />
              </motion.a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Explore;
