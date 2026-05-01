import Image from "next/image";
import { testimonials } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { EditingHint } from "./EditingHint";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Quem pede e prova, aprova e volta"
            description="Aqui entram prints reais de clientes no WhatsApp, sem inventar avaliação."
          />
          <EditingHint>aguardando prints reais</EditingHint>
        </div>

        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              className="overflow-hidden rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] p-4 shadow-sm sm:rounded-[2rem] sm:p-6"
              key={testimonial.id}
            >
              {testimonial.image ? (
                <Image
                  alt={testimonial.image.alt}
                  className="mb-4 max-h-[420px] w-full rounded-2xl object-contain"
                  height={720}
                  src={assetPath(testimonial.image.src)}
                  width={520}
                />
              ) : null}
              {testimonial.isPlaceholder ? (
                <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  Envie o print para substituir
                </span>
              ) : null}
              <blockquote className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:mt-5 sm:text-lg sm:leading-8">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-4 font-bold text-[var(--color-text)] sm:mt-5">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
