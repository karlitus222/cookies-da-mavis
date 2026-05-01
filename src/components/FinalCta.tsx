import { brandInfo } from "@/data/site";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "./ButtonLink";

const orderHref = createWhatsAppLink(
  brandInfo.whatsappNumber,
  createOrderMessage({ brandName: brandInfo.name })
);

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="contato">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[var(--color-text)] p-8 text-[var(--color-primary-foreground)] shadow-brand sm:p-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
          Cookies da Mavis
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-black leading-tight sm:text-5xl">
          {brandInfo.finalCtaTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
          {brandInfo.finalCtaDescription}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            className="bg-[var(--color-primary-foreground)] text-[var(--color-text)]"
            href={orderHref}
          >
            Pedir pelo WhatsApp
          </ButtonLink>
          {brandInfo.instagramUrl ? (
            <ButtonLink
              className="border-white/20 bg-transparent text-white hover:border-white"
              href={brandInfo.instagramUrl}
              variant="secondary"
            >
              Ver Instagram
            </ButtonLink>
          ) : (
            <span className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white/70">
              {brandInfo.instagramHandle}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
