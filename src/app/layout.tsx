import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { brandInfo } from "@/data/site";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700", "800", "900"]
});

const metadataTitle = brandInfo.name.includes("[Editar]")
  ? "Landing page para confeitaria de cookies"
  : `${brandInfo.name} | Cookies artesanais`;

export const metadata: Metadata = {
  title: metadataTitle,
  description: brandInfo.shortDescription,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  )
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fredoka.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
