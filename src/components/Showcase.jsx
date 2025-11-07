import { CheckCircle2, ShieldAlert, Fingerprint, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "API Posture",
    points: ["Inventory & risk scoring", "Shadow API discovery", "Schema drift alerts"],
    icon: Layers,
  },
  {
    title: "Runtime Defense",
    points: ["ML anomaly detection", "Inline risk mitigation", "Kubernetes native"],
    icon: ShieldAlert,
  },
  {
    title: "Identity Aware",
    points: ["Workload identity graph", "SSO & SAML", "Just-in-time access"],
    icon: Fingerprint,
  },
];

export default function Showcase() {
  return (
    <section id="platform" className="relative py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-400/30 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-white/80 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-400/10 to-transparent p-6 lg:col-span-3"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold text-xl">Prove Security with Evidence</h3>
                <p className="text-white/70 text-sm mt-2 max-w-xl">Auto-generate audit-ready reports with live detections, change diffs, and mapped controls. Export to your GRC in one click.</p>
              </div>
              <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-6 py-3 text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 transition">
                Start Free Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
