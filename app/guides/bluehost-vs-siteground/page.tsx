import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bluehost vs SiteGround 2026 — Which Is Better?",
  description: "Bluehost vs SiteGround — an honest comparison of price, speed, support, and features. We tell you which one to pick based on your situation.",
};

const comparison = [
  { category: "Price (intro)", bluehost: "$2.95/mo", siteground: "$3.99/mo", winner: "bluehost" },
  { category: "Price (renewal)", bluehost: "$10.99/mo", siteground: "$14.99/mo", winner: "bluehost" },
  { category: "Customer support", bluehost: "Good — 24/7 phone & chat", siteground: "Excellent — rated #1 in industry", winner: "siteground" },
  { category: "Speed & performance", bluehost: "Good", siteground: "Faster — better caching built-in", winner: "siteground" },
  { category: "Automatic backups", bluehost: "Paid add-on", siteground: "Free daily backups", winner: "siteground" },
  { category: "Free domain", bluehost: "Yes — 1 year free", siteground: "No free domain", winner: "bluehost" },
  { category: "WordPress ease", bluehost: "One-click install, WP dashboard", siteground: "One-click install, staging included", winner: "tie" },
  { category: "Uptime", bluehost: "99.9%", siteground: "99.99%", winner: "siteground" },
];

export default function BluehostVsSiteground() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 text-sm hover:text-blue-300">← Take the Hosting Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">Bluehost vs SiteGround (2026)</h1>
        <p className="text-zinc-400 text-lg mb-10">
          These are the two most-recommended WordPress hosts — but they serve different needs. Here's the honest comparison with a clear verdict.
        </p>

        <div className="bg-blue-900/20 border border-blue-800 rounded-2xl p-5 mb-10">
          <p className="text-blue-300 font-semibold mb-1">Want a personalized recommendation?</p>
          <p className="text-zinc-400 text-sm mb-3">Answer 5 questions and we'll tell you which one fits your specific situation.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Head to Head</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-10">
          <div className="grid grid-cols-4 bg-zinc-800 px-4 py-3 text-xs font-bold text-zinc-400 uppercase tracking-widest">
            <span>Category</span>
            <span>Bluehost</span>
            <span>SiteGround</span>
            <span>Winner</span>
          </div>
          {comparison.map((row) => (
            <div key={row.category} className="grid grid-cols-4 px-4 py-3 border-t border-zinc-800 text-sm">
              <span className="text-zinc-400 font-medium">{row.category}</span>
              <span className={row.winner === "bluehost" ? "text-green-400 font-semibold" : "text-zinc-300"}>{row.bluehost}</span>
              <span className={row.winner === "siteground" ? "text-green-400 font-semibold" : "text-zinc-300"}>{row.siteground}</span>
              <span className="text-zinc-500 text-xs">
                {row.winner === "bluehost" ? "🔵 Bluehost" : row.winner === "siteground" ? "🟢 SiteGround" : "Tie"}
              </span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">The Verdict</h2>
        <div className="grid grid-cols-1 gap-4 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
            <p className="text-blue-400 font-bold mb-2">Choose Bluehost if:</p>
            <p className="text-zinc-400 text-sm">You want the cheapest option, a free domain, and an easy beginner experience. Best for first-time site owners on a tight budget.</p>
            <a href="https://www.bluehost.com" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
              Get Bluehost →
            </a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
            <p className="text-green-400 font-bold mb-2">Choose SiteGround if:</p>
            <p className="text-zinc-400 text-sm">You want better performance, daily backups, and best-in-class support. Worth the extra $1-2/mo if your site matters to your business.</p>
            <a href="https://www.siteground.com/index.htm?afcode=6dadc1a65bc578e8e934b5cd233e43e0" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
              Get SiteGround →
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Still deciding? Take 60 seconds</h3>
          <p className="text-zinc-400 text-sm mb-4">Our quiz asks about your site type, budget, and traffic to give you a definitive answer.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Hosting →
          </Link>
        </div>
      </div>
    </main>
  );
}
