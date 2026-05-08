import { brandInfo, orderSteps } from "@/dados/conteudo-site";
import { TituloSecao } from "./TituloSecao";

export function SecaoComoPedir() {
  return (
    <section
      className="order-section-pattern scroll-reveal bg-[var(--color-primary)] px-4 py-10 text-[var(--color-primary-foreground)] sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      id="como-pedir"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1fr] lg:items-start lg:gap-10">
          <div>
            <TituloSecao
              eyebrow="Como pedir"
              title="Pedido simples, conversa direta"
              description={brandInfo.deliveryInfo}
              tone="inverse"
            />
            <a
              aria-label="Peça aqui escolhendo os sabores"
              className="button-3d-soft tap-soft mt-5 inline-flex w-fit items-center gap-3 rounded-3xl border border-white/45 bg-white px-4 py-3 text-[#b9152a] transition hover:-translate-y-1 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-8 sm:px-5 sm:py-4"
              href="#sabores"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-lg font-black">
                →
              </span>
              <span className="grid gap-1 text-left">
                <strong className="font-display text-xl font-black leading-none text-[#b9152a]">
                  Peça aqui
                </strong>
                <small className="text-xs font-black uppercase tracking-[0.12em] text-[#7e4b51]">
                  monte no carrinho
                </small>
              </span>
            </a>
          </div>

          <ol className="grid gap-3 sm:gap-4">
            {orderSteps.map((step, index) => (
              <li
                className="tap-soft rounded-[1.5rem] border border-white/20 bg-white/[0.12] p-4 shadow-[0_22px_60px_-42px_rgba(255,250,250,0.7)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.16] sm:rounded-[2rem] sm:p-5"
                key={step.title}
              >
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-xs font-black text-[var(--color-primary)] sm:h-11 sm:w-11 sm:rounded-2xl sm:text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-black sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-white/[0.78] sm:mt-2 sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
