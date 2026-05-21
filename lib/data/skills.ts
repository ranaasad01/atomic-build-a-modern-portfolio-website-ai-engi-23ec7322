export interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", category: "AI & Machine Learning", level: 5 },
      { name: "TensorFlow", category: "AI & Machine Learning", level: 4 },
      { name: "JAX", category: "AI & Machine Learning", level: 4 },
      { name: "Scikit-learn", category: "AI & Machine Learning", level: 5 },
      { name: "Hugging Face", category: "AI & Machine Learning", level: 5 },
      { name: "XGBoost", category: "AI & Machine Learning", level: 4 },
    ],
  },
  {
    name: "LLMs & Generative AI",
    skills: [
      { name: "OpenAI API", category: "LLMs & Generative AI", level: 5 },
      { name: "LangChain", category: "LLMs & Generative AI", level: 5 },
      { name: "LangGraph", category: "LLMs & Generative AI", level: 4 },
      { name: "LlamaIndex", category: "LLMs & Generative AI", level: 4 },
      { name: "Anthropic Claude", category: "LLMs & Generative AI", level: 5 },
      { name: "RAG Systems", category: "LLMs & Generative AI", level: 5 },
    ],
  },
  {
    name: "Languages & Frameworks",
    skills: [
      { name: "Python", category: "Languages & Frameworks", level: 5 },
      { name: "TypeScript", category: "Languages & Frameworks", level: 4 },
      { name: "Rust", category: "Languages & Frameworks", level: 3 },
      { name: "FastAPI", category: "Languages & Frameworks", level: 5 },
      { name: "Next.js", category: "Languages & Frameworks", level: 4 },
      { name: "React", category: "Languages & Frameworks", level: 4 },
    ],
  },
  {
    name: "Infrastructure & MLOps",
    skills: [
      { name: "Kubernetes", category: "Infrastructure & MLOps", level: 4 },
      { name: "Docker", category: "Infrastructure & MLOps", level: 5 },
      { name: "AWS", category: "Infrastructure & MLOps", level: 4 },
      { name: "GCP", category: "Infrastructure & MLOps", level: 4 },
      { name: "MLflow", category: "Infrastructure & MLOps", level: 4 },
      { name: "Weights & Biases", category: "Infrastructure & MLOps", level: 5 },
    ],
  },
  {
    name: "Data & Databases",
    skills: [
      { name: "PostgreSQL", category: "Data & Databases", level: 4 },
      { name: "Pinecone", category: "Data & Databases", level: 5 },
      { name: "Weaviate", category: "Data & Databases", level: 4 },
      { name: "Redis", category: "Data & Databases", level: 4 },
      { name: "Apache Spark", category: "Data & Databases", level: 4 },
      { name: "Apache Kafka", category: "Data & Databases", level: 3 },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);
