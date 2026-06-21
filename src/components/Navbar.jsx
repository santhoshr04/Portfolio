import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 30);
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((nav) => ({
        title: nav.title,
        element: document.getElementById(nav.id)?.closest("section"),
      }))
      .filter(({ element }) => element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const match = sections.find(({ element }) => element === visible.target);
          if (match) setActive(match.title);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.15, 0.35] },
    );

    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const selectLink = (title) => {
    setActive(title);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`relative mx-auto max-w-6xl overflow-hidden rounded-[22px] border transition-all duration-500 sm:rounded-full ${
          scrolled
            ? "border-cyan-200/15 bg-[#071b36]/88 shadow-[0_16px_60px_rgba(3,15,35,0.38)] backdrop-blur-2xl"
            : "border-cyan-300/[0.08] bg-[#071b36]/48 backdrop-blur-xl"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(56,189,248,0.11),transparent_30%),radial-gradient(circle_at_82%_100%,rgba(139,92,246,0.1),transparent_28%)]" />

        <div className="relative flex h-[66px] items-center justify-between px-3 sm:h-[70px] sm:px-4">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 rounded-full pr-3"
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-cyan-200/20 bg-gradient-to-br from-cyan-400/15 to-purple-500/15 text-xs font-black text-white shadow-[inset_0_0_18px_rgba(103,232,249,0.08)]">
              SR
              <span className="absolute inset-x-2 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-bold tracking-[-0.02em] text-white">Santhosh.Dev</span>
              <span className="mt-0.5 block text-[8px] uppercase tracking-[0.25em] text-gray-600 transition group-hover:text-cyan-300">
                Build · Automate · Evolve
              </span>
            </span>
          </Link>

          <div className="hidden items-center rounded-full border border-cyan-300/[0.08] bg-cyan-300/[0.025] p-1 md:flex">
            {navLinks.map((nav) => {
              const isActive = active === nav.title;
              return (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  onClick={() => selectLink(nav.title)}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium transition duration-300 ${
                    isActive
                      ? "bg-cyan-300/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(103,232,249,0.1)]"
                      : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]" />
                  )}
                  {nav.title}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-3 rounded-full bg-white py-2 pl-4 pr-2 text-xs font-bold text-[#071b36] transition hover:-translate-y-0.5 sm:flex"
            >
              Start a project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0a2242] text-white transition group-hover:rotate-45">↗</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.04] text-white transition hover:border-cyan-200/30 hover:bg-cyan-300/10 md:hidden"
            >
              <span className="relative h-4 w-4">
                <span className={`absolute left-0 top-1 h-px w-4 bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-2 h-px w-4 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-3 h-px w-4 bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-300/[0.05]">
          <span
            className="block h-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 shadow-[0_0_10px_rgba(56,189,248,0.65)] transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        className={`mx-auto max-w-6xl overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[22px] border border-cyan-200/15 bg-[#071b36]/95 p-3 shadow-2xl backdrop-blur-2xl">
          <div className="grid gap-1">
            {navLinks.map((nav, index) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => selectLink(nav.title)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
                  active === nav.title
                    ? "bg-cyan-300/[0.08] text-white"
                    : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span>{nav.title}</span>
                <span className="font-mono text-[9px] text-gray-700">0{index + 1}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#071b36]"
            >
              Start a project
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
