import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-brand hover:-translate-y-0.5 hover:shadow-xl",
  secondary:
    "border border-[var(--color-primary)]/20 bg-[var(--color-surface)] text-[var(--color-primary)] hover:-translate-y-0.5 hover:border-[var(--color-primary)]",
  ghost:
    "text-[var(--color-primary)] underline decoration-[var(--color-accent)]/40 underline-offset-8 hover:decoration-[var(--color-accent)]"
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: ButtonLinkProps) {
  const isExternal = typeof href === "string" && href.startsWith("http");

  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]",
        variants[variant],
        className
      )}
      href={href}
      rel={isExternal ? "noreferrer" : props.rel}
      target={isExternal ? "_blank" : props.target}
      {...props}
    >
      {children}
    </a>
  );
}
