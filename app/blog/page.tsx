import type { Metadata } from "next";
import TitleBar from "@/components/TitleBar";
import BlogCard from "@/components/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Bitácora — 26140070-cpu",
  description: "Notas de campo sobre ingeniería inversa, Minecraft modding e inteligencia artificial.",
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <main>
      <TitleBar />
      <header className="page-hero shell">
        <p className="eyebrow"><span>BITÁCORA</span> Notas de campo</p>
        <h1>Lo que aprendo<br />en el camino.</h1>
      </header>
      <section className="section shell" style={{ paddingTop: 0 }}>
        <ScrollReveal className="post-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </ScrollReveal>
      </section>
    </main>
  );
}
