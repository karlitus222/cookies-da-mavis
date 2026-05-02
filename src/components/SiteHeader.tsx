import Image from "next/image";
import { brandInfo, navItems } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { ButtonLink } from "./ButtonLink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-2 sm:px-6 sm:pt-4 lg:px-8">
      <div className="mavis-header mx-auto max-w-7xl rounded-[1.65rem] border border-white/65 bg-[var(--color-surface)]/72 shadow-[0_18px_60px_-42px_rgba(53,17,20,0.72)] backdrop-blur-2xl sm:rounded-[2rem]">
        <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-3 lg:px-5">
          <a
            className="tap-soft flex min-w-0 items-center gap-2.5 rounded-full pr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:gap-3"
            href="#inicio"
            aria-label={`Voltar ao inicio - ${brandInfo.name}`}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--color-accent-soft)]/80 p-1 shadow-sm sm:h-12 sm:w-12">
              <Image
                src={assetPath(brandInfo.logo.src)}
                alt={brandInfo.logo.alt}
                width={48}
                height={48}
                className="h-full w-full rounded-[0.9rem] object-contain"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-[1.02rem] font-black leading-none text-[var(--color-text)] sm:text-xl">
                {brandInfo.name}
              </span>
              <span className="mt-0.5 hidden text-[0.67rem] font-black uppercase tracking-[0.16em] text-[var(--color-accent)] sm:block">
                cookies artesanais
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center rounded-full border border-[var(--color-primary)]/10 bg-white/45 p-1 text-sm font-black text-[var(--color-muted)] md:flex"
            aria-label="Menu principal"
          >
            {navItems.map((item) => (
              <a
                className="tap-soft rounded-full px-4 py-2 transition hover:-translate-y-0.5 hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ButtonLink className="hidden sm:inline-flex" href="#sabores">
            Montar pedido
          </ButtonLink>
        </div>

        <nav
          className="mobile-pill-scroll flex snap-x gap-2 overflow-x-auto px-2 pb-2 text-[0.78rem] font-black text-[var(--color-muted)] md:hidden"
          aria-label="Menu principal mobile"
        >
          {navItems.map((item) => (
            <a
              className="tap-soft shrink-0 snap-start rounded-full border border-[var(--color-primary)]/10 bg-white/52 px-3.5 py-2 shadow-sm transition hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
