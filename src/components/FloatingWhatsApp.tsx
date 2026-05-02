import { brandInfo } from "@/data/site";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";

const orderHref = createWhatsAppLink(
  brandInfo.whatsappNumber,
  createOrderMessage({ brandName: brandInfo.name })
);

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Abrir pedido pelo WhatsApp"
      className="tap-soft fixed bottom-4 right-4 z-50 inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 text-sm font-black text-[var(--color-primary-foreground)] shadow-brand transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:h-14 sm:w-14 sm:px-0"
      href={orderHref}
      rel={orderHref.startsWith("http") ? "noreferrer" : undefined}
      target={orderHref.startsWith("http") ? "_blank" : undefined}
    >
      <span>WA</span>
      <span className="sm:hidden">Pedir</span>
    </a>
  );
}
