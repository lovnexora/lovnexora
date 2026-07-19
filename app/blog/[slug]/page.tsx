import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { marked } from 'marked'; 

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
  
  // Compile the raw markdown string into standard clean HTML
  const parsedHtml = await marked.parse(cleanBody);
  
  const titleMatch = rawContent.match(/title:\s*"(.*?)"/);
  const title = titleMatch ? titleMatch[1] : 'System Log';

  return (
    <main className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800/30">
      <div>
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/blog" className="text-xs text-emerald-500 hover:text-emerald-400 transition-colors">
            ← Back to Writing Vault
          </Link>
        </div>

        {/* Content Header */}
        <header className="mb-10 border-b pb-6" style={{ borderColor: 'var(--border-color)' }}>
          <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h1>
        </header>

        {/* Dynamic Theme Adaptive Rich Text Body Rendering Engine */}
        <article 
          className="blog-content text-base leading-relaxed max-w-2xl
                     [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:block
                     [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:block
                     [&_a]:text-emerald-500 [&_a]:underline hover:[&_a]:text-emerald-400
                     [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-4 [&_li]:my-1"
          style={{ color: 'var(--text-secondary)' }}
          dangerouslySetInnerHTML={{ __html: parsedHtml }}
        />
      </div>

      <footer className="mt-24 pt-8 border-t text-xs" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)', opacity: 0.5 }}>
        <span>End of Entry</span>
      </footer>
    </main>
  );
}