"use client";

import { testimonials } from "@/lib/data/testimonials";
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/2 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              People Say
            </span>
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            Recommendations from colleagues and collaborators at Anthropic, OpenAI, and DeepMind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/30 transition-all duration-300 flex flex-col gap-4"
            >
              <Quote size={24} className="text-indigo-500/40" />
              <p className="text-[#cccccc] leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#2a2a2a]">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] flex-shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#888888]">{t.role} at {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
