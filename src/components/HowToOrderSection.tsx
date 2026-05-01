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
      className="bg-[var(--color-primary)] px-4 py-16 text-[var(--color-primary-foreground)] sm:px-6 lg:px-8 lg:py-24"
      id="como-pedir"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Como pedir"
              title="Pedido simples, conversa direta"
              description={brandInfo.deliveryInfo}
              tone="inverse"
            />
            <ButtonLink
              className="mt-8 bg-[var(--color-primary-foreground)] text-[var(--color-primary)]"
              href={orderHref}
            >
              Chamar no WhatsApp
            </ButtonLink>
          </div>

          <ol className="grid gap-4">
            {orderSteps.map((step, index) => (
              <li
                className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 backdrop-blur"
                key={step.title}
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-sm font-black text-[var(--color-primary)]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-white/[0.78]">
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
