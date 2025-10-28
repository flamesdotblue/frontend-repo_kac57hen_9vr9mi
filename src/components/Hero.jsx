import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-28" id="home">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for vibe - allow interaction with scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(2,8,36,0)_0%,rgba(2,8,36,0.6)_60%,#020824_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020824]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C6D4FF] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5AA3FF] to-[#8C6CFF]" />
            Stechsys • Trusted Technology Partner
          </span>

          <h1 className="mt-6 bg-gradient-to-r from-[#5AA3FF] via-[#8C6CFF] to-[#5AA3FF] bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            Innovating Tomorrow’s Tech Today
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#C6D4FF]">
            We craft software, web, mobile, and cloud solutions that scale with your business.
            From concept to production, we deliver with precision and speed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5AA3FF] to-[#8C6CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5AA3FF]/20 transition hover:scale-[1.02]"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
