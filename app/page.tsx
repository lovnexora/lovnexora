import Link from "next/link";
import EmailButton from "@/components/EmailButton";
import Social from "@/components/Social";
import ProjectList from "@/components/ProjectList";
import PostList from "@/components/PostList";
import GithubGraph from "@/components/GithubGraph";
import { cvPoints } from "@/lib/data";
import { rich } from "@/lib/rich";

export default function Home() {
  return (
    <>
      <header>
        <p className="name">Lov Nexora</p>
        <h1>I build AI software, and I like knowing why it broke.</h1>
        <p className="lead">
          {rich("Self-taught developer working on **agents, AI infrastructure and developer tools**. **Looking for my first software or AI engineering role**, remote or onsite.")}
        </p>
        <Social />
        <EmailButton />
      </header>

      <section>
        <ul className="bullets">
          {cvPoints.map((p) => <li key={p}>{rich(p)}</li>)}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ProjectList limit={4} />
        <Link className="more" href="/projects">all projects →</Link>
      </section>

      <section>
        <h2>Writing</h2>
        <PostList limit={5} />
        <Link className="more" href="/blog">all writing →</Link>
      </section>

      <section>
        <h2>GitHub</h2>
        <GithubGraph />
      </section>
    </>
  );
}
