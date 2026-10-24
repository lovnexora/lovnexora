"use client";
import { useEffect, useRef } from "react";

export default function ScrollEnd({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);
  return <div className="gh-wrap" ref={ref}>{children}</div>;
}