import { ImageResponse } from 'next/og';
import { SITE } from '@/content/site';

export const alt = `${SITE.name} — Web design & software agency, Manchester`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a1424',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '999px',
              background: '#55ccff',
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: '#ffffff',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {SITE.name}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              color: '#ffffff',
              fontWeight: 600,
              maxWidth: '900px',
            }}
          >
            Websites, software & AI that move businesses forward.
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#55ccff',
              letterSpacing: '0.02em',
            }}
          >
            Manchester web design & software agency
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            color: 'rgba(255,255,255,0.45)',
            fontSize: 22,
          }}
        >
          <span>digitalpillars.co.uk</span>
          <span
            style={{
              width: '160px',
              height: '4px',
              background: '#55ccff',
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
