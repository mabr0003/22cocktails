import BlogPost from "../components/blogPost";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <main>
      <section>
        <div className="content py-20">
          <div>
            <h1 className="text-7xl md:text-9xl">Vores Blog</h1>
            <h2>Læs om nyheder, guides og lækre opskrifter.</h2>
          </div>
        </div>

        <div className="content py-10">
          <ul className="flex flex-col gap-10 md:grid grid-cols-3">
            {posts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
