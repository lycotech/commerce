"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ScrollRevealInit() {
  useScrollReveal({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  return null;
}
