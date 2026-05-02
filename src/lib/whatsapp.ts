type OrderMessageInput = {
  brandName: string;
  productName?: string;
};

type CartOrderMessageInput = {
  brandName: string;
  items: Array<{
    name: string;
    price?: string;
    quantity: number;
  }>;
  total?: string | null;
};

export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function createOrderMessage({ brandName, productName }: OrderMessageInput) {
  if (productName) {
    return `Ola! Vim pela landing page da ${brandName} e quero pedir: ${productName}. Pode me passar disponibilidade e valores?`;
  }

  return `Ola! Vim pela landing page da ${brandName} e quero fazer um pedido de cookies. Pode me ajudar?`;
}

export function createCartOrderMessage({
  brandName,
  items,
  total
}: CartOrderMessageInput) {
  if (items.length === 0) {
    return createOrderMessage({ brandName });
  }

  const productLines = items
    .map((item) => {
      const price = item.price ? ` (${item.price} cada)` : "";

      return `- ${item.quantity}x ${item.name}${price}`;
    })
    .join("\n");
  const totalLine = total ? `\nTotal aproximado: ${total}.` : "";

  return `Ola! Vim pela landing page da ${brandName} e quero fazer esse pedido:\n${productLines}${totalLine}\nPode confirmar disponibilidade, taxa de entrega e forma de pagamento?`;
}

export function createWhatsAppLink(phone: string, message: string) {
  const digits = onlyDigits(phone);

  if (!digits) {
    return "#contato";
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
