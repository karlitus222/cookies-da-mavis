"use client";

import Image from "next/image";
import type { Combo } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { useCart } from "./CartProvider";

type ComboCardProps = {
  combo: Combo;
};

export function ComboCard({ combo }: ComboCardProps) {
  const { addItem } = useCart();

  return (
    <article className="sweet-card tap-soft overflow-hidden rounded-[1.7rem] bg-[var(--color-surface)] shadow-sm transition hover:-translate-y-1.5 hover:shadow-brand sm:rounded-3xl">
      {combo.image ? (
        <div className="overflow-hidden rounded-t-[1.65rem] sm:rounded-t-[1.95rem]">
          <Image
            src={assetPath(combo.image.src)}
            alt={combo.image.alt}
            width={720}
            height={520}
            className="aspect-[4/2.7] w-full rounded-t-[1.65rem] object-cover sm:aspect-[4/3] sm:rounded-t-[1.95rem]"
          />
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
          <button
            className="button-3d tap-soft inline-flex min-h-10 flex-1 items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-black text-[var(--color-primary-foreground)] transition hover:-translate-y-0.5 sm:flex-none"
            onClick={() =>
              addItem({
                id: combo.id,
                name: combo.name,
                price: combo.price
              })
            }
            type="button"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
