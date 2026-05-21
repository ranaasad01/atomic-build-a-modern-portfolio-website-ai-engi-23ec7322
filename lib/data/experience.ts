export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior AI Engineer",
    company: "Anthropic",
    companyUrl: "https://anthropic.com",
    location: "San Francisco, CA",
    startDate: "2023-06",
    endDate: null,
    current: true,
    description: "Leading the development of production AI systems and safety research tooling for Claude model family. Architecting scalable inference infrastructure and contributing to alignment research.",
    achievements: [
      "Architected the RAG pipeline serving 10M+ daily queries with 99.9% uptime",
      "Reduced model inference costs by 35% through quantization and caching strategies",
      "Led a team of 5 engineers to ship Constitutional AI evaluation tooling",
      "Published 2 internal research papers on scalable RLHF techniques",
    ],
    technologies: ["Python", "PyTorch", "JAX", "Kubernetes", "AWS", "LangChain"],
  },
  {
    id: "2",
    role: "Machine Learning Engineer",
    company: "OpenAI",
    companyUrl: "https://openai.com",
    location: "San Francisco, CA",
    startDate: "2021-08",
    endDate: "2023-05",
    current: false,
    description: "Worked on the GPT-4 fine-tuning infrastructure and RLHF pipeline. Contributed to the Codex project and developed evaluation frameworks for code generation models.",
    achievements: [
      "Built the automated evaluation harness for GPT-4 code generation benchmarks",
      "Improved RLHF reward model accuracy by 12% through novel data augmentation",
      "Developed internal tooling used by 200+ researchers for model evaluation",
      "Co-authored the Codex technical report (cited 1,200+ times)",
    ],
    technologies: ["Python", "PyTorch", "CUDA", "Triton", "Ray", "GCP"],
  },
  {
    id: "3",
    role: "AI Research Engineer",
    company: "DeepMind",
    companyUrl: "https://deepmind.com",
    location: "London, UK",
    startDate: "2019-09",
    endDate: "2021-07",
    current: false,
    description: "Conducted research on reinforcement learning and multi-agent systems. Contributed to AlphaFold 2 protein structure prediction pipeline and developed novel RL algorithms for game-playing agents.",
    achievements: [
      "Contributed to AlphaFold 2 data pipeline processing 170,000+ protein structures",
      "Developed novel curiosity-driven exploration algorithm improving sample efficiency by 3x",
      "Published 3 papers at NeurIPS and ICML on multi-agent reinforcement learning",
      "Mentored 4 junior researchers and interns",
    ],
    technologies: ["Python", "JAX", "TensorFlow", "MuJoCo", "Docker", "TPUs"],
  },
  {
    id: "4",
    role: "Data Scientist",
    company: "Palantir Technologies",
    companyUrl: "https://palantir.com",
    location: "New York, NY",
    startDate: "2018-07",
    endDate: "2019-08",
    current: false,
    description: "Built ML models and data pipelines for government and enterprise clients. Specialized in NLP for document classification and entity extraction from unstructured data.",
    achievements: [
      "Deployed NLP pipeline processing 5M+ documents daily for a federal agency",
      "Improved entity extraction F1 score from 0.71 to 0.89 using transformer fine-tuning",
      "Reduced data pipeline processing time by 60% through distributed computing",
      "Delivered 3 client projects on time and under budget",
    ],
    technologies: ["Python", "Spark", "Scikit-learn", "spaCy", "Palantir Foundry", "SQL"],
  },
];
