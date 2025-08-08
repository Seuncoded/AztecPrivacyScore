'use client';
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';

export default function ScoreCard({
  pct,
  label,
  tips
}: { pct: number; label: string; tips: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const download = async () => {
    if (!ref.current) return;
    const dataUrl = await htmlToImage.toPng(ref.current, { pixelRatio: 2 });
    const a = document.createElement('a');
    a.download = `aztec-privacy-score-${pct}.png`;
    a.href = dataUrl;
    a.click();
  };

  const tweet = async () => {
    if (!ref.current) return;
    const dataUrl = await htmlToImage.toPng(ref.current, { pixelRatio: 2 });
    // Upload flow: open tweet with text; user can attach image manually.
    const text = encodeURIComponent(
      `My Aztec Privacy Score: ${pct}% (${label}).\nBuild private by default with @aztecnetwork.`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    // Optional: also auto-download so they can attach the PNG quickly
    const a = document.createElement('a');
    a.download = `aztec-privacy-score-${pct}.png`;
    a.href = dataUrl;
    a.click();
  };

  return (
    <div className="space-y-4">
      <div
        ref={ref}
        className="w-[900px] max-w-full mx-auto rounded-2xl p-6"
        style={{
          background:
            'linear-gradient(135deg, var(--aztec-dark) 0%, var(--aztec-mid) 100%)',
          color: 'white',
          boxShadow: '0 10px 40px rgba(0,0,0,.35)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Aztec Privacy Score</h3>
          <span
            className="px-3 py-1 rounded-lg text-black"
            style={{ backgroundColor: 'var(--aztec-lavender)' }}
          >
            @aztecnetwork
          </span>
        </div>

        {/* Big score */}
        <div className="flex items-baseline gap-3">
          <div className="text-6xl font-extrabold">{pct}%</div>
          <div className="text-aztec-light text-lg">{label}</div>
        </div>

        {/* Meter */}
        <div className="mt-5 h-3 rounded-full bg-black/30 overflow-hidden">
          <div
            className="h-3"
            style={{
              width: `${pct}%`,
              backgroundColor: 'var(--aztec-light)',
            }}
          />
        </div>

       

        {/* Footer */}
        <div className="mt-6 text-sm text-aztec-lavender/90">
    
        </div>
      </div>

      <div className="flex gap-3">
        <button className="btn btn-primary" onClick={download}>
          Download scorecard
        </button>
        <button className="btn bg-aztec-lavender text-black" onClick={tweet}>
          Share on X
        </button>
      </div>
    </div>
  );
}