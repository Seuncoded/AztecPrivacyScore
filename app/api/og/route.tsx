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
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          background: 'white',
          color: 'black',
        }}
      >
        Aztec Privacy Score
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}