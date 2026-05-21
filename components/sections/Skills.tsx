"use client";

import { skillCategories } from "@/lib/data/skills";

const levelLabels = ["", "Beginner", "Familiar", "Proficient", "Advanced", "Expert"];

const extraTech = [
  "CUDA", "Triton", "vLLM", "Ollama", "Chroma", "Qdrant", "Neo4j",
  "Airflow", "Prefect", "DVC", "BentoML", "Seldon", "Ray Serve",
  "Prometheus", "Grafana", "Terraform", "GitHub Actions", "Jupyter",
];

const gradientStyle = {
  background: "linear-gradient(135deg, #818cf8, #c084fc)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
            Tech Stack
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills &amp;{" "}
            <span style={gradientStyle}>Expertise</span>
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            A comprehensive toolkit built over 6+ years of AI research and engineering across top labs and production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-[#141414] border border-[#2a2a2a] hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => {
                  const pct = (skill.level / 5) * 100;
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-[#cccccc] font-mono">{skill.name}</span>
                        <span className="text-xs text-[#888888]">{levelLabels[skill.level]}</span>
                      </div>
                      <div className="h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                          style={{ width: pct + "%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-[#888888] mb-6 uppercase tracking-widest">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {extraTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono text-[#888888] border border-[#2a2a2a] rounded-lg hover:border-indigo-500/40 hover:text-indigo-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
