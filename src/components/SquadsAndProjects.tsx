import { useState } from "react";
import { FOCUS_TRACKS, FocusTrack } from "../data";
import { Code2, Cpu, ArrowUpRight, Check, Sparkles, BookOpen, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SquadsAndProjects() {
  const [selectedTrack, setSelectedTrack] = useState<string>(FOCUS_TRACKS[0].id);

  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case "Backend":
        return <Cpu className="w-5 h-5 text-amber-300" />;
      default:
        return <Layers className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <section id="squads-projects" className="py-24 bg-[#F5F2EA] relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-amber-600/[0.02] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider text-amber-700 uppercase bg-amber-500/10 px-3 py-1 rounded-full">
            OUR TECHNICAL BLUEPRINT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Community Tracks & Focus Areas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We structure our learning cohorts around domain-specific technology tracks. Our developers collaborate on clean-code patterns and modular structures built for production deployment.
          </p>
        </div>

        {/* Tab / Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="tracks-container">
          {/* Track selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">
              CHOOSE A FOCUS PATHWAY:
            </span>
            {FOCUS_TRACKS.map((track) => (
              <button
                key={track.id}
                id={`track-item-${track.id}`}
                onClick={() => setSelectedTrack(track.id)}
                className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedTrack === track.id
                    ? "bg-white border-amber-500/40 shadow-md shadow-amber-950/5"
                    : "bg-[#faf8f5]/60 border-amber-500/10 hover:bg-white hover:border-amber-500/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-base text-slate-900">
                    {track.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold bg-amber-500/10 text-amber-700">
                    {track.category}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1 mt-1 font-sans">
                  {track.tagline}
                </p>
              </button>
            ))}

            {/* General Info Card */}
            <div className="p-4 rounded-xl bg-white/80 border border-amber-500/15 space-y-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-slate-800">Mentorship Centered</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Developers hold weekly peer review loops on these architectures, establishing clean code patterns and industrial conventions from day one.
              </p>
            </div>
          </div>

          {/* Track detail display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {FOCUS_TRACKS.filter((t) => t.id === selectedTrack).map((track) => (
                <motion.div
                  key={track.id}
                  id={`track-details-${track.id}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="glass-card rounded-2xl p-6 sm:p-8 space-y-6"
                >
                  {/* Top bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-amber-500/10 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15">
                        {getIcon(track.category)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-amber-700 bg-amber-500/10 px-2 py-1 rounded font-bold">
                          {track.category} Engineering
                        </span>
                        <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
                          {track.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-700 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        ACTIVE TRACK
                      </span>
                    </div>
                  </div>

                  {/* Detailed info */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                        TRACK DESCRIPTION
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {track.description}
                      </p>
                    </div>

                    {/* Split list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Core Skills */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                          CORE SKILLS TAUGHT
                        </h4>
                        <ul className="space-y-2">
                          {track.skills.map((skill, idx) => (
                            <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                              <span className="p-0.5 bg-amber-500/10 text-amber-700 rounded">
                                <Check className="w-3 h-3" />
                              </span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical Architecture Goals */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                          PRACTICE GOALS
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          We practice robust architectural patterns including type-safe models, standard API security configurations, structured design systems, and automated testing templates.
                        </p>
                      </div>
                    </div>

                    {/* Real Impact */}
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5 mt-4">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-amber-700" />
                        <h4 className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                          AUTHENTIC DEVELOPMENT FOCUS
                        </h4>
                      </div>
                      <p className="text-xs text-amber-800 leading-relaxed font-sans">
                        Our goal is to demonstrate clean, reusable design patterns that can be extended safely by regional teams to establish reliable digital portfolios.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
