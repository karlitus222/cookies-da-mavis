import { brandInfo, orderSteps } from "@/data/site";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

const orderHref = createWhatsAppLink(
  brandInfo.whatsappNumber,
  createOrderMessage({ brandName: brandInfo.name })
);

export function HowToOrderSection() {
  return (
    <section
      className="bg-[var(--color-primary)] px-4 py-12 text-[var(--color-primary-foreground)] sm:px-6 sm:py-16 lg:px-8 lg:py-24"
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
            <ButtonLink
              className="mt-5 gap-3 rounded-3xl border border-white/45 bg-[var(--color-primary-foreground)] px-4 py-3 text-left text-[var(--color-primary)] shadow-[0_18px_45px_-24px_rgba(255,250,244,0.95)] hover:scale-[1.02] sm:mt-8 sm:px-5 sm:py-4"
              href={orderHref}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-lg font-black">
                →
              </span>
              <span>
                <span className="block font-display text-lg font-black leading-none">
                  Peça aqui
                </span>
                <span className="mt-1 block text-xs font-bold opacity-75">
                  abre direto no WhatsApp
                </span>
              </span>
            </ButtonLink>
          </div>

          <ol className="grid gap-3 sm:gap-4">
            {orderSteps.map((step, index) => (
              <li
                className="rounded-[1.5rem] border border-white/15 bg-white/[0.08] p-4 backdrop-blur sm:rounded-[2rem] sm:p-5"
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
