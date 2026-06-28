import { VALUE_PROPS, PILLARS } from "../data";
import { Code, Users, Globe, Award, CheckCircle2, ChevronRight, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-amber-600" />;
      case "Users":
        return <Users className="w-5 h-5 text-amber-600" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-amber-600" />;
      default:
        return <Award className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-amber-700 uppercase bg-amber-500/10 px-3 py-1 rounded-full">
              WHO WE ARE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              A Guild of African Developers
            </h2>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Founded as an emerging tech community, <strong>The African Digital Hub</strong> acts as a peer learning ecosystem. We bring together passionate local developers to practice core engineering patterns, review clean codebase structures, and build helpful open-source prototypes for real-world scenarios.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Peer-led collaborative learning",
                "Built by Africans, focused on local systems",
                "Rigorous emphasis on clean architecture",
                "Aspiration-led community roadmaps"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Propositions / Framework Pillars */}
        <div className="space-y-6 mb-24">
          <div className="text-left border-b border-amber-500/10 pb-4">
            <h3 className="font-display text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
              OUR CORE ARCHITECTURAL PRINCIPLES
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((prop, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-amber-500/15 flex flex-col justify-between hover:border-amber-500/35 hover:shadow-lg hover:shadow-amber-950/5 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/15 w-fit">
                    {getIcon(prop.iconName)}
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900">
                    {prop.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Foundations / Pillars */}
        <div className="space-y-8">
          <div className="text-left border-b border-amber-500/10 pb-4">
            <h3 className="font-display text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
              COMMUNITY FOUNDATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                id={`pillar-${i}`}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group hover:border-amber-500/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-amber-700 bg-amber-500/10 px-2.5 py-0.5 rounded font-semibold">
                      {pillar.subtitle}
                    </span>
                    <Terminal className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                  
                  <h4 className="font-display font-bold text-xl text-slate-900 pt-2">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-amber-700 mt-6 pt-4 border-t border-amber-500/10 group-hover:text-amber-600 transition-colors">
                  <span>Learn more</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
