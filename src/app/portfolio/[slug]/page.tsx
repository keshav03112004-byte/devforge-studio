import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import BrowserPreview from "@/components/BrowserPreview";
import Button from "@/components/Button";
import { portfolioProjects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  const others = portfolioProjects.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-16">
        <div className="glow-orb -left-20 top-20 h-80 w-80 bg-cyan-500/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
              {project.category}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {project.industry}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">{project.title}</h1>
          <p className="mt-3 text-lg text-cyan-700">{project.tagline}</p>
          <p className="mt-2 text-sm text-slate-500">{project.location}</p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Button>
                Visit Live Site
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </a>
            <Button href="/contact" variant="secondary">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BrowserPreview src={project.image} alt={`${project.title} website`} url={project.url} priority />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Project Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{project.overview}</p>

          <h2 className="mt-14 text-2xl font-bold text-slate-900">What We Built</h2>
          <ul className="mt-6 space-y-4">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                  <Check size={14} />
                </span>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900">More Projects</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="gradient-border rounded-2xl bg-white p-6 transition-all hover:bg-slate-50"
                >
                  <p className="text-xs font-semibold text-cyan-700">{item.category}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
