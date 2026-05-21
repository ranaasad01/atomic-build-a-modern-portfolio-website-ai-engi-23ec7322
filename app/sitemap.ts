import { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alexchen.dev";

  const projectRoutes = projects.map((p) => ({
    url: baseUrl + "/projects/" + p.slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: baseUrl + "/projects", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...projectRoutes,
  ];
}
