"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/site";
import { brandInfo } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "./ButtonLink";

type FlavorShowcaseProps = {
  products: Product[];
};

export function FlavorShowcase({ products }: FlavorShowcaseProps) {
  const initialProduct = products.find((product) => product.featured) ?? products[0];
  const [selectedId, setSelectedId] = useState(initialProduct?.id ?? "");
  const [animationTick, setAnimationTick] = useState(0);
  if (!initialProduct) {
    return null;
  }
  const selectedProduct =
    products.find((product) => product.id === selectedId) ?? initialProduct;
  const orderHref = createWhatsAppLink(
    brandInfo.whatsappNumber,
    createOrderMessage({
      brandName: brandInfo.name,
      productName: selectedProduct.name
    })
  );
  const handleSelect = (productId: string) => {
    setSelectedId(productId);
    setAnimationTick((current) => current + 1);
  };

  return (
    <div className="scroll-reveal mt-7 overflow-hidden rounded-[1.75rem] border border-[var(--color-primary)]/10 bg-[var(--color-background)]/94 p-3 shadow-sm sm:mt-10 sm:rounded-[2.5rem] sm:p-5 lg:grid lg:grid-cols-[0.9fr_1fr] lg:gap-6 lg:p-6">
      <div
        className="animate-flavor-swap relative overflow-hidden rounded-[1.35rem] bg-[var(--color-accent-soft)]/45 sm:rounded-[2rem]"
        key={`image-${selectedProduct.id}-${animationTick}`}
      >
        <Image
          alt={selectedProduct.image.alt}
          className="aspect-[4/3.6] w-full object-cover sm:aspect-[4/3]"
          height={760}
          src={assetPath(selectedProduct.image.src)}
          width={900}
        />
        <span className="absolute left-3 top-3 rounded-full bg-[var(--color-surface)]/90 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-[var(--color-primary)] backdrop-blur sm:left-5 sm:top-5 sm:text-xs">
          Sabor em destaque
        </span>
      </div>

      <div className="mt-4 flex flex-col justify-center sm:mt-5 lg:mt-0">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs sm:tracking-[0.2em]">
          Clique e arraste os sabores
        </p>
        <h3
          className="animate-flavor-detail mt-2 font-display text-3xl font-black leading-none text-[var(--color-text)] sm:text-5xl"
          key={`title-${selectedProduct.id}-${animationTick}`}
        >
          {selectedProduct.name}
        </h3>
        <p
          className="animate-flavor-detail mt-3 text-sm leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-8"
          key={`description-${selectedProduct.id}-${animationTick}`}
        >
          {selectedProduct.spotlightDescription ?? selectedProduct.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
          {selectedProduct.price ? (
            <span className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-black text-[var(--color-primary)]">
              {selectedProduct.price}
            </span>
          ) : null}
          <ButtonLink className="px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm" href={orderHref}>
            Quero esse sabor
          </ButtonLink>
        </div>

        <div className="mobile-pill-scroll mt-5 flex snap-x gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-6 sm:gap-3 sm:overflow-visible sm:pb-0">
          {products.map((product) => {
            const isSelected = product.id === selectedProduct.id;

            return (
              <button
                aria-pressed={isSelected}
                className={cn(
                  "tap-soft group w-[5.6rem] shrink-0 snap-start overflow-hidden rounded-2xl border bg-[var(--color-surface)] p-1 transition hover:-translate-y-1 hover:shadow-brand sm:w-auto",
                  isSelected
                    ? "animate-selected-flavor border-[var(--color-primary)] shadow-brand ring-2 ring-[var(--color-accent)]/30"
                    : "border-[var(--color-primary)]/10"
                )}
                key={product.id}
                onClick={() => handleSelect(product.id)}
                type="button"
              >
                <Image
                  alt={product.image.alt}
                  className="aspect-square w-full rounded-xl object-cover transition duration-500 group-hover:scale-110"
                  height={180}
                  src={assetPath(product.image.src)}
                  width={180}
                />
                <span className="mt-1 block truncate px-1 pb-1 text-[0.62rem] font-black text-[var(--color-text)] sm:text-xs">
                  {product.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
