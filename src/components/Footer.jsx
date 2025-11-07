import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-white font-semibold">NeoSec.ai</p>
            <p className="text-white/60 text-sm">API Security & Threat Intelligence Platform</p>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} NeoSec.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}
