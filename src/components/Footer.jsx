import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-[#020824] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#5AA3FF] to-[#8C6CFF] text-white font-bold shadow-lg">S</span>
            <span className="text-white font-semibold">Stechsys</span>
          </a>
          <div className="flex items-center gap-3">
            <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10"><Linkedin size={18} /></a>
            <a aria-label="Twitter" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10"><Twitter size={18} /></a>
            <a aria-label="GitHub" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10"><Github size={18} /></a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-[#C6D4FF]">
          © {year} Stechsys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
