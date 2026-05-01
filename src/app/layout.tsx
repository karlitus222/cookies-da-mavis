import type { Metadata } from "next";
import { brandInfo } from "@/data/site";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
