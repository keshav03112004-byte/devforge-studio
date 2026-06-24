"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

interface ContactFormProps {
  defaultType?: "consultation" | "quote";
  showHeading?: boolean;
}

export default function ContactForm({
  defaultType = "consultation",
  showHeading = true,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          description: formData.get("description"),
          type: formData.get("type"),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <section className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            {showHeading && (
              <SectionHeading
                eyebrow="Get in Touch"
                title="Let's Build Your Website or Engine"
                description="Tell us about your project — we'll respond within 24 hours with next steps."
                align="left"
              />
            )}
            <div className="mt-8 space-y-6">
              {[
                { title: "Free Consultation", desc: "30-minute call to discuss your project goals." },
                { title: "Detailed Proposal", desc: "Tailored scope, timeline, and cost estimate." },
                { title: "No Obligation", desc: "Explore your options with zero pressure." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-cyan-700" />
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gradient-border rounded-2xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 size={48} className="text-cyan-700" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="mt-2 text-slate-600">We&apos;ll be in touch within 24 hours.</p>
                <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-slate-600">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    defaultValue={defaultType}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="consultation">Book a Consultation</option>
                    <option value="quote">Get a Free Quote</option>
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-600">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-600">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-600">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-600">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Start Your Project
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
