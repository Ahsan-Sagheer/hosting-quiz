import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Hosting Quiz — Find the Best Hosting for Your Site",
  description: "Answer 5 quick questions and get a personalized web hosting recommendation. Stop overpaying or underpaying for hosting. Free quiz, instant results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
