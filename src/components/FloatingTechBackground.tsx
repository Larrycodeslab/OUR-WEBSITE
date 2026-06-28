import { useEffect, useState } from "react";

interface FloatingTechItem {
  id: number;
  left: string;
  delay: string;
  scale: number;
  durationClass: string;
  type: "circuit" | "database" | "chip" | "brackets" | "network" | "glow";
}

export default function FloatingTechBackground() {
  const [items, setItems] = useState<FloatingTechItem[]>([]);

  useEffect(() => {
    // Generate custom tech assets distributed across the page
    const generated: FloatingTechItem[] = Array.from({ length: 18 }).map((_, idx) => {
      const types: FloatingTechItem["type"][] = ["circuit", "database", "chip", "brackets", "network", "glow"];
      return {
        id: idx,
        left: `${(idx * 11) % 85 + 5}%`, // 5% to 90% wide
        delay: `${(idx * 2.3) % 12}s`,
        scale: 0.6 + (idx % 3) * 0.25, // different scales (0.6, 0.85, 1.1)
        durationClass: idx % 2 === 0 ? "animate-float-up-slow" : "animate-float-up-medium",
        type: types[idx % types.length]
      };
    });
    setItems(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Interactive technical dot grids */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(217,119,6,0.065)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Faint technical isometric grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,119,6,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,119,6,0.015)_1px,transparent_1px)] bg-[size:8rem_8rem]" />

      {items.map((item) => {
        const itemStyle = {
          left: item.left,
          animationDelay: item.delay,
          bottom: "-180px",
          transform: `scale(${item.scale})`,
        };

        if (item.type === "glow") {
          return (
            <div
              key={item.id}
              className={`absolute rounded-full bg-amber-500/[0.04] filter blur-3xl w-56 h-56 ${item.durationClass}`}
              style={itemStyle}
            />
          );
        }

        return (
          <div
            key={item.id}
            className={`absolute text-amber-600/15 ${item.durationClass} transition-opacity hover:opacity-40`}
            style={itemStyle}
          >
            {item.type === "circuit" && (
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2">
                <circle cx="40" cy="40" r="8" strokeDasharray="3 3" />
                <path d="M40 8V32M40 48V72M8 40H32M48 40H72" />
                <circle cx="40" cy="8" r="3" fill="currentColor" />
                <circle cx="40" cy="72" r="3" fill="currentColor" />
                <circle cx="8" cy="40" r="3" fill="currentColor" />
                <circle cx="72" cy="40" r="3" fill="currentColor" />
                <path d="M18 18L32 32M62 62L48 48M62 18L48 32M18 62L32 48" />
              </svg>
            )}

            {item.type === "database" && (
              <svg width="70" height="85" viewBox="0 0 70 85" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2">
                <path d="M5 20C5 11 20 11 35 11C50 11 65 11 65 20" />
                <path d="M5 20V40C5 49 20 49 35 49C50 49 65 49 65 40V20" />
                <path d="M5 40V60C5 69 20 69 35 69C50 69 65 69 65 60V40" />
                <ellipse cx="35" cy="20" rx="30" ry="9" />
                <ellipse cx="35" cy="40" rx="30" ry="9" />
                <ellipse cx="35" cy="60" rx="30" ry="9" />
                <line x1="15" y1="20" x2="15" y2="40" />
                <line x1="55" y1="20" x2="55" y2="40" />
                <line x1="15" y1="40" x2="15" y2="60" />
                <line x1="55" y1="40" x2="55" y2="60" />
              </svg>
            )}

            {item.type === "chip" && (
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2">
                <rect x="20" y="20" width="50" height="50" rx="4" />
                <rect x="32" y="32" width="26" height="26" rx="2" strokeDasharray="2 2" />
                <path d="M10 28H20M10 38H20M10 48H20M10 58H20" />
                <path d="M70 28H80M70 38H80M70 48H80M70 58H80" />
                <path d="M28 10V20M38 10V20M48 10V20M58 10V20" />
                <path d="M28 70V80M38 70V80M48 70V80M58 70V80" />
              </svg>
            )}

            {item.type === "brackets" && (
              <svg width="75" height="60" viewBox="0 0 75 60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2">
                <path d="M22 15L8 30L22 45" />
                <path d="M53 15L67 30L53 45" />
                <path d="M42 10L32 50" strokeWidth="1.5" />
              </svg>
            )}

            {item.type === "network" && (
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2">
                <circle cx="15" cy="40" r="5" />
                <circle cx="50" cy="15" r="5" />
                <circle cx="50" cy="65" r="5" />
                <circle cx="85" cy="40" r="5" />
                <line x1="19" y1="37" x2="46" y2="18" />
                <line x1="19" y1="43" x2="46" y2="62" />
                <line x1="54" y1="18" x2="81" y2="37" />
                <line x1="54" y1="62" x2="81" y2="43" />
                <line x1="50" y1="20" x2="50" y2="60" strokeDasharray="3 3" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
