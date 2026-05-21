"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, getAllTags } from "@/lib/data/projects";
import { Code2 as Github, ExternalLink, ArrowRight, ArrowLeft, Search } from 'lucide-react';

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [query, setQuery] = useState("");
  const allTags = ["All", ...getAllTags()];

  const filtered = projects.filter((p) => {
    const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
    const matchesQuery =
      query === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24 pb-20">
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
            Portfolio
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            All{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Projects
            </span>
          </h1>
          <p className="text-[#888888] max-w-2xl text-lg">
            {projects.length} projects spanning LLMs, computer vision, ML infrastructure, and autonomous agents. Each built to solve real-world problems at scale.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#141414] border border-[#2a2a2a] rounded-xl text-white text-sm placeholder-[#555] focus:outline-none focus:border-indigo-500/60 transition-colors"
            />
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={
                  activeTag === tag
                    ? "px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white transition-all"
                    : "px-3 py-1.5 text-xs font-medium rounded-lg border border-[#2a2a2a] text-[#888888] hover:border-indigo-500/40 hover:text-white transition-all"
                }
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs text-[#888888] mb-6">
          Showing {filtered.length} of {projects.length} projects
        </p>

        {/* Project grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#888888] text-lg">No projects match your filters.</p>
            <button
              onClick={() => { setActiveTag("All"); setQuery(""); }}
              className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.slug}
                className="group rounded-2xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/40 transition-all duration-300 overflow-hidden hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 rounded-lg bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={12} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 rounded-lg bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#888888] leading-relaxed mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2a2a2a]">
                    <span className="text-xs text-[#888888]">{project.year}</span>
                    <Link
                      href={"/projects/" + project.slug}
                      className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      View details
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
