export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { ArrowLeft, Code2 as Github, ExternalLink, Check } from 'lucide-react';
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title + " | Alex Chen",
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          All Projects
        </Link>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#141414] border border-[#2a2a2a] mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />

          {/* Overlay content */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono text-indigo-400 bg-indigo-500/20 border border-indigo-500/30 rounded backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h1>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#141414] border border-[#2a2a2a] text-white text-sm font-medium rounded-xl hover:border-indigo-500/40 transition-all"
            >
              <Github size={14} />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-all"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <span className="flex items-center gap-2 px-4 py-2.5 bg-[#141414] border border-[#2a2a2a] text-[#888888] text-sm rounded-xl">
            {project.year}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#2a2a2a]">
              <h2 className="text-lg font-semibold text-white mb-4">Overview</h2>
              <p className="text-[#888888] leading-relaxed">{project.description}</p>
            </div>

            {/* Key Highlights */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#2a2a2a]">
              <h2 className="text-lg font-semibold text-white mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-indigo-400" />
                    </div>
                    <span className="text-sm text-[#cccccc]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Screenshots placeholder */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#2a2a2a]">
              <h2 className="text-lg font-semibold text-white mb-4">Architecture</h2>
              <div className="h-48 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-indigo-400 text-xl">⬡</span>
                  </div>
                  <p className="text-sm text-[#888888]">System architecture diagram</p>
                  <p className="text-xs text-[#555] mt-1">Available in full project documentation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech stack */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-[#2a2a2a]">
              <h3 className="text-sm font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-[#cccccc] bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project info */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-[#2a2a2a]">
              <h3 className="text-sm font-semibold text-white mb-4">Project Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#888888]">Year</span>
                  <span className="text-white">{project.year}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#888888]">Status</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#888888]">Type</span>
                  <span className="text-white">{project.featured ? "Featured" : "Project"}</span>
                </div>
              </div>
            </div>

            {/* More projects */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-[#2a2a2a]">
              <h3 className="text-sm font-semibold text-white mb-4">More Projects</h3>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={"/projects/" + p.slug}
                      className="block p-2.5 rounded-lg hover:bg-[#1a1a1a] transition-colors group"
                    >
                      <div className="text-sm text-white group-hover:text-indigo-300 transition-colors truncate">
                        {p.title}
                      </div>
                      <div className="text-xs text-[#888888] mt-0.5">{p.tags[0]}</div>
                    </Link>
                  ))}
              </div>
              <Link
                href="/projects"
                className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors mt-4"
              >
                View all projects
                <ExternalLink size={10} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
