import { Link } from "react-router-dom";
import { posts, apps } from "../lib/posts";

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 grid-bg">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <p className="font-mono font-black uppercase text-xs tracking-widest mb-3">
            // Writing &amp; experiments
          </p>
          <h1 className="font-grotesk text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Blog
          </h1>
          <p className="mt-4 font-grotesk text-lg max-w-2xl">
            Notes on engineering, plus interactive things you can actually play with.
          </p>
        </header>

        {/* Featured interactive apps */}
        {apps.length > 0 && (
          <section className="mb-14">
            <h2 className="font-mono font-black uppercase text-sm tracking-widest mb-5">
              ⚡ Interactive
            </h2>
            <div className="grid gap-6">
              {apps.map((app) => (
                <a
                  key={app.href}
                  href={app.href}
                  className="brutalist-card-accent block p-6 no-underline"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <span className="font-mono font-black uppercase text-[10px] tracking-widest bg-black text-accent px-2 py-1">
                        {app.tag}
                      </span>
                      <h3 className="font-grotesk text-2xl md:text-3xl font-black uppercase tracking-tight mt-3">
                        {app.title}
                      </h3>
                    </div>
                    <span className="brutalist-btn px-5 py-2 text-black uppercase text-sm bg-white">
                      Launch ↗
                    </span>
                  </div>
                  <p className="font-grotesk mt-3 max-w-2xl">{app.summary}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Written posts */}
        <section>
          <h2 className="font-mono font-black uppercase text-sm tracking-widest mb-5">
            ✍️ Posts
          </h2>
          {posts.length === 0 ? (
            <p className="font-mono text-sm">No posts yet — check back soon.</p>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="brutalist-card block p-6 no-underline"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono font-black uppercase text-[10px] tracking-widest bg-accent px-2 py-1">
                      {post.tag}
                    </span>
                    <time className="font-mono text-xs uppercase tracking-wider opacity-70">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h3 className="font-grotesk text-2xl font-black uppercase tracking-tight">
                    {post.title}
                  </h3>
                  <p className="font-grotesk mt-2 max-w-2xl">{post.summary}</p>
                  <span className="inline-block mt-3 font-mono font-black uppercase text-xs underline">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
