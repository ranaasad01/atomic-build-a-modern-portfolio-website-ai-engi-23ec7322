"use client";

import { education } from "@/lib/data/education";
import { Star, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
            Education
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Academic{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Background
            </span>
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            Rigorous academic training in machine learning and mathematics from two of the world&apos;s top institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-indigo-400 font-medium text-sm">{edu.institution}</p>
                  <p className="text-xs text-[#888888] mt-0.5">
                    {edu.location} &bull; {edu.startYear} &mdash; {edu.endYear}
                  </p>
                </div>
              </div>

              {edu.gpa && (
                <div className="flex items-center gap-2 mb-3">
                  <Award size={12} className="text-yellow-400" />
                  <span className="text-xs text-[#888888]">
                    GPA: <span className="text-white">{edu.gpa}</span>
                  </span>
                </div>
              )}

              {edu.thesis && (
                <div className="mb-4 p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                  <p className="text-xs text-[#888888] mb-1">Thesis</p>
                  <p className="text-sm text-[#cccccc] italic">&ldquo;{edu.thesis}&rdquo;</p>
                </div>
              )}

              <ul className="space-y-1.5">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#888888]">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
