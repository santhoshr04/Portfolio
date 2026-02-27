import { motion } from "framer-motion";
import { styles } from "../styles";

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-black">

      {/* 🌌 Grid Background (UNCHANGED) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🌟 Center Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-purple-700/10 rounded-full blur-[150px]" />
      </div>

      {/* 🔥 Soft Purple Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />

      {/* 🌈 Floating Gradient Orbs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px]"
      />

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-[140px]"
      />

      {/* ✨ Tiny Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-500" />
      </div>

      {/* 🧠 Floating Tech Words */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 left-10 text-purple-500/20 text-sm font-mono hidden md:block"
      >
        AI • Automation • Chatbots • APIs
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-32 right-20 text-purple-500/20 text-sm font-mono hidden md:block"
      >
        Node • React • n8n • OpenAI
      </motion.div>

      {/* 🌑 Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* 🚀 Content */}
      <div className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center`}>

        {/* 🚀 Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="px-4 py-1 text-sm bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full">
            AI Engineer • Automation Developer • Full Stack
          </span>
        </motion.div>

        {/* 🔥 Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${styles.heroHeadText} text-white leading-tight`}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Santhosh
          </span>
        </motion.h1>

        {/* 🧠 Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
        >
          I build AI systems that never sleep — turning conversations into customers, 
          automating operations, and scaling your business without hiring more people.
        </motion.p>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-xl
                       bg-black border border-purple-500/40
                       hover:border-purple-400 transition duration-300
                       group overflow-hidden"
          >
            <span className="absolute inset-0 bg-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <span className="absolute -left-20 top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent
                             rotate-12 transform transition-all duration-700 group-hover:left-[120%]" />
            <span className="relative z-10">
              Build My AI Chatbot
            </span>
          </a>
        </motion.div>
      </div>

      {/* 💎 Optional Floating Glass Card (Right Side Preview) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="w-80 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <p className="text-sm text-purple-400 mb-2">AI Chatbot Preview</p>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="bg-white/5 p-2 rounded-lg">👋 Hello! How can I help you today?</div>
            <div className="bg-purple-600/20 p-2 rounded-lg text-right">Book a demo</div>
            <div className="bg-white/5 p-2 rounded-lg">📅 Sure! Let me schedule that for you.</div>
          </div>
        </div>
      </motion.div>

      {/* 🔽 Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center items-start p-1"
        >
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;