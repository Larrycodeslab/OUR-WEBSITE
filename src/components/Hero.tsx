import { Terminal, Code, Cpu, ChevronRight, ArrowRight } from "lucide-react";
import { TARGETS } from "../data";
import { motion } from "motion/react";
import FloatingTechBackground from "./FloatingTechBackground";

interface HeroProps {
  onJoinClick: () => void;
  onPartnerClick: () => void;
}

export default function Hero({ onJoinClick, onPartnerClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-[#FAF8F5]"
    >
      {/* Dynamic floating tech artifacts and background grid */}
      <FloatingTechBackground />
      
      {/* Dynamic ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-amber-500/[0.08] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-yellow-500/[0.06] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Community pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-mono tracking-wide"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              LAUNCHING AFRICA'S MODERN DEVELOPER GUILD
            </motion.div>

            {/* Display Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Empowering Developers. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600">
                  Engineering Solutions.
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed">
                The African Digital Hub is a tech community and software development startup based in Africa. We are uniting passionate developers, providing hands-on peer-to-peer mentorship, and building clean-code web applications designed to grow with African enterprises.
              </p>
            </motion.div>

            {/* Direct CTA Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                id="hero-cta-partner"
                onClick={onPartnerClick}
                className="group px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-amber-600 rounded-xl hover:bg-amber-700 shadow-lg shadow-amber-600/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-cta-join"
                onClick={onJoinClick}
                className="px-6 py-3.5 text-sm font-semibold tracking-wide text-amber-900 bg-amber-500/10 border border-amber-500/25 rounded-xl hover:bg-amber-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Join the Community
                <ChevronRight className="w-4 h-4 text-amber-600" />
              </button>
            </motion.div>

            {/* Interactive Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-amber-500/10"
            >
              {TARGETS.map((metric, i) => (
                <div key={i} className="text-left space-y-1 group">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium tracking-tight">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column - Beautiful, Clean Tech Illustration / Code Panel */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full glass-card glow-glow rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden"
            >
              {/* Card visual details */}
              <div className="flex items-center justify-between border-b border-amber-500/10 pb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span className="font-mono text-xs text-amber-700 font-bold tracking-wider uppercase">
                    Hub Framework Shell
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-600/10 text-amber-700 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                  ACTIVE
                </div>
              </div>

              {/* Development Core Block */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-500 mb-1 tracking-wider uppercase">
                  Community Entrypoint
                </div>
                
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-500/10 font-mono text-[11px] text-slate-700 space-y-2">
                  <div className="text-amber-600 font-semibold">// Initialize hub configuration</div>
                  <div>
                    <span className="text-rose-600">const</span> hub = <span className="text-blue-600">new</span> <span className="text-amber-700 font-semibold">AfricanDigitalHub</span>(&#123;
                  </div>
                  <div className="pl-4">
                    region: <span className="text-amber-800">"Africa/Local-First"</span>,
                  </div>
                  <div className="pl-4">
                    focus: [<span className="text-amber-800">"Clean Code"</span>, <span className="text-amber-800">"Systems Architecture"</span>],
                  </div>
                  <div className="pl-4">
                    standards: <span className="text-amber-800">"Production-Grade"</span>,
                  </div>
                  <div className="pl-4">
                    openSource: <span className="text-blue-600">true</span>
                  </div>
                  <div>&#125;);</div>
                  <div className="pt-2 text-amber-600 font-semibold">// Launch community tracks</div>
                  <div>
                    hub.<span className="text-amber-600 font-semibold">initializeCohort</span>();
                  </div>
                </div>
              </div>

              {/* Developer Environment Mock Terminal Display */}
              <div className="rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-200 border border-white/10 space-y-2 shadow-inner">
                <div className="flex items-center gap-2 text-slate-400 border-b border-white/5 pb-2 mb-2">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  <span>cohort_bootstrap.sh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-400">$ dev-hub --status</span>
                  <span className="text-slate-400">READY</span>
                </div>
                <div className="text-[11px] text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>• Frontend Track Setup</span>
                    <span className="text-amber-400">ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Backend Systems Track</span>
                    <span className="text-amber-400">ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Product Design Framework</span>
                    <span className="text-amber-300">INITIALIZED</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
