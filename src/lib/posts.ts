import type { ComponentType } from "react";

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  summary: string;
  tag: string; // e.g. "ARTICLE"
  Component: ComponentType<Record<string, unknown>>;
};

export type InteractiveApp = {
  title: string;
  summary: string;
  href: string; // absolute path to a standalone page in /public
  tag: string; // e.g. "INTERACTIVE"
};

type MdxModule = {
  default: ComponentType<Record<string, unknown>>;
  frontmatter?: {
    title?: string;
    date?: string;
    summary?: string;
    slug?: string;
    tag?: string;
  };
};

// Eagerly import every MDX post at build time.
const modules = import.meta.glob<MdxModule>("../content/posts/*.mdx", {
  eager: true,
});

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.mdx$/, "");
}

export const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => {
    const fm = mod.frontmatter ?? {};
    return {
      slug: fm.slug ?? slugFromPath(path),
      title: fm.title ?? slugFromPath(path),
      date: fm.date ?? "1970-01-01",
      summary: fm.summary ?? "",
      tag: fm.tag ?? "ARTICLE",
      Component: mod.default,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// Standalone interactive experiences that live as static pages in /public.
// These are full apps (not MDX), linked from the blog index.
export const apps: InteractiveApp[] = [
  {
    title: "Git From The Inside Out",
    summary:
      "An interactive course that ends with you building your own version-control system. Real SHA-1 hashing, a simulated git terminal, animated diagrams, and runnable code.",
    href: "/blog/git-from-the-inside-out/",
    tag: "INTERACTIVE",
  },
];
