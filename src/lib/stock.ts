export function hasStockCount(stock?: number | null): stock is number {
  return typeof stock === "number" && Number.isFinite(stock);
}

export function isOutOfStock(stock?: number | null) {
  return hasStockCount(stock) && stock <= 0;
}

export function isAtStockLimit(quantity: number, stock?: number | null) {
  return hasStockCount(stock) && quantity >= Math.max(stock ?? 0, 0);
}

export function getStockLabel(stock?: number | null) {
  if (!hasStockCount(stock)) {
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
