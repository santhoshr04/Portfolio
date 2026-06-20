import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });

  /* =========================
     Handle Input Change
  ========================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  /* =========================
     Auto Hide Toast
  ========================== */

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  /* =========================
     Handle Submit
  ========================== */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_DISCORD_WEBHOOK_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: "<@1255742316287889432> New Contact Form Submission",
            allowed_mentions: {
              users: ["1255742316287889432"],
            },
            embeds: [
              {
                title: "New Contact Form Submission",
                description: "You have a new contact message.",
                color: 0x8B5CF6,
          
                fields: [
                  {
                    name: "Name",
                    value: `${form.name}`,
                  },
                  {
                    name: "Email",
                    value: `\`\`\`${form.email}\`\`\``,
                  },
                  {
                    name: "Message",
                    value: `${form.message}`,
                  },
                ],
          
                footer: {
                  text: `Contact Bot • ${new Date().toLocaleString()}`,
                },
              },
            ],
          }),                  
        }
      );

      if (!response.ok) throw new Error("Failed");

      setLoading(false);

      setToast({
        show: true,
        type: "success",
        message: "Message sent successfully , I will get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setLoading(false);

      setToast({
        show: true,
        type: "error",
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <div
      className="
        xl:mt-12
        flex
        flex-col
        xl:flex-row
        gap-10
        overflow-hidden
        relative
      "
    >
      {/* 🌍 Earth Section */}
      <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="
            order-1
            xl:flex-1
            w-full
            h-[420px]
            sm:h-[500px]
            md:h-[550px]
            xl:h-[650px]
          "
        >
        <EarthCanvas />
      </motion.div>

      {/* 📩 Contact Form */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="
          order-2
          flex-[0.75]
          bg-black-100
          p-6 sm:p-8
          rounded-2xl
        "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-tertiary py-3 px-5 text-white rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-tertiary py-3 px-5 text-white rounded-lg outline-none"
          />

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="bg-tertiary py-3 px-5 text-white rounded-lg outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              bg-gradient-to-r
              from-purple-500
              to-blue-500
              py-3 px-8
              rounded-xl
              text-white
              font-bold
              shadow-lg
              hover:scale-105
              transition
              duration-300
              disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* ======================
            PREMIUM TOAST
      ====================== */}

      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div
              className={`
                relative overflow-hidden
                w-[320px] sm:w-[360px]
                p-5
                rounded-2xl
                backdrop-blur-xl
                border border-white/10
                shadow-2xl
                ${
                  toast.type === "success"
                    ? "bg-gradient-to-br from-emerald-500/90 to-green-600/90"
                    : "bg-gradient-to-br from-red-500/90 to-rose-600/90"
                }
                text-white
              `}
            >
              {/* Icon + Message */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  {toast.type === "success" ? "✅" : "❌"}
                </div>

                <div>
                  <p className="font-semibold text-[15px]">
                    {toast.type === "success"
                      ? "Message Sent"
                      : "Submission Failed"}
                  </p>
                  <p className="text-sm opacity-90 mt-1">
                    {toast.message}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-[4px] bg-white/80"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");