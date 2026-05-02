import { brandInfo, orderSteps } from "@/data/site";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { SectionHeading } from "./SectionHeading";

const orderHref = createWhatsAppLink(
  brandInfo.whatsappNumber,
  createOrderMessage({ brandName: brandInfo.name })
);

export function HowToOrderSection() {
  return (
    <section
      className="bg-[var(--color-primary)] px-4 py-10 text-[var(--color-primary-foreground)] sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      id="como-pedir"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1fr] lg:items-start lg:gap-10">
          <div>
            <SectionHeading
              eyebrow="Como pedir"
              title="Pedido simples, conversa direta"
              description={brandInfo.deliveryInfo}
              tone="inverse"
            />
            <a
              aria-label="Peça aqui pelo WhatsApp"
              className="tap-soft mt-5 inline-flex w-fit items-center gap-3 rounded-3xl border border-white/45 bg-white px-4 py-3 text-[#b9152a] shadow-[0_18px_45px_-24px_rgba(255,250,244,0.95)] transition hover:-translate-y-1 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-8 sm:px-5 sm:py-4"
              href={orderHref}
              rel="noreferrer"
              target="_blank"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-lg font-black">
                →
              </span>
              <span className="grid gap-1 text-left">
                <strong className="font-display text-xl font-black leading-none text-[#b9152a]">
                  Peça aqui
                </strong>
                <small className="text-xs font-black uppercase tracking-[0.12em] text-[#7e4b51]">
                  abre no WhatsApp
                </small>
              </span>
            </a>
          </div>

          <ol className="grid gap-3 sm:gap-4">
            {orderSteps.map((step, index) => (
              <li
                className="tap-soft rounded-[1.5rem] border border-white/15 bg-white/[0.1] p-4 backdrop-blur sm:rounded-[2rem] sm:p-5"
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
