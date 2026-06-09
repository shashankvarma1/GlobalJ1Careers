import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global J1 Careers | J1 Visa Jobs for International Students",
  description: "Global J1 Careers connects international students and recent graduates with top J1 visa opportunities across the United States.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
