import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Lov Nexora, home">
      <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
        <rect className="logo-bg" width="32" height="32" rx="7" />
        <g fill="none" strokeWidth="2.6">
          <path className="logo-fg" d="M8.5 9V23H14.5" />
          <path className="logo-fg" d="M18 9V23M24 9V23" />
        </g>
        <path className="logo-hi" d="M16.7 9H19.6L25.3 23H22.4Z" />
      </svg>
    </Link>
  );
}
