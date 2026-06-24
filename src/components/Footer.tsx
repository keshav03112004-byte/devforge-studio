import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo href={false} />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-slate-600 transition-colors hover:text-cyan-700"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-slate-600 transition-colors hover:text-cyan-700"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-cyan-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              What We Build
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-slate-600 transition-colors hover:text-cyan-700"
                >
                  Custom Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-slate-600 transition-colors hover:text-cyan-700"
                >
                  Custom Web Engines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Get Started
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              Ready to build your next product? Let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-cyan-700 hover:text-cyan-600"
            >
              Start Your Project &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
