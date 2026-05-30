import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://primestack.dev';
  const now = new Date();

  const routes = [
    '',
    '/services',
    '/services/ai-automation',
    '/services/custom-software',
    '/services/odoo-development',
    '/services/crm-erp',
    '/industries',
    '/industries/restaurants',
    '/industries/hvac',
    '/industries/contractors',
    '/industries/retail',
    '/success-stories',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/') ? 0.7 : 0.8,
  }));
}
