import type { Metadata } from "next";
import PostList from "@/components/PostList";

export const metadata: Metadata = { title: "Writing" };

export default function Blog() {
  return (
    <>
      <h1 className="page">Writing</h1>
      <PostList />
    </>
  );
}
