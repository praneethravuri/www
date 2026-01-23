import { ImageResponse } from 'next/og'
import { data } from '@/app/data/resume'

export const runtime = 'edge'

export const alt = `${data.firstName} ${data.lastName} - ${data.title}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            padding: '40px',
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-2px',
            }}
          >
            {data.firstName} {data.lastName}
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: '32px',
              color: '#a0a0a0',
              margin: 0,
            }}
          >
            {data.title}
          </p>

          {/* Tagline */}
          <p
            style={{
              fontSize: '24px',
              color: '#666666',
              margin: 0,
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            {data.taglines.heroTagline.description}
          </p>

          {/* URL */}
          <p
            style={{
              fontSize: '20px',
              color: '#3b82f6',
              margin: 0,
              marginTop: '20px',
            }}
          >
            {data.url.replace('https://', '')}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
