import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default"
}: SectionHeadingProps) {
  const isInverse = tone === "inverse";

  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-black uppercase tracking-[0.25em]",
            isInverse ? "text-white/70" : "text-[var(--color-accent)]"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-black leading-tight sm:text-4xl",
          isInverse ? "text-white" : "text-[var(--color-text)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-8 sm:text-lg",
            isInverse ? "text-white/[0.78]" : "text-[var(--color-muted)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
