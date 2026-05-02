import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { brandInfo } from "@/data/site";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"]
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700", "800", "900"]
});

const metadataTitle = brandInfo.name.includes("[Editar]")
  ? "Landing page para confeitaria de cookies"
  : brandInfo.name;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || brandInfo.siteUrl || "http://localhost:3000";

export const metadata: Metadata = {
  title: metadataTitle,
  description: brandInfo.shortDescription,
  applicationName: brandInfo.name,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: brandInfo.name,
    description: brandInfo.shortDescription,
    siteName: brandInfo.name,
    url: siteUrl,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: brandInfo.name,
    description: brandInfo.shortDescription
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${baloo.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
