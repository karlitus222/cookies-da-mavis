import Image from "next/image";
import { brandInfo, products } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { ButtonLink } from "./ButtonLink";
import { EditingHint } from "./EditingHint";

export function Hero() {
  const featuredProduct = products.find((product) => product.featured);

  return (
    <section
      className="mavis-pattern-soft relative isolate overflow-hidden px-4 py-7 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      id="inicio"
    >
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-28 hidden text-3xl opacity-50 animate-soft-float sm:block"
      >
        🍪
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-14 right-8 hidden text-2xl opacity-45 animate-soft-float sm:block"
      >
        🐾
      </span>

      <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
        <div className="animate-rise-in">
          <EditingHint>conteudo aguardando materiais reais</EditingHint>
          <h1 className="mt-4 max-w-4xl font-display text-[2rem] font-bold leading-[1.02] text-[var(--color-text)] sm:mt-5 sm:text-5xl lg:text-7xl">
            <span className="sm:hidden">
              <span className="hero-word">Amor</span>,{" "}
              <span className="hero-word">cookies</span> e{" "}
              <span className="hero-word">miados</span> em cada mordida
            </span>
            <span className="hidden sm:inline">
              <span className="hero-word">Amor</span>,{" "}
              <span className="hero-word">cookies</span> e{" "}
              <span className="hero-word">miados</span> em cada mordida
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-6 text-[var(--color-muted)] sm:mt-6 sm:text-xl sm:leading-9">
            <span className="sm:hidden">
              Recheados, fofinhos e prontos para adoçar Teresina e Timon.
            </span>
            <span className="hidden sm:inline">{brandInfo.heroSubtitle}</span>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-row sm:gap-3">
            <ButtonLink
              className="border-transparent bg-white/58 text-[var(--color-muted)] shadow-none hover:bg-white hover:text-[var(--color-primary)]"
              href="#sabores"
              variant="secondary"
            >
              Ver sabores
            </ButtonLink>
            <ButtonLink
              className="shadow-[0_22px_46px_-24px_rgba(185,21,42,0.92)]"
              href="#sabores"
            >
              Fazer pedido
            </ButtonLink>
          </div>

          <dl className="mt-6 hidden max-w-2xl gap-2 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-3">
            <div className="tap-soft rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/86 p-3 shadow-sm sm:rounded-3xl sm:p-4">
              <dt className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs">
                Atendimento
              </dt>
              <dd className="mt-1 text-sm font-bold text-[var(--color-text)] sm:mt-2">
                {brandInfo.serviceRegion}
              </dd>
            </div>
            <div className="tap-soft rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/86 p-3 shadow-sm sm:rounded-3xl sm:p-4">
              <dt className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs">
                Contato
              </dt>
              <dd className="mt-1 text-sm font-bold text-[var(--color-text)] sm:mt-2">
                {brandInfo.whatsappDisplay}
              </dd>
            </div>
            <div className="tap-soft rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/86 p-3 shadow-sm sm:rounded-3xl sm:p-4">
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
          <div className="group relative mx-auto max-w-xl">
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-[1.5rem] bg-[var(--color-accent-soft)] animate-soft-float sm:-left-4 sm:-top-4 sm:h-28 sm:w-28 sm:rounded-[2rem]" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[var(--color-primary)]/10 sm:-bottom-5 sm:-right-5 sm:h-36 sm:w-36" />
            <Image
              src={assetPath(brandInfo.heroImage.src)}
              alt={brandInfo.heroImage.alt}
              width={760}
              height={880}
              className="relative aspect-[4/4.3] w-full rounded-[1.75rem] border border-white/70 object-cover shadow-brand transition duration-700 ease-out group-hover:-rotate-1 group-hover:scale-[1.025] sm:aspect-[4/5] sm:rounded-[2.5rem]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 translate-x-[-120%] rounded-[1.75rem] bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.42)_50%,transparent_65%)] opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100 sm:rounded-[2.5rem]" />
            <div className="absolute -bottom-4 left-4 max-w-[78%] rounded-2xl border border-white/70 bg-[var(--color-surface)]/92 p-3 shadow-brand backdrop-blur transition duration-500 group-hover:-translate-y-1 sm:-bottom-6 sm:left-7 sm:rounded-3xl sm:p-4">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs">
                Destaque da Mavis
              </p>
              <p className="mt-1 font-display text-lg font-black leading-tight text-[var(--color-text)] sm:text-2xl">
                {featuredProduct?.name ?? "Tradicional com Nutella"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
