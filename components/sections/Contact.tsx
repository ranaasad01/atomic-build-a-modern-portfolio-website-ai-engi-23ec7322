"use client";

import { useState } from "react";

import { Mail, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Send, MapPin } from 'lucide-react';

export default function Contact() {

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setStatus("sending");

    try {

      const res = await fetch("/api/contact", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(form),

      });

      if (res.ok) {

        setStatus("sent");

        setForm({ name: "", email: "", subject: "", message: "" });

      } else {

        setStatus("error");

      }

    } catch {

      setStatus("error");

    }

  };

  return (

    <section id="contact" className="py-24 relative">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">

            Contact

          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">

            Get In{" "}

            <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>

              Touch

            </span>

          </h2>

          <p className="text-[#888888] max-w-xl mx-auto">

            Open to senior AI engineering roles, consulting engagements, and research collaborations. Let&apos;s build something remarkable together.

          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">

          {/* Info */}

          <div className="lg:col-span-2 space-y-6">

            <div>

              <h3 className="text-lg font-semibold text-white mb-4">Let&apos;s Connect</h3>

              <p className="text-sm text-[#888888] leading-relaxed">

                Whether you have a challenging AI problem to solve, want to discuss research, or are looking for a senior engineer to join your team — I&apos;d love to hear from you.

              </p>

            </div>

            <div className="space-y-3">

              <a href="mailto:hello@alexchen.dev" className="flex items-center gap-3 p-3 rounded-xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/30 transition-all group">

                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">

                  <Mail size={16} />

                </div>

                <div>

                  <div className="text-xs text-[#888888]">Email</div>

                  <div className="text-sm text-white group-hover:text-indigo-300 transition-colors">hello@alexchen.dev</div>

                </div>

              </a>

              <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/30 transition-all group">

                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">

                  <MapPin size={16} />

                </div>

                <div>

                  <div className="text-xs text-[#888888]">Location</div>

                  <div className="text-sm text-white">Lahore, Pakistan</div>

                </div>

              </a>

            </div>

            <div className="flex items-center gap-3 pt-2">

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#141414] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:border-indigo-500/30 transition-all" aria-label="GitHub">

                <Github size={16} />

              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#141414] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:border-indigo-500/30 transition-all" aria-label="Twitter">

                <Twitter size={16} />

              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#141414] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:border-indigo-500/30 transition-all" aria-label="LinkedIn">

                <Linkedin size={16} />

              </a>

            </div>

          </div>

          {/* Form */}

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>

                <label className="block text-xs text-[#888888] mb-1.5">Name</label>

                <input

                  type="text"

                  name="name"

                  value={form.name}

                  onChange={handleChange}

                  required

                  placeholder="Your name"

                  className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-indigo-500/50 transition-colors"

                />

              </div>

              <div>

                <label className="block text-xs text-[#888888] mb-1.5">Email</label>

                <input

                  type="email"

                  name="email"

                  value={form.email}

                  onChange={handleChange}

                  required

                  placeholder="your@email.com"

                  className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-indigo-500/50 transition-colors"

                />

              </div>

            </div>

            <div>

              <label className="block text-xs text-[#888888] mb-1.5">Subject</label>

              <input

                type="text"

                name="subject"

                value={form.subject}

                onChange={handleChange}

                required

                placeholder="What's this about?"

                className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-indigo-500/50 transition-colors"

              />

            </div>

            <div>

              <label className="block text-xs text-[#888888] mb-1.5">Message</label>

              <textarea

                name="message"

                value={form.message}

                onChange={handleChange}

                required

                rows={5}

                placeholder="Tell me about your project or opportunity..."

                className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"

              />

            </div>

            <button

              type="submit"

              disabled={status === "sending" || status === "sent"}

              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"

            >

              {status === "sending" ? (

                <span>Sending...</span>

              ) : status === "sent" ? (

                <span>Message Sent!</span>

              ) : (

                <>

                  <Send size={15} />

                  Send Message

                </>

              )}

            </button>

            {status === "error" && (

              <p className="text-sm text-red-400 text-center">Something went wrong. Please try again.</p>

            )}

          </form>

        </div>

      </div>

    </section>

  );

}
