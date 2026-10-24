import { site } from "@/lib/data";
import ScrollEnd from "./ScrollEnd";

type Day = { date: string; count: number; level: number };

const API = process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de";

// Cached for 24h: the page rebuilds itself in the background once a day.
async function load(): Promise<Day[] | null> {
  try {
    const res = await fetch(`${API}/v4/${site.github}?y=last`, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const json = await res.json();
    const days = (json.contributions as Day[]) ?? [];
    return days.length ? [...days].sort((a, b) => a.date.localeCompare(b.date)) : null;
  } catch {
    return null;
  }
}

export default async function GithubGraph() {
  const days = await load();
  const profile = `https://github.com/${site.github}`;

  if (!days) {
    return <p className="muted"><a className="u" href={profile}>See my GitHub activity</a></p>;
  }

  const total = days.reduce((sum, d) => sum + d.count, 0);
  const lead = new Date(`${days[0].date}T00:00:00Z`).getUTCDay(); // pad so rows are Sun..Sat
  const cells: (Day | null)[] = [...Array(lead).fill(null), ...days];
  const weeks = Math.ceil(cells.length / 7);
  const size = 11, gap = 3, step = size + gap;
  const w = weeks * step - gap, h = 7 * step - gap;

  return (
    <div>
      <ScrollEnd>
        <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`${total} GitHub contributions in the last year`}>
          {cells.map((d, i) =>
            d ? (
              <rect key={d.date} x={Math.floor(i / 7) * step} y={(i % 7) * step} width={size} height={size} rx={2.5} className={`gh l${d.level}`}>
                <title>{`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}</title>
              </rect>
            ) : null
          )}
        </svg>
      </ScrollEnd>
      <p className="muted gh-cap">
        {total.toLocaleString("en")} contributions in the last year, updated daily.{" "}
        <a className="u" href={profile} target="_blank" rel="noopener noreferrer">@{site.github} on GitHub</a>
      </p>
    </div>
  );
}
