import { MetadataRoute } from 'next'
import { data } from '@/app/data/resume'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: data.url,
            lastModified: new Date(data.lastUpdated),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
