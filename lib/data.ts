export const site = {
  name: "Lov Nexora",
  url: "https://lovnexora.xyz",
  // Pick the inbox you actually check
  email: "hello@lovnexora.xyz",
  github: "lovnexora",
  description: "Self-taught developer building at the intersection of AI and software.",
};

export const socials = [
  { label: "GitHub", icon: "github", href: "https://github.com/lovnexora" },
  { label: "X", icon: "x", href: "https://x.com/lovnexora" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/lov-nexora/" },
  { label: "Substack", icon: "substack", href: "https://lovnexora.substack.com" },
  { label: "YouTube", icon: "youtube", href: "https://youtube.com/@lovnexora" },
] as const;

export type Project = { name: string; href: string; blurb: string; live?: string };

export const projects: Project[] = [
  { name: "LeadAudit", href: "https://github.com/lovnexora/leadaudit", blurb: "AI website audits feeding a sales workflow, shipped as a real web app." },
  { name: "self-correcting-multi-agent", href: "https://github.com/lovnexora/self-correcting-multi-agent", blurb: "Agents that evaluate and improve their own work." },
  { name: "Git-Pulse", href: "https://github.com/lovnexora", blurb: "Turns local Git changes into dependency-aware explanations of what changed." },
  { name: "MyoCast", href: "https://github.com/lovnexora/MyoCast", blurb: "A product experiment mixing AI and software." },
];

export const skills = [
  { label: "Languages", value: "Python, JavaScript, TypeScript, SQL" },
  { label: "AI and ML", value: "PyTorch, LLMs, RAG, agents, embeddings" },
  { label: "Software", value: "React, Next.js, Node.js, REST APIs, auth" },
  { label: "Infrastructure", value: "PostgreSQL, Supabase, Docker, Vercel" },
];

// Wrap words in **double asterisks** to highlight them
export const cvPoints = [
  "**Self-taught**, no CS degree. The work is public: read the code, run the projects, check the commits.",
  "Care about the **unglamorous parts**: testing, debugging, Git workflows, documentation, deployment.",
  "Open to **internships, junior roles, startup engineering and AI engineering**.",
];
