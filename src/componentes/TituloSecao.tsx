import { juntarClasses } from "@/codigo/classes-css";

type PropriedadesTituloSecao = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

const eyebrowIcons: Record<string, string> = {
  "como pedir": "🛍️",
  depoimentos: "💕",
  diferenciais: "🐾",
  especiais: "🎁",
  faq: "❔",
  sabores: "🍪"
};

export function TituloSecao({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default"
}: PropriedadesTituloSecao) {
  const isInverse = tone === "inverse";
  const eyebrowIcon = eyebrow
    ? eyebrowIcons[eyebrow.toLocaleLowerCase("pt-BR")]
    : null;

  return (
    <div
      className={juntarClasses(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow ? (
        <p
          className={juntarClasses(
            "section-eyebrow mb-2 text-[0.65rem] font-black uppercase tracking-[0.2em] sm:mb-3 sm:text-xs sm:tracking-[0.22em]",
            isInverse
              ? "section-eyebrow-inverse text-white/78"
              : "text-[var(--color-accent)]"
          )}
        >
          {eyebrowIcon ? <span aria-hidden="true">{eyebrowIcon}</span> : null}
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={juntarClasses(
          "font-display text-2xl font-black leading-tight sm:text-4xl",
          isInverse ? "text-white" : "text-[var(--color-text)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={juntarClasses(
            "mt-3 text-sm leading-7 sm:mt-4 sm:text-lg sm:leading-8",
            isInverse ? "text-white/[0.78]" : "text-[var(--color-muted)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
