import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { TalkToMeButton } from '@/components/TalkToMe';
import { MailIcon } from '@/components/TalkToMe';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-between selection:bg-emerald-500/20">
      
      {/* Top Section */}
      <div className="space-y-20">
        
        {/* Massive Focal Name Section */}
        <header className="flex items-start justify-between gap-6">
          <div className="space-y-6">
            {/* Pulls dynamically from --text-primary */}
            <h1 className="text-5xl font-bold font-mono tracking-tighter md:text-6xl" style={{ color: 'var(--text-primary)' }}>
              Lov Nexora.
            </h1>
            <p className="text-lg text-emerald-500 font-mono font-medium max-w-xl leading-relaxed">
              Building the future I want to live in,
              Don't wait for perfect moment create one.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <TalkToMeButton />
          </div>
        </header>

        {/* Clean Manifesto */}
        <section className="max-w-2xl">
          <p className="text-base leading-relaxed font-mono" style={{ color: 'var(--text-secondary)' }}>
            I'm a computer programmer. I spend most of my time thinking about ideas, building things, and getting lost in questions that probably don't matter until they do. I've always been drawn to technology, science fiction, and the feeling of making something from nothing. I don't say much, but I build a lot. Most of the things I create start as something I wish already existed.
          </p>
        </section>

        {/* Mature, Large Navigation Layout */}
        <nav className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          
          {/* Profile & CV */}
          <Link 
            href="/cv" 
            className="group p-6 rounded border transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              borderColor: 'var(--border-color)' 
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium group-hover:text-emerald-500 transition-colors text-base" style={{ color: 'var(--text-primary)' }}>
                Profile & CV
              </span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-500 transition-colors" />
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Background, core tech stack, and long-term engineering objectives.
            </p>
          </Link>

          {/* Deployments */}
          <Link 
            href="/projects" 
            className="group p-6 rounded border transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              borderColor: 'var(--border-color)' 
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium group-hover:text-emerald-500 transition-colors text-base" style={{ color: 'var(--text-primary)' }}>
                Deployments
              </span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-500 transition-colors" />
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Active software tools, automation layers, and production code bases.
            </p>
          </Link>

          {/* Writing Vault */}
          <Link 
            href="/blog" 
            className="group p-6 rounded border transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              borderColor: 'var(--border-color)' 
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium group-hover:text-emerald-500 transition-colors text-base" style={{ color: 'var(--text-primary)' }}>
                Writing Vault
              </span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-500 transition-colors" />
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Technical insights, research breakthroughs, and design logs.
            </p>
          </Link>
        </nav>
      </div>

      {/* Footer Alignment Framework */}
<footer className="mt-20 pt-8 border-t flex justify-between items-center font-mono text-xs" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
  <div className="flex gap-6 items-center">
    <a href="https://github.com/lovnexora" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 dark:hover:text-white transition-colors" aria-label="GitHub">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    </a>
    
    <a href="https://x.com/lovnexora" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 dark:hover:text-white transition-colors" aria-label="X">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>

    <a href="https://linkedin.com/in/lovnexora" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 dark:hover:text-white transition-colors" aria-label="LinkedIn">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>

    <a href="https://lovnexora.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 dark:hover:text-white transition-colors" aria-label="Substack">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.881H22.54v2.834H1.46v-2.834zm0 5.474h21.078V24L12 18.869 1.46 24v-7.645z"/>
      </svg>
    </a>

    <a href="https://www.instagram.com/lovnexora" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 dark:hover:text-white transition-colors" aria-label="Instagram">
      <svg className="w-5 h-5 stroke-current fill-none font-bold" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>

    <a href="https://youtube.com/@lovnexora" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 dark:hover:text-white transition-colors" aria-label="YouTube">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>

    <div className="hover:text-emerald-500 dark:hover:text-white transition-colors">
      <MailIcon />
    </div>
  </div>

  <span className="opacity-60">(c) 2026</span>
</footer>

    </main>
  );
}