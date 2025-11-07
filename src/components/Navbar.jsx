import { Shield, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-400/30">
              <Shield className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="font-semibold tracking-tight text-white text-lg">
              NeoSec.ai
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#intelligence" className="hover:text-white transition">Threat Intel</a>
            <a href="#detections" className="hover:text-white transition">Detections</a>
            <a href="#platform" className="hover:text-white transition">Platform</a>
            <a href="#resources" className="hover:text-white transition">Resources</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-white/80 hover:text-white text-sm">Sign in</a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 transition">
              Request Demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2 text-white/80">
            <a href="#intelligence" className="block">Threat Intel</a>
            <a href="#detections" className="block">Detections</a>
            <a href="#platform" className="block">Platform</a>
            <a href="#resources" className="block">Resources</a>
            <a href="#demo" className="block">Request Demo</a>
          </div>
        )}
      </nav>
    </header>
  );
}
