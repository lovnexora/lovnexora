import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { TalkToMeButton } from '@/components/TalkToMe';

// Helper function to read local files securely
function getBlogPosts() {
  const contentDir = path.join(process.cwd(), 'content');
  
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  
  return files.map((file) => {
    const filePath = path.join(contentDir, file);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const slug = file.replace('.mdx', '');
    
    // Quick custom metadata extractor to bypass heavy packages
    const titleMatch = rawContent.match(/title:\s*"(.*?)"/);
    const snippetMatch = rawContent.match(/snippet:\s*"(.*?)"/);
    const dateMatch = rawContent.match(/date:\s*"(.*?)"/);
    
    return {
      slug,
      title: titleMatch ? titleMatch[1] : slug,
      snippet: snippetMatch ? snippetMatch[1] : '',
      date: dateMatch ? dateMatch[1] : 'Unknown',
    };
  });
}

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800/30">
      <div>
        {/* Navigation */}
        <div className="mb-12 flex items-center justify-between w-full">
          <Link href="/" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors">&lt; return_to_root</Link>
          <TalkToMeButton />
        </div>

        <header className="mb-12">
          <h1 className="text-xl font-medium tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
            compiled_writing.log
          </h1>
          <p className="text-xs uppercase tracking-wider text-neutral-500">Stream status: Online</p>
        </header>

        {/* Post Grid Stream */}
        <section className="space-y-10">
          {posts.length === 0 ? (
            <p className="text-xs text-neutral-500">[!] No system logs found in /content directory.</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group border-b pb-6" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex justify-between items-baseline mb-2">
                  <h2 className="text-sm font-medium group-hover:text-emerald-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {post.title}
                  </h2>
                  <span className="text-[10px] text-neutral-500 tabular-nums">{post.date}</span>
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {post.snippet}
                </p>
                <Link href={`/blog/${post.slug}`} className="text-xs text-emerald-500 hover:text-emerald-400 font-bold transition-colors">
                  READ_FULL_LOG ➜
                </Link>
              </article>
            ))
          )}
        </section>
      </div>

      <footer className="mt-16 pt-6 border-t text-[10px] flex justify-between" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)', opacity: 0.6 }}>
        <span>LOGS_PARSED // READY</span>
        <span>SYS_v1.0</span>
      </footer>
    </main>
  );
}