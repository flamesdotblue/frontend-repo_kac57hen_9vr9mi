import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Cloud, Cpu, Database, Shield, Rocket, Star, MessageSquare, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Sections() {
  return (
    <div className="relative z-10">
      {/* About */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">About Stechsys</h2>
            <p className="mt-4 text-[#C6D4FF]">
              Stechsys is a modern IT services company dedicated to building reliable, scalable, and delightful digital products. We specialize in full‑stack development, cloud infrastructure, and high‑performance user experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Quality first', 'Secure by design', 'Cloud-native', 'Agile delivery'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C6D4FF]">{t}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#5AA3FF]/40 to-[#8C6CFF]/40 blur-2xl" />
            <div className="relative rounded-xl border border-white/10 bg-[#0a1137] p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, label: 'Software' },
                  { icon: Globe, label: 'Web Apps' },
                  { icon: Smartphone, label: 'Mobile Apps' },
                  { icon: Cloud, label: 'Cloud' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-[#5AA3FF] to-[#8C6CFF] text-white">
                      <Icon size={20} />
                    </span>
                    <span className="text-sm text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#C6D4FF]">End‑to‑end engineering to bring your vision to life.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Code, title: 'Software Development', desc: 'APIs, integrations, and platforms built for scale.' },
            { icon: Globe, title: 'Web Applications', desc: 'Modern, responsive, and accessible web solutions.' },
            { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross‑platform apps that delight users.' },
            { icon: Cloud, title: 'Cloud Solutions', desc: 'Architecture, DevOps, and cost‑efficient operations.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-[#0a1137]/60 p-6 transition hover:bg-[#0a1137]/80">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#5AA3FF] to-[#8C6CFF] text-white shadow">
                  <Icon size={22} />
                </span>
                <Rocket className="text-[#C6D4FF]/60 opacity-0 transition group-hover:opacity-100" size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-[#C6D4FF]">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        id="technologies"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Technologies</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#C6D4FF]">We use proven, modern stacks to ship fast and safely.</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: Cpu, name: 'Node.js' },
            { icon: Database, name: 'MongoDB' },
            { icon: Globe, name: 'React' },
            { icon: Cloud, name: 'AWS' },
            { icon: Shield, name: 'Auth & Security' },
            { icon: Code, name: 'TypeScript' },
          ].map(({ icon: Icon, name }) => (
            <span key={name} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
              <Icon size={16} className="text-[#C6D4FF]" />
              {name}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#C6D4FF]">A glimpse of things we build for clients across industries.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'AI‑powered Analytics Dashboard',
              text: 'Real‑time insights, custom reports, and collaborative workflows.',
            },
            {
              title: 'FinTech Mobile Banking App',
              text: 'Secure, fast, and intuitive banking on the go.',
            },
            {
              title: 'Cloud‑native E‑commerce Platform',
              text: 'Scalable storefront with global content delivery.',
            },
          ].map((p, i) => (
            <div key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a1137]/60 p-6">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#5AA3FF]/0 via-[#8C6CFF]/0 to-[#8C6CFF]/20 opacity-0 blur-xl transition group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[#C6D4FF]">
                  <Star size={16} className="text-[#5AA3FF]" />
                  <span className="text-xs">Case Study #{i + 1}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-[#C6D4FF]">{p.text}</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white hover:bg-white/10">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What Clients Say</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#C6D4FF]">We partner for outcomes, not just outputs.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              quote:
                'Stechsys exceeded expectations delivering a robust platform ahead of schedule. Communication and quality were top‑tier.',
              name: 'Amelia Carter',
              role: 'CTO, NovaCorp',
            },
            {
              quote:
                'Their cloud expertise helped us reduce costs by 35% while improving reliability. A trusted partner for critical systems.',
              name: 'Jordan Lee',
              role: 'Head of Engineering, Finova',
            },
          ].map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a1137]/60 p-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5AA3FF]/0 to-[#8C6CFF]/20 opacity-0 blur-xl transition group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C6D4FF]">
                  <MessageSquare size={14} className="text-[#5AA3FF]" />
                  Verified Client
                </div>
                <p className="text-white">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#5AA3FF] to-[#8C6CFF]" />
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-[#C6D4FF]">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build something great</h2>
            <p className="mt-3 text-[#C6D4FF]">Tell us about your goals and we’ll get back within one business day.</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#C6D4FF]">
                <Mail size={16} className="text-[#5AA3FF]" /> hello@stechsys.com
              </div>
              <div className="flex items-center gap-3 text-[#C6D4FF]">
                <Phone size={16} className="text-[#5AA3FF]" /> +1 (555) 123‑4567
              </div>
              <div className="flex items-center gap-3 text-[#C6D4FF]">
                <MapPin size={16} className="text-[#5AA3FF]" /> Remote • Worldwide
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"><Linkedin size={16} />LinkedIn</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"><Twitter size={16} />Twitter</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"><Github size={16} />GitHub</a>
            </div>
          </div>

          <form className="relative rounded-xl border border-white/10 bg-[#0a1137]/60 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm text-[#C6D4FF]">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-[#C6D4FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5AA3FF]" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-[#C6D4FF]">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-[#C6D4FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5AA3FF]" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-[#C6D4FF]">Subject</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-[#C6D4FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5AA3FF]" placeholder="How can we help?" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-[#C6D4FF]">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-[#C6D4FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5AA3FF]" placeholder="Tell us a bit about your project..." />
              </div>
            </div>
            <div className="mt-4">
              <button type="button" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5AA3FF] to-[#8C6CFF] px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90">Send message</button>
            </div>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
