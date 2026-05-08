import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { StockAdminPanel } from "@/components/StockAdminPanel";
import { brandInfo } from "@/data/site";

const themeStyle = {
  "--color-background": brandInfo.palette.background,
  "--color-surface": brandInfo.palette.surface,
  "--color-surface-strong": brandInfo.palette.surfaceStrong,
  "--color-text": brandInfo.palette.text,
  "--color-muted": brandInfo.palette.muted,
  "--color-primary": brandInfo.palette.primary,
  "--color-primary-foreground": brandInfo.palette.primaryForeground,
  "--color-accent": brandInfo.palette.accent,
  "--color-accent-soft": brandInfo.palette.accentSoft
} as CSSProperties;

export const metadata: Metadata = {
  title: `Painel de estoque | ${brandInfo.name}`,
  robots: {
    follow: false,
    index: false
  }
};

export default function AdminPage() {
  return (
    <main
      className="mavis-page min-h-screen bg-[var(--color-background)] px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
      style={themeStyle}
    >
      <StockAdminPanel />
    </main>
  );
}
