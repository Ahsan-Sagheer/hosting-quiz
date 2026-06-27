import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Web Hosting for Beginners 2026 — Top Picks Compared",
  description: "The best web hosting for beginners in 2026. We compare Bluehost, Hostinger, SiteGround and more — ranked by ease of use, price, and support quality.",
};

const picks = [
  {
    rank: "Best Overall",
    name: "Bluehost Basic",
    price: "$2.95/mo",
    why: "Officially recommended by WordPress.org. Easiest setup for beginners — one-click WordPress install, free domain, 24/7 phone support. If you've never built a site before, start here.",
    pros: ["Free domain for 1 year", "One-click WordPress install", "24/7 phone & chat support", "Easy-to-use control panel"],
    cons: ["Renews at $10.99/mo after first term", "Basic plan limited to 1 website"],
    affiliateUrl: "https://www.bluehost.com",
  },
  {
    rank: "Best Budget Pick",
    name: "Hostinger Premium",
    price: "$2.99/mo",
    why: "The cheapest reliable hosting available. Slightly less beginner-friendly than Bluehost but faster servers and supports up to 100 websites on one plan. Great if you're price-conscious.",
    pros: ["Cheapest on the market", "100 websites on one plan", "AI website builder included", "Fast NVMe SSD storage"],
    cons: ["Support is chat-only (no phone)", "Less established than Bluehost"],
    affiliateUrl: "https://www.hostinger.com",
  },
  {
    rank: "Best Support",
    name: "SiteGround StartUp",
    price: "$3.99/mo",
    why: "Consistently rated #1 for customer support. Slightly more expensive but the help you get when something breaks is worth it. Daily backups mean you can't permanently break your site.",
    pros: ["Best customer support in the industry", "Daily automatic backups", "Fast load times", "Free SSL & CDN"],
    cons: ["More expensive than Bluehost/Hostinger", "1 website on starter plan"],
    affiliateUrl: "https://www.siteground.com/index.htm?afcode=6dadc1a65bc578e8e934b5cd233e43e0",
  },
  {
    rank: "Best Privacy-Focused",
    name: "DreamHost Shared",
    price: "$2.59/mo",
    why: "The most ethical hosting company. No forced upsells, strong privacy policy, 97-day money back guarantee. WordPress.org recommended host. Good if you value transparency.",
    pros: ["97-day money back guarantee", "No forced upsells", "Unlimited storage & bandwidth", "Strong privacy policy"],
    cons: ["No phone support (chat & email only)", "Fewer features than competitors"],
    affiliateUrl: "https://www.dreamhost.com",
  },
];

export default function BestWebHostingForBeginners() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 text-sm hover:text-blue-300">← Take the Hosting Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">Best Web Hosting for Beginners (2026)</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Picking your first web host is confusing — every review site recommends something different. Here's the honest breakdown of what actually matters for beginners and which hosts deliver.
        </p>

        <div className="bg-blue-900/20 border border-blue-800 rounded-2xl p-5 mb-10">
          <p className="text-blue-300 font-semibold mb-1">Not sure which one is right for you?</p>
          <p className="text-zinc-400 text-sm mb-3">Answer 5 questions about your site type, budget, and experience — get a personalized recommendation in 60 seconds.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">What Beginners Actually Need</h2>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            { title: "Easy setup", desc: "One-click WordPress install, no command line required" },
            { title: "Good support", desc: "24/7 chat or phone — you will have questions" },
            { title: "Reasonable price", desc: "Under $5/mo for your first year is realistic" },
            { title: "Free domain", desc: "Most good hosts include a free domain for year 1" },
          ].map((item) => (
            <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <p className="font-bold text-white text-sm mb-1">{item.title}</p>
              <p className="text-zinc-400 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Top Picks for Beginners</h2>
        <div className="space-y-6 mb-12">
          {picks.map((pick) => (
            <div key={pick.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">{pick.rank}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{pick.name}</h3>
                </div>
                <span className="text-xl font-bold text-white">{pick.price}</span>
              </div>
              <p className="text-zinc-400 text-sm mb-4">{pick.why}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-zinc-500 uppercase mb-2">Pros</p>
                  {pick.pros.map((p) => <p key={p} className="text-xs text-green-400 mb-1">✓ {p}</p>)}
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase mb-2">Cons</p>
                  {pick.cons.map((c) => <p key={c} className="text-xs text-zinc-500 mb-1">✗ {c}</p>)}
                </div>
              </div>
              <a href={pick.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
                Get {pick.name} →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Still not sure? Let us pick for you</h3>
          <p className="text-zinc-400 text-sm mb-4">Answer 5 questions and get a recommendation matched to your exact situation — site type, budget, and experience level.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Hosting →
          </Link>
        </div>
      </div>
    </main>
  );
}
