"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin } from 'lucide-react';

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#publications", label: "Research" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 data-[scrolled=true]:bg-[#0f0f0f]/90 data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:border-b data-[scrolled=true]:border-[#2a2a2a]"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
              AC
            </div>
            <span className="font-semibold text-white hidden sm:block">Alex Chen</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-[#888888] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <Link
              href="/#contact"
              className="ml-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#888888] hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-[#2a2a2a] bg-[#0f0f0f]/95 backdrop-blur-md">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm text-[#888888] hover:text-white hover:bg-white/5 transition-colors rounded-lg mx-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 px-4 pt-4 border-t border-[#2a2a2a] mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="ml-auto px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
