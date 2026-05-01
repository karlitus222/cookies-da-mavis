import { faq } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section
      className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Perguntas que precisam refletir o atendimento real"
          description="Edite as respostas conforme prazos, entrega, retirada, pagamento e personalizacoes da confeiteira."
        />

        <div className="mt-10 divide-y divide-[var(--color-primary)]/10 rounded-[2rem] border border-[var(--color-primary)]/10 bg-[var(--color-background)]">
          {faq.map((item) => (
            <details className="group p-5 sm:p-6" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-black">
                {item.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-primary)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
