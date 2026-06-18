import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function FullBlogPost({ params }: PageProps) {
  // Await the parameters securely to ensure Next.js has resolved the route
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);

  // Safety fallback check
  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8');
  
  // Strip out the metadata frontmatter block cleanly
  const cleanBody = rawContent.replace(/---[\s\S]*?---/, '').trim();
  
  const titleMatch = rawContent.match(/title:\s*"(.*?)"/);
  const title = titleMatch ? titleMatch[1] : 'System Log';

  return (
    <main className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800">
      <div>
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/blog" className="text-xs text-neutral-100 hover:text-white transition-colors">
            ← Back to Writing Vault
          </Link>
        </div>

        {/* Content Header */}
        <header className="mb-10 border-b border-neutral-900 pb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{title}</h1>
        </header>

        {/* Core Text Body Rendering */}
        <article className="text-base leading-relaxed text-neutral-400 whitespace-pre-line space-y-6">
          {cleanBody}
        </article>
      </div>

      <footer className="mt-24 pt-8 border-t border-neutral-950 text-xs text-neutral-600">
        <span>End of Entry</span>
      </footer>
    </main>
  );
}