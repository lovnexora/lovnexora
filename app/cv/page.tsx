import Link from 'next/link';

export default function ProfileCV() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800">
      <div>
        <div className="mb-16">
          <Link href="/" className="text-xs text-neutral-600 hover:text-white transition-colors">
            ← Back to Index
          </Link>
        </div>

        <section className="space-y-12">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Technology</h1>
          </div>

          <div className="space-y-8 text-base leading-relaxed">
            <div className="space-y-2">
              <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Overview</span>
              <p className="text-neutral-400">
                Independent framework developer focused on the intersection of deep automation, localized AI tools, and predictive logic systems. Optimizing code structures to eliminate standard interface overhead.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Core Architecture Stack</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-400 max-w-xl pt-2 text-sm">
                <div>• Architecture: Next.js / React</div>
                <div>• Languages: TypeScript / Python</div>
                <div>• Intelligence: Ollama / OpenAI Core API</div>
                <div>• Infrastructure: Git / Tailwind CSS / Edge</div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Target Focus</span>
              <p className="text-neutral-400">
                Engineering multi-agent viral automation architectures, running high-accuracy predictive quantitative tests, and deploying optimized micro-services that run seamlessly across low-latency networks.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-24 pt-8 border-t border-neutral-950 text-xs text-neutral-600">
        <span>Curriculum Vitae</span>
      </footer>
    </main>
  );
}