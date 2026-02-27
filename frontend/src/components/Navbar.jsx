import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg" 
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔥 Brand */}
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="group"
        >
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Santhosh.Dev
          </h1>
        </Link>

        {/* 💻 Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id} className="relative group">
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`text-[16px] transition-colors duration-300 ${
                  active === nav.title
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {nav.title}
              </a>

              {/* Animated underline */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r 
                  from-purple-400 to-pink-400 transition-all duration-300
                  ${active === nav.title ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </li>
          ))}

          {/* 🚀 CTA Button */}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r 
                       from-purple-500 to-blue-500 text-white text-sm font-semibold
                       hover:scale-105 transition duration-300 shadow-lg"
          >
            Let’s Talk
          </a>
        </ul>

        {/* 📱 Mobile Toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl"
          >
            {toggle ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {toggle && (
        <div className="sm:hidden backdrop-blur-xl bg-black/80 border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                  className="text-gray-300 hover:text-white transition"
                >
                  {nav.title}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r 
                         from-purple-500 to-blue-500 text-white font-semibold text-center"
            >
              Let’s Talk
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;