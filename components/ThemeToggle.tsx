"use client";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme"
      aria-label="Switch theme"
      onClick={() => {
        const r = document.documentElement;
        const dark = r.dataset.theme
          ? r.dataset.theme === "dark"
          : matchMedia("(prefers-color-scheme: dark)").matches;
        const next = dark ? "light" : "dark";
        r.dataset.theme = next;
        try { localStorage.setItem("theme", next); } catch {}
      }}
    >
      <FiMoon className="ico-moon" size={18} aria-hidden="true" />
      <FiSun className="ico-sun" size={18} aria-hidden="true" />
    </button>
  );
}
