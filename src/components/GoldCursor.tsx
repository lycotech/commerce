"use client";

import { useEffect, useRef } from "react";

export default function GoldCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterLink = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = "52px";
      ringRef.current.style.height = "52px";
      ringRef.current.style.borderColor = "rgba(201,169,110,0.7)";
    };

    const onLeaveLink = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = "32px";
      ringRef.current.style.height = "32px";
      ringRef.current.style.borderColor = "rgba(201,169,110,0.4)";
    };

    document.addEventListener("mousemove", onMove);

    // Interactive elements expand the ring
    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    // Animate ring with lerp for smooth lag
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      if (ringRef.current) {
        const rSize = parseInt(ringRef.current.style.width || "32");
        ringRef.current.style.transform = `translate(${ring.current.x - rSize / 2}px, ${ring.current.y - rSize / 2}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  );
}
