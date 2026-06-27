import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best WordPress Hosting 2026 — Top Picks for Every Budget",
  description: "The best WordPress hosting in 2026. We compare shared, managed, and cloud WordPress hosts — ranked by speed, support, and value.",
};

const picks = [
  { rank: "Best Budget WordPress Host", name: "Bluehost Basic", price: "$2.95/mo", desc: "Officially recommended by WordPress.org. Easiest way to get a WordPress site live in under 10 minutes. Free domain, one-click install, beginner-friendly dashboard.", url: "https://www.bluehost.com" },
  { rank: "Best Performance (Shared)", name: "SiteGround GrowBig", price: "$6.99/mo", desc: "Faster than Bluehost with built-in caching, daily backups, and staging environments. Best choice if your WordPress site needs to be fast and reliable.", url: "https://www.siteground.com" },
  { rank: "Best Managed WordPress", name: "WP Engine Startup", price: "$20/mo", desc: "Full managed WordPress — automatic updates, security patches, daily backups, expert WordPress support. No shared resources. Your site is the only priority.", url: "https://www.wpengine.com" },
  { rank: "Best Premium Cloud", name: "Kinsta Starter", price: "$35/mo", desc: "Built on Google Cloud infrastructure. Fastest WordPress speeds available. Cloudflare CDN included. For sites where every millisecond of load time matters.", url: "https://www.kinsta.com" },
];

export default function BestWordPressHosting() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 text-sm hover:text-blue-300">← Take the Hosting Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">Best WordPress Hosting (2026)</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Not all WordPress hosting is created equal. The right choice depends on your traffic, budget, and how much you want to manage yourself. Here's the breakdown.
        </p>

        <div className="bg-blue-900/20 border border-blue-800 rounded-2xl p-5 mb-8">
          <p className="text-blue-300 font-semibold mb-1">Not sure which tier you need?</p>
          <p className="text-zinc-400 text-sm mb-3">Answer 5 questions and get a WordPress hosting recommendation matched to your traffic, budget, and technical level.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Shared vs Managed — What's the Difference?</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-blue-400 font-semibold text-sm mb-1">Shared Hosting</p>
              <p className="text-zinc-400 text-xs">Your site shares a server with hundreds of others. Cheaper but slower during traffic spikes. Fine for new sites under 10,000 visitors/month.</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold text-sm mb-1">Managed WordPress</p>
              <p className="text-zinc-400 text-xs">Dedicated resources, automatic WordPress updates, security monitoring. More expensive but zero maintenance. Worth it for business sites.</p>
            </div>
          </div>
        </div>

        <div className="space-y-5 mb-10">
          {picks.map((pick) => (
            <div key={pick.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">{pick.rank}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{pick.name}</h3>
                </div>
                <span className="text-xl font-bold text-white">{pick.price}</span>
              </div>
              <p className="text-zinc-400 text-sm mb-4">{pick.desc}</p>
              <a href={pick.url} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
                Get {pick.name} →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Find your perfect WordPress host</h3>
          <p className="text-zinc-400 text-sm mb-4">Tell us about your site and we'll match you to the right tier — no overspending on managed hosting you don't need.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Hosting →
          </Link>
        </div>
      </div>
    </main>
  );
}
