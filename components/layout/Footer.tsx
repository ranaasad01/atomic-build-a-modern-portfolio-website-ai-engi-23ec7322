"use client";

import Link from "next/link";
import { Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Mail, Heart } from 'lucide-react';

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#publications", label: "Research" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                AR
              </div>
              <span className="font-semibold text-white">ASAD RANA</span>
            </Link>
            <p className="text-sm text-[#888888] leading-relaxed max-w-xs">
              Senior AI Engineer building the future with LLMs, RAG systems, and production ML infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@alexchen.dev"
                className="flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors"
              >
                <Mail size={14} />
                hello@alexchen.dev
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:border-indigo-500 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={14} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:border-indigo-500 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:border-indigo-500 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#888888]">
            © {new Date().getFullYear()} ASAD RANA. All rights reserved.
          </p>
          <p className="text-sm text-[#888888] flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400" /> in Lahore, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
