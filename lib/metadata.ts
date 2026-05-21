import type { Metadata } from "next";

export const siteConfig = {
  name: "Alex Chen — AI Engineer",
  shortName: "Alex Chen",
  description:
    "Senior AI Engineer specializing in LLMs, RAG systems, and production ML infrastructure. Previously at Anthropic, OpenAI, and DeepMind.",
  url: "https://alexchen.dev",
  ogImage: "/og-image.jpg",
  twitterHandle: "@alexchen_ai",
  email: "hello@alexchen.dev",
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | Alex Chen",
  },
  description: siteConfig.description,
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "RAG",
    "PyTorch",
    "OpenAI",
    "LangChain",
    "Deep Learning",
    "NLP",
    "Computer Vision",
  ],
  authors: [{ name: "Alex Chen", url: siteConfig.url }],
  creator: "Alex Chen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
