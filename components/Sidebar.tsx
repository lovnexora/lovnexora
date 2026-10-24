"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/cv", label: "CV" },
];

export default function Sidebar() {
  const path = usePathname();
  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
  return (
    <aside className="sidebar">
      <Logo />
      <nav aria-label="Main">
        {links.map((l) => (
          <Link key={l.href} href={l.href} aria-current={active(l.href) ? "page" : undefined} className={active(l.href) ? "on" : ""}>
            {l.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </aside>
  );
}
