import { projects } from "../data/projects";

const projectImages: Record<string, string> = {
  Rushline:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCFpB1ahPbksqeEWOhZWFC4bw_YcW3v3d4XNhu9OmQRDUPoaaqOnCUItDdXaYiOr1PK5biSD3JNYer6Au2X_WgNQAxqTqjTnWhy07w-LdvPayUc2T2jRk9rn7ByieeUehNgGFLoUDEsVFdIGo8SBGv-Uwt3VWji9t8fnSxkOzrvE1XEEsylsNgY3LONcuJxDklf8BM8kbbX-xUkx6fV-tUW2mPboKFKx-4_ddqhTJCtiQB6GbfQyY-VdsGcTTMcXBbDaFNuLVrrjA",
  "Stats Chatbot":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwvak8A5CxzCwF4Wd96AmebEav2KcUzN3kh98yccUAHqjxfOJ7RUVAdzXG8p4-WgHW78tqTX5Yey2Xe19QI2glLain0TtlwRRHXEl9oWX6l1VK9ajnK8wEdhhaGDUd54JhNsx0bYKlmh_WvtMnMhIV2Brjxz2ZrX_T9dgbmUxUyOXqbt71L1VnRZXQ2lPC-Gzm4ZRY4af_fEJ4NCbC2lm9KBkvl5bhax2vcMxm60MRpBSIj0inTrg25Ebvs5ETZQ9gNWazF1ILrg",
  "System Controller":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCqeo1shRK3uNjd1OCdM_-RiqvcXccqX56_cqS5_W6yWqBqDqnk6b63B8Lk6cpUCXueYCRFPXxgcYPTynh7YTCFnD7DZoGYav3wt99NKihYv1pSeesL3kBBho8znGCMUZyQT6chAKOLxc7t_6o8rdqu2BYwonaHVGWUBNydTQwvJSH6FdcF03jz69NFtHHZHnG9VjlJ3CNneiYNM0q02O1lFRUYlowvxt8CgX_GVGTY3PGx38_Aq04idmxw_y7nTyVgOdRvblrqDA",
};

export default function Projects() {
  const [main, second, third, ...rest] = projects;

  return (
    <section id="work" className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-gutter">
        {/* Header */}
        <div className="mb-16 border-l-8 border-black pl-8">
          <h2 className="font-grotesk text-[64px] leading-[0.9] font-black text-black uppercase">
            Featured Work
          </h2>
          <p className="font-grotesk text-xl text-black max-w-[600px] mt-4 font-bold uppercase">
            Exploring the intersection of complex logic and seamless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Main project (Rushline) */}
          {main && (
            <div className="md:col-span-8 group">
              <div className="brutalist-card overflow-hidden relative aspect-video border-4 border-black">
                {projectImages[main.title] ? (
                  <img
                    alt={`${main.title} showcase`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    src={projectImages[main.title]}
                  />
                ) : (
                  <div className="w-full h-full bg-accent flex items-center justify-center">
                    <span className="material-symbols-outlined text-[80px] text-black">
                      rocket_launch
                    </span>
                  </div>
                )}
                <div className="absolute top-6 left-6 bg-accent border-4 border-black px-4 py-2 font-black uppercase text-sm">
                  {main.metrics}
                </div>
              </div>
              <div className="mt-8 px-4 border-l-4 border-black">
                <h3 className="font-grotesk text-[28px] leading-[1.2] font-black text-black mb-4 uppercase">
                  {main.title}
                </h3>
                <p className="font-grotesk text-base text-black mb-8 font-bold">
                  {main.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {main.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 border-2 border-black bg-white font-black text-xs uppercase font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {main.link && (
                  <a
                    className="brutalist-btn px-6 py-3 uppercase font-black inline-flex items-center gap-2 text-black"
                    href={main.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Case Study{" "}
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Secondary project (Stats Chatbot) */}
          {second && (
            <div className="md:col-span-4 mt-0 md:mt-24 group">
              <div className="brutalist-card overflow-hidden aspect-[4/5] relative border-4 border-black bg-accent">
                {projectImages[second.title] ? (
                  <img
                    alt={`${second.title} showcase`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply opacity-80"
                    src={projectImages[second.title]}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[80px] text-black">
                      smart_toy
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-8 px-4 bg-black text-white p-6 brutalist-card">
                <h3 className="font-grotesk text-[28px] leading-[1.2] text-accent mb-4 uppercase font-black">
                  {second.title}
                </h3>
                <p className="font-grotesk text-base font-bold">
                  {second.desc}
                </p>
              </div>
            </div>
          )}

          {/* Third project (System Controller) */}
          {third && (
            <div className="md:col-span-12 group pt-12">
              <div className="brutalist-card overflow-hidden relative border-4 border-black bg-white p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-grotesk text-[48px] leading-[1.1] font-black text-black mb-6 uppercase">
                    {third.title}
                  </h3>
                  <p className="font-grotesk text-base text-black font-bold mb-8">
                    {third.desc}
                  </p>
                  <span className="px-4 py-2 border-4 border-black bg-accent font-black uppercase font-grotesk">
                    {third.metrics}
                  </span>
                </div>
                <div className="brutalist-card overflow-hidden aspect-video border-4 border-black">
                  {projectImages[third.title] ? (
                    <img
                      alt={`${third.title} showcase`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      src={projectImages[third.title]}
                    />
                  ) : (
                    <div className="w-full h-full bg-accent flex items-center justify-center">
                      <span className="material-symbols-outlined text-[80px] text-black">
                        settings
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Remaining projects */}
          {rest.map((project) => (
            <div
              key={project.title}
              className="md:col-span-6 brutalist-card p-8"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-grotesk text-[28px] leading-[1.2] font-black text-black uppercase">
                  {project.title}
                </h3>
                <span className="px-3 py-1 border-2 border-black bg-accent font-black text-xs uppercase font-mono">
                  {project.org}
                </span>
              </div>
              <p className="font-grotesk text-base text-black font-bold mb-4">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border-2 border-black bg-white font-black text-xs uppercase font-mono"
                  >
                    {t}
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
