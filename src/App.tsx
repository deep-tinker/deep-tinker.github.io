import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const MARQUEE_TEXT =
  "SYSTEM STABLE /// SCALING REAL-TIME /// IIT GUWAHATI /// DREAM11 /// FOUNDING ENGINEER /// GOLANG SPECIALIST /// 10M+ CONCURRENT USERS /// ";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => {
      const el = section as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(48px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Sticky marquee ticker */}
      <div className="fixed bottom-0 left-0 w-full bg-black py-2 marquee border-t-4 border-accent z-[100]">
        <div className="marquee-content text-accent font-mono font-black uppercase text-xs tracking-widest">
          {MARQUEE_TEXT.repeat(2)}
        </div>
      </div>
    </>
  );
}
