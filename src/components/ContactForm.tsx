"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin } from "lucide-react";

const enquiryTypes = [
  "Investment Enquiry",
  "Real Estate Partnership",
  "Asset Management",
  "Capital Raising",
  "Strategic Collaboration",
  "Media & Press",
  "General Enquiry",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  type: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-[#08080A] border border-[#C9A96E]/15 text-[#f0ede8] text-[14px] px-5 py-4 placeholder-[#f0ede8]/25 focus:outline-none focus:border-[#C9A96E]/50 focus:bg-[#0D1117] transition-all duration-300";

const labelClass =
  "block text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]/70 mb-2";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    type: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", type: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0D1117] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-[#C9A96E]/04 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#C9A96E]/03 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Get In Touch
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Start a{" "}
              <span className="gold-text font-semibold">Conversation</span>
            </h2>
          </div>
          <div>
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/50"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Whether you are an investor, a strategic partner, or simply
              looking to learn more about our ecosystem — we would love to hear
              from you. All enquiries are responded to within 2 business days.
            </p>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Contact info panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Contact detail cards */}
            {[
              {
                icon: MapPin,
                label: "Our Office",
                lines: [
                  "5th Floor, Katsina House",
                  "Ralph Shodeinde, Central Area",
                  "Abuja, Nigeria",
                ],
              },
              {
                icon: Mail,
                label: "Email Us",
                lines: ["info@commerceallianceholdings.com"],
                href: "mailto:info@commerceallianceholdings.com",
              },
              {
                icon: Phone,
                label: "Call Us",
                lines: ["+234 802 2226 387"],
                href: "tel:+2348022226387",
              },
            ].map(({ icon: Icon, label, lines, href }) => (
              <div
                key={label}
                className="border border-[#C9A96E]/12 bg-[#08080A]/60 p-6 flex items-start gap-5 group hover:border-[#C9A96E]/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0 group-hover:border-[#C9A96E]/50 transition-colors duration-300">
                  <Icon size={16} className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors duration-300" />
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]/60 mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {label}
                  </p>
                  {lines.map((line, i) =>
                    href && i === 0 ? (
                      <a
                        key={line}
                        href={href}
                        className="block text-[13px] text-[#f0ede8]/60 hover:text-[#C9A96E] transition-colors duration-200 leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={line}
                        className="text-[13px] text-[#f0ede8]/55 leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Office hours note */}
            <div className="border border-[#C9A96E]/08 bg-gradient-to-br from-[#C9A96E]/05 to-transparent p-6">
              <p
                className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]/60 mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Response Time
              </p>
              <p
                className="text-[13px] text-[#f0ede8]/50 leading-relaxed"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                All enquiries are reviewed and responded to within{" "}
                <span className="text-[#C9A96E]">2 business days</span>. For
                urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* ── Form panel ── */}
          <div className="lg:col-span-3">
            <div className="border border-[#C9A96E]/15 bg-[#08080A]/70 p-8 md:p-10 relative overflow-hidden">
              {/* Top gold accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A96E] via-[#E2C89A] to-[#C9A96E]" />

              {/* ── Success State ── */}
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                  <div className="w-16 h-16 border border-[#C9A96E]/30 flex items-center justify-center">
                    <CheckCircle size={28} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <h3
                      className="text-[32px] font-light text-white mb-3"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Message Sent
                    </h3>
                    <p
                      className="text-[14px] text-[#f0ede8]/55 leading-relaxed max-w-sm"
                      style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                    >
                      Thank you for reaching out. We've received your message
                      and sent a confirmation to your email. Our team will be
                      in touch within 2 business days.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors mt-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {/* Row 1 — Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                        Full Name <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className={inputClass}
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                        Email Address <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className={inputClass}
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                  </div>

                  {/* Row 2 — Phone + Enquiry type */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 ..."
                        className={inputClass}
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                        Enquiry Type
                      </label>
                      <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        <option value="" disabled>Select type…</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t} className="bg-[#0D1117]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3 — Subject */}
                  <div className="mb-4">
                    <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Brief subject line"
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  {/* Row 4 — Message */}
                  <div className="mb-6">
                    <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                      Message <span className="text-[#C9A96E]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your investment interests, partnership ideas, or questions…"
                      required
                      className={`${inputClass} resize-none`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="flex items-start gap-3 border border-red-500/25 bg-red-500/05 p-4 mb-6">
                      <AlertCircle size={16} className="text-red-400 shrink-0 mt-[2px]" />
                      <p
                        className="text-[13px] text-red-400/80"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {errorMsg}
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold w-full inline-flex items-center justify-center gap-3 text-[#08080A] font-semibold text-[13px] tracking-[0.2em] uppercase px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Message…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>

                  <p
                    className="text-center text-[11px] text-[#f0ede8]/25 mt-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Your message is sent securely to{" "}
                    <span className="text-[#C9A96E]/50">info@commerceallianceholdings.com</span>
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
