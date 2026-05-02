"use client";

import Image from "next/image";
import { useState } from "react";
import { brandInfo, navItems } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-2 z-40 px-3 sm:top-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl justify-center">
        <div className="group/header relative w-fit max-w-full">
          <div className="mavis-header-minimal inline-flex max-w-[calc(100vw-1.5rem)] items-center gap-2 rounded-full border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/82 px-2 py-2 shadow-[0_18px_60px_-44px_rgba(53,17,20,0.62)] backdrop-blur-2xl">
            <a
              className="tap-soft flex min-w-0 items-center gap-2 rounded-full pr-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              href="#inicio"
              aria-label={`Voltar ao inicio - ${brandInfo.name}`}
              onClick={closeMenu}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)]/64 p-1 shadow-sm sm:h-10 sm:w-10">
                <Image
                  src={assetPath(brandInfo.logo.src)}
                  alt={brandInfo.logo.alt}
                  width={44}
                  height={44}
                  className="h-full w-full rounded-full object-contain"
                  priority
                />
              </span>
              <span className="truncate font-display text-[0.96rem] font-black leading-none text-[var(--color-text)] sm:text-lg">
                {brandInfo.name}
              </span>
            </a>

            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="tap-soft inline-flex h-9 shrink-0 items-center gap-2 rounded-full border border-[var(--color-primary)]/10 bg-white/58 px-3 text-xs font-black uppercase tracking-[0.12em] text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:h-10"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              Menu
              <span className="grid gap-1">
                <span className="block h-0.5 w-3 rounded-full bg-current" />
                <span className="block h-0.5 w-3 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <nav
            aria-label="Menu principal"
            className={cn(
              "absolute left-1/2 top-[calc(100%+0.5rem)] w-[min(calc(100vw-1.5rem),22rem)] rounded-[1.35rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/94 p-2 shadow-[0_24px_70px_-42px_rgba(53,17,20,0.62)] backdrop-blur-2xl transition duration-200",
              isMenuOpen
                ? "pointer-events-auto -translate-x-1/2 translate-y-0 opacity-100"
                : "pointer-events-none -translate-x-1/2 -translate-y-2 opacity-0 md:group-focus-within/header:pointer-events-auto md:group-focus-within/header:translate-y-0 md:group-focus-within/header:opacity-100 md:group-hover/header:pointer-events-auto md:group-hover/header:translate-y-0 md:group-hover/header:opacity-100"
            )}
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  className="tap-soft rounded-full px-4 py-2.5 text-sm font-black text-[var(--color-muted)] transition hover:bg-[var(--color-accent-soft)]/52 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="tap-soft mt-1 rounded-full bg-[var(--color-primary)] px-4 py-3 text-center text-sm font-black text-[var(--color-primary-foreground)] shadow-brand transition hover:-translate-y-0.5"
                href="#sabores"
                onClick={closeMenu}
              >
                Montar pedido
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
