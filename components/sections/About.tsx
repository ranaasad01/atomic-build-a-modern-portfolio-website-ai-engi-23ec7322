"use client";

import { Download, MapPin, Mail, Calendar } from 'lucide-react';

export default function About() {

  return (

    <section id="about" className="py-24 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}

          <div className="relative flex justify-center lg:justify-start">

            <div className="relative">

              {/* Glow ring */}

              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-[#2a2a2a]">

                <img

                  src="https://snworksceo.imgix.net/dpn/25cc6980-488f-443b-9e23-7fc720fbf527.sized-1000x1000.png?w=1000"

                  alt="Alex Chen - AI Engineer"

                  className="w-full h-full object-cover"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 to-transparent" />

              </div>

              {/* Floating badge */}

              <div className="absolute -bottom-4 -right-4 bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-3 shadow-xl">

                <div className="flex items-center gap-2">

                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                  <span className="text-sm text-white font-medium">Open to Work</span>

                </div>

              </div>

              {/* Experience badge */}

              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl px-4 py-3 shadow-xl">

                <div className="text-white text-center">

                  <div className="text-2xl font-bold">6+</div>

                  <div className="text-xs opacity-90">Years in AI</div>

                </div>

              </div>

            </div>

          </div>

          {/* Content side */}

          <div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">

              About Me

            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">

              Turning Research into{" "}

              <span

                className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"

                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}

              >

                Production AI

              </span>

            </h2>

            <div className="space-y-4 text-[#888888] leading-relaxed mb-8">

              <p>

                I&apos;m a Senior AI Engineer with a Ph.D. in Machine Learning from Stanford, passionate about bridging the gap between cutting-edge AI research and real-world production systems. I specialize in building scalable LLM applications, RAG pipelines, and ML infrastructure that serves millions of users.

              </p>

              <p>

                My journey spans top AI labs — from contributing to AlphaFold 2 at DeepMind, to building GPT-4 evaluation frameworks at OpenAI, to architecting Claude&apos;s RAG infrastructure at Anthropic. I&apos;ve published 10+ papers at NeurIPS, ICML, and ICLR with 1,000+ citations.

              </p>

              <p>

                When I&apos;m not engineering AI systems, I mentor aspiring ML engineers, contribute to open-source projects, and write about the intersection of AI research and engineering on my blog.

              </p>

            </div>

            {/* Info grid */}

            <div className="grid grid-cols-2 gap-4 mb-8">

              {[

                { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },

                { icon: Mail, label: "Email", value: "hello@alexchen.dev" },

                { icon: Calendar, label: "Experience", value: "6+ Years" },

                { icon: Download, label: "Status", value: "Open to Work" },

              ].map(({ icon: Icon, label, value }) => (

                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-[#141414] border border-[#2a2a2a]">

                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">

                    <Icon size={14} />

                  </div>

                  <div className="min-w-0">

                    <div className="text-xs text-[#888888]">{label}</div>

                    <div className="text-sm text-white font-medium truncate">{value}</div>

                  </div>

                </div>

              ))}

            </div>

            {/* CTA */}

            <a

              href="/cv.pdf"

              download

              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"

            >

              <Download size={16} />

              Download CV

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}
