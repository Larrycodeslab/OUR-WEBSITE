import { useState, useEffect } from "react";
import { Menu, X, Terminal, Cpu, HeartHandshake, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "squads-projects", label: "Tracks & Focus" },
    { id: "about", label: "About Us" },
    { id: "join", label: "Join the Hub" },
    { id: "partner", label: "Partner" }
  ];

  const handleClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/85 backdrop-blur-md border-b border-amber-500/10 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => handleClick("hero")}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white font-bold text-lg shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform duration-300">
              <Terminal className="w-5 h-5 text-amber-100" />
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
            </div>
            <div>
              <span className="block font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900">
                The African Digital Hub
              </span>
              <span className="block font-mono text-[10px] text-amber-700 tracking-widest uppercase font-bold">
                Tech Co & Community
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-amber-800 bg-amber-500/10 border border-amber-500/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-amber-500/5 border border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="cta-nav-partner"
              onClick={() => handleClick("partner")}
              className="px-4 py-2 text-xs font-semibold tracking-wider text-amber-700 border border-amber-500/30 rounded-lg hover:bg-amber-500/5 transition-all duration-300 uppercase cursor-pointer"
            >
              Partner with Us
            </button>
            <button
              id="cta-nav-join"
              onClick={() => handleClick("join")}
              className="px-4 py-2 text-xs font-semibold tracking-wider text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-300 uppercase cursor-pointer"
            >
              Join Hub
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-amber-500/5 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-amber-500/10 bg-[#FAF8F5] px-4 pt-2 pb-6 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`flex w-full px-4 py-3 rounded-lg text-base font-semibold transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "text-amber-800 bg-amber-500/10 border-l-4 border-amber-500"
                    : "text-slate-600 hover:text-slate-900 hover:bg-amber-500/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-amber-500/10">
              <button
                id="mobile-cta-partner"
                onClick={() => handleClick("partner")}
                className="w-full text-center py-2.5 text-xs font-semibold tracking-wider text-amber-700 border border-amber-500/30 rounded-lg hover:bg-amber-500/5 transition-all duration-300 uppercase cursor-pointer"
              >
                Partner
              </button>
              <button
                id="mobile-cta-join"
                onClick={() => handleClick("join")}
                className="w-full text-center py-2.5 text-xs font-semibold tracking-wider text-white bg-amber-600 hover:bg-amber-750 rounded-lg transition-all duration-300 uppercase cursor-pointer"
              >
                Join Hub
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
