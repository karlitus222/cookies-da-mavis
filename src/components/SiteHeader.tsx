import Image from "next/image";
import { brandInfo, navItems } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "./ButtonLink";

const orderHref = createWhatsAppLink(
  brandInfo.whatsappNumber,
  createOrderMessage({ brandName: brandInfo.name })
);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-primary)]/10 bg-[var(--color-background)]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          href="#inicio"
          aria-label={`Voltar ao inicio - ${brandInfo.name}`}
        >
          <Image
            src={assetPath(brandInfo.logo.src)}
            alt={brandInfo.logo.alt}
            width={48}
            height={48}
            className="h-12 w-12 rounded-2xl object-contain"
            priority
          />
          <span className="truncate font-display text-lg font-black text-[var(--color-text)]">
            {brandInfo.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 text-sm font-bold text-[var(--color-muted)] md:flex"
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <a
              className="transition hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink className="hidden sm:inline-flex" href={orderHref}>
          Pedir pelo WhatsApp
        </ButtonLink>
      </div>

      <nav
        className="flex gap-3 overflow-x-auto border-t border-[var(--color-primary)]/10 px-4 py-2 text-sm font-bold text-[var(--color-muted)] md:hidden"
        aria-label="Menu principal mobile"
      >
        {navItems.map((item) => (
          <a
            className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
