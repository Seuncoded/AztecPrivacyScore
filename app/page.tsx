'use client';

import { useEffect, useMemo, useState } from 'react';
import type { allQuestions } from '../lib/questions';
import { getRandomQuestions, ResultAdvice } from '../lib/questions';
import clsx from 'clsx';
import ScoreCard from './components/ScoreCard';

type Question = typeof allQuestions[number];

export default function HomePage() {
  // --- state ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // --- effects (client-only randomization) ---
  useEffect(() => {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    const seed = buf[0];
    setQuestions(getRandomQuestions(8, seed));
  }, []);

  // --- derived values (hooks run every render) ---
  const total = questions.length;

  const score = useMemo(() => answers.reduce((a, v) => a + v, 0), [answers]);
  const maxScore = useMemo(
    () => questions.reduce((a, q) => a + (q.options.length - 1), 0),
    [questions]
  );
  const pct = maxScore === 0 ? 0 : Math.round((score / maxScore) * 100);
  const progress = total === 0 ? 0 : Math.round((step / total) * 100);

  const result: ResultAdvice = useMemo(() => {
    if (pct >= 80)
      return {
        label: 'Privacy Pro',
        color: 'text-aztec-lavender',
        tips: [
          'Use Aztec private accounts for daily transactions.',
          'Leverage Noir apps for private DeFi.',
          'Run a node/prover to strengthen decentralization.',
        ],
      };
    if (pct >= 50)
      return {
        label: 'Privacy Aware',
        color: 'text-aztec-light',
        tips: [
          'Avoid reusing public addresses.',
          'Try Aztec for private swaps and shielded balances.',
          'Use ZKPassport for human proofs where needed.',
        ],
      };
    return {
      label: 'Public By Default',
      color: 'text-red-300',
      tips: [
        'Stop posting your main address publicly.',
        'Move sensitive activity to Aztec’s privacy layer.',
        'Learn Noir basics for selective disclosure.',
      ],
    };
  }, [pct]);

  // --- handlers ---
  const onSelect = (value: number) => {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
  };
  const onNext = () => setStep((s) => (s >= total - 1 ? total : s + 1));
  const onPrev = () => setStep((s) => Math.max(s - 1, 0));
  const onRestart = () => location.reload();

  // --- render while loading ---
  if (total === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-aztec-light">Loading…</p>
      </main>
    );
  }

  const finished = step >= total;
  const hasAnswer = answers[step] !== undefined;

  return (
    <main className="min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Aztec Privacy Score</h1>
        <p className="mt-2 text-aztec-light">
          Answer {total} quick questions about your Web3 habits. We’ll rate your privacy.
        </p>
      </header>

      {!finished ? (
        <section className="space-y-6">
          {/* Progress */}
          <div className="progress">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>

          {/* Question Card */}
          <div className="card p-6">
            <div className="text-sm text-aztec-light mb-2">
              Question {step + 1} of {total}
            </div>
            <h2 className="text-xl font-semibold mb-4">
              {questions[step].title}
            </h2>

            <ul className="space-y-3">
              {questions[step].options.map((opt, idx) => {
                const active = answers[step] === idx;
                return (
                  <li key={idx}>
                    <button
                      className={clsx(
                        'w-full text-left px-4 py-3 rounded-xl border transition',
                        active
                          ? 'border-aztec-mid bg-aztec-mid/20'
                          : 'border-gray-800 bg-black/20 hover:border-aztec-light'
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
                className="btn bg-black/30 border border-gray-800 disabled:opacity-40"
              >
                Back
              </button>
              <button
                onClick={onNext}
                disabled={!hasAnswer}
                className="btn btn-primary disabled:opacity-40"
              >
                {step >= total - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="space-y-6">
          {/* Shareable ScoreCard */}
          <ScoreCard pct={pct} label={result.label} tips={result.tips} />

          {/* Actions */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">
              Your Score: <span className={result.color}>{pct}%</span>
            </h3>
            <p className="text-aztec-light mb-4">
              Profile: <span className="text-white">{result.label}</span>
            </p>

            <div className="grid gap-3">
              {result.tips.map((t, i) => (
                <div key={i} className="rounded-xl border border-gray-800 bg-black/20 p-3">
                  {t}
                </div>
              ))}
            </div>

            <button
              onClick={onRestart}
              className="btn mt-6 bg-black/30 border border-gray-800 w-full"
            >
              Restart (new questions)
            </button>
          </div>
        </section>
      )}

      <footer className="text-center text-sm text-aztec-light py-8">

      </footer>
    </main>
  );
}