import type { CSSProperties } from "react";
import { AboutSection } from "@/components/AboutSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToOrderSection } from "@/components/HowToOrderSection";
import { ProductsSection } from "@/components/ProductsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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

export default function Home() {
  return (
    <main style={themeStyle}>
      <SiteHeader />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <DifferentialsSection />
      <HowToOrderSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
