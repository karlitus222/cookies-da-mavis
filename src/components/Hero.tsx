import Image from "next/image";
import { brandInfo, products } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "./ButtonLink";
import { EditingHint } from "./EditingHint";

const orderHref = createWhatsAppLink(
  brandInfo.whatsappNumber,
  createOrderMessage({ brandName: brandInfo.name })
);

export function Hero() {
  const featuredProduct = products.find((product) => product.featured);

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      id="inicio"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--color-accent-soft),transparent_34%),linear-gradient(135deg,var(--color-background),var(--color-surface))]" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
        <div className="animate-rise-in">
          <EditingHint>conteudo aguardando materiais reais</EditingHint>
          <h1 className="mt-3 max-w-4xl font-display text-[2.35rem] font-black leading-[1.02] text-[var(--color-text)] sm:mt-5 sm:text-5xl lg:text-7xl">
            {brandInfo.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:mt-6 sm:text-xl sm:leading-9">
            {brandInfo.heroSubtitle}
          </p>
          <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
            <ButtonLink href="#sabores" variant="secondary">
              Ver sabores
            </ButtonLink>
            <ButtonLink href={orderHref}>Fazer pedido</ButtonLink>
          </div>

          <dl className="mt-6 grid max-w-2xl gap-2 sm:mt-10 sm:grid-cols-3 sm:gap-3">
            <div className="rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/80 p-3 sm:rounded-3xl sm:p-4">
              <dt className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs">
                Atendimento
              </dt>
              <dd className="mt-1 text-sm font-bold text-[var(--color-text)] sm:mt-2">
                {brandInfo.serviceRegion}
              </dd>
            </div>
            <div className="rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/80 p-3 sm:rounded-3xl sm:p-4">
              <dt className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs">
                Contato
              </dt>
              <dd className="mt-1 text-sm font-bold text-[var(--color-text)] sm:mt-2">
                {brandInfo.whatsappDisplay}
              </dd>
            </div>
            <div className="rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/80 p-3 sm:rounded-3xl sm:p-4">
              <dt className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs">
                Destaque
              </dt>
              <dd className="mt-1 text-sm font-bold text-[var(--color-text)] sm:mt-2">
                {featuredProduct?.name ?? "Adicione um sabor destaque"}
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-rise-in stagger-2">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-[1.5rem] bg-[var(--color-accent-soft)] animate-soft-float sm:-left-4 sm:-top-4 sm:h-28 sm:w-28 sm:rounded-[2rem]" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[var(--color-primary)]/10 sm:-bottom-5 sm:-right-5 sm:h-36 sm:w-36" />
            <Image
              src={assetPath(brandInfo.heroImage.src)}
              alt={brandInfo.heroImage.alt}
              width={760}
              height={880}
              className="relative aspect-[4/4.3] w-full rounded-[1.75rem] border border-white/70 object-cover shadow-brand sm:aspect-[4/5] sm:rounded-[2.5rem]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
