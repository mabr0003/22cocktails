"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { posts } from "../../data/posts";

export default function SinglePostPage({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Blog ikke fundet</p>;
  }

  return (
    <main>
      <section>
        <div className="content py-10">
          <button onClick={() => router.back()} className="bg-[var(--action)] py-4 px-5 rounded-full text-4xl text-white cursor-pointer mb-6">
            ←
          </button>
          <div className="flex flex-col gap-6 md:grid grid-cols-2">
            <img className="w-full h-full object-cover order-1" src={post.image} />
            <div>
              <h1 className="text-7xl md:text-9xl">{post.title}</h1>
              <p className="max-w-prose">{post.content}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
