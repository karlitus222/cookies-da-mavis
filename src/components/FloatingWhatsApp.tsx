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
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-black text-[var(--color-primary-foreground)] shadow-brand transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
      href={orderHref}
      rel={orderHref.startsWith("http") ? "noreferrer" : undefined}
      target={orderHref.startsWith("http") ? "_blank" : undefined}
    >
      WA
    </a>
  );
}
