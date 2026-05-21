export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Kim",
    role: "VP of Engineering",
    company: "Anthropic",
    avatar: "https://www.mskcc.org/sites/default/files/styles/width_600/public/node/251816/3x2/kim-sarah-220824-055_1200x800.jpg",
    quote: "Alex is one of the most technically brilliant AI engineers I've worked with. Their ability to translate cutting-edge research into production systems is unmatched. The RAG infrastructure they built handles millions of queries daily with remarkable reliability.",
  },
  {
    id: "2",
    name: "James Liu",
    role: "Research Director",
    company: "OpenAI",
    avatar: "https://www.moffitt.org/globalassets/images/providers_bio/LiuJames_19911.jpg",
    quote: "Working with Alex on the GPT-4 evaluation framework was a highlight of my career. They brought both deep technical expertise and creative problem-solving to every challenge. Their contributions to our RLHF pipeline were genuinely groundbreaking.",
  },
  {
    id: "3",
    name: "Dr. Maria Rodriguez",
    role: "Principal Scientist",
    company: "DeepMind",
    avatar: "https://imagedelivery.net/pBkSB-k515C9gRCTMywwMg/38c74848-b372-4571-74a6-c4508ce63000/500x500",
    quote: "Alex's work on multi-agent reinforcement learning during their time at DeepMind was exceptional. They published three top-tier papers and mentored junior researchers with patience and clarity. A true leader in the AI research community.",
  },
  {
    id: "4",
    name: "David Park",
    role: "CTO",
    company: "AI Startup (YC W23)",
    avatar: "https://upload.wikimedia.org/wikipedia/en/3/38/David_Park%2C_American_painter.jpeg",
    quote: "We hired Alex as a consultant to build our LLM infrastructure from scratch. In 3 months, they delivered a production system that handles 100K+ daily users. Their expertise in RAG, fine-tuning, and MLOps saved us 6 months of development time.",
  },
];
