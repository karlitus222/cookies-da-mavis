import { faq } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section
      className="section-wave scroll-reveal bg-[var(--color-surface)] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Dúvidas rápidas"
          description="Se ainda ficar alguma dúvida, é só chamar no WhatsApp."
        />

        <div className="sweet-panel mt-7 divide-y divide-[var(--color-primary)]/10 rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-background)]/94 shadow-sm sm:mt-10 sm:rounded-[2rem]">
          {faq.map((item) => (
            <details className="tap-soft group p-4 sm:p-6" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-lg font-black sm:gap-4 sm:text-xl">
                {item.question}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-primary)] transition group-open:rotate-45 sm:h-8 sm:w-8">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:mt-4 sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
