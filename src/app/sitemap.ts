import type { MetadataRoute } from 'next';
import { allRoutes } from '@/lib/site-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://primestackus.com';
  const now = new Date();

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.split('/').length <= 2 ? 0.8 : 0.7,
  }));
}
