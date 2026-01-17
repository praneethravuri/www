import { MetadataRoute } from 'next'
import { data } from '@/app/data/resume'

// Keywords: ${data.keywords.join(', ')}

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${data.url}/sitemap.xml`,
    }
}
