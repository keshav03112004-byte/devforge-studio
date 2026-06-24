type LogoMarkProps = {
  className?: string;
  size?: number;
};

export default function LogoMark({ className = "", size = 40 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nb-mark-cyan" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="nb-mark-violet" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="nb-mark-mid" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#6366f1" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <path d="M5 4H15V11H9V30H5V4Z" fill="url(#nb-mark-cyan)" />
      <path d="M9 11L29 30H24L9 15V11Z" fill="url(#nb-mark-mid)" />
      <path d="M21 4H35V30H29V11H21V4Z" fill="url(#nb-mark-violet)" />
    </svg>
  );
}
