import Link from "next/link";
import { getPosts, formatDate } from "@/lib/posts";

export default function PostList({ limit }: { limit?: number }) {
  const posts = getPosts().slice(0, limit);
  if (!posts.length) return <p className="muted">Nothing published yet.</p>;
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.slug} className="row">
          <Link className="u" href={`/blog/${p.slug}`}>{p.title}</Link>
          <span>{formatDate(p.date)}</span>
        </li>
      ))}
    </ul>
  );
}
