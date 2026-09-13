import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TitleBar from "@/components/TitleBar";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — 26140070-cpu`, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <TitleBar />
      <article className="post-article shell">
        <Link href="/blog" className="post-back">← Bitácora</Link>
        <h1>{post.title}</h1>
        <div className="post-article-meta">
          <span>{formatDate(post.date)}</span>
          <span>{post.readMinutes} min de lectura</span>
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
