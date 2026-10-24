import type { Metadata } from "next";
import { cvPoints, skills } from "@/lib/data";
import EmailButton from "@/components/EmailButton";
import { rich } from "@/lib/rich";

export const metadata: Metadata = { title: "CV" };

export default function CV() {
  return (
    <>
      <h1 className="page">CV</h1>
      <ul className="bullets">
        {cvPoints.map((p) => <li key={p}>{rich(p)}</li>)}
      </ul>
      <div className="skills">
        {skills.map((s) => (
          <p key={s.label}><span>{s.label}</span>{s.value}</p>
        ))}
      </div>
      <p style={{ marginTop: 28 }}>
        {/* Put your PDF at public/cv.pdf */}
        <a className="u" href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download full CV (PDF)</a>
      </p>
      <EmailButton label="Get in touch" />
    </>
  );
}
