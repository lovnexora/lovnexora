import Link from 'next/link';
import fs from 'fs';
import path from 'path';

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
    <main className="max-w-2xl mx-auto px-6 py-16 min-h-screen flex flex-col justify-between font-mono selection:bg-neutral-800">
      <div>
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/" className="text-xs text-neutral-600 hover:text-emerald-500 transition-colors">&lt; return_to_root</Link>
        </div>

        <header className="mb-12">
          <h1 className="text-xl font-medium text-white tracking-tight mb-2">compiled_writing.log</h1>
          <p className="text-xs text-neutral-600 uppercase tracking-wider">Stream status: Online</p>
        </header>

        {/* Post Grid Stream */}
        <section className="space-y-10">
          {posts.length === 0 ? (
            <p className="text-xs text-neutral-600">[!] No system logs found in /content directory.</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group border-b border-neutral-950 pb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h2 className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-[10px] text-neutral-600 tabular-nums">{post.date}</span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  {post.snippet}
                </p>
                <Link href={`/blog/${post.slug}`} className="text-xs text-emerald-600 hover:text-emerald-400 font-bold transition-colors">
                  READ_FULL_LOG ➜
                </Link>
              </article>
            ))
          )}
        </section>
      </div>

      <footer className="mt-16 pt-6 border-t border-neutral-950 text-[10px] text-neutral-700 flex justify-between">
        <span>LOGS_PARSED // READY</span>
        <span>SYS_v1.0</span>
      </footer>
    </main>
  );
}