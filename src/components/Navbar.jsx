import React from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-[#030a2b]/70 backdrop-blur supports-[backdrop-filter]:bg-[#030a2b]/60">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#5AA3FF] to-[#8C6CFF] text-white font-bold shadow-lg">
                S
              </span>
              <div className="leading-tight">
                <div className="text-white font-semibold tracking-tight">Stechsys</div>
                <div className="text-xs text-[#C6D4FF]">IT Services</div>
              </div>
            </a>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#C6D4FF] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#5AA3FF] to-[#8C6CFF] px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition"
                >
                  Get a Quote
                </a>
              </li>
            </ul>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* Mobile menu */}
          {open && (
            <div className="border-t border-white/10 lg:hidden">
              <ul className="flex flex-col p-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-[#C6D4FF] hover:text-white hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block rounded-md bg-gradient-to-r from-[#5AA3FF] to-[#8C6CFF] px-3 py-2 text-center font-medium text-white"
                  >
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
