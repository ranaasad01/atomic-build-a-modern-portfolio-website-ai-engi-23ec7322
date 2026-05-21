"use client";

import Link from "next/link";
import { getFeaturedProjects } from "@/lib/data/projects";
import { Code2 as Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
              Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Featured{" "}
              <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Projects
              </span>
            </h2>
            <p className="text-[#888888] max-w-xl">
              Production AI systems and research projects spanning LLMs, computer vision, and ML infrastructure.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors whitespace-nowrap"
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <div
              key={project.slug}
              className="group rounded-2xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/40 transition-all duration-300 overflow-hidden hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed mb-4 flex-1">
                  {project.shortDescription}
                </p>

                <Link
                  href={"/projects/" + project.slug}
                  className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mt-auto"
                >
                  View details
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
