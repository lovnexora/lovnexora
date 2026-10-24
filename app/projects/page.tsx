import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <h1 className="page">Projects</h1>
      <ProjectList />
      <a className="more" href="https://github.com/lovnexora?tab=repositories" target="_blank" rel="noopener noreferrer">
        All repositories on GitHub
      </a>
    </>
  );
}
