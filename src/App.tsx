/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SquadsAndProjects from "./components/SquadsAndProjects";
import AboutUs from "./components/AboutUs";
import JoinTheHub from "./components/JoinTheHub";
import PartnerWithUs from "./components/PartnerWithUs";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "squads-projects", "about", "join", "partner"];
      const scrollPosition = window.scrollY + 300; // Offset for navbar & display rhythm

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F242E] selection:bg-amber-500/20 selection:text-amber-700">
      {/* Dynamic top background mesh */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-amber-500/[0.04] to-transparent pointer-events-none -z-10" />

      {/* Primary Components */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
      
      <main>
        <Hero 
          onJoinClick={() => handleNavigate("join")} 
          onPartnerClick={() => handleNavigate("partner")} 
        />
        
        <SquadsAndProjects />
        
        <AboutUs />
        
        <JoinTheHub />
        
        <PartnerWithUs />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

