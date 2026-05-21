"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Download, Code2 as Github, Star } from 'lucide-react';

const roles = [
  "AI Engineer",
  "LLM Architect",
  "ML Systems Builder",
  "RAG Specialist",
  "Research Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-indigo-500/60 animate-pulse" />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-purple-500/60 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full bg-indigo-400/60 animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 right-40 w-2 h-2 rounded-full bg-purple-400/60 animate-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span
            className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Alex Chen
          </span>
        </h1>

        {/* Typewriter */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#888888] mb-6 h-12 flex items-center justify-center">
          <span className="text-white">{displayed}</span>
          <span className="ml-1 w-0.5 h-8 bg-indigo-400 inline-block animate-pulse" />
        </div>

        {/* Tagline */}
        <p className="text-lg text-[#888888] max-w-2xl mx-auto mb-10 leading-relaxed">
          Building production-grade AI systems at scale. Specializing in LLMs, RAG pipelines, and ML infrastructure.
          Previously at{" "}
          <span className="text-white font-medium">Anthropic</span>,{" "}
          <span className="text-white font-medium">OpenAI</span>, and{" "}
          <span className="text-white font-medium">DeepMind</span>.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          {[
            { value: "6+", label: "Years Experience" },
            { value: "20+", label: "Projects Shipped" },
            { value: "1K+", label: "Paper Citations" },
            { value: "3", label: "Top AI Labs" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {stat.value}
              </div>
              <div className="text-xs text-[#888888] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#projects"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center gap-2"
          >
            <Star size={16} />
            View My Work
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-[#2a2a2a] text-white font-medium rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all flex items-center gap-2"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#2a2a2a] text-[#888888] font-medium rounded-xl hover:border-[#444] hover:text-white transition-all flex items-center gap-2"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-[#888888]">
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
