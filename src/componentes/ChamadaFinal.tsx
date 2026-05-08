import { brandInfo } from "@/dados/conteudo-site";
import { BotaoLink } from "./BotaoLink";

export function ChamadaFinal() {
  return (
    <section className="section-wave scroll-reveal px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24" id="contato">
      <div className="sweet-final-cta mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] bg-[var(--color-text)] p-5 text-[var(--color-primary-foreground)] shadow-brand sm:rounded-[2.5rem] sm:p-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
          Cookies da Mavis
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-2xl font-black leading-tight sm:mt-5 sm:text-5xl">
          {brandInfo.finalCtaTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:mt-5 sm:text-lg sm:leading-8">
          {brandInfo.finalCtaDescription}
        </p>
        <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
          <BotaoLink
            className="bg-[var(--color-primary-foreground)] text-[var(--color-text)]"
            href="#sabores"
          >
            Montar pedido no carrinho
          </BotaoLink>
          {brandInfo.instagramUrl ? (
            <BotaoLink
              className="border-white/20 bg-transparent text-white hover:border-white"
              href={brandInfo.instagramUrl}
              variant="secondary"
            >
              Ver Instagram
            </BotaoLink>
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
