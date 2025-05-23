"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { posts } from "../../data/posts";

export default function SinglePostPage({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <main>
      <section>
        <div className="content py-10">
          <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-[var(--action)] rounded text-white cursor-pointer">
            ←
          </button>
          <div className="flex flex-col gap-6">
            <img className="w-full h-96 object-cover" src={post.image} />
            <h1 className="text-7xl md:text-9xl">{post.title}</h1>
            <p className="max-w-prose">{post.content}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
