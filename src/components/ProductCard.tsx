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
    <article className="group overflow-hidden rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-brand sm:rounded-[2rem]">
      <div className="relative overflow-hidden">
        <Image
          src={assetPath(product.image.src)}
          alt={product.image.alt}
          width={640}
          height={800}
          className="aspect-[4/3.35] w-full object-cover transition duration-500 group-hover:scale-105 sm:aspect-[4/5]"
        />
        {product.category ? (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--color-surface)]/90 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-[var(--color-primary)] backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
            {product.category}
          </span>
        ) : null}
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-black text-[var(--color-text)] sm:text-2xl">
            {product.name}
          </h3>
          {product.price ? (
            <p className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-black text-[var(--color-primary)] sm:px-3 sm:text-sm">
              {product.price}
            </p>
          ) : null}
        </div>
        <p className="mt-2 min-h-0 text-sm leading-6 text-[var(--color-muted)] sm:mt-3 sm:min-h-20 sm:text-base sm:leading-7">
          {product.description}
        </p>
        <ButtonLink className="mt-4 w-full sm:mt-5" href={href}>
          Quero esse
        </ButtonLink>
      </div>
    </article>
  );
}
