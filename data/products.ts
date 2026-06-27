export interface HostingProduct {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  category: "shared" | "managed" | "vps" | "cloud";
  affiliateUrl: string;
  tags: string[];
  specs: Record<string, string>;
  pros: string[];
}

export const products: HostingProduct[] = [
  {
    id: "bluehost-basic",
    name: "Bluehost Basic",
    tagline: "Best for first-time website owners",
    price: "$2.95",
    priceNote: "/mo (renews at $10.99)",
    category: "shared",
    affiliateUrl: "https://www.bluehost.com/track/default/",
    tags: ["beginner", "wordpress", "blog", "low-budget", "portfolio", "business-small"],
    specs: { Websites: "1", Storage: "10 GB SSD", Bandwidth: "Unmetered", "Free Domain": "1 year", SSL: "Free" },
    pros: ["Officially recommended by WordPress", "One-click WordPress install", "Free domain for 1 year", "24/7 support"],
  },
  {
    id: "hostinger-premium",
    name: "Hostinger Premium",
    tagline: "Cheapest reliable hosting available",
    price: "$2.99",
    priceNote: "/mo (renews at $7.99)",
    category: "shared",
    affiliateUrl: "https://www.hostinger.com/web-hosting?REFERRALCODE=affiliate",
    tags: ["beginner", "low-budget", "blog", "portfolio", "multiple-sites"],
    specs: { Websites: "100", Storage: "100 GB SSD", Bandwidth: "Unmetered", "Free Domain": "1 year", SSL: "Free" },
    pros: ["Cheapest on the market", "100 websites on one plan", "Fast load times", "AI website builder included"],
  },
  {
    id: "siteground-growbig",
    name: "SiteGround GrowBig",
    tagline: "Best performance for growing sites",
    price: "$6.99",
    priceNote: "/mo (renews at $29.99)",
    category: "shared",
    affiliateUrl: "https://www.siteground.com/go/affiliate",
    tags: ["intermediate", "wordpress", "business", "growing-traffic", "ecommerce-small"],
    specs: { Websites: "Unlimited", Storage: "20 GB SSD", Bandwidth: "Unmetered", Backups: "Daily", SSL: "Free" },
    pros: ["Top-rated customer support", "Daily automatic backups", "Built-in caching", "Staging environment"],
  },
  {
    id: "siteground-gogeek",
    name: "SiteGround GoGeek",
    tagline: "Advanced features for serious sites",
    price: "$14.99",
    priceNote: "/mo (renews at $54.99)",
    category: "shared",
    affiliateUrl: "https://www.siteground.com/go/affiliate",
    tags: ["intermediate", "developer", "ecommerce", "high-traffic-shared", "multiple-sites"],
    specs: { Websites: "Unlimited", Storage: "40 GB SSD", Bandwidth: "Unmetered", Backups: "Daily", Support: "Priority" },
    pros: ["Priority support queue", "White-label clients", "Advanced developer tools", "Wildcard SSL"],
  },
  {
    id: "wpengine-startup",
    name: "WP Engine Startup",
    tagline: "Best managed WordPress hosting",
    price: "$20",
    priceNote: "/mo",
    category: "managed",
    affiliateUrl: "https://wpengine.com/solution-center/partner/",
    tags: ["wordpress", "managed", "business", "high-traffic", "performance"],
    specs: { Websites: "1", Visits: "25,000/mo", Storage: "10 GB", CDN: "Global", Backups: "Daily" },
    pros: ["Fastest WordPress speeds", "Automatic updates & security", "Genesis Framework included", "Expert WordPress support"],
  },
  {
    id: "kinsta-starter",
    name: "Kinsta Starter",
    tagline: "Premium cloud hosting on Google infrastructure",
    price: "$35",
    priceNote: "/mo",
    category: "cloud",
    affiliateUrl: "https://kinsta.com/affiliate-academy/",
    tags: ["managed", "developer", "high-traffic", "performance", "ecommerce"],
    specs: { Websites: "1", Visits: "25,000/mo", Storage: "10 GB SSD", CDN: "Cloudflare", Uptime: "99.9% SLA" },
    pros: ["Google Cloud infrastructure", "Fastest load times available", "Free Cloudflare CDN", "24/7 expert support"],
  },
  {
    id: "dreamhost-shared",
    name: "DreamHost Shared Starter",
    tagline: "Privacy-focused hosting with no upsells",
    price: "$2.59",
    priceNote: "/mo",
    category: "shared",
    affiliateUrl: "https://www.dreamhost.com/r.cgi/affiliate",
    tags: ["beginner", "blog", "portfolio", "privacy", "low-budget"],
    specs: { Websites: "1", Storage: "Unlimited", Bandwidth: "Unlimited", "Free Domain": "1 year", SSL: "Free" },
    pros: ["97-day money back guarantee", "No forced upsells", "Privacy-focused", "WordPress recommended host"],
  },
  {
    id: "a2-turbo",
    name: "A2 Hosting Turbo",
    tagline: "Up to 20x faster than standard hosting",
    price: "$6.99",
    priceNote: "/mo (renews at $16.99)",
    category: "shared",
    affiliateUrl: "https://www.a2hosting.com/affiliates",
    tags: ["intermediate", "speed", "ecommerce", "wordpress", "business", "growing-traffic"],
    specs: { Websites: "Unlimited", Storage: "Unlimited NVMe", Speed: "Turbo (20x faster)", SSL: "Free", Backups: "Free" },
    pros: ["Turbo servers are noticeably faster", "Anytime money back guarantee", "Free site migration", "NVMe SSD storage"],
  },
];
