import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chirag-portfolio-v3.netlify.app';

  // Core routes
  const routes = [
    '',
    '/work',
    '/about',
    '/services',
    '/lab',
    '/contact',
    '/resume',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: project.flagship || project.featured ? 0.9 : 0.7,
  }));

  return [...routes, ...projectRoutes];
}
