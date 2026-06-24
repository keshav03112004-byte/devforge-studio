interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
        {highlight && (
          <>
            <br />
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
