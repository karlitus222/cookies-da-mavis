import Image from "next/image";
import type { Product } from "@/data/site";
import { brandInfo } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { createOrderMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "./ButtonLink";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const href = createWhatsAppLink(
    brandInfo.whatsappNumber,
    createOrderMessage({
      brandName: brandInfo.name,
      productName: product.name
    })
  );

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-brand">
      <div className="relative overflow-hidden">
        <Image
          src={assetPath(product.image.src)}
          alt={product.image.alt}
          width={640}
          height={800}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.category ? (
          <span className="absolute left-4 top-4 rounded-full bg-[var(--color-surface)]/90 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-primary)] backdrop-blur">
            {product.category}
          </span>
        ) : null}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-black text-[var(--color-text)]">
            {product.name}
          </h3>
          {product.price ? (
            <p className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-sm font-black text-[var(--color-primary)]">
              {product.price}
            </p>
          ) : null}
        </div>
        <p className="mt-3 min-h-20 leading-7 text-[var(--color-muted)]">
          {product.description}
        </p>
        <ButtonLink className="mt-5 w-full" href={href}>
          Quero esse
        </ButtonLink>
      </div>
    </article>
  );
}
