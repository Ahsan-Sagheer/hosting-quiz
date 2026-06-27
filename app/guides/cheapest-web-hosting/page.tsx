import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cheapest Web Hosting 2026 — Reliable Hosts Under $3/mo",
  description: "The cheapest web hosting plans in 2026 that are actually reliable. We compare Hostinger, Bluehost, DreamHost and more — ranked by real value.",
};

const hosts = [
  { name: "Hostinger Premium", price: "$2.99/mo", renewal: "$7.99/mo", storage: "100 GB SSD", sites: "100", verdict: "Cheapest reliable option. Fast servers, generous limits, AI builder included.", url: "https://www.hostinger.com" },
  { name: "DreamHost Shared", price: "$2.59/mo", renewal: "$7.99/mo", storage: "Unlimited", sites: "1", verdict: "Cheapest on the list. Unlimited storage, 97-day refund, but only 1 website.", url: "https://www.dreamhost.com" },
  { name: "Bluehost Basic", price: "$2.95/mo", renewal: "$10.99/mo", storage: "10 GB SSD", sites: "1", verdict: "Slightly pricier renewal but free domain + WordPress recommendation makes it worth it.", url: "https://www.bluehost.com" },
  { name: "SiteGround StartUp", price: "$3.99/mo", renewal: "$14.99/mo", storage: "10 GB SSD", sites: "1", verdict: "Most expensive here but the best support and daily backups justify it.", url: "https://www.siteground.com/index.htm?afcode=6dadc1a65bc578e8e934b5cd233e43e0" },
];

export default function CheapestWebHosting() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 text-sm hover:text-blue-300">← Take the Hosting Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">Cheapest Web Hosting (2026)</h1>
        <p className="text-zinc-400 text-lg mb-8">
          You don't need to spend more than $3/mo to get solid web hosting. Here's what's actually worth it at the budget end of the market.
        </p>

        <div className="bg-yellow-900/20 border border-yellow-800 rounded-2xl p-5 mb-10">
          <p className="text-yellow-300 font-semibold mb-1">Warning: cheap isn't always cheap</p>
          <p className="text-zinc-400 text-sm">Most "cheap" hosting plans renew at 3-4x the intro price after year 1. We've listed real renewal prices below so you know exactly what you're getting into.</p>
        </div>

        <div className="space-y-4 mb-10">
          {hosts.map((host, i) => (
            <div key={host.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  {i === 0 && <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Best Value</span>}
                  <h3 className="text-lg font-bold text-white">{host.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-white">{host.price}</p>
                  <p className="text-xs text-zinc-500">renews at {host.renewal}</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs text-zinc-400 mb-3">
                <span>Storage: {host.storage}</span>
                <span>Sites: {host.sites}</span>
              </div>
              <p className="text-zinc-400 text-sm mb-3">{host.verdict}</p>
              <a href={host.url} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
                Get {host.name} →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Find the best option for your situation</h3>
          <p className="text-zinc-400 text-sm mb-4">Our quiz matches you to the right host based on your budget, site type, and experience — not just the cheapest price.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Take the Free Quiz →
          </Link>
        </div>
      </div>
    </main>
  );
}
