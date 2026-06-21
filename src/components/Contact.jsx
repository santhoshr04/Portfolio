import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  useEffect(() => {
    if (!toast.show) return undefined;

    const timer = setTimeout(() => {
      setToast((current) => ({ ...current, show: false }));
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast.show]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: "<@1255742316287889432> New Contact Form Submission",
          allowed_mentions: { users: ["1255742316287889432"] },
          embeds: [
            {
              title: "New Contact Form Submission",
              description: "You have a new contact message.",
              color: 0x8b5cf6,
              fields: [
                { name: "Name", value: form.name },
                { name: "Email", value: `\`\`\`${form.email}\`\`\`` },
                { name: "Message", value: form.message },
              ],
              footer: { text: `Contact Bot • ${new Date().toLocaleString()}` },
            },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setToast({
        show: true,
        type: "success",
        message: "Message received. I’ll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setToast({
        show: true,
        type: "error",
        message: "The message could not be sent. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-white/20 focus:border-purple-400/70 focus:bg-purple-500/[0.04] focus:ring-4 focus:ring-purple-500/10";

  return (
    <>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <motion.div variants={textVariant()} className="max-w-3xl">
          <p className={styles.sectionSubText}>Start a conversation / 06</p>
          <h2 className={styles.sectionHeadText}>Let’s build what’s next.</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-secondary sm:text-[17px]">
            Have a product idea, an automation challenge, or a system that needs
            a smarter approach? Send the signal—I’ll take it from there.
          </p>
        </motion.div>
      </div>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.85)}
          className="h-[420px] w-full sm:h-[500px] md:h-[550px] lg:h-[650px]"
        >
          <EarthCanvas />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.85)}
          className="relative flex flex-col justify-center overflow-hidden rounded-[30px] border border-white/10 bg-black/60 p-6 shadow-[0_30px_100px_rgba(76,29,149,0.14)] backdrop-blur-xl sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-600/10 blur-[80px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:38px_38px]" />

          <div className="relative mb-8 flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">New enquiry</p>
              <h3 className="mt-2 text-2xl font-bold text-white">Tell me about the project</h3>
            </div>
            <div className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300 sm:flex">
              ↗
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-medium text-gray-400">
                Your name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="How should I address you?"
                  autoComplete="name"
                  required
                  className={fieldClass}
                />
              </label>

              <label className="text-xs font-medium text-gray-400">
                Email address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                  className={fieldClass}
                />
              </label>
            </div>

            <label className="block text-xs font-medium text-gray-400">
              Project details
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What are you building, and what outcome do you want?"
                required
                className={`${fieldClass} resize-none`}
              />
            </label>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-gray-600">
                Your details are only used to reply to this enquiry.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="group relative min-w-[170px] overflow-hidden rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-purple-300 to-cyan-300 transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10">{loading ? "Transmitting..." : "Send message  ↗"}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="fixed bottom-6 right-6 z-[70] w-[calc(100%-3rem)] max-w-sm"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#09070f]/95 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${toast.type === "success" ? "bg-emerald-400/10 text-emerald-300" : "bg-red-400/10 text-red-300"}`}>
                  {toast.type === "success" ? "✓" : "!"}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {toast.type === "success" ? "Signal received" : "Transmission failed"}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">{toast.message}</p>
                </div>
              </div>
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className={`absolute bottom-0 left-0 h-0.5 ${toast.type === "success" ? "bg-emerald-400" : "bg-red-400"}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
