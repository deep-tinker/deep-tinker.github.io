import { footerLinks } from "../data/contact";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-20 bg-white border-t-8 border-black text-center pb-16">
      <div className="max-w-[1200px] mx-auto px-gutter flex flex-col items-center gap-8 md:gap-12">
        <div className="font-grotesk text-[32px] md:text-[48px] leading-[1.1] text-black font-black uppercase bg-accent px-6 md:px-8 py-2">
          Pragati Ranjan
        </div>
        <p className="font-mono text-xs md:text-sm text-black font-black uppercase">
          © {new Date().getFullYear()} Software Engineer Portfolio. Built with
          Brutalist Intentionality.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 border-4 border-black p-3 md:p-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="text-black hover:bg-accent px-3 md:px-4 py-2 transition-colors font-black uppercase font-grotesk text-sm md:text-base"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
