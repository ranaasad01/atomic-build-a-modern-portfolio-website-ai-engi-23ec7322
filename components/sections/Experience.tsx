"use client";

import { experiences } from "@/lib/data/experience";
import { MapPin, ExternalLink } from 'lucide-react';

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[parseInt(month, 10) - 1] + " " + year;
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
            Career
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Experience
            </span>
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            6+ years building AI systems at the world&apos;s leading AI research labs and companies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row gap-8">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-[#0f0f0f] z-10 mt-6" />

                  {/* Left spacer on desktop */}
                  {isLeft && <div className="hidden md:block md:w-1/2" />}

                  {/* Card */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                    <div className="p-6 rounded-2xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/30 transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 font-medium text-sm hover:text-indigo-300 flex items-center gap-1"
                              >
                                {exp.company}
                                <ExternalLink size={10} />
                              </a>
                            ) : (
                              <span className="text-indigo-400 font-medium text-sm">{exp.company}</span>
                            )}
                            {exp.current && (
                              <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 mb-4 text-xs text-[#888888]">
                        <span className="flex items-center gap-1">
                          <MapPin size={10} />
                          {exp.location}
                        </span>
                        <span>
                          {formatDate(exp.startDate)} — {exp.current ? "Present" : exp.endDate ? formatDate(exp.endDate) : ""}
                        </span>
                      </div>

                      <p className="text-sm text-[#888888] mb-4 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#aaaaaa]">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-xs font-mono text-[#888888] bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right spacer on desktop */}
                  {!isLeft && <div className="hidden md:block md:w-1/2" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
