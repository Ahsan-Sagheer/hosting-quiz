"use client";

import { useState } from "react";
import { quizSteps, QuizAnswer, defaultAnswers } from "@/data/quiz";
import { getRecommendations, Recommendation } from "@/lib/recommend";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswer>(defaultAnswers);
  const [step, setStep] = useState(0);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [done, setDone] = useState(false);

  const visibleSteps = quizSteps.filter((s) => {
    if (!s.dependsOn) return true;
    return answers[s.dependsOn.field] === s.dependsOn.value;
  });

  const currentStep = visibleSteps[step];

  function handleAnswer(value: string, tags: string[]) {
    const newAnswers = { ...answers, [currentStep.id]: value };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (step + 1 < visibleSteps.length) {
        setStep(step + 1);
      } else {
        const recs = getRecommendations(newAnswers);
        setRecommendations(recs);
        setDone(true);
      }
    }, 300);
  }

  function restart() {
    setAnswers(defaultAnswers);
    setStep(0);
    setDone(false);
    setStarted(false);
  }

  if (done) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-2">Your Best Hosting Options</h1>
            <p className="text-zinc-400">Matched to your site type, budget, and experience level</p>
          </div>

          <div className="space-y-5 mb-8">
            {recommendations.map((rec, i) => (
              <div key={rec.product.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {i === 0 && <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Top Pick</span>}
                    {i === 1 && <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Runner Up</span>}
                    {i === 2 && <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Also Consider</span>}
                    <h3 className="text-xl font-bold text-white mt-1">{rec.product.name}</h3>
                    <p className="text-zinc-500 text-sm">{rec.product.tagline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{rec.product.price}</p>
                    <p className="text-xs text-zinc-500">{rec.product.priceNote}</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm italic mb-4">{rec.reason}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(rec.product.specs).map(([k, v]) => (
                    <span key={k} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full">{k}: {v}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-1 mb-4">
                  {rec.product.pros.map((p) => (
                    <p key={p} className="text-xs text-green-400">✓ {p}</p>
                  ))}
                </div>
                <a
                  href={rec.product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Get {rec.product.name} →
                </a>
              </div>
            ))}
          </div>

          <button onClick={restart} className="w-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 py-3 rounded-xl transition-colors">
            Retake Quiz
          </button>
        </div>
      </main>
    );
  }

  if (!started) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-lg w-full">
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Free · 5 questions · 60 seconds
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
              Which web host should<br /><span className="text-blue-500">you actually use?</span>
            </h1>
            <p className="text-zinc-400 text-base">
              Stop reading 5,000-word reviews. Answer 5 quick questions about your site and get a recommendation matched to your exact situation.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 mb-6">
            <p className="text-xs text-zinc-500 uppercase font-semibold tracking-widest mb-3">Example result</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-green-400 font-semibold uppercase">Top Pick</p>
                <p className="text-white font-semibold text-sm">Bluehost Basic</p>
                <p className="text-zinc-500 text-xs">Chosen for: beginner, WordPress, low budget</p>
              </div>
              <span className="text-white font-bold">$2.95/mo</span>
            </div>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl transition-colors"
          >
            Find My Hosting →
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <div className="text-center pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold text-white mb-1">Web Hosting <span className="text-blue-500">Quiz</span></h1>
        <p className="text-zinc-400 text-sm">Answer a few questions, get your perfect host</p>
      </div>

      <div className="max-w-xl mx-auto w-full px-4 mb-6">
        <div className="flex justify-between text-xs text-zinc-500 mb-1">
          <span>Question {step + 1} of {visibleSteps.length}</span>
          <span className="text-blue-400 font-semibold">
            {visibleSteps.length - step - 1 === 0 ? "Last question!" : `${visibleSteps.length - step - 1} left`}
          </span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / visibleSteps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="max-w-xl mx-auto w-full px-4 flex-1">
        <h2 className="text-xl font-bold text-white mb-6">{currentStep.question}</h2>
        <div className="space-y-3">
          {currentStep.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value, option.tags)}
              className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-150 font-medium
                ${answers[currentStep.id as keyof QuizAnswer] === option.value
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-zinc-900 border-zinc-700 text-zinc-200 hover:border-blue-500 hover:bg-zinc-800"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
        {step > 0 && (
          <button onClick={() => setStep(step - 1)} className="mt-6 text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
            ← Back
          </button>
        )}
      </div>
    </main>
  );
}
