import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPosts, formatDate } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.summary };
}

export default async function Post({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return (
    <article className="prose">
      <h1 className="page">{post.meta.title}</h1>
      <p className="muted">{formatDate(post.meta.date)}</p>
      <MDXRemote source={post.content} />
    </article>
  );
}
