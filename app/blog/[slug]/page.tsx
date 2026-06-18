import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export default function FullBlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);

  // Fallback protection if the user types an invalid web link
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8');
  
  // Strip out the top metadata block so it doesn't leak into your content body
  const cleanBody = rawContent.replace(/---[\s\S]*?---/, '').trim();
  const titleMatch = rawContent.match(/title:\s*"(.*?)"/);
  const title = titleMatch ? titleMatch[1] : 'System Log';

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800">
      <div>
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/blog" className="text-xs text-neutral-600 hover:text-emerald-500 transition-colors">&lt; return_to_stream</Link>
        </div>

        {/* Content Header */}
        <header className="mb-10 border-b border-neutral-950 pb-6">
          <h1 className="text-xl font-medium text-white tracking-tight mb-2">{title}</h1>
          <p className="text-[10px] text-neutral-600 uppercase">STREAM TYPE: READ_ONLY_LOG</p>
        </header>

        {/* Core Text Body Rendering */}
        <article className="text-sm leading-relaxed text-neutral-400 whitespace-pre-line space-y-4">
          {cleanBody}
        </article>
      </div>

      <footer className="mt-16 pt-6 border-t border-neutral-950 text-[10px] text-neutral-700 flex justify-between">
        <span>EOF // STREAM_END</span>
        <span>LN_CORE</span>
      </footer>
    </main>
  );
}