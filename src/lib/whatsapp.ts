type OrderMessageInput = {
  brandName: string;
  productName?: string;
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

export function createWhatsAppLink(phone: string, message: string) {
  const digits = onlyDigits(phone);

  if (!digits) {
    return "#contato";
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
