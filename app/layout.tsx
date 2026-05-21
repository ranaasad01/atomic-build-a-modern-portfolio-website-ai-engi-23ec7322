import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Alex Chen — AI Engineer",
    template: "%s | Alex Chen",
  },
  description:
    "Senior AI Engineer specializing in LLMs, RAG systems, and production ML infrastructure. Previously at Anthropic, OpenAI, and DeepMind.",
  keywords: ["AI Engineer", "Machine Learning", "LLM", "RAG", "PyTorch", "OpenAI", "LangChain"],
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alex Chen — AI Engineer",
    description: "Senior AI Engineer specializing in LLMs, RAG systems, and production ML infrastructure.",
    siteName: "Alex Chen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen — AI Engineer",
    description: "Senior AI Engineer specializing in LLMs, RAG systems, and production ML infrastructure.",
    creator: "@alexchen_ai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0f0f0f] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
