"use client";

import { heroVideo } from "@/lib/data";

export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroVideo.poster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(6,182,212,0.18)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,_rgba(139,92,246,0.14)_0%,_transparent_50%)]" />
    </div>
  );
}
