import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/santhoshr0415";

const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-8 pt-10 sm:px-16">
      <Link
        to="/explore"
        className="group  mt-16 mb-32 relative block overflow-hidden rounded-[28px] border border-purple-400/20 bg-black/45 px-6 py-8 backdrop-blur-sm transition hover:border-purple-300/45 sm:px-10 sm:py-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(124,58,237,0.22),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <motion.div
          className="pointer-events-none absolute right-[12%] top-1/2 h-px w-40 -translate-y-1/2 -rotate-12 bg-gradient-to-r from-transparent via-purple-300 to-white"
          animate={{ x: [100, -420], opacity: [0, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: "easeOut" }}
        >
          <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_4px_rgba(216,180,254,0.8)]" />
        </motion.div>

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-300">
              Leave the familiar
            </p>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              You’re leaving to explore opportunity.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Follow a different path through timing, possibility, and the right connection.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4 text-sm font-semibold text-white">
            Enter the opportunity field
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">↗</span>
          </div>
        </div>
      </Link>

      <div className="flex flex-col gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-white">Santhosh.Dev</p>
          <p className="mt-1 text-xs text-gray-600">Full-stack development · AI automation · Product engineering</p>
        </div>

        <div className="flex items-center gap-5 text-xs text-gray-500">
          <a href="#about" className="transition hover:text-white">Value</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#70a9e4]">
            LinkedIn ↗
          </a>
        </div>

        <p className="text-xs text-gray-700">© {new Date().getFullYear()} Santhosh</p>
      </div>
    </footer>
  );
};

export default Footer;
