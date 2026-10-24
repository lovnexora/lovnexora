import { projects } from "@/lib/data";

export default function ProjectList({ limit }: { limit?: number }) {
  return (
    <ul>
      {projects.slice(0, limit).map((p) => (
        <li key={p.name} className="proj">
          <a className="u" href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a>
          {p.live && <> <a className="u" href={p.live} target="_blank" rel="noopener noreferrer">live</a></>}
          <p>{p.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
