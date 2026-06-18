import { jobs } from "../data/experience";

const jobIcons: Record<string, string> = {
  Dream11: "sports_esports",
  "Astrome Technologies": "satellite_alt",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-[120px] border-b-8 border-black"
      style={{ backgroundColor: "rgba(204,255,0,0.10)" }}
    >
      <div className="max-w-[1200px] mx-auto px-gutter">
        {/* Section header */}
        <div className="mb-10 md:mb-16 border-l-8 border-black pl-6 md:pl-8">
          <h2 className="font-grotesk text-[28px] md:text-[48px] leading-[1.1] font-black text-black uppercase">
            Professional Tenure
          </h2>
          <p className="font-grotesk text-sm md:text-base text-black mt-2 font-bold uppercase">
            Scalable impact across leading tech innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="brutalist-card p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              {/* Icon */}
              <div
                className={`p-4 md:p-6 border-4 border-black flex-shrink-0 ${
                  job.company === "Dream11"
                    ? "bg-black text-accent"
                    : "bg-white text-black"
                }`}
              >
                <span className="material-symbols-outlined text-3xl md:text-4xl">
                  {jobIcons[job.company] ?? "work"}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-2">
                  <h3 className="font-grotesk text-[22px] md:text-[28px] leading-[1.2] font-black text-black uppercase">
                    {job.company}
                  </h3>
                  <span className="px-3 py-1 md:px-4 md:py-2 border-4 border-black font-black uppercase text-xs md:text-sm bg-accent whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <h4 className="font-mono text-xs md:text-sm text-black font-black uppercase tracking-widest mb-4 md:mb-6 bg-accent inline-block px-2">
                  {job.role}
                </h4>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                  {job.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-2 py-1 md:px-3 border-2 border-black bg-black text-accent font-mono text-xs font-black uppercase"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <ul className="space-y-2 mb-6 md:mb-8">
                  {job.details.map((d) => (
                    <li
                      key={d}
                      className="font-grotesk text-sm md:text-base text-black font-bold leading-snug flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-accent border-2 border-black inline-block mt-1.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 md:px-4 md:py-2 border-2 border-black bg-white font-black text-xs md:text-sm uppercase font-grotesk"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
