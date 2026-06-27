import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose Web Hosting 2026 — Simple Guide for Beginners",
  description: "How to choose web hosting without getting overwhelmed. We explain the 5 things that actually matter and help you avoid the common mistakes beginners make.",
};

const steps = [
  {
    num: "01",
    title: "Know what type of site you're building",
    body: "A personal blog has completely different needs from an ecommerce store. Blog: any shared host will do. Business site: prioritize uptime and support. Ecommerce: you need fast load times and SSL. Getting this wrong means paying for features you don't need.",
  },
  {
    num: "02",
    title: "Pick shared hosting unless you have real traffic",
    body: "New site owners constantly overpay for VPS or managed hosting they don't need. Shared hosting handles up to ~50,000 monthly visitors fine. Only upgrade when you actually hit those limits — not before.",
  },
  {
    num: "03",
    title: "Ignore storage — focus on speed and support",
    body: "Every host advertises 'unlimited storage.' It doesn't matter. What matters is server speed (how fast pages load) and support quality (what happens when something breaks at 11pm). Prioritize these two over everything else.",
  },
  {
    num: "04",
    title: "Check the renewal price, not just the intro price",
    body: "Bluehost advertises $2.95/mo but renews at $10.99. SiteGround advertises $3.99 but renews at $14.99. This is industry-wide. Budget for the renewal price from day one so you're not shocked a year later.",
  },
  {
    num: "05",
    title: "Ignore uptime guarantees — check real reviews",
    body: "Every host claims 99.9% uptime. Few deliver it consistently. Check independent review sites for real user experiences. SiteGround and Kinsta consistently top real uptime tests. Shared budget hosts are more variable.",
  },
];

export default function HowToChooseWebHosting() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 text-sm hover:text-blue-300">← Take the Hosting Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">How to Choose Web Hosting (2026)</h1>
        <p className="text-zinc-400 text-lg mb-10">
          Most hosting guides make this way too complicated. Here are the 5 things that actually matter — everything else is noise.
        </p>

        <div className="bg-blue-900/20 border border-blue-800 rounded-2xl p-5 mb-10">
          <p className="text-blue-300 font-semibold mb-1">Skip the research — answer 5 questions instead</p>
          <p className="text-zinc-400 text-sm mb-3">Our quiz uses your answers to match you to the right host. Takes 60 seconds and beats reading a 4,000-word guide.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        <div className="space-y-8 mb-12">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                {step.num}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">{step.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">Quick Reference: Which Host for What</h2>
          <div className="space-y-2 text-sm">
            {[
              { use: "First blog or personal site", rec: "Bluehost Basic or DreamHost" },
              { use: "Small business website", rec: "SiteGround GrowBig" },
              { use: "WordPress with growing traffic", rec: "SiteGround or A2 Turbo" },
              { use: "Online store (WooCommerce)", rec: "SiteGround GoGeek or WP Engine" },
              { use: "High-traffic or mission-critical site", rec: "WP Engine or Kinsta" },
            ].map((row) => (
              <div key={row.use} className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">{row.use}</span>
                <span className="text-white font-semibold">{row.rec}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Get a specific recommendation</h3>
          <p className="text-zinc-400 text-sm mb-4">Answer 5 questions about your site and we'll tell you exactly which host to use and which plan to pick.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Hosting →
          </Link>
        </div>
      </div>
    </main>
  );
}
