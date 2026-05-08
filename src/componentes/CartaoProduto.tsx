"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/dados/conteudo-site";
import { caminhoAsset } from "@/codigo/caminho-assets";
import { juntarClasses } from "@/codigo/classes-css";
import { obterMetaCategoriaProduto } from "@/codigo/categorias-produto";
import { obterRotuloEstoque, estaSemEstoque } from "@/codigo/estoque";
import { useCarrinho } from "./ProvedorCarrinho";
import { useValorEstoque } from "./ProvedorEstoque";

type PropriedadesCartaoProduto = {
  product: Product;
};

export function CartaoProduto({ product }: PropriedadesCartaoProduto) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { addItem } = useCarrinho();
  const descriptionId = `${product.id}-description`;
  const categoryMeta = obterMetaCategoriaProduto(product.category);
  const effectiveStock = useValorEstoque(product.id, product.stock);
  const stockLabel = obterRotuloEstoque(effectiveStock);
  const productIsOutOfStock = estaSemEstoque(effectiveStock);

  return (
    <article className="sweet-card tap-soft group overflow-hidden rounded-[1.7rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] shadow-sm transition hover:-translate-y-1.5 hover:shadow-brand sm:rounded-[2rem]">
      <div className="relative overflow-hidden rounded-t-[1.65rem] sm:rounded-t-[1.95rem]">
        <Image
          src={caminhoAsset(product.image.src)}
          alt={product.image.alt}
          width={640}
          height={800}
          className="aspect-[4/4.35] w-full rounded-t-[1.65rem] bg-[var(--color-background)] object-cover object-center transition duration-500 group-hover:scale-105 sm:aspect-[4/3] sm:rounded-t-[1.95rem]"
        />
        {product.category && categoryMeta ? (
          <span
            className={juntarClasses(
              "product-chip absolute left-2 top-2 inline-flex rounded-full px-2 py-0.5 text-[0.55rem] font-black uppercase tracking-[0.09em] backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs sm:tracking-[0.14em]",
              categoryMeta.className
            )}
          >
            <span aria-hidden="true" className="mr-1">
              {categoryMeta.icon}
            </span>
            {product.category}
          </span>
        ) : null}
        {productIsOutOfStock ? (
          <div className="absolute inset-0 grid place-items-center bg-[#351114]/45 px-4 text-center backdrop-blur-[2px]">
            <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-primary)] shadow-sm">
              Indisponivel
            </span>
          </div>
        ) : null}
      </div>

      <div className="p-2.5 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h3 className="font-display text-[0.95rem] font-black leading-tight text-[var(--color-text)] sm:text-2xl">
            {product.name}
          </h3>
          {product.price ? (
            <p className="w-fit rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-[0.66rem] font-black text-[var(--color-primary)] sm:px-3 sm:py-1 sm:text-sm">
              {product.price}
            </p>
          ) : null}
        </div>
        {stockLabel ? (
          <p
            className={juntarClasses(
              "mt-1 w-fit rounded-full px-2 py-0.5 text-[0.62rem] font-black uppercase tracking-[0.08em] sm:mt-2 sm:px-3 sm:py-1 sm:text-xs",
              productIsOutOfStock
                ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                : "bg-white text-[var(--color-muted)] ring-1 ring-[var(--color-primary)]/10"
            )}
          >
            {stockLabel}
          </p>
        ) : null}
        <p
          className={juntarClasses(
            "mt-2 min-h-0 text-[0.68rem] leading-4 text-[var(--color-muted)] sm:mt-3 sm:line-clamp-none sm:min-h-20 sm:text-base sm:leading-7",
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
        <button
          className={juntarClasses(
            "tap-soft mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-full px-3 py-2 text-[0.72rem] font-black transition sm:mt-5 sm:min-h-11 sm:px-5 sm:py-3 sm:text-sm",
            productIsOutOfStock
              ? "cursor-not-allowed bg-[var(--color-primary)]/20 text-[var(--color-muted)]"
              : "button-3d bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:-translate-y-0.5"
          )}
          disabled={productIsOutOfStock}
          onClick={() => addItem({ ...product, stock: effectiveStock })}
          type="button"
        >
          {productIsOutOfStock ? "Indisponivel" : "Adicionar"}
        </button>
      </div>
    </article>
  );
}
