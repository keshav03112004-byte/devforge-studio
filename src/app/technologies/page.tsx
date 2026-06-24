import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { technologies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Modern web stack: React, Next.js, TypeScript, Node.js, PostgreSQL, and Vercel for fast, reliable custom websites and web engines.",
};

const stackDetails = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Fast, accessible interfaces with server-side rendering and SEO built in.",
  },
  {
    category: "Backend",
    tools: ["Node.js", "REST APIs", "GraphQL", "WebSockets"],
    description: "Scalable APIs and server logic for custom web engines and platforms.",
  },
  {
    category: "Database",
    tools: ["PostgreSQL", "Redis", "Prisma"],
    description: "Reliable data storage with optimized queries and caching.",
  },
  {
    category: "Infrastructure",
    tools: ["Vercel", "Docker", "AWS", "CI/CD"],
    description: "Cloud-native deployments with auto-scaling, monitoring, and zero-downtime releases.",
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="glow-orb left-1/2 top-20 h-72 w-72 -translate-x-1/2 bg-cyan-500/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Stack"
            title="Built With"
            highlight="Modern Tools"
            description="Proven technologies chosen for speed, reliability, and long-term maintainability."
          />
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="gradient-border flex flex-col items-center gap-3 rounded-2xl p-6"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl text-lg font-bold text-slate-900"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-slate-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Build"
            description="A focused web stack — no unnecessary complexity, no vendor lock-in."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {stackDetails.map((stack) => (
              <div key={stack.category} className="gradient-border rounded-2xl p-8">
                <h3 className="text-lg font-bold text-slate-900">{stack.category}</h3>
                <p className="mt-3 text-sm text-slate-500">{stack.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 gradient-border rounded-2xl p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold text-slate-900">Deployed on Vercel</h3>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              We deploy on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-700 hover:text-cyan-600"
              >
                Vercel
              </a>{" "}
              for global CDN, automatic SSL, and seamless CI/CD — so your site or engine is fast everywhere.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact">Start Your Project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
