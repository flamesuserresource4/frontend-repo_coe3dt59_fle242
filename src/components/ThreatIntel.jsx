import { Activity, Radar, Lock, Network } from "lucide-react";

const intel = [
  {
    icon: Activity,
    title: "Live Attack Telemetry",
    desc: "Stream OSINT, dark web chatter, and in-product signals into a unified graph updated every second.",
  },
  {
    icon: Radar,
    title: "AI Correlation",
    desc: "LLM-assisted correlation turns scattered alerts into precise narratives with confidence scoring.",
  },
  {
    icon: Network,
    title: "Attack Path Mapping",
    desc: "Visualize blast radius across services, identities, and data with automatic pathing.",
  },
  {
    icon: Lock,
    title: "Detections Library",
    desc: "Continuously updated detection packs for OWASP API Top 10, SSRF, supply chain, and more.",
  },
];

export default function ThreatIntel() {
  return (
    <section id="intelligence" className="relative py-24 bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_0%,rgba(16,185,129,0.2),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Threat Intelligence, Reimagined
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Curated intel fused with your runtime. From external chatter to internal anomalies — resolved into clear action.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {intel.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow-lg shadow-black/20">
              <div className="h-10 w-10 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-400/30 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
