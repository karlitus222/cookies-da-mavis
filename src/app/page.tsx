import type { CSSProperties } from "react";
import { AboutSection } from "@/components/AboutSection";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToOrderSection } from "@/components/HowToOrderSection";
import { MothersDayHighlight } from "@/components/MothersDayHighlight";
import { ProductsSection } from "@/components/ProductsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { StockProvider } from "@/components/StockProvider";
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
    <StockProvider>
      <CartProvider>
        <main className="mavis-page" style={themeStyle}>
          <SiteHeader />
          <Hero />
          <MothersDayHighlight />
          <AboutSection />
          <ProductsSection />
          <DifferentialsSection />
          <HowToOrderSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCta />
          <Footer />
          <CartDrawer />
        </main>
      </CartProvider>
    </StockProvider>
  );
}
