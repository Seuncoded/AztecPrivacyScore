import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aztec Privacy Score',
  description: 'A quick quiz that rates your on-chain privacy and gives Aztec fixes.',
  openGraph: {
    title: 'Aztec Privacy Score',
    description: 'Rate your on-chain privacy and get Aztec fixes.',
    url: 'https://aztec-privacy-score.vercel.app',
    siteName: 'Aztec Privacy Score',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-aztec-ink text-white antialiased">
        <div className="max-w-3xl mx-auto px-4 py-8">{children}</div>
        <footer className="text-center text-sm text-aztec-mist py-8">
          Built by the community • Not affiliated with Aztec Labs
        </footer>
      </body>
    </html>
  );
}
