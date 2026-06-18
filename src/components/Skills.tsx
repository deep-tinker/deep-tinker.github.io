import { categories } from "../data/skills";

const categoryIcons: Record<string, string> = {
  Languages: "code",
  "Web & Frameworks": "web",
  Infrastructure: "cloud",
  Databases: "storage",
  Interests: "interests",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-[120px] bg-white border-b-8 border-black"
    >
      <div className="max-w-[1200px] mx-auto px-gutter">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-8 border-b-8 border-black pb-6 md:pb-8">
          <div className="max-w-[500px]">
            <h2 className="font-grotesk text-[28px] md:text-[48px] leading-[1.1] font-black text-black uppercase">
              Technical Prowess
            </h2>
            <p className="font-grotesk text-sm md:text-base text-black font-bold uppercase mt-2">
              A curated stack built for modern, resilient applications.
            </p>
          </div>
          <div className="font-grotesk text-lg md:text-[28px] leading-[1.2] font-black text-black italic uppercase bg-accent px-4 py-2 md:rotate-2 self-start md:self-auto">
            Modern. Scalable. Precise.
          </div>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="space-y-6 md:space-y-8 brutalist-card p-6 md:p-8"
            >
              <h3 className="font-mono text-xs md:text-sm text-white bg-black px-3 md:px-4 py-2 uppercase font-black flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  {categoryIcons[cat.name] ?? "label"}
                </span>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="brutalist-btn px-3 md:px-4 py-1.5 md:py-2 text-black font-black text-xs md:text-sm uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
