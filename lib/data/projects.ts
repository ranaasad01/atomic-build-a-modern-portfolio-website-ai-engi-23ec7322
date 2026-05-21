export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
  techStack: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "neural-code-assistant",
    title: "Neural Code Assistant",
    shortDescription: "An AI-powered coding assistant built on GPT-4 with RAG pipeline for codebase-aware completions.",
    description: "Neural Code Assistant is a production-grade AI coding tool that leverages GPT-4 with a custom Retrieval-Augmented Generation (RAG) pipeline. It indexes entire codebases using vector embeddings, enabling context-aware completions, refactoring suggestions, and bug detection. The system processes over 50,000 tokens of context per query and achieves sub-200ms latency through intelligent caching and streaming.",
    tags: ["LLM", "RAG", "Python", "OpenAI"],
    image: "https://miro.medium.com/1*aoqgUtJB7ZYcb-8La8SgMQ.jpeg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    year: 2024,
    techStack: ["Python", "FastAPI", "OpenAI GPT-4", "LangChain", "Pinecone", "React", "TypeScript"],
    highlights: [
      "Reduced developer onboarding time by 40% in pilot teams",
      "Processes 50K+ token context windows with streaming output",
      "Sub-200ms p95 latency via intelligent semantic caching",
      "Deployed to 500+ developers across 3 enterprise clients",
    ],
  },
  {
    slug: "multimodal-document-intelligence",
    title: "Multimodal Document Intelligence",
    shortDescription: "End-to-end document understanding system combining vision transformers and LLMs for enterprise data extraction.",
    description: "A sophisticated document intelligence platform that combines vision transformers (ViT) with large language models to extract, classify, and reason over complex enterprise documents including PDFs, invoices, contracts, and medical records. The system achieves 97.3% extraction accuracy on benchmark datasets and processes 10,000+ documents per hour.",
    tags: ["Computer Vision", "NLP", "PyTorch", "Transformers"],
    image: "https://website-artificio.s3.us-west-2.amazonaws.com/Multimodal_AI_Processing_Comparison_76ab4daf52.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    year: 2024,
    techStack: ["Python", "PyTorch", "Hugging Face", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    highlights: [
      "97.3% extraction accuracy on FUNSD and CORD benchmarks",
      "Processes 10,000+ documents per hour at scale",
      "Supports 15+ document types across 8 languages",
      "Reduced manual data entry costs by $2M annually for clients",
    ],
  },
  {
    slug: "autonomous-research-agent",
    title: "Autonomous Research Agent",
    shortDescription: "Multi-agent system that autonomously conducts literature reviews, synthesizes findings, and generates research reports.",
    description: "An autonomous multi-agent research system built with LangGraph that orchestrates specialized agents for web search, paper retrieval, fact verification, and synthesis. The system can conduct comprehensive literature reviews on any topic, cross-reference findings across sources, identify research gaps, and produce structured reports with citations — all without human intervention.",
    tags: ["Agents", "LangChain", "LangGraph", "OpenAI"],
    image: "https://images.squarespace-cdn.com/content/v1/62b77e2ce2167d0a410b2893/215680f3-a377-431e-aa41-759277925777/Map+of+AI+Collab+Models+-+final.png",
    githubUrl: "https://github.com",
    featured: true,
    year: 2023,
    techStack: ["Python", "LangGraph", "LangChain", "OpenAI", "Tavily", "Arxiv API", "FastAPI", "Streamlit"],
    highlights: [
      "Reduces literature review time from weeks to hours",
      "Orchestrates 6 specialized sub-agents in parallel",
      "Integrates with 5+ academic databases and search engines",
      "Generates structured reports with 95%+ citation accuracy",
    ],
  },
  {
    slug: "real-time-anomaly-detection",
    title: "Real-Time Anomaly Detection",
    shortDescription: "Streaming ML pipeline for detecting anomalies in financial transactions with sub-10ms inference latency.",
    description: "A high-performance anomaly detection system for financial fraud prevention that processes millions of transactions per second using a hybrid approach combining isolation forests, autoencoders, and gradient boosting. The system adapts to concept drift in real-time and maintains a false positive rate below 0.1% while catching 99.2% of fraudulent transactions.",
    tags: ["MLOps", "Streaming", "Scikit-learn", "Kafka"],
    image: "https://miro.medium.com/1*oKfAPrtX8XzWbVLqncfebA.jpeg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    year: 2023,
    techStack: ["Python", "Apache Kafka", "Scikit-learn", "XGBoost", "PyTorch", "Redis", "Kubernetes", "Prometheus"],
    highlights: [
      "Processes 2M+ transactions per second at peak load",
      "Sub-10ms inference latency at p99",
      "99.2% fraud detection rate with <0.1% false positives",
      "Saved $15M+ in prevented fraud in first year",
    ],
  },
  {
    slug: "llm-fine-tuning-platform",
    title: "LLM Fine-Tuning Platform",
    shortDescription: "Self-hosted platform for fine-tuning open-source LLMs with LoRA/QLoRA on custom datasets.",
    description: "A comprehensive platform for fine-tuning large language models using parameter-efficient techniques (LoRA, QLoRA, DoRA). The platform provides a web UI for dataset management, training configuration, experiment tracking, and model evaluation. Supports Llama 3, Mistral, Phi-3, and Gemma model families with distributed training across multiple GPUs.",
    tags: ["Fine-tuning", "LoRA", "PyTorch", "Hugging Face"],
    image: "https://www.kubeflow.org/docs/components/trainer/legacy-v1/images/fine-tune-llm-api.drawio.svg",
    githubUrl: "https://github.com",
    featured: false,
    year: 2024,
    techStack: ["Python", "PyTorch", "Hugging Face PEFT", "Weights & Biases", "FastAPI", "React", "Docker", "CUDA"],
    highlights: [
      "Supports 10+ open-source model families",
      "Reduces fine-tuning cost by 80% vs full fine-tuning",
      "Integrated experiment tracking with W&B",
      "One-click deployment to Hugging Face Hub",
    ],
  },
  {
    slug: "conversational-ai-platform",
    title: "Conversational AI Platform",
    shortDescription: "Enterprise chatbot platform with multi-turn memory, tool use, and seamless human handoff.",
    description: "A production-ready conversational AI platform that powers customer-facing chatbots for enterprise clients. Features include persistent multi-turn conversation memory, dynamic tool use (web search, database queries, API calls), sentiment analysis, intent classification, and seamless escalation to human agents. Built with a microservices architecture for horizontal scaling.",
    tags: ["Chatbot", "NLP", "LangChain", "FastAPI"],
    image: "https://cdn.prod.website-files.com/634e928d7acf0e5b9297c41b/660d1bcf891be1fa9ae30b5f_What%20is%20conversational%20AI.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    year: 2023,
    techStack: ["Python", "LangChain", "OpenAI", "FastAPI", "PostgreSQL", "Redis", "WebSocket", "React"],
    highlights: [
      "Handles 100K+ concurrent conversations",
      "95% intent classification accuracy",
      "Reduces support ticket volume by 60%",
      "Deployed across 20+ enterprise clients",
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getAllTags = () => Array.from(new Set(projects.flatMap((p) => p.tags)));
