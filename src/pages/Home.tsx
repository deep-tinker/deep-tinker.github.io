import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
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
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
