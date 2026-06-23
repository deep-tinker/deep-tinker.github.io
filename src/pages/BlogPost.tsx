import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../lib/posts";

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <main className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-grotesk text-4xl font-black uppercase">
            Post not found
          </h1>
          <Link
            to="/blog"
            className="brutalist-btn inline-block mt-6 px-5 py-2 text-black uppercase text-sm"
          >
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const Body = post.Component;

  return (
    <main className="min-h-screen pt-28 pb-24 px-6">
      <article className="max-w-2xl mx-auto">
        <Link
          to="/blog"
          className="font-mono font-black uppercase text-xs tracking-widest underline"
        >
          ← Back to blog
        </Link>

        <header className="mt-6 mb-10 border-b-4 border-black pb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono font-black uppercase text-[10px] tracking-widest bg-accent px-2 py-1">
              {post.tag}
            </span>
            <time className="font-mono text-xs uppercase tracking-wider opacity-70">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="font-grotesk text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            {post.title}
          </h1>
        </header>

        <div className="blog-prose">
          <Body />
        </div>

        <footer className="mt-14 pt-6 border-t-4 border-black">
          <Link
            to="/blog"
            className="brutalist-btn inline-block px-5 py-2 text-black uppercase text-sm"
          >
            ← Back to blog
          </Link>
        </footer>
      </article>
    </main>
  );
}
