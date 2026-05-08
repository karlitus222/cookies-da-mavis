"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { brandInfo, mothersDayHighlight } from "@/dados/conteudo-site";
import { caminhoAsset } from "@/codigo/caminho-assets";
import { criarLinkWhatsApp } from "@/codigo/mensagens-whatsapp";
import { BotaoLink } from "./BotaoLink";
import { useCarrinho } from "./ProvedorCarrinho";

export function DestaqueDiaDasMaes() {
  const { addItem } = useCarrinho();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(Date.now() <= new Date(mothersDayHighlight.validUntilISO).getTime());
  }, []);

  if (!isVisible) {
    return null;
  }

  const whatsappLink = criarLinkWhatsApp(
    brandInfo.whatsappNumber,
    mothersDayHighlight.whatsappMessage
  );

  return (
    <section className="scroll-reveal bg-[var(--color-background)] px-4 pb-10 sm:px-6 sm:pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <article className="sweet-panel overflow-hidden rounded-[2rem] border bg-[linear-gradient(135deg,#fff7f8_0%,#ffe1e8_46%,#fffafa_100%)] p-4 shadow-brand sm:rounded-[2.75rem] sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap gap-2">
                <span className="section-eyebrow text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--color-primary)] sm:text-xs">
                  {mothersDayHighlight.eyebrow}
                </span>
                <span className="rounded-full border border-[var(--color-primary)]/10 bg-white/72 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--color-muted)] sm:text-xs">
                  {mothersDayHighlight.validUntilLabel}
                </span>
                <span className="rounded-full bg-[var(--color-primary)] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--color-primary-foreground)] shadow-sm sm:text-xs">
                  {mothersDayHighlight.price}
                </span>
              </div>

              <h2 className="mt-4 max-w-2xl font-display text-3xl font-black leading-[1.03] text-[var(--color-text)] sm:text-5xl">
                {mothersDayHighlight.title}
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:mt-5 sm:text-lg sm:leading-8">
                {mothersDayHighlight.description}
              </p>

              <div className="mt-5 grid gap-2 sm:mt-7 sm:grid-cols-3">
                {mothersDayHighlight.notes.map((note) => (
                  <p
                    className="rounded-2xl border border-white/70 bg-white/64 px-3 py-2 text-sm font-black text-[var(--color-text)] shadow-sm"
                    key={note}
                  >
                    {note}
                  </p>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                <BotaoLink
                  className="shadow-[0_20px_42px_-24px_rgba(185,21,42,0.92)]"
                  href={whatsappLink}
                >
                  {mothersDayHighlight.ctaLabel}
                </BotaoLink>
                <button
                  className="button-3d-soft tap-soft inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-primary)]/20 bg-white/84 px-5 py-3 text-sm font-black text-[var(--color-primary)] transition hover:-translate-y-0.5 hover:border-[var(--color-primary)]"
                  onClick={() =>
                    addItem({
                      id: mothersDayHighlight.id,
                      name: mothersDayHighlight.cartName,
                      price: mothersDayHighlight.price
                    })
                  }
                  type="button"
                >
                  {mothersDayHighlight.secondaryCtaLabel}
                </button>
              </div>

              <p className="mt-4 text-xs font-bold leading-5 text-[var(--color-muted)] sm:text-sm">
                Depois de adicionar, combine pelo WhatsApp a arte do copo, o sabor dos Cookitos, entrega ou retirada.
              </p>
            </div>

            <div className="order-1 grid items-start gap-3 sm:grid-cols-2 lg:order-2">
              <div className="group relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/52 shadow-sm sm:rounded-[2rem]">
                <Image
                  src={caminhoAsset(mothersDayHighlight.images[0].src)}
                  alt={mothersDayHighlight.images[0].alt}
                  width={1080}
                  height={1920}
                  className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  priority
                />
              </div>
              <div className="group relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/52 shadow-sm sm:rounded-[2rem]">
                <Image
                  src={caminhoAsset(mothersDayHighlight.images[1].src)}
                  alt={mothersDayHighlight.images[1].alt}
                  width={1080}
                  height={1920}
                  className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
