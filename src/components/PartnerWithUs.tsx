import { useState, useEffect, FormEvent } from "react";
import { Send, Check, HeartHandshake, ShieldCheck, Mail, Phone, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PartnerSubmission {
  company: string;
  contactName: string;
  email: string;
  type: string;
  budgetRange: string;
  message: string;
  timestamp: string;
}

export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    type: "Enterprise Software Project",
    budgetRange: "$10,000 - $25,000",
    message: ""
  });

  const [partnerSubmitted, setPartnerSubmitted] = useState<PartnerSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("adhub_partner_inquiry");
    if (saved) {
      try {
        setPartnerSubmitted(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved partner submission", e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const submission: PartnerSubmission = {
        company: formData.company,
        contactName: formData.contactName,
        email: formData.email,
        type: formData.type,
        budgetRange: formData.budgetRange,
        message: formData.message,
        timestamp: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        })
      };

      localStorage.setItem("adhub_partner_inquiry", JSON.stringify(submission));
      setPartnerSubmitted(submission);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    localStorage.removeItem("adhub_partner_inquiry");
    setPartnerSubmitted(null);
    setFormData({
      company: "",
      contactName: "",
      email: "",
      type: "Enterprise Software Project",
      budgetRange: "$10,000 - $25,000",
      message: ""
    });
  };

  return (
    <section id="partner" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Visual background grids */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/[0.04] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-xs font-semibold tracking-wider text-amber-700 uppercase bg-amber-500/10 px-3 py-1 rounded-full">
              WORK WITH THE HUB
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Partner with absolute engineering trust.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We deliver elite custom web platforms, robust mobile systems, and educational architectures. When you hire or sponsor us, you secure world-class solutions while supporting developer mentorship.
            </p>

            <div className="space-y-4 pt-4 border-t border-amber-500/10">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/15 shrink-0 text-amber-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-slate-900">
                    Premium Technical Delivery
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Every custom codebase is structured, tested, and handed over with complete modular blueprints and support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/15 shrink-0 text-amber-600">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-slate-900">
                    Sponsorship & Co-creation
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Sponsor dedicated developers, set up research labs, or build civic tools tailored for local populations.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-amber-500/15 space-y-3">
              <span className="inline-block text-[10px] font-mono text-amber-700 bg-amber-500/5 px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                Direct Inquiries & Briefs
              </span>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>partnerships@africandigitalhub.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>+254 700 000 000 (East Africa Hub)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right inquiry form */}
          <div className="lg:col-span-7">
            <div className="glass-card glow-glow rounded-3xl p-6 sm:p-8">
              
              <AnimatePresence mode="wait">
                {!partnerSubmitted ? (
                  <motion.form
                    key="partner-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="border-b border-amber-500/10 pb-4 mb-2">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                        Let's Discuss Your Project
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Submit an inquiry below and we will schedule an initial scope-alignment session within 24 hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company Name */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Global Inc"
                          className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Contact Name */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                          Contact Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          placeholder="Reagan Muchajji"
                          className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="reagan@acme.com"
                          className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Partnership Type */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                          Partnership Track
                        </label>
                        <select
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 transition-all cursor-pointer"
                        >
                          <option value="Enterprise Software Project">Enterprise Custom Software</option>
                          <option value="Mentorship & Cohort Sponsor">Mentor & Cohort Sponsorship</option>
                          <option value="Co-design Academic/Logistics Tooling">Co-design Academic/Logistics Tooling</option>
                          <option value="Other Consulting">Other Technology Strategy</option>
                        </select>
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                        Estimated Budget / Sponsoring Capital
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 transition-all cursor-pointer"
                      >
                        <option value="$5,000 - $10,000">$5,000 - $10,000 USD</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000 USD</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000 USD</option>
                        <option value="$50,000+">$50,000+ USD</option>
                      </select>
                    </div>

                    {/* Inquiry Message */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-mono font-semibold text-slate-500 uppercase">
                        Brief Project Scope / Sponsoring Intent
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your technology requirements, target platform, timeline constraints..."
                        className="w-full bg-white border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      id="partner-inquiry-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 text-sm font-bold tracking-wide text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Filing Brief...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Initiate Partnership</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* SuccessReceipt Screen */
                  <motion.div
                    key="partner-success-receipt"
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
                        Inquiry Registered!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="text-amber-700 font-bold">{partnerSubmitted.contactName}</span>. Your technology brief has been logged in our partner registry.
                      </p>
                    </div>

                    {/* Logging Receipt Info */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-white/10 font-mono text-xs text-left max-w-md mx-auto space-y-2.5 shadow-xl text-slate-200">
                      <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-slate-400">
                        <Calendar className="w-4 h-4 text-amber-400" />
                        <span>Timestamp: {partnerSubmitted.timestamp}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-slate-400">Institution:</span>
                        <span className="text-white">{partnerSubmitted.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Contact Person:</span>
                        <span className="text-white">{partnerSubmitted.contactName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Email:</span>
                        <span className="text-amber-400">{partnerSubmitted.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Track:</span>
                        <span className="text-amber-300">{partnerSubmitted.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Budget Frame:</span>
                        <span className="text-white">{partnerSubmitted.budgetRange}</span>
                      </div>
                      
                      <div className="border-t border-white/5 pt-2 text-[10px] text-slate-400 space-y-1">
                        <span>Brief Abstract:</span>
                        <p className="text-slate-400 leading-relaxed font-sans line-clamp-2">
                          "{partnerSubmitted.message}"
                        </p>
                      </div>
                    </div>

                    <button
                      id="partner-reset-btn"
                      onClick={handleReset}
                      className="text-xs font-mono text-slate-500 hover:text-slate-700 underline cursor-pointer"
                    >
                      File another brief or reset details
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
