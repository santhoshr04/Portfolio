import React from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/santhoshr0415";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8">

        {/* Branding */}
        <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          Build Your Success With AI.
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-md">
          Let’s create intelligent systems that automate, scale, and grow your business.
        </p>
        </div>

        {/* Social Button */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-xl
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            text-gray-300
            hover:text-white
            hover:border-purple-500/50
            transition-all
            duration-300
          "
        >
          <span className="absolute inset-0 rounded-xl bg-purple-600/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

          <svg
            className="w-5 h-5 relative z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>

          <span className="relative z-10 font-medium">
            Connect on LinkedIn
          </span>
        </a>

        {/* Divider */}
        <div className="w-full border-t border-white/5 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Santhosh. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;