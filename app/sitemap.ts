import { MetadataRoute } from 'next'
import { data } from '@/app/data/resume'

// Update this date whenever you make significant content changes
const LAST_CONTENT_UPDATE = '2026-06-12';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: data.url,
            lastModified: new Date(LAST_CONTENT_UPDATE),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
