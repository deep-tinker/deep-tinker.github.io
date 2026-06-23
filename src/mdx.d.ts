declare module "*.mdx" {
  import type { ComponentType } from "react";
  /** Frontmatter exported by remark-mdx-frontmatter (name: "frontmatter"). */
  export const frontmatter: {
    title?: string;
    date?: string;
    summary?: string;
    slug?: string;
    tag?: string;
    [key: string]: unknown;
  };
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}
