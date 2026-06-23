import { useState } from "react";
import { Link } from "react-router-dom";

// Section links point at the home page anchors with a leading "/" so they work
// from any route (e.g. from /blog they navigate home, then scroll).
const links = [
  { label: "Work", href: "/#work", internal: false },
  { label: "About", href: "/#about", internal: false },
  { label: "Skills", href: "/#skills", internal: false },
  { label: "Blog", href: "/blog", internal: true },
  { label: "Contact", href: "/#contact", internal: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-black font-black uppercase font-mono text-sm hover:bg-accent px-2 py-1 transition-colors";
  const mobileClass =
    "block px-6 py-4 border-b-2 border-black font-black uppercase font-mono text-sm hover:bg-accent transition-colors";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div className="flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="font-grotesk text-base md:text-xl text-black uppercase tracking-tighter font-black no-underline"
        >
          Pragati Ranjan
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.internal ? (
              <Link key={l.href} className={linkClass} to={l.href}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} className={linkClass} href={l.href}>
                {l.label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden border-4 border-black p-1 font-black bg-white leading-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {open ? "close" : "menu"}
            </span>
          </button>

          <a
            href="/#contact"
            className="brutalist-btn px-4 md:px-6 py-2 uppercase font-black text-xs md:text-sm text-black"
          >
            Quick Connect
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t-4 border-black bg-white">
          {links.map((l) =>
            l.internal ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={mobileClass}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={mobileClass}
              >
                {l.label}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
}
