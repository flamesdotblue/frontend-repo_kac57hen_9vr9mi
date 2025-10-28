import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#020824] text-white font-inter selection:bg-[#8C6CFF]/30 selection:text-white">
      {/* Background gradient accents */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-40" aria-hidden>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#5AA3FF] to-[#8C6CFF] blur-3xl" />
        <div className="absolute -right-20 top-64 h-72 w-72 rounded-full bg-gradient-to-br from-[#8C6CFF] to-[#5AA3FF] blur-3xl" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
