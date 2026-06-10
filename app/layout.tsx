import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global J1 Careers | J1 Visa Hospitality Jobs in the USA",
  description: "We help international students get J1 visa positions at top U.S. hotels and restaurants. Founded by Kranthi, a chef who came to the U.S. on a J1 visa himself.",
  keywords: "J1 visa jobs, hospitality jobs USA, culinary extern USA, hotel management J1, J1 visa sponsorship hospitality",
  openGraph: {
    title: "Global J1 Careers | J1 Visa Hospitality Jobs in the USA",
    description: "We help international students get J1 visa positions at top U.S. hotels and restaurants.",
    url: "https://globalj1careers.com",
    siteName: "Global J1 Careers",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}