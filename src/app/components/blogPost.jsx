"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPost({ post }) {
  return (
    <motion.li className="shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <Link className="flex flex-col gap-3 group" href={`/blog/${post.id}`}>
        <img src={post.image} />
        <div className="bg-[var(--secondbg)] px-6 py-4 flex flex-col gap-3">
          <h3 className="text-xl text-center">{post.title}</h3>
          <p>{post.content.slice(0, 120)}..</p>
          <span className="text-center md:opacity-0 md:group-hover:opacity-100 transistion-all duration-150">Læs mere</span>
        </div>
      </Link>
    </motion.li>
  );
}
