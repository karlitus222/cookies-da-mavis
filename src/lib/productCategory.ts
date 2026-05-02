const categoryMeta: Record<string, { icon: string; className: string }> = {
  "clássico": {
    className: "product-chip-classico",
    icon: "🍪"
  },
  "lançamento": {
    className: "product-chip-lancamento",
    icon: "✨"
  },
  recheado: {
    className: "product-chip-recheado",
    icon: "💕"
  }
};

export function getProductCategoryMeta(category?: string) {
  if (!category) {
    return null;
  }

  return (
    categoryMeta[category.toLocaleLowerCase("pt-BR")] ?? {
      className: "product-chip-recheado",
      icon: "🍪"
    }
  );
}
