export function parseBrazilianCurrency(price?: string) {
  if (!price) {
    return null;
  }

  const normalized = price.replace(/[^\d,]/g, "").replace(",", ".");
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : null;
}

export function formatBrazilianCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency"
  }).format(value);
}
