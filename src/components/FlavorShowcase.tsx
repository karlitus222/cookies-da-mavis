"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";
import { getStockLabel, isOutOfStock } from "@/lib/stock";
import { useCart } from "./CartProvider";

type FlavorShowcaseProps = {
  products: Product[];
};

export function FlavorShowcase({ products }: FlavorShowcaseProps) {
  const initialProduct = products.find((product) => product.featured) ?? products[0];
  const [selectedId, setSelectedId] = useState(initialProduct?.id ?? "");
  const [animationTick, setAnimationTick] = useState(0);
  const { addItem } = useCart();
  if (!initialProduct) {
    return null;
  }
  const selectedProduct =
    products.find((product) => product.id === selectedId) ?? initialProduct;
  const selectedStockLabel = getStockLabel(selectedProduct.stock);
  const selectedIsOutOfStock = isOutOfStock(selectedProduct.stock);
  const handleSelect = (productId: string) => {
    setSelectedId(productId);
    setAnimationTick((current) => current + 1);
  };

  return (
    <div className="sweet-panel scroll-reveal mt-7 overflow-hidden rounded-[1.75rem] border border-[var(--color-primary)]/10 bg-[var(--color-background)]/94 p-3 shadow-sm sm:mt-10 sm:rounded-[2.5rem] sm:p-5 lg:grid lg:grid-cols-[0.9fr_1fr] lg:gap-6 lg:p-6">
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
        {selectedIsOutOfStock ? (
          <div className="absolute inset-0 grid place-items-center bg-[#351114]/45 px-4 text-center backdrop-blur-[2px]">
            <span className="rounded-full bg-white/95 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-primary)] shadow-sm sm:text-sm">
              Indisponivel
            </span>
          </div>
        ) : null}
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
            <span className="product-chip product-chip-recheado rounded-full px-4 py-2 text-sm font-black">
              {selectedProduct.price}
            </span>
          ) : null}
          {selectedStockLabel ? (
            <span
              className={cn(
                "rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.1em]",
                selectedIsOutOfStock
                  ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  : "bg-white text-[var(--color-muted)] ring-1 ring-[var(--color-primary)]/10"
              )}
            >
              {selectedStockLabel}
            </span>
          ) : null}
          <button
            className={cn(
              "tap-soft inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-xs font-black transition sm:min-h-11 sm:px-5 sm:py-3 sm:text-sm",
              selectedIsOutOfStock
                ? "cursor-not-allowed bg-[var(--color-primary)]/20 text-[var(--color-muted)]"
                : "button-3d bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:-translate-y-0.5"
            )}
            disabled={selectedIsOutOfStock}
            onClick={() => addItem(selectedProduct)}
            type="button"
          >
            {selectedIsOutOfStock ? "Indisponivel" : "Adicionar ao carrinho"}
          </button>
        </div>

        <div className="mobile-pill-scroll mt-5 flex snap-x gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-6 sm:gap-3 sm:overflow-visible sm:pb-0">
          {products.map((product) => {
            const isSelected = product.id === selectedProduct.id;
            const productIsOutOfStock = isOutOfStock(product.stock);

            return (
              <button
                aria-pressed={isSelected}
                className={cn(
                  "tap-soft group w-[5.6rem] shrink-0 snap-start overflow-hidden rounded-2xl border bg-[var(--color-surface)] p-1 transition hover:-translate-y-1 hover:shadow-brand sm:w-auto",
                  isSelected
                    ? "animate-selected-flavor border-[var(--color-primary)] border-dashed shadow-brand ring-2 ring-[var(--color-accent)]/30"
                    : "border-dashed border-[var(--color-primary)]/10",
                  productIsOutOfStock ? "opacity-65" : ""
                )}
                key={`${product.id}-${isSelected ? animationTick : "idle"}`}
                onClick={() => handleSelect(product.id)}
                type="button"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    alt={product.image.alt}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
                    height={180}
                    src={assetPath(product.image.src)}
                    width={180}
                  />
                  {productIsOutOfStock ? (
                    <span className="absolute inset-x-1 bottom-1 rounded-full bg-white/95 px-1 py-0.5 text-[0.5rem] font-black uppercase tracking-[0.08em] text-[var(--color-primary)] shadow-sm">
                      Indisponivel
                    </span>
                  ) : null}
                </div>
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
