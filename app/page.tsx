'use client';

import { useMemo, useState } from 'react';
import { questions, ResultAdvice } from '@/lib/questions';
import clsx from 'clsx';

export default function HomePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const total = questions.length;
  const progress = Math.round((step / total) * 100);

  const score = useMemo(() => {
    return answers.reduce((acc, val) => acc + val, 0);
  }, [answers]);

  const maxScore = useMemo(() => questions.reduce((a,q)=>a + (q.options.length-1), 0), []);
  const pct = maxScore === 0 ? 0 : Math.round((score / maxScore) * 100);

  const result: ResultAdvice = useMemo(() => {
    if (pct >= 80) return { label: 'Privacy Pro', color: 'text-aztec-lime', tips: [
      'Use Aztec’s private accounts for everyday transactions.',
      'Leverage Noir-based apps for private DeFi.',
      'Run a node or prover to strengthen decentralization.'
    ]};
    if (pct >= 50) return { label: 'Privacy Aware', color: 'text-yellow-300', tips: [
      'Avoid reusing public addresses across apps.',
      'Try Aztec for private swaps and shielded balances.',
      'Consider ZKPassport when joining validator programs.'
    ]};
    return { label: 'Public By Default', color: 'text-red-400', tips: [
      'Stop posting your main address publicly.',
      'Move sensitive activity to Aztec’s privacy layer.',
      'Learn Noir basics to understand selective disclosure.'
    ]};
  }, [pct]);

  const onSelect = (value: number) => {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
  };

  const onNext = () => setStep((s) => Math.min(s + 1, total));
  const onPrev = () => setStep((s) => Math.max(s - 1, 0));
  const onRestart = () => { setAnswers([]); setStep(0); };

  const finished = step >= total;

  return (
    <main>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Aztec Privacy Score</h1>
        <p className="text-aztec-mist mt-2">
          Answer {total} quick questions about your Web3 habits. We’ll rate your privacy and suggest Aztec-powered fixes.
        </p>
      </header>

      {!finished ? (
        <section className="space-y-6">
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-aztec-purple h-2 rounded-full" style={{ width: `${progress}%` }} />
          </div>

          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <div className="text-sm text-aztec-mist mb-2">Question {step + 1} of {total}</div>
            <h2 className="text-xl font-semibold mb-4">{questions[step].title}</h2>
            <ul className="space-y-3">
              {questions[step].options.map((opt, idx) => {
                const active = answers[step] === idx;
                return (
                  <li key={idx}>
                    <button
                      className={clsx(
                        'w-full text-left px-4 py-3 rounded-xl border transition',
                        active
                          ? 'bg-aztec-purple/20 border-aztec-purple'
                          : 'bg-gray-900 border-gray-800 hover:border-aztec-purple/60'
                      )}
                      onClick={() => onSelect(idx)}
                    >
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={onPrev}
                disabled={step === 0}
                className="px-4 py-2 rounded-lg bg-gray-800 text-sm disabled:opacity-40"
              >
                Back
              </button>
              <button
                onClick={onNext}
                className="px-4 py-2 rounded-lg bg-aztec-purple text-white text-sm"
              >
                {step === total - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-2">Your Score: <span className={result.color}>{pct}%</span></h2>
          <p className="text-aztec-mist mb-6">Profile: <span className="text-white">{result.label}</span></p>

          <div className="grid gap-3">
            {result.tips.map((t, i) => (
              <div key={i} className="p-3 rounded-xl bg-gray-900 border border-gray-800">
                {t}
              </div>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <a
              className="text-center px-4 py-2 rounded-lg bg-aztec-purple"
              href="https://aztec.network"
              target="_blank" rel="noreferrer"
            >
              Learn about Aztec
            </a>
            <a
              className="text-center px-4 py-2 rounded-lg bg-aztec-lime text-black"
              href="https://noir-lang.org/"
              target="_blank" rel="noreferrer"
            >
              Explore Noir
            </a>
          </div>

          <button onClick={onRestart} className="mt-6 w-full px-4 py-2 rounded-lg bg-gray-800">Restart</button>
        </section>
      )}
    </main>
  );
}
