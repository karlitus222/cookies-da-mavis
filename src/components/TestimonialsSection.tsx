import Image from "next/image";
import { testimonials } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="scroll-reveal px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Quem pede e prova, aprova e volta"
            description="Prints reais de quem provou e mandou aquele feedback que deixa a fornada ainda mais feliz."
          />
        </div>

        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              className="tap-soft overflow-hidden rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/94 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-35px_rgba(185,21,42,0.55)] sm:rounded-[2rem] sm:p-4"
              key={testimonial.id}
            >
              {testimonial.image ? (
                <div className="rounded-[1.25rem] bg-[var(--color-accent-soft)]/55 p-2">
                  <Image
                    alt={testimonial.image.alt}
                    className="w-full rounded-2xl object-contain"
                    height={560}
                    src={assetPath(testimonial.image.src)}
                    width={960}
                  />
                </div>
              ) : null}
              <blockquote className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-3 font-bold text-[var(--color-text)]">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
