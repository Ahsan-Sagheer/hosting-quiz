import { products, HostingProduct } from "@/data/products";
import { QuizAnswer } from "@/data/quiz";

export interface Recommendation {
  product: HostingProduct;
  score: number;
  reason: string;
}

function buildTags(answers: QuizAnswer): string[] {
  const tags: string[] = [];

  if (answers.siteType) tags.push(answers.siteType);
  if (answers.techLevel) tags.push(answers.techLevel);
  if (answers.budget === "low") tags.push("low-budget");
  if (answers.budget === "high") tags.push("performance", "managed");
  if (answers.traffic === "medium") tags.push("growing-traffic");
  if (answers.traffic === "high") tags.push("high-traffic");
  if (answers.needsWordPress === "yes") tags.push("wordpress");
  if (answers.needsEcommerce === "yes") tags.push("ecommerce");

  return tags;
}

function buildReason(product: HostingProduct, answers: QuizAnswer): string {
  if (answers.techLevel === "beginner" && product.tags.includes("beginner")) {
    return `Perfect for beginners — easy setup, no technical knowledge needed.`;
  }
  if (answers.needsWordPress === "yes" && product.tags.includes("wordpress")) {
    return `Officially recommended for WordPress with one-click install.`;
  }
  if (answers.budget === "low" && product.tags.includes("low-budget")) {
    return `Best value at the price — reliable hosting without breaking the bank.`;
  }
  if (answers.budget === "high" && product.category === "managed") {
    return `Premium managed hosting — maximum performance, zero maintenance headaches.`;
  }
  if (answers.traffic === "high" && product.tags.includes("high-traffic")) {
    return `Built for high traffic — won't slow down or crash as you grow.`;
  }
  if (answers.siteType === "ecommerce" && product.tags.includes("ecommerce")) {
    return `Optimized for ecommerce — fast load times mean higher conversion rates.`;
  }
  if (answers.techLevel === "developer") {
    return `Developer-friendly with full control and advanced configuration options.`;
  }
  return `Strong match for your site type, budget, and traffic expectations.`;
}

export function getRecommendations(answers: QuizAnswer): Recommendation[] {
  const userTags = buildTags(answers);

  const scored = products.map((product) => {
    let score = 0;
    for (const tag of userTags) {
      if (product.tags.includes(tag)) score += 2;
    }

    // Penalize managed/premium for low budget
    if (answers.budget === "low" && product.category === "managed") score -= 6;
    if (answers.budget === "low" && product.category === "cloud") score -= 6;

    // Penalize shared for high traffic
    if (answers.traffic === "high" && product.category === "shared") score -= 4;

    // Boost managed for high budget
    if (answers.budget === "high" && product.category !== "shared") score += 3;

    return {
      product,
      score,
      reason: buildReason(product, answers),
    };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}
