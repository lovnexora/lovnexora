import { site } from "@/lib/data";

export default function EmailButton({ label = "Email me" }: { label?: string }) {
  return (
    <a className="cta" href={`mailto:${site.email}?subject=${encodeURIComponent("Hello Lov")}`}>
      {label}
    </a>
  );
}
