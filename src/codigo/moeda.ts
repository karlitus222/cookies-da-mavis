export function converterMoedaBrasileira(price?: string) {
  if (!price) {
    return null;
  }

  const normalized = price.replace(/[^\d,]/g, "").replace(",", ".");
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : null;
}

export function formatarMoedaBrasileira(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency"
  }).format(value);
}
