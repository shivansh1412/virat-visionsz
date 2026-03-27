import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/ui/site-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Virat Visionsz Pvt Ltd — Building Legacies with Infinite Vision",
  description:
    "An EPC organisation committed to structures that perform, endure, and define the landscape for decades.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
