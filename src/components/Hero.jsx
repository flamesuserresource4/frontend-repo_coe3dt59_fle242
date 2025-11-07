import Spline from "@splinetool/react-spline";
import { ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full pt-20 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Non-blocking glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(139,92,246,0.20),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_60%,rgba(59,130,246,0.16),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl pt-24"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-violet-300 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium">Interactive API Security</span>
            </div>
            <h1 className="mt-6 font-bold tracking-tight text-white text-4xl sm:text-6xl leading-[1.05]">
              Hacker-grade visibility for every API, identity, and service
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              A cyberpunk-inspired, real‑time defense layer with AI detections, attack‑path mapping, and live evidence your auditors will love.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-md bg-violet-400 px-6 py-3 text-base font-semibold text-violet-950 shadow-lg shadow-violet-400/30 hover:shadow-violet-400/50 transition will-change-transform hover:-translate-y-0.5"
              >
                Get a Live Demo
              </a>
              <a
                href="#intelligence"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Threat Intel
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
              <ShieldCheck className="h-4 w-4 text-violet-400" />
              <span>Enterprise-ready • SOC2 • SSO • Private Cloud</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-16 mb-6 flex items-center justify-center"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-xs">Scroll</span>
            <span className="mt-1 h-6 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
