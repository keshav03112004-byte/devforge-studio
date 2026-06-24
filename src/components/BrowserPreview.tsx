import Image from "next/image";

type BrowserPreviewProps = {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
};

export default function BrowserPreview({ src, alt, url, priority = false }: BrowserPreviewProps) {
  const hostname = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="browser-frame group overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-2xl shadow-cyan-500/5 transition-transform duration-500 group-hover:scale-[1.02]">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-200 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="mx-auto flex max-w-[60%] flex-1 items-center justify-center rounded-md bg-slate-100 px-3 py-1">
          <span className="truncate text-[10px] text-slate-500 sm:text-xs">{hostname}</span>
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
      </div>
    </div>
  );
}
