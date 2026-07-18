import type { MetadataRoute } from 'next';
import { getCaseStudyProjects } from '@/content/our-work';

const BASE_URL = 'https://digitalpillars.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.8 },
    { path: '/services', priority: 0.9 },
    { path: '/our-work', priority: 0.8 },
    { path: '/contact', priority: 0.9 },
    { path: '/free-homepage-design', priority: 0.9 },
  ];

  const caseStudies = getCaseStudyProjects().map((p) => ({
    url: `${BASE_URL}/our-work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...routes.map(({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...caseStudies,
  ];
}
