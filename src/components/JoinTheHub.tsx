import { useState, useEffect, FormEvent } from "react";
import { Terminal, Check, Send, ChevronRight, Users, Code, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Submission {
  name: string;
  email: string;
  github: string;
  stack: string;
  trackName: string;
  timestamp: string;
}

export default function JoinTheHub() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    stack: "React / Node.js",
    track: "track-frontend",
    customNote: ""
  });

  const [submittedData, setSubmittedData] = useState<Submission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("adhub_developer_join");
    if (saved) {
      try {
        setSubmittedData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved developer submission", e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      let selectedTrackName = "Frontend Engineering";
      if (formData.track === "track-backend") {
        selectedTrackName = "Backend Systems";
      } else if (formData.track === "track-design") {
        selectedTrackName = "Product Design & Strategy";
      }

      const submission: Submission = {
        name: formData.name,
        email: formData.email,
        github: formData.github.startsWith("@") ? formData.github : `@${formData.github}`,
        stack: formData.stack,
        trackName: selectedTrackName,
        timestamp: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        })
      };

      localStorage.setItem("adhub_developer_join", JSON.stringify(submission));
      setSubmittedData(submission);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    localStorage.removeItem("adhub_developer_join");
    setSubmittedData(null);
    setFormData({
      name: "",
      email: "",
      github: "",
      stack: "React / Node.js",
      track: "track-frontend",
      customNote: ""
    });
  };

  return (
    <section id="join" className="py-24 bg-[#F5F2EA] relative">
      {/* Dynamic background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left information column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-xs font-semibold tracking-wider text-amber-700 uppercase bg-amber-500/10 px-3 py-1 rounded-full">
              JOIN THE GUILD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Build the future of digital Africa.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We recruit passionate developers. Whether you are an aspiring builder, a computer science graduate, or a senior technologist looking to give back through high-fidelity open-source collaboration, there is a place for you in our tracks.
            </p>

            <div className="space-y-4 pt-4">
              {[
                {
                  title: "Collaborate on Clean Code",
                  desc: "Learn automated testing, clean modular architectures, robust API security guidelines, and performant design configurations.",
                  icon: <Code className="w-5 h-5 text-amber-600" />
                },
                {
                  title: "Get Mentored by Experts",
                  desc: "Exchange code reviews and architectural blueprints directly with lead developers who validate system scalability.",
                  icon: <Award className="w-5 h-5 text-amber-600" />
                },
                {
                  title: "Build Your Professional Portfolio",
                  desc: "Acquire real, verifiable coding experience on fully public, high-trust open-source GitHub projects.",
                  icon: <Users className="w-5 h-5 text-amber-600" />
                }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-amber-500/5 border border-amber-500/15 shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-slate-900">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form card column */}
          <div className="lg:col-span-7">
            <div className="glass-card glow-glow rounded-3xl p-6 sm:p-8">
              
              <AnimatePresence mode="wait">
                {!submittedData ? (
                  <motion.form
                    key="developer-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="border-b border-amber-500/10 pb-4 mb-2">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                        Apply to Join a Cohort
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill in your details. Our pathway coordinators review application batches weekly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Chidi Egwu"
                          className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="chidi@example.com"
                          className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* GitHub */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                          GitHub Username / Link
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          placeholder="chidi-dev"
                          className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Primary Stack */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                          Primary Engineering Stack
                        </label>
                        <select
                          value={formData.stack}
                          onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                          className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 transition-all cursor-pointer"
                        >
                          <option value="React / Node.js">React / Node.js (TypeScript)</option>
                          <option value="Python / Django & FastAPI">Python / Django & FastAPI</option>
                          <option value="Mobile (Flutter / Kotlin)">Mobile (Flutter / Kotlin)</option>
                          <option value="UI & Product Design">UI, Figma & Product Strategy</option>
                          <option value="DevOps & Systems">DevOps, Docker & Cloud Eng</option>
                        </select>
                      </div>
                    </div>

                    {/* Pathway Interest */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                        Preferred Learning Track
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 transition-all cursor-pointer"
                      >
                        <option value="track-frontend">Frontend Engineering (React & TS)</option>
                        <option value="track-backend">Backend Systems (Node, APIs & SQL)</option>
                        <option value="track-design">Product Design & Strategy (Figma & UX)</option>
                      </select>
                    </div>

                    {/* Custom Note */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                        Why do you want to join? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.customNote}
                        onChange={(e) => setFormData({ ...formData, customNote: e.target.value })}
                        placeholder="Tell us about what you want to learn or build..."
                        className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="developer-apply-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 text-sm font-bold tracking-wide text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success Screen */
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-slate-900">
                        Application Logged!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="text-amber-700 font-bold">{submittedData.name}</span>. Your details have been successfully received and added to our review queue.
                      </p>
                    </div>

                    {/* Logged Receipt Box */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-white/10 font-mono text-xs text-left max-w-md mx-auto space-y-2.5 shadow-xl text-slate-200">
                      <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-slate-400">
                        <Terminal className="w-4 h-4 text-amber-400" />
                        <span>Receipt ID: ADH-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-slate-400">Applicant:</span>
                        <span className="text-white">{submittedData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Email:</span>
                        <span className="text-amber-400">{submittedData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">GitHub:</span>
                        <span className="text-sky-400">{submittedData.github}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Engineering Role:</span>
                        <span className="text-white">{submittedData.stack}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Assigned Track:</span>
                        <span className="text-amber-400 font-semibold">{submittedData.trackName}</span>
                      </div>
                      <div className="flex justify-between border-t border-white/5 pt-2 text-[10px] text-slate-400">
                        <span>Status:</span>
                        <span className="text-amber-400 font-bold uppercase tracking-wider">Pending Coordinator Review</span>
                      </div>
                    </div>

                    <button
                      id="developer-reset-btn"
                      onClick={handleReset}
                      className="text-xs font-mono text-slate-500 hover:text-slate-700 underline cursor-pointer"
                    >
                      Submit another application or reset form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
