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
        <div className="content">
          <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-[var(--action)] rounded text-white hover:bg-gray-300">
            ←
          </button>
          <img className="w-full h-96 object-cover" src={post.image} />
          <h1 className="text-7xl md:text-9xl">{post.title}</h1>
          <p>{post.content}</p>
        </div>
      </section>
    </main>
  );
}
