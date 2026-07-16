import type { MetadataRoute } from "next";

import { siteConfig } from "./seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/our-brands", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/product", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
  {
    path: "/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/terms-and-conditions",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(siteConfig.url);
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
