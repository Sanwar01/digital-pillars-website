import type { MetadataRoute } from "next";

const BASE_URL = "https://digitalpillars.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/our-work", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    { path: "/free-homepage-concept", priority: 0.9 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
