import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { marked } from 'marked'; // 1. Added Markdown compiler import

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
  
  // 2. Compile the raw markdown string into standard clean HTML
  const parsedHtml = await marked.parse(cleanBody);
  
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

        {/* 3. Upgraded Rich Text Body Rendering Engine with clear legibility styling */}
        <article 
          className="text-base leading-relaxed text-neutral-200 max-w-2xl
                     [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:block
                     [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:block
                     [&_a]:text-emerald-400 [&_a]:underline hover:[&_a]:text-emerald-300
                     [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-4 [&_li]:my-1"
          dangerouslySetInnerHTML={{ __html: parsedHtml }}
        />
      </div>

      <footer className="mt-24 pt-8 border-t border-neutral-950 text-xs text-neutral-600">
        <span>End of Entry</span>
      </footer>
    </main>
  );
}