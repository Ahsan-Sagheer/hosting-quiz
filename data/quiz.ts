export interface QuizOption {
  label: string;
  value: string;
  tags: string[];
}

export interface QuizStep {
  id: string;
  question: string;
  options: QuizOption[];
  dependsOn?: { field: keyof QuizAnswer; value: string | boolean };
}

export interface QuizAnswer {
  siteType: string;
  techLevel: string;
  budget: string;
  traffic: string;
  needsWordPress: string;
  needsEcommerce: string;
}

export const defaultAnswers: QuizAnswer = {
  siteType: "",
  techLevel: "",
  budget: "",
  traffic: "",
  needsWordPress: "",
  needsEcommerce: "",
};

export const quizSteps: QuizStep[] = [
  {
    id: "siteType",
    question: "What kind of website are you building?",
    options: [
      { label: "Blog or personal site", value: "blog", tags: ["blog"] },
      { label: "Business website", value: "business", tags: ["business"] },
      { label: "Online store", value: "ecommerce", tags: ["ecommerce"] },
      { label: "Portfolio or resume", value: "portfolio", tags: ["portfolio"] },
    ],
  },
  {
    id: "techLevel",
    question: "How technical are you?",
    options: [
      { label: "Complete beginner — never built a site", value: "beginner", tags: ["beginner"] },
      { label: "Some experience — set up a site before", value: "intermediate", tags: ["intermediate"] },
      { label: "Developer — comfortable with code", value: "developer", tags: ["developer"] },
    ],
  },
  {
    id: "budget",
    question: "What's your monthly hosting budget?",
    options: [
      { label: "As cheap as possible (under $5/mo)", value: "low", tags: ["low-budget"] },
      { label: "Mid-range ($5–$20/mo)", value: "mid", tags: [] },
      { label: "Premium ($20+/mo) for best performance", value: "high", tags: ["performance"] },
    ],
  },
  {
    id: "traffic",
    question: "How much traffic do you expect?",
    options: [
      { label: "Just starting out — under 1,000/mo", value: "low", tags: [] },
      { label: "Growing — 1,000 to 50,000/mo", value: "medium", tags: ["growing-traffic"] },
      { label: "Established — 50,000+/mo", value: "high", tags: ["high-traffic"] },
    ],
  },
  {
    id: "needsWordPress",
    question: "Are you using WordPress?",
    options: [
      { label: "Yes — I want WordPress", value: "yes", tags: ["wordpress"] },
      { label: "No — using something else or not sure", value: "no", tags: [] },
    ],
  },
  {
    id: "needsEcommerce",
    question: "Do you need to sell products online?",
    dependsOn: { field: "siteType", value: "ecommerce" },
    options: [
      { label: "Yes — WooCommerce or similar", value: "yes", tags: ["ecommerce"] },
      { label: "No — just a regular site", value: "no", tags: [] },
    ],
  },
];
