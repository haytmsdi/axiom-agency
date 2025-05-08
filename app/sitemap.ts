import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
    url: 'YOUR_WEBSITE_URL/',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    },
{
    url: 'YOUR_WEBSITE_URL/mentions-legales',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    },
{
    url: 'YOUR_WEBSITE_URL/conditions-d-utilisation',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    },

  ]
}