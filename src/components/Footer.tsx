import Image from "next/image";
import { brandInfo, navItems } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-primary)]/10 bg-[var(--color-surface)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={assetPath(brandInfo.logo.src)}
              alt={brandInfo.logo.alt}
              width={52}
              height={52}
              className="h-[52px] w-[52px] rounded-2xl object-contain"
            />
            <div>
              <p className="font-display text-xl font-black">
                {brandInfo.name}
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                {brandInfo.bakerName}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-[var(--color-muted)]">
            {brandInfo.shortDescription}
          </p>
        </div>

        <nav className="grid content-start gap-3" aria-label="Menu do rodape">
          {navItems.map((item) => (
            <a
              className="font-bold text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <address className="not-italic leading-8 text-[var(--color-muted)]">
          <p>
            <strong className="text-[var(--color-text)]">Instagram:</strong>{" "}
            {brandInfo.instagramUrl ? (
              <a
                className="font-bold text-[var(--color-primary)] underline underline-offset-4"
                href={brandInfo.instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                {brandInfo.instagramHandle}
              </a>
            ) : (
              brandInfo.instagramHandle
            )}
          </p>
          <p>
            <strong className="text-[var(--color-text)]">WhatsApp:</strong>{" "}
            {brandInfo.whatsappDisplay}
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Site:</strong>{" "}
            <a
              className="font-bold text-[var(--color-primary)] underline underline-offset-4"
              href={brandInfo.siteUrl}
              rel="noreferrer"
              target="_blank"
            >
              Cookies da Mavis
            </a>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Regiao:</strong>{" "}
            {brandInfo.serviceRegion}
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Horario:</strong>{" "}
            {brandInfo.serviceHours}
          </p>
        </address>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[var(--color-primary)]/10 pt-6 text-sm text-[var(--color-muted)]">
        © {new Date().getFullYear()} {brandInfo.name}. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
