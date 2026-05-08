type EntradaMensagemPedido = {
  brandName: string;
  productName?: string;
};

type EntradaMensagemPedidoCarrinho = {
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

export function somenteDigitos(value: string) {
  return value.replace(/\D/g, "");
}

export function criarMensagemPedido({ brandName, productName }: EntradaMensagemPedido) {
  if (productName) {
    return `Ola! Vim pela landing page da ${brandName} e quero pedir: ${productName}. Pode me passar disponibilidade e valores?`;
  }

  return `Ola! Vim pela landing page da ${brandName} e quero fazer um pedido de cookies. Pode me ajudar?`;
}

export function criarMensagemPedidoCarrinho({
  brandName,
  fulfillment,
  items,
  total
}: EntradaMensagemPedidoCarrinho) {
  if (items.length === 0) {
    return criarMensagemPedido({ brandName });
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

export function criarLinkWhatsApp(phone: string, message: string) {
  const digits = somenteDigitos(phone);

  if (!digits) {
    return "#contato";
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
