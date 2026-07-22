import Link from 'next/link';
import { TalkToMeButton } from '@/components/TalkToMe';

const projectMatrix = [
  {
    id: "01",
    name: "Do Or Die ",
    description: "Most people don’t need more motivation. They need less friction. Do or Die is built to make starting easier, reduce resistance, and increase repetitions — because progress comes from showing up and doing the work, again and again.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "supabase", "full stack"],
    productionUrl: "https://do.lovnexora.xyz"
  },
  {
    id: "02",
    name: "Myocast",
    description: "A highly optimized, dark aesthetic typography dashboard engineered to house developer telemetry and local writing systems.",
    stack: ["machine learning", "python", "streamlit"],
    productionUrl: "https://myocast-lpsemmtamkhgjuazahuuxz.streamlit.app/"
  },
  {
    id: "03",
    name: "FinUp",
    description: "A high-performance financial ledger designed to track personal capital with zero friction. It uses an active-state serverless connection layer to completely bypass traditional cloud execution bottlenecks, providing instant data delivery and resilient record updates on an entirely stateless architecture.",
    stack: ["MongoDB Atlas", "Express.js", "React.js", "Node.js"],
    productionUrl: "https://finup-client.vercel.app"
  },

  {
    id: "04",
    name: "Curated Library",
    description: "A Library where you can store your personal favourite things and look at those whenever you want whether books, articles, videos etc. you can track them if you have completed them or those are in queue.",
    stack: ["supabase", "next.js", "React.js", "Node.js"],
    productionUrl: "https://read.lovnexora.xyz"
  }

];

export default function ProjectsDashboard() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800 custom-main-layout">
      <div>
        <div className="mb-16 flex items-center justify-between w-full">
          <Link href="/" className="text-xs custom-muted hover:text-emerald-500 transition-colors">
            ← Back to Index
          </Link>
          <TalkToMeButton />
        </div>

        <header className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight custom-header">Initializing Future</h1>
        </header>

        <section className="grid grid-cols-1 gap-8">
          {projectMatrix.map((project) => (
            <div 
              key={project.id} 
              className="border p-8 rounded transition-all group custom-card hover:border-neutral-500"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">Project {project.id}</span>
                  <h2 className="text-lg font-medium transition-colors custom-header">
                    {project.name}
                  </h2>
                </div>
                <a 
                  href={project.productionUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs border px-3 py-1.5 rounded transition-colors custom-pill"
                >
                  Live Production ↗
                </a>
              </div>
              
              <p className="text-sm leading-relaxed mb-6 custom-main-layout">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs border px-2.5 py-1 rounded custom-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <footer className="mt-24 pt-8 border-t text-xs border-neutral-800 custom-muted">
        <span>Production Catalog</span>
      </footer>
    </main>
  );
}