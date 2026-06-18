export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-[80px] md:pt-[120px] overflow-hidden px-gutter grid-bg">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
        {/* Left content */}
        <div className="md:col-span-8 z-10">
          <span className="inline-block px-3 py-1 border-2 border-black bg-accent text-black font-black uppercase text-xs md:text-sm mb-4 md:mb-6">
            Based in Bangalore, India
          </span>
          <h1 className="font-grotesk text-[38px] sm:text-[52px] md:text-[80px] lg:text-[120px] leading-[0.9] font-black tracking-[-0.03em] md:tracking-[-0.05em] text-black mb-6 md:mb-8 uppercase">
            Software Engineer. <br />
            <span className="bg-black text-white px-2">Builder. Scaler.</span>
          </h1>
          <p className="font-grotesk text-base md:text-xl text-black max-w-[600px] mb-8 md:mb-12 font-bold border-l-4 md:border-l-8 border-black pl-4 md:pl-6">
            Crafting high-performance systems and intuitive digital experiences
            with a focus on scalability and elegant code.
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4 md:gap-6">
            <a
              className="brutalist-btn px-6 md:px-10 py-3 md:py-5 uppercase font-black text-base md:text-lg text-black"
              href="#work"
            >
              View Selected Works
            </a>
            <a
              className="brutalist-card px-6 md:px-10 py-3 md:py-5 uppercase font-black text-base md:text-lg bg-white text-black"
              href="#about"
            >
              My Journey
            </a>
          </div>
        </div>

        {/* Right visual — desktop only */}
        <div className="md:col-span-4 hidden md:block">
          <div className="brutalist-card aspect-square bg-accent flex items-center justify-center p-8 rotate-3">
            <span className="material-symbols-outlined text-[120px] text-black">
              terminal
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator — hide on very small screens */}
      <div className="hidden sm:flex absolute bottom-10 right-6 md:right-10 flex-col items-center gap-2 text-black border-4 border-black p-3 md:p-4 bg-accent">
        <span className="font-mono text-[10px] md:text-[12px] uppercase font-black">
          Scroll
        </span>
        <span className="material-symbols-outlined animate-bounce text-base md:text-2xl">
          arrow_downward
        </span>
      </div>
    </section>
  );
}
