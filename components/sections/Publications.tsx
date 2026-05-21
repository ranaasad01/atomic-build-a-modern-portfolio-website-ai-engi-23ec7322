"use client";

import { publications } from "@/lib/data/publications";
import { FileText, ExternalLink, Code2 as Github, Star } from 'lucide-react';

export default function Publications() {
  return (
    <section id="publications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
            Research
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Publications &amp;{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Research
            </span>
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            Peer-reviewed research published at top AI venues including NeurIPS, ICML, and ICLR. 1,000+ total citations.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="p-6 rounded-2xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                  <FileText size={16} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded">
                      {pub.venue}
                    </span>
                    <span className="text-xs text-[#888888]">{pub.year}</span>
                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                      <Star size={10} className="fill-yellow-400" />
                      {pub.citations} citations
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-[#888888] mb-3">
                    {pub.authors.join(", ")}
                  </p>

                  <p className="text-sm text-[#888888] leading-relaxed mb-4">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-mono text-[#888888] bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      {pub.paperUrl && (
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink size={10} />
                          Paper
                        </a>
                      )}
                      {pub.codeUrl && (
                        <a
                          href={pub.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-[#888888] hover:text-white transition-colors"
                        >
                          <Github size={10} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
