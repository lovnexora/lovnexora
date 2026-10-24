import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content", "blog");

export type PostMeta = { slug: string; title: string; date: string; summary?: string };

export const isValidSlug = (s: string) => /^[a-z0-9-]+$/.test(s);

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return { slug, title: data.title as string, date: data.date as string, summary: data.summary as string | undefined, draft: !!data.draft };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map(({ draft, ...rest }) => rest);
}

export function getPost(slug: string) {
  if (!isValidSlug(slug)) return null;
  const file = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.draft) return null;
  return { meta: { slug, title: data.title as string, date: data.date as string, summary: data.summary as string | undefined }, content };
}

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });
