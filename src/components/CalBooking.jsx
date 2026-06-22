import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { StarsCanvas } from "./canvas";

const DEFAULT_CAL_LINK = "https://cal.com/santhoshr04";

const CalBooking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const embedInitialized = useRef(false);

  const calLink = useMemo(() => {
    const configuredLink = import.meta.env.VITE_CAL_LINK?.trim();
    const url = new URL(configuredLink || DEFAULT_CAL_LINK);
    return url.pathname.replace(/^\//, "");
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    const robots = document.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute("content");
    const robotsMeta = robots || document.createElement("meta");

    document.title = "Book a call with Santhosh";
    robotsMeta.setAttribute("name", "robots");
    robotsMeta.setAttribute("content", "noindex, nofollow");

    if (!robots) document.head.appendChild(robotsMeta);

    return () => {
      document.title = previousTitle;

      if (robots) {
        if (previousRobots) robots.setAttribute("content", previousRobots);
        else robots.removeAttribute("content");
      } else {
        robotsMeta.remove();
      }
    };
  }, []);

  useEffect(() => {
    let active = true;
    let readyTimer;
    const namespace = "client-consultation-30min";

    if (!embedInitialized.current && !window.Cal) {
      ((C, A, L) => {
        const push = (api, args) => api.q.push(args);
        const documentRef = C.document;

        C.Cal = C.Cal || function calEmbed() {
          const cal = C.Cal;
          const args = arguments;

          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = documentRef.createElement("script");
            script.src = A;
            script.async = true;
            documentRef.head.appendChild(script);
            cal.loaded = true;
          }

          if (args[0] === L) {
            const api = function calNamespace() {
              push(api, arguments);
            };
            const requestedNamespace = args[1];
            api.q = api.q || [];

            if (typeof requestedNamespace === "string") {
              cal.ns[requestedNamespace] = cal.ns[requestedNamespace] || api;
              push(cal.ns[requestedNamespace], args);
              push(cal, ["initNamespace", requestedNamespace]);
            } else {
              push(cal, args);
            }
            return;
          }

          push(cal, args);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
    }

    if (!embedInitialized.current) {
      embedInitialized.current = true;
      window.Cal("init", namespace, { origin: "https://app.cal.com" });
      window.Cal.config = window.Cal.config || {};
      window.Cal.config.forwardQueryParams = true;
      window.Cal.ns[namespace]("inline", {
        elementOrSelector: "#cal-booking-inline",
        calLink,
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: true,
        },
      });
      window.Cal.ns[namespace]("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    }

    readyTimer = window.setTimeout(() => {
      if (active) {
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }, 1400);

    return () => {
      active = false;
      window.clearTimeout(readyTimer);
    };
  }, [calLink]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <StarsCanvas />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.1),transparent_28%),radial-gradient(circle_at_92%_12%,rgba(139,92,246,0.13),transparent_30%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 py-5 sm:px-6 sm:py-7 lg:px-10">
        <header className="relative z-30 mb-5 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-full border border-cyan-200/15 bg-[#071b36]/70 py-2 pl-2 pr-4 text-xs font-semibold text-gray-300 shadow-[0_12px_40px_rgba(3,15,35,0.3)] backdrop-blur-xl transition hover:border-cyan-200/30 hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-base text-[#071b36] transition group-hover:-translate-x-0.5">
              ←
            </span>
            Back to home
          </Link>

          <div className="hidden text-right sm:block">
            <p className="text-sm font-bold tracking-[-0.02em] text-white">Santhosh.Dev</p>
            <p className="mt-0.5 text-[8px] uppercase tracking-[0.25em] text-gray-600">
              Build · Automate · Evolve
            </p>
          </div>
        </header>

        <div className="mb-4 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
            Private consultation
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.045em] sm:text-4xl">
            Choose a time that works for you.
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Select an available slot below. Your timezone is detected automatically.
          </p>
        </div>

        <div className="relative min-h-[700px] flex-1">
          {isLoading && (
            <div className="absolute inset-0 z-0 flex items-center justify-center rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-300/20 border-t-cyan-300" />
                Loading available times…
              </div>
            </div>
          )}

          <div
            id="cal-booking-inline"
            className="relative z-10 h-full min-h-[700px] w-full overflow-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default CalBooking;
