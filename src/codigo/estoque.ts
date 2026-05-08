export function temQuantidadeEstoque(stock?: number | null): stock is number {
  return typeof stock === "number" && Number.isFinite(stock);
}

export function estaSemEstoque(stock?: number | null) {
  return temQuantidadeEstoque(stock) && stock <= 0;
}

export function atingiuLimiteEstoque(quantity: number, stock?: number | null) {
  return temQuantidadeEstoque(stock) && quantity >= Math.max(stock ?? 0, 0);
}

export function obterRotuloEstoque(stock?: number | null) {
  if (!temQuantidadeEstoque(stock)) {
    return null;
  }

  if ((stock ?? 0) <= 0) {
    return "Indisponivel";
  }

  if (stock === 1) {
    return "1 em estoque";
  }

  return `${stock} em estoque`;
}
