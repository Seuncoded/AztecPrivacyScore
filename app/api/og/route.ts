import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          background: '#16161A',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 56,
          fontWeight: 800
        }}
      >
        Aztec Privacy Score
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
