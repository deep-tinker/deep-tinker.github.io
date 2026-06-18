import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:pragatiranjan25@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-[120px] bg-black text-white border-y-8 border-accent"
    >
      <div className="max-w-[800px] mx-auto px-gutter text-center">
        <h2 className="font-grotesk text-[36px] sm:text-[48px] md:text-[64px] leading-[0.95] font-black text-accent mb-4 md:mb-6 uppercase">
          Let's Build Something Together
        </h2>
        <p className="font-grotesk text-sm md:text-xl mb-10 md:mb-16 uppercase font-bold italic underline decoration-accent decoration-4 md:decoration-8">
          Available for consulting, technical speaking, and visionary projects.
        </p>

        <div className="brutalist-card-accent p-6 md:p-12 text-left border-4 border-black">
          {submitted ? (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-[64px] text-black mb-4 block">
                check_circle
              </span>
              <p className="font-grotesk text-[28px] font-black uppercase text-black">
                Message Sent!
              </p>
            </div>
          ) : (
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
              onSubmit={handleSubmit}
            >
              <div className="space-y-3">
                <label className="font-mono text-xs md:text-sm text-black font-black uppercase block">
                  Name
                </label>
                <input
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-4 border-black bg-white text-black font-bold focus:ring-0 focus:bg-accent transition-all outline-none text-sm md:text-base"
                  placeholder="John Doe"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs md:text-sm text-black font-black uppercase block">
                  Email
                </label>
                <input
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-4 border-black bg-white text-black font-bold focus:ring-0 focus:bg-accent transition-all outline-none text-sm md:text-base"
                  placeholder="john@example.com"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="font-mono text-xs md:text-sm text-black font-black uppercase block">
                  Message
                </label>
                <textarea
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-4 border-black bg-white text-black font-bold focus:ring-0 focus:bg-accent transition-all outline-none resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full brutalist-btn px-6 md:px-12 py-4 md:py-5 uppercase font-black text-base md:text-lg justify-center text-black"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
