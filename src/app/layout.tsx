import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nishant Pahwa — Data Engineer",
  description:
    "Data Engineer building the pipelines that power decisions. Azure Databricks Lakehouse, PySpark, Delta Lake and applied AI/ML. 7+ years in enterprise data platforms, based in Chandigarh, India.",
  keywords: [
    "Data Engineer",
    "Azure Databricks",
    "PySpark",
    "Delta Lake",
    "Lakehouse",
    "Medallion architecture",
    "AI/ML",
    "Nishant Pahwa",
  ],
  authors: [{ name: "Nishant Pahwa" }],
  openGraph: {
    title: "Nishant Pahwa — Data Engineer",
    description:
      "Azure Databricks Lakehouse · PySpark · Delta Lake · Applied AI/ML",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
