import { Github, Linkedin, Terminal, Mail, Heart, ArrowUp } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    onNavigate("hero");
  };

  return (
    <footer id="site-footer" className="bg-[#EAE5D9] border-t border-amber-500/15 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-amber-500/15">
          
          {/* Column 1: Logo & Mission Statement */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button
              id="footer-logo"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-left group focus:outline-none"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-500 text-white font-bold text-sm shadow-md">
                <Terminal className="w-4 h-4 text-amber-100" />
              </div>
              <div>
                <span className="block font-display font-bold text-base tracking-tight text-slate-950">
                  The African Digital Hub
                </span>
                <span className="block font-mono text-[9px] text-amber-700 tracking-wider uppercase font-bold">
                  Tech Co & Community
                </span>
              </div>
            </button>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed font-sans">
              We are a pan-African software engineering company and developer guild. We build highly robust, production-grade applications while fostering intensive elite mentorship pathways for local talent.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-github-link"
                href="https://github.com/African-Digital-Hub"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white border border-amber-500/20 text-slate-600 hover:text-amber-700 hover:border-amber-500/40 hover:shadow-md transition-all"
                aria-label="GitHub Organization"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-linkedin-link"
                href="https://linkedin.com/company/african-digital-hub"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white border border-amber-500/20 text-slate-600 hover:text-amber-700 hover:border-amber-500/40 hover:shadow-md transition-all"
                aria-label="LinkedIn Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              Explore Platform
            </h4>
            <ul className="space-y-2">
              {[
                { id: "hero", label: "Home" },
                { id: "squads-projects", label: "Tracks & Focus Areas" },
                { id: "about", label: "About Our Guild" },
                { id: "join", label: "Developer Fellowship" },
                { id: "partner", label: "Enterprise Partnerships" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-${link.id}`}
                    onClick={() => onNavigate(link.id)}
                    className="text-xs text-slate-600 hover:text-amber-700 transition-colors cursor-pointer font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
              Regional Focus
            </h4>
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-sans">
              <p>
                <strong className="text-slate-800 font-bold">East Africa Chapter:</strong><br />
                Coordinating online & hybrid developer clusters from Nairobi & Kigali.
              </p>
              <p>
                <strong className="text-slate-800 font-bold">West Africa Chapter:</strong><br />
                Coordinating online & hybrid developer clusters from Lagos & Accra.
              </p>
              <p className="flex items-center gap-2 pt-1.5 text-amber-750 font-bold">
                <Mail className="w-4 h-4 text-amber-600" />
                <span>info@africandigitalhub.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copy */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            © {currentYear} The African Digital Hub Ltd. All rights reserved. Registered under African technology community framework.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-slate-500 flex items-center gap-1 font-medium">
              Engineered with <Heart className="w-3 h-3 text-amber-600 fill-amber-600" /> in Africa
            </span>
            <button
              id="back-to-top"
              onClick={scrollToTop}
              className="p-1.5 rounded bg-white border border-amber-500/20 text-slate-600 hover:text-amber-700 transition-all cursor-pointer shadow-sm hover:shadow"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
