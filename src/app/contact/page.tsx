import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for a free consultation or project quote. We respond within 24 hours.",
};

interface ContactPageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultType = params.type === "quote" ? "quote" : "consultation";

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="glow-orb -right-20 top-20 h-72 w-72 bg-cyan-500/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            description="Ready for a custom website or web engine? Tell us what you need — no obligation."
          />
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: "Remote-first, Worldwide" },
              { icon: Clock, label: "Response Time", value: "Within 24 hours" },
            ].map((item) => (
              <div key={item.label} className="gradient-border flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-700">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-sm font-semibold text-slate-900 hover:text-cyan-700">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm defaultType={defaultType} showHeading={false} />
    </>
  );
}
