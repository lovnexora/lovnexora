import { TalkToMeButton } from '@/components/TalkToMe';
import Link from 'next/link';

// =========================================================================
// CONFIGURATION MATRIX: EDIT THIS AREA ONLY TO UPDATE YOUR PROFILE DATA
// =========================================================================
const PROFILE_DATA = {
  name: "Lov Nexora",
  title: "Programmer",
  photoUrl: "/lov_photo.jpg",
  resumePdfUrl: "/lov_nexora_resume.pdf", // Place your resume PDF inside the 'public/' directory
  status: "building",
  tagline: "Freshman studying Economics, Mathematics & Statistics. Self-taught builder in AI/ML and web dev — I learn by shipping, not by waiting to be ready.",
  
  metrics: [
    { label: "Live products", value: "3" },
    { label: "ML accuracy", value: "85%" },
    { label: "GitHub stars", value: "19" },
    { label: "Service hours", value: "120+" }
  ],
  
  overview: "I sit at the intersection of two worlds that don't usually talk to each other: quantitative economics and applied AI. My degree gives me the math underneath models most people only use as black boxes. My real education has been building things in public — two deployed products, an early-stage startup that taught me more by failing than most courses teach by succeeding, and a habit of picking up whatever tool a problem actually needs.",
  
  stack: [
    "AI/ML: Deep Learning, NLP, Gen AI, modern AI tooling",
    "Languages: Python, JavaScript",
    "Web: React, Next.js, Node.js, HTML/CSS",
    "Data: NumPy, Pandas, Matplotlib, Seaborn, MySQL"
  ],

  buildLogs: [
    {
      title: "Do or Die",
      platform: "Deployed · Vercel",
      description: "A hardcore productivity app built on a simple idea: deadlines without real stakes don't work. Built the full frontend solo; backend and database are the current build phase. No-frills accountability, not another to-do list.",
      tools: "React · Next.js · Tailwind"
    },
    {
      title: "Stroke Risk Predictor",
      platform: "Deployed · Streamlit",
      description: "ML model predicting stroke risk from patient health data. Tested multiple algorithms before landing on the best performer at ~85% accuracy, wrapped in a clean Streamlit interface so the model is actually usable, not just a notebook.",
      tools: "Python · Scikit-learn · Pandas · Streamlit"
    },
    {
      title: "Full Stack Money Tracker",
      platform: "Deployed · Vercel (monorepo)",
      description: "A high-performance financial ledger designed to track personal capital with zero friction. It uses an active-state serverless connection layer to completely bypass traditional cloud execution bottlenecks, providing instant data delivery and resilient record updates on an entirely stateless architecture.",
      tools: "MongoDB · Express.js · React · Node.js"
    },

    {
      title: "Curated Library",
      platform: "Deployed · Vercel (monorepo)",
      description: "A Library where you can store your personal favourite things and look at those whenever you want whether books, articles, videos etc. you can track them if you have completed them or those are in queue.",
      tools: "SupaBase · Next.js · React · Node.js"
    }

  ],

  fieldNotes: [
    {
      role: "Founder & Team Lead — Solar Startup",
      description: "Led a team to win school seed funding for a solar products venture. Paused it myself once workload and internal role conflicts made it clear the team wasn't aligned enough to execute well — a leadership call, not a quiet fade-out. The clearest lesson I've had yet: a good idea with seed money still needs the right team structure to survive."
    },
    {
      role: "Intern — Hyundai",
      description: "120+ hours inside a large-scale corporate environment, early exposure to how real organizations operate at scale."
    },
    {
      role: "NSS — Community Service",
      description: "120+ hours running awareness campaigns and teaching sessions through the National Service Scheme."
    }
  ]
};

// =========================================================================
// RUNTIME ARCHITECTURE LAYER (Do not modify unless changing structure)
// =========================================================================
export default function ProfileCV() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800 custom-main-layout">
      <div>
        {/* TOP NAVIGATION */}
        <div className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-xs custom-muted hover:text-emerald-500 transition-colors">
            ← Back to Index
          </Link>
          <span className="text-xs custom-muted">status: {PROFILE_DATA.status}</span>
          <TalkToMeButton />
        </div>
        
        {/* HERO SECTION */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <img
                src={PROFILE_DATA.photoUrl}        
                alt={PROFILE_DATA.name}
                className="w-24 h-24 rounded-full object-cover border custom-card mb-4"
              />
              <div className="text-xs text-emerald-500 font-bold tracking-widest uppercase mb-2">
                {PROFILE_DATA.title}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight custom-header">
                {PROFILE_DATA.name}
              </h1>
            </div>
            
            {/* ADVANCED RESUME DOWNLOAD ENGINE */}
            <div>
              <a 
                href={PROFILE_DATA.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs border px-4 py-2 rounded transition-all custom-pill hover:border-emerald-500 hover:text-emerald-500 group"
              >
                <span>View Full Curriculum Vitae</span>
                <span className="ml-2 transform group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>

          <p className="text-base leading-relaxed max-w-xl custom-main-layout">
            {PROFILE_DATA.tagline}
          </p>

          {/* DYNAMIC METRICS GENERATOR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-xl text-sm">
            {PROFILE_DATA.metrics.map((metric, idx) => (
              <div key={idx}>
                <div className="font-bold text-lg custom-header">{metric.value}</div>
                <div className="custom-muted text-xs uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW & LOGS */}
        <section className="space-y-12">
          {/* OVERVIEW */}
          <div className="space-y-2">
            <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Overview</span>
            <p className="leading-relaxed custom-main-layout">
              {PROFILE_DATA.overview}
            </p>
          </div>

          {/* BUILD LOG */}
          <div className="space-y-6">
            <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Build Log</span>

            {PROFILE_DATA.buildLogs.map((log, idx) => (
              <div key={idx} className="border rounded-lg p-6 space-y-2 custom-card">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h3 className="font-bold custom-header">{log.title}</h3>
                  <span className="text-xs uppercase tracking-wide custom-muted">{log.platform}</span>
                </div>
                <p className="text-sm leading-relaxed custom-main-layout">
                  {log.description}
                </p>
                <div className="text-xs pt-1 custom-muted">{log.tools}</div>
              </div>
            ))}
          </div>

          {/* STACK */}
          <div className="space-y-2">
            <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Stack</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl pt-2 text-sm custom-main-layout">
              {PROFILE_DATA.stack.map((item, idx) => (
                <div key={idx}>• {item}</div>
              ))}
            </div>
          </div>

          {/* FIELD NOTES */}
          <div className="space-y-6">
            <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase">Field Notes</span>

            {PROFILE_DATA.fieldNotes.map((note, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="font-bold text-sm custom-header">{note.role}</h3>
                <p className="text-sm leading-relaxed custom-main-layout">
                  {note.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="mt-24 pt-8 border-t text-xs flex justify-between flex-wrap gap-2 custom-muted border-neutral-800{/* or matching theme color style */}">
        <span>Curriculum Vitae</span>
        <span>Open to collaboration</span>
      </footer>
    </main>
  );
}