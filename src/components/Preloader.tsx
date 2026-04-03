"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "complete" | "exit">("counting");
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Total duration for counting 0→100
  const DURATION = 2400;

  useEffect(() => {
    // Lock body scroll while preloader is visible
    document.body.style.overflow = "hidden";

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      // Ease-out curve — fast at start, slow near 100
      const raw = elapsed / DURATION;
      const eased = raw < 1 ? 1 - Math.pow(1 - raw, 3) : 1;
      const pct = Math.min(Math.floor(eased * 100), 100);

      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Brief pause at 100 before exit
        setTimeout(() => {
          setPhase("complete");
          setTimeout(() => {
            setPhase("exit");
            // Re-enable scroll after exit animation finishes
            setTimeout(() => {
              document.body.style.overflow = "";
            }, 800);
          }, 300);
        }, 350);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "exit" && progress === 100) {
    // Keep in DOM briefly for animation, then unmount via CSS
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#08080A]"
      style={{
        transition: phase === "exit" ? "transform 0.85s cubic-bezier(0.76,0,0.24,1), opacity 0.85s ease" : "none",
        transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
        opacity: phase === "exit" ? 0 : 1,
        pointerEvents: phase === "exit" ? "none" : "all",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
            transition: "opacity 0.5s ease",
            opacity: phase === "complete" ? 1.5 : 1,
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#C9A96E]/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#C9A96E]/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#C9A96E]/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[#C9A96E]/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 w-full px-6 max-w-xs">

        {/* Logo */}
        <div
          style={{
            opacity: progress > 5 ? 1 : 0,
            transform: progress > 5 ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Image
            src="/logo2.png"
            alt="Commerce Alliance Holdings Limited"
            width={180}
            height={72}
            className="object-contain"
            priority
          />
        </div>

        {/* Progress track */}
        <div className="w-full flex flex-col gap-3">
          {/* Bar track */}
          <div className="w-full h-[1px] bg-[#C9A96E]/12 relative overflow-hidden">
            {/* Fill */}
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #A07840, #C9A96E, #E2C89A)",
                transition: "width 0.05s linear",
                boxShadow: "0 0 8px rgba(201,169,110,0.6)",
              }}
            />
            {/* Shimmer dot at tip */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#E2C89A]"
              style={{
                left: `calc(${progress}% - 3px)`,
                transition: "left 0.05s linear",
                boxShadow: "0 0 6px 2px rgba(226,200,154,0.8)",
                opacity: progress < 100 ? 1 : 0,
              }}
            />
          </div>

          {/* Percentage + label row */}
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]/40"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {phase === "complete" ? "Ready" : "Loading"}
            </span>
            <span
              className="text-[13px] tabular-nums text-[#C9A96E]"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                letterSpacing: "0.1em",
              }}
            >
              {progress}
              <span className="text-[#C9A96E]/50">%</span>
            </span>
          </div>
        </div>

        {/* Tagline — fades in near end */}
        <p
          className="text-center text-[11px] tracking-[0.25em] uppercase text-[#f0ede8]/20"
          style={{
            fontFamily: "var(--font-inter)",
            opacity: progress > 75 ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          Building Africa's Financial Infrastructure
        </p>

      </div>
    </div>
  );
}
