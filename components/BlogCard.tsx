import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-AR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link className="post-card" href={`/blog/${post.slug}`}>
      <div className="post-card-top">
        <code>{formatDate(post.date)}</code>
        <span>{post.readMinutes} min</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="project-tags">
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
}
