import Link from "next/link";
import LogoMark from "./LogoMark";

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  href?: string | false;
  light?: boolean;
};

export default function Logo({ variant = "full", className = "", href = "/", light = false }: LogoProps) {
  const content = (
    <>
      <LogoMark size={40} className="shrink-0" />
      {variant === "full" && (
        <span className="flex items-baseline gap-1.5">
          <span
            className={`text-base font-bold tracking-[0.18em] sm:text-lg ${
              light ? "text-white" : "text-slate-900"
            }`}
          >
            NEO BLOCK
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-sm font-semibold tracking-wide text-transparent sm:text-base">
            dev
          </span>
        </span>
      )}
    </>
  );

  if (href !== false) {
    return (
      <Link href={href} className={`flex items-center gap-2.5 ${className}`} aria-label="Neo Block Dev home">
        {content}
      </Link>
    );
  }

  return <div className={`flex items-center gap-2.5 ${className}`}>{content}</div>;
}
