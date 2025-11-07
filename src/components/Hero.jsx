import Spline from "@splinetool/react-spline";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full pt-20 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-950 to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(16,185,129,0.25),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl pt-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium">Futuristic Cloud-Native Security</span>
            </div>
            <h1 className="mt-6 font-bold tracking-tight text-white text-4xl sm:text-6xl leading-[1.05]">
              Real-time Threat Intelligence for Modern APIs & Microservices
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              See every attack path, stop unknown threats with AI-driven detections, and prove security with live evidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-6 py-3 text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 transition">
                Get a Live Demo
              </a>
              <a href="#intelligence" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition">
                Explore Threat Intel
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Enterprise-ready • SOC2 • SSO • Private Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
