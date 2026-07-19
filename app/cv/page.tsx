
import { TalkToMeButton } from '@/components/TalkToMe';
import Link from 'next/link';

export default function ProfileCV() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800">
      <div>
        {/* TOP NAVIGATION */}
        <div className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-xs text-neutral-600 hover:text-white transition-colors">
            ← Back to Index
          </Link>
          <span className="text-xs text-neutral-600">status: building</span>
          <TalkToMeButton />
        </div>
        
        {/* HERO SECTION */}
        <section className="mb-20">
          <div className="mb-6">
            <img
              src="/lov_photo.jpg"        
              alt="Lov Nexora"
              className="w-24 h-24 rounded-full object-cover border border-neutral-800"
            />
          </div>
          <div className="text-xs text-emerald-500 font-bold tracking-widest uppercase mb-3">
            Programmer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Lov Nexora
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed max-w-xl">
            Freshman studying Economics, Mathematics &amp; Statistics. Self-taught builder
            in AI/ML and web dev — I learn by shipping, not by waiting to be ready.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-xl text-sm">
            <div>
              <div className="text-white font-bold text-lg">3</div>
              <div className="text-neutral-500 text-xs uppercase tracking-wide">Live products</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">85%</div>
              <div className="text-neutral-500 text-xs uppercase tracking-wide">ML accuracy</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">19</div>
              <div className="text-neutral-500 text-xs uppercase tracking-wide">GitHub stars</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">120+</div>
              <div className="text-neutral-500 text-xs uppercase tracking-wide">Service hours</div>
            </div>
          </div>
        </section>

        {/* OVERVIEW & LOGS */}
        <section className="space-y-12">
          {/* OVERVIEW */}
          <div className="space-y-2">
            <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Overview</span>
            <p className="text-neutral-400 leading-relaxed">
              I sit at the intersection of two worlds that don't usually talk to each other:
              quantitative economics and applied AI. My degree gives me the math underneath
              models most people only use as black boxes. My real education has been building
              things in public — two deployed products, an early-stage startup that taught me
              more by failing than most courses teach by succeeding, and a habit of picking
              up whatever tool a problem actually needs.
            </p>
          </div>

          {/* BUILD LOG */}
          <div className="space-y-6">
            <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Build Log</span>

            {/* Project 1 */}
            <div className="border border-neutral-900 rounded-lg p-6 space-y-2">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="text-white font-bold">Do or Die</h3>
                <span className="text-xs text-neutral-600 uppercase tracking-wide">Deployed · Vercel</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                A hardcore productivity app built on a simple idea: deadlines without real
                stakes don't work. Built the full frontend solo; backend and database are the
                current build phase. No-frills accountability, not another to-do list.
              </p>
              <div className="text-xs text-neutral-600 pt-1">React · Next.js · Tailwind</div>
            </div>

            {/* Project 2 */}
            <div className="border border-neutral-900 rounded-lg p-6 space-y-2">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="text-white font-bold">Stroke Risk Predictor</h3>
                <span className="text-xs text-neutral-600 uppercase tracking-wide">Deployed · Streamlit</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                ML model predicting stroke risk from patient health data. Tested multiple
                algorithms before landing on the best performer at ~85% accuracy, wrapped in
                a clean Streamlit interface so the model is actually usable, not just a notebook.
              </p>
              <div className="text-xs text-neutral-600 pt-1">Python · Scikit-learn · Pandas · Streamlit</div>
            </div>

            {/* Project 3 */}
            <div className="border border-neutral-900 rounded-lg p-6 space-y-2">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="text-white font-bold">Full Stack Money Tracker</h3>
                <span className="text-xs text-neutral-600 uppercase tracking-wide">Deployed · Vercel (monorepo)</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                A high-performance financial ledger designed to track personal capital with zero friction. It uses an active-state serverless connection layer to completely bypass traditional cloud execution bottlenecks, providing instant data delivery and resilient record updates on an entirely stateless architecture.
              </p>
              <div className="text-xs text-neutral-600 pt-1">MongoDB · Express.js · React · Node.js</div>
            </div>
          </div>

          {/* STACK */}
          <div className="space-y-2">
            <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Stack</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-400 max-w-xl pt-2 text-sm">
              <div>• AI/ML: Deep Learning, NLP, Gen AI, modern AI tooling</div>
              <div>• Languages: Python, JavaScript</div>
              <div>• Web: React, Next.js, Node.js, HTML/CSS</div>
              <div>• Data: NumPy, Pandas, Matplotlib, Seaborn, MySQL</div>
            </div>
          </div>

          {/* FIELD NOTES */}
          <div className="space-y-6">
            <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Field Notes</span>

            <div className="space-y-1">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="text-white font-bold text-sm">Founder &amp; Team Lead — Solar Startup</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Led a team to win school seed funding for a solar products venture. Paused it
                myself once workload and internal role conflicts made it clear the team
                wasn't aligned enough to execute well — a leadership call, not a quiet fade-out.
                The clearest lesson I've had yet: a good idea with seed money still needs the
                right team structure to survive.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-white font-bold text-sm">Intern — Hyundai</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                120+ hours inside a large-scale corporate environment, early exposure to how
                real organizations operate at scale.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-white font-bold text-sm">NSS — Community Service</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                120+ hours running awareness campaigns and teaching sessions through the
                National Service Scheme.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="mt-24 pt-8 border-t border-neutral-950 text-xs text-neutral-600 flex justify-between flex-wrap gap-2">
        <span>Curriculum Vitae</span>
        <span>Open to collaboration</span>
      </footer>
    </main>
  );
}

