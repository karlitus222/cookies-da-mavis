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
  fulfillment?: {
    address?: string;
    method: "delivery" | "pickup";
  };
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
  fulfillment,
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
  const fulfillmentLine = fulfillment
    ? fulfillment.method === "delivery"
      ? `\nForma de recebimento: Entrega.\nEndereco: ${fulfillment.address?.trim() || "a informar"}.`
      : "\nForma de recebimento: Retirada."
    : "";
  const confirmationLine =
    fulfillment?.method === "pickup"
      ? "Pode confirmar disponibilidade, horario de retirada e forma de pagamento?"
      : fulfillment?.method === "delivery"
        ? "Pode confirmar disponibilidade, taxa de entrega e forma de pagamento?"
        : "Pode confirmar disponibilidade, taxa de entrega e forma de pagamento?";

  return `Ola! Vim pela landing page da ${brandName} e quero fazer esse pedido:\n${productLines}${totalLine}${fulfillmentLine}\n${confirmationLine}`;
}

export function createWhatsAppLink(phone: string, message: string) {
  const digits = onlyDigits(phone);

  if (!digits) {
    return "#contato";
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
