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
      className="relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      id="inicio"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--color-accent-soft),transparent_34%),linear-gradient(135deg,var(--color-background),var(--color-surface))]" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="animate-rise-in">
          <EditingHint>conteudo aguardando materiais reais</EditingHint>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.02] text-[var(--color-text)] sm:text-5xl lg:text-7xl">
            {brandInfo.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[var(--color-muted)] sm:text-xl">
            {brandInfo.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#sabores" variant="secondary">
              Ver sabores
            </ButtonLink>
            <ButtonLink href={orderHref}>Fazer pedido</ButtonLink>
          </div>

          <dl className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/80 p-4">
              <dt className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Atendimento
              </dt>
              <dd className="mt-2 text-sm font-bold text-[var(--color-text)]">
                {brandInfo.serviceRegion}
              </dd>
            </div>
            <div className="rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/80 p-4">
              <dt className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Contato
              </dt>
              <dd className="mt-2 text-sm font-bold text-[var(--color-text)]">
                {brandInfo.whatsappDisplay}
              </dd>
            </div>
            <div className="rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/80 p-4">
              <dt className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Destaque
              </dt>
              <dd className="mt-2 text-sm font-bold text-[var(--color-text)]">
                {featuredProduct?.name ?? "Adicione um sabor destaque"}
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-rise-in stagger-2">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-[2rem] bg-[var(--color-accent-soft)] animate-soft-float" />
            <div className="absolute -bottom-5 -right-5 h-36 w-36 rounded-full bg-[var(--color-primary)]/10" />
            <Image
              src={assetPath(brandInfo.heroImage.src)}
              alt={brandInfo.heroImage.alt}
              width={760}
              height={880}
              className="relative aspect-[4/5] w-full rounded-[2.5rem] border border-white/70 object-cover shadow-brand"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
