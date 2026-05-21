export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  paperUrl?: string;
  codeUrl?: string;
  citations: number;
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Efficient Retrieval-Augmented Generation via Hierarchical Semantic Indexing",
    authors: ["Alex Chen", "Sarah Kim", "James Liu", "Maria Rodriguez"],
    venue: "NeurIPS 2024",
    year: 2024,
    abstract: "We propose a hierarchical semantic indexing approach for RAG systems that reduces retrieval latency by 60% while improving answer quality by 18% on standard benchmarks. Our method introduces a two-stage retrieval pipeline combining sparse and dense representations.",
    tags: ["RAG", "LLMs", "Information Retrieval"],
    paperUrl: "https://arxiv.org",
    codeUrl: "https://github.com",
    citations: 47,
  },
  {
    id: "2",
    title: "Constitutional AI at Scale: Lessons from Deploying RLHF in Production",
    authors: ["Alex Chen", "David Park", "Emma Wilson"],
    venue: "ICML 2024",
    year: 2024,
    abstract: "This paper presents practical insights from deploying Constitutional AI and RLHF techniques at scale, covering challenges in reward model stability, data quality, and alignment evaluation. We introduce novel metrics for measuring alignment quality in production systems.",
    tags: ["RLHF", "Alignment", "LLMs", "Production ML"],
    paperUrl: "https://arxiv.org",
    citations: 89,
  },
  {
    id: "3",
    title: "Multi-Agent Reinforcement Learning with Emergent Communication Protocols",
    authors: ["Alex Chen", "Yuki Tanaka", "Carlos Mendez", "Lisa Zhang"],
    venue: "NeurIPS 2022",
    year: 2022,
    abstract: "We study emergent communication in cooperative multi-agent systems and demonstrate that agents can develop efficient communication protocols without explicit supervision. Our approach achieves state-of-the-art performance on StarCraft II multi-agent benchmarks.",
    tags: ["Multi-Agent RL", "Emergent Communication", "Game Theory"],
    paperUrl: "https://arxiv.org",
    codeUrl: "https://github.com",
    citations: 312,
  },
  {
    id: "4",
    title: "Curiosity-Driven Exploration via Latent Space Dynamics Models",
    authors: ["Alex Chen", "Robert Brown"],
    venue: "ICLR 2021",
    year: 2021,
    abstract: "We propose a novel intrinsic motivation mechanism based on prediction error in learned latent space dynamics models. Our approach significantly improves sample efficiency in sparse-reward environments and generalizes across diverse task domains.",
    tags: ["Reinforcement Learning", "Exploration", "Representation Learning"],
    paperUrl: "https://arxiv.org",
    codeUrl: "https://github.com",
    citations: 528,
  },
];
