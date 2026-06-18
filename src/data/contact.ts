export interface ContactLink {
  label: string;
  href: string;
  icon: string;
  /** Whether to open in a new tab */
  external: boolean;
  /** Hide from the footer (e.g. phone number) */
  footerOnly?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    label: "pragatiranjan25@gmail.com",
    href: "mailto:pragatiranjan25@gmail.com",
    icon: "✉",
    external: false,
  },
  {
    label: "+91 91133-63402",
    href: "tel:+919113363402",
    icon: "📞",
    external: false,
    footerOnly: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ranjanpg/",
    icon: "in",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/deep-tinker",
    icon: "gh",
    external: true,
  },
  {
    label: "Read.cv",
    href: "https://drive.google.com/file/d/1fcPV7a0-j0SdCQFqz68dJ5cciSE8wch4/view",
    icon: "cv",
    external: true,
  },
];

/** Subset used in the footer — excludes phone number */
export const footerLinks = contactLinks.filter(
  (link) => !link.href.startsWith("tel:"),
);
