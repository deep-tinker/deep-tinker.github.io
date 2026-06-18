export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-[120px] bg-white border-y-8 border-black"
    >
      <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left sticky column */}
        <div className="md:col-span-5 relative">
          <div className="md:sticky md:top-40">
            <h2 className="font-grotesk text-[32px] md:text-[48px] leading-[1.1] font-black text-black mb-6 uppercase italic bg-accent inline-block px-4">
              The Narrative
            </h2>
            <div className="brutalist-card overflow-hidden aspect-[4/5] relative border-4 border-black">
              <img
                alt="Portrait of Pragati Ranjan"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                src="/portrait.png"
              />
            </div>
          </div>
        </div>

        {/* Right text column */}
        <div className="md:col-span-7 flex flex-col justify-center gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <p className="font-grotesk text-base md:text-xl text-black leading-snug font-bold">
              My journey in software engineering began at the prestigious{" "}
              <span className="bg-accent px-1">IIT Guwahati</span>, where I
              honed my fundamentals in computer science and problem-solving.
              This academic rigor laid the foundation for my transition into the
              fast-paced world of high-growth tech ecosystems.
            </p>
            <blockquote className="font-grotesk text-[20px] md:text-[28px] leading-[1.2] font-black uppercase text-white bg-black p-6 md:p-10 brutalist-card-accent">
              "Building systems isn't just about code—it's about creating
              resilient structures that can scale with human ambition."
            </blockquote>
            <p className="font-grotesk text-base text-black leading-snug font-bold">
              As a{" "}
              <span className="underline decoration-4 decoration-accent">
                Founding Engineer
              </span>{" "}
              for Rushline at Dream11, I played a pivotal role in architecting
              systems that handle millions of concurrent users. My experience
              spans from building complex backend controllers to crafting
              seamless mobile experiences, always with an eye for performance
              and user-centric design.
            </p>
            <p className="font-grotesk text-base text-black leading-snug">
              From the initial brainstorming at Astrome Technologies to scaling
              sports-tech at Dream11, my career is a testament to constant
              evolution and a relentless pursuit of engineering excellence.
            </p>

            {/* Education */}
            <div className="brutalist-card-accent p-5 md:p-6 border-4 border-black flex gap-4 md:gap-6 items-start">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-black flex-shrink-0">
                school
              </span>
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-widest text-black mb-1">
                  2017 &ndash; 2021
                </p>
                <p className="font-grotesk text-lg md:text-xl font-black text-black uppercase">
                  IIT Guwahati
                </p>
                <p className="font-mono text-xs md:text-sm font-black text-black uppercase">
                  B.Tech &mdash; Civil Engineering
                </p>
              </div>
            </div>

            {/* Fun facts */}
            <div className="space-y-3 pt-4 border-t-4 border-black">
              {[
                "🏆 District level chess champion",
                "⚽ Led hostel football team to Gold Medal at Spardha",
                "🎓 Civil Engineering → Software Engineering pivot",
              ].map((fact) => (
                <div
                  key={fact}
                  className="font-mono text-xs md:text-sm font-bold text-black flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-accent border-2 border-black inline-block flex-shrink-0" />
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
