import Link from 'next/link';

const projectMatrix = [
  {
    id: "01",
    name: "Do Or Die ",
    description: "Most people don’t need more motivation. They need less friction. Do or Die is built to make starting easier, reduce resistance, and increase repetitions — because progress comes from showing up and doing the work, again and again.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    productionUrl: "https://do-o-rdie.vercel.app/"
  },
  {
    id: "02",
    name: "Myocast",
    description: "A highly optimized, dark aesthetic typography dashboard engineered to house developer telemetry and local writing systems.",
    stack: ["Next.js", "MDX", "Vercel"],
    productionUrl: "https://lovnexora.xyz"
  }
];

export default function ProjectsDashboard() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800">
      <div>
        <div className="mb-16">
          <Link href="/" className="text-xs text-neutral-600 hover:text-white transition-colors">
            ← Back to Index
          </Link>
        </div>

        <header className="mb-16">
          <h1 className="text-3xl font-bold text-white tracking-tight">Initializing Future</h1>
        </header>

        <section className="grid grid-cols-1 gap-8">
          {projectMatrix.map((project) => (
            <div 
              key={project.id} 
              className="border border-neutral-900 bg-[#010101] p-8 rounded hover:border-neutral-700 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">Project {project.id}</span>
                  <h2 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                    {project.name}
                  </h2>
                </div>
                <a 
                  href={project.productionUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-neutral-400 hover:text-white transition-colors border border-neutral-800 px-3 py-1.5 rounded bg-[#030303]"
                >
                  Live Production ↗
                </a>
              </div>
              
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-neutral-950 border border-neutral-900 text-neutral-500 px-2.5 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <footer className="mt-24 pt-8 border-t border-neutral-950 text-xs text-neutral-600">
        <span>Production Catalog</span>
      </footer>
    </main>
  );
}