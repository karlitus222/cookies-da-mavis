"use client";

import Image from "next/image";
import type { Combo } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";
import { getStockLabel, isOutOfStock } from "@/lib/stock";
import { useCart } from "./CartProvider";

type ComboCardProps = {
  combo: Combo;
};

export function ComboCard({ combo }: ComboCardProps) {
  const { addItem } = useCart();
  const stockLabel = getStockLabel(combo.stock);
  const comboIsOutOfStock = isOutOfStock(combo.stock);

  return (
    <article className="sweet-card tap-soft overflow-hidden rounded-[1.7rem] bg-[var(--color-surface)] shadow-sm transition hover:-translate-y-1.5 hover:shadow-brand sm:rounded-3xl">
      {combo.image ? (
        <div className="relative overflow-hidden rounded-t-[1.65rem] sm:rounded-t-[1.95rem]">
          <Image
            src={assetPath(combo.image.src)}
            alt={combo.image.alt}
            width={720}
            height={520}
            className="aspect-[4/2.7] w-full rounded-t-[1.65rem] object-cover sm:aspect-[4/3] sm:rounded-t-[1.95rem]"
          />
          {comboIsOutOfStock ? (
            <div className="absolute inset-0 grid place-items-center bg-[#351114]/45 px-4 text-center backdrop-blur-[2px]">
              <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-primary)] shadow-sm">
                Indisponivel
              </span>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-xl font-black sm:text-2xl">
          {combo.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
          {combo.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          {combo.price ? (
            <p className="product-chip product-chip-recheado rounded-full px-3 py-1 text-sm font-black">
              {combo.price}
            </p>
          ) : (
            <p className="product-chip product-chip-lancamento rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
              <span aria-hidden="true" className="mr-1">
                🎁
              </span>
              valor no WhatsApp
            </p>
          )}
          {stockLabel ? (
            <p
              className={cn(
                "rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.1em]",
                comboIsOutOfStock
                  ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  : "bg-white text-[var(--color-muted)] ring-1 ring-[var(--color-primary)]/10"
              )}
            >
              {stockLabel}
            </p>
          ) : null}
          <button
            className={cn(
              "tap-soft inline-flex min-h-10 flex-1 items-center justify-center rounded-full px-4 py-2 text-sm font-black transition sm:flex-none",
              comboIsOutOfStock
                ? "cursor-not-allowed bg-[var(--color-primary)]/20 text-[var(--color-muted)]"
                : "button-3d bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:-translate-y-0.5"
            )}
            disabled={comboIsOutOfStock}
            onClick={() =>
              addItem({
                id: combo.id,
                name: combo.name,
                price: combo.price,
                stock: combo.stock
              })
            }
            type="button"
          >
            {comboIsOutOfStock ? "Indisponivel" : "Adicionar"}
          </button>
        </div>
      </div>
    </article>
  );
}
