import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://hosting-quiz.vercel.app", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://hosting-quiz.vercel.app/guides/best-web-hosting-for-beginners", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://hosting-quiz.vercel.app/guides/bluehost-vs-siteground", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://hosting-quiz.vercel.app/guides/cheapest-web-hosting", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://hosting-quiz.vercel.app/guides/best-wordpress-hosting", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://hosting-quiz.vercel.app/guides/how-to-choose-web-hosting", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
