import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, Radar, Zap, Globe } from "lucide-react";
import { useRef } from "react";

export default function InteractiveScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scaleCard = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.6]);

  const rows = [
    { icon: Radar, title: "Signal Fusion", desc: "Correlate OSINT, runtime telemetry, and auth context into a single story." },
    { icon: Zap, title: "Real‑time Detections", desc: "Stream high‑fidelity alerts with suppression and auto‑triage pipelines." },
    { icon: Globe, title: "Attack Surface", desc: "Map every API, identity, and service — no gaps, no guesswork." },
    { icon: Lock, title: "Evidence", desc: "Export audit‑ready evidence tied to every mitigation and control." },
  ];

  return (
    <section ref={ref} className="relative py-28 bg-black overflow-hidden">
      {/* Parallax glows */}
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute -inset-20 ">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-[20%] top-[40%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sticky top-16 z-10 mb-12 text-center">
          <motion.h2 style={{ opacity }} className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Hacker‑grade, scroll‑reactive experience
          </motion.h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Move the page and watch the system breathe — sections glide, cards tilt, and glows track your scroll.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rows.map((r, idx) => (
            <motion.div
              key={r.title}
              style={{ scale: scaleCard, rotate }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-violet-400/10 ring-1 ring-violet-400/30 flex items-center justify-center">
                  <r.icon className="h-5 w-5 text-violet-300" />
                </div>
                <h3 className="text-white font-semibold text-lg">{r.title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">{r.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-4 text-xs text-white/50">Optimized for smooth 60fps interactions.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
