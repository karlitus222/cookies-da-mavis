"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/site";
import { brandInfo } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "./ButtonLink";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const href = createWhatsAppLink(
    brandInfo.whatsappNumber,
    createOrderMessage({
      brandName: brandInfo.name,
      productName: product.name
    })
  );
  const descriptionId = `${product.id}-description`;

  return (
    <article className="group overflow-hidden rounded-[1.25rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-brand sm:rounded-[2rem]">
      <div className="relative overflow-hidden">
        <Image
          src={assetPath(product.image.src)}
          alt={product.image.alt}
          width={640}
          height={800}
          className="aspect-[4/5] w-full bg-[var(--color-background)] object-cover object-center transition duration-500 group-hover:scale-105 sm:aspect-[4/3]"
        />
        {product.category ? (
          <span className="absolute left-2 top-2 hidden rounded-full bg-[var(--color-surface)]/90 px-2 py-0.5 text-[0.55rem] font-black uppercase tracking-[0.12em] text-[var(--color-primary)] backdrop-blur sm:left-4 sm:top-4 sm:inline-flex sm:px-3 sm:py-1 sm:text-xs sm:tracking-[0.18em]">
            {product.category}
          </span>
        ) : null}
      </div>

      <div className="p-3 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h3 className="font-display text-base font-black leading-tight text-[var(--color-text)] sm:text-2xl">
            {product.name}
          </h3>
          {product.price ? (
            <p className="w-fit rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-[0.68rem] font-black text-[var(--color-primary)] sm:px-3 sm:py-1 sm:text-sm">
              {product.price}
            </p>
          ) : null}
        </div>
        <p
          className={cn(
            "mt-2 min-h-0 text-[0.7rem] leading-4 text-[var(--color-muted)] sm:mt-3 sm:line-clamp-none sm:min-h-20 sm:text-base sm:leading-7",
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          )}
          id={descriptionId}
        >
          {product.description}
        </p>
        <button
          aria-controls={descriptionId}
          aria-expanded={isExpanded}
          className="mt-1.5 text-[0.68rem] font-black text-[var(--color-primary)] underline decoration-[var(--color-accent)]/40 underline-offset-4 sm:hidden"
          onClick={() => setIsExpanded((current) => !current)}
          type="button"
        >
          {isExpanded ? "Mostrar menos" : "Ler mais"}
        </button>
        <ButtonLink className="mt-3 w-full px-3 py-2 text-xs sm:mt-5 sm:px-5 sm:py-3 sm:text-sm" href={href}>
          Quero esse
        </ButtonLink>
      </div>
    </article>
  );
}
