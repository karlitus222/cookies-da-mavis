"use client";

import { useMemo, useState } from "react";
import { brandInfo } from "@/dados/conteudo-site";
import { juntarClasses } from "@/codigo/classes-css";
import { formatarMoedaBrasileira, converterMoedaBrasileira } from "@/codigo/moeda";
import { obterRotuloEstoque, atingiuLimiteEstoque } from "@/codigo/estoque";
import { criarMensagemPedidoCarrinho, criarLinkWhatsApp } from "@/codigo/mensagens-whatsapp";
import { useCarrinho } from "./ProvedorCarrinho";

export function GavetaCarrinho() {
  const { clear, decrement, increment, items, removeItem, totalItems } = useCarrinho();
  const [address, setAddress] = useState("");
  const [fulfillmentMethod, setFulfillmentMethod] = useState<
    "delivery" | "pickup"
  >("delivery");
  const [isOpen, setIsOpen] = useState(false);

  const total = useMemo(() => {
    const prices = items.map((item) => converterMoedaBrasileira(item.price));

    if (prices.some((price) => price === null)) {
      return null;
    }

    return items.reduce((sum, item, index) => {
      const price = prices[index] ?? 0;

      return sum + price * item.quantity;
    }, 0);
  }, [items]);

  const formattedTotal = total === null ? null : formatarMoedaBrasileira(total);
  const needsAddress = fulfillmentMethod === "delivery";
  const canCheckout = totalItems > 0 && (!needsAddress || address.trim().length > 0);
  const orderHref = criarLinkWhatsApp(
    brandInfo.whatsappNumber,
    criarMensagemPedidoCarrinho({
      brandName: brandInfo.name,
      fulfillment: {
        address,
        method: fulfillmentMethod
      },
      items,
      total: formattedTotal
    })
  );
  const hasItems = totalItems > 0;

  return (
    <>
      {isOpen ? (
        <button
          aria-label="Fechar carrinho"
          className="fixed inset-0 z-[60] cursor-default bg-[#351114]/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          type="button"
        />
      ) : null}

      <aside
        aria-label="Carrinho de pedido"
        className={juntarClasses(
          "fixed bottom-3 left-3 right-3 z-[70] max-h-[88vh] overflow-y-auto rounded-[2rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] p-4 shadow-[0_28px_90px_-36px_rgba(53,17,20,0.55)] transition duration-300 sm:bottom-5 sm:left-auto sm:right-5 sm:w-[27rem] sm:p-5",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        )}
      >
        <div className="absolute inset-0 -z-10 bg-[var(--mavis-pattern)] opacity-[0.08]" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Seu pedido
            </p>
            <h2 className="mt-1 font-display text-2xl font-black text-[var(--color-text)]">
              Carrinho da Mavis
            </h2>
          </div>
          <button
            aria-label="Fechar carrinho"
            className="tap-soft grid h-10 w-10 place-items-center rounded-full bg-[var(--color-accent-soft)] font-black text-[var(--color-primary)]"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            x
          </button>
        </div>

        <div className="mt-4 max-h-[36vh] overflow-y-auto pr-1">
          {hasItems ? (
            <div className="grid gap-3">
              {items.map((item) => {
                const stockLabel = obterRotuloEstoque(item.stock);
                const isAtLimit = atingiuLimiteEstoque(item.quantity, item.stock);

                return (
                  <article
                    className="rounded-[1.4rem] border border-[var(--color-primary)]/10 bg-white/75 p-3 shadow-sm"
                    key={item.id}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-black leading-tight">
                          {item.name}
                        </h3>
                        {item.price ? (
                          <p className="mt-1 text-sm font-bold text-[var(--color-muted)]">
                            {item.price} cada
                          </p>
                        ) : null}
                        {stockLabel ? (
                          <p className="mt-1 text-xs font-black uppercase tracking-[0.1em] text-[var(--color-muted)]">
                            {stockLabel}
                          </p>
                        ) : null}
                      </div>
                      <button
                        className="text-xs font-black uppercase tracking-[0.12em] text-[var(--color-muted)] underline decoration-[var(--color-accent)]/40 underline-offset-4"
                        onClick={() => removeItem(item.id)}
                        type="button"
                      >
                        tirar
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-[var(--color-primary)]/10 bg-[var(--color-background)] p-1">
                        <button
                          aria-label={`Diminuir ${item.name}`}
                          className="grid h-8 w-8 place-items-center rounded-full bg-white font-black text-[var(--color-primary)] shadow-sm"
                          onClick={() => decrement(item.id)}
                          type="button"
                        >
                          -
                        </button>
                        <span className="min-w-9 text-center text-sm font-black">
                          {item.quantity}
                        </span>
                        <button
                          aria-label={`Aumentar ${item.name}`}
                          className={juntarClasses(
                            "grid h-8 w-8 place-items-center rounded-full font-black shadow-sm transition",
                            isAtLimit
                              ? "cursor-not-allowed bg-[var(--color-primary)]/20 text-[var(--color-muted)]"
                              : "bg-[var(--color-primary)] text-white"
                          )}
                          disabled={isAtLimit}
                          onClick={() => increment(item.id)}
                          type="button"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-right text-sm font-black text-[var(--color-primary)]">
                        {item.quantity} un.
                        {isAtLimit ? (
                          <span className="block text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                            limite do estoque
                          </span>
                        ) : null}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[1.4rem] border border-dashed border-[var(--color-primary)]/20 bg-white/60 p-5 text-center">
              <p className="font-display text-xl font-black">
                Seu carrinho ainda esta vazio
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Escolha os sabores ali em cima e a Mavis monta a mensagem do
                WhatsApp para voce.
              </p>
            </div>
          )}
        </div>

        {hasItems ? (
          <div className="mt-4 rounded-[1.4rem] border border-[var(--color-primary)]/10 bg-white/70 p-3 shadow-sm">
            <p className="text-sm font-black text-[var(--color-text)]">
              Como voce quer receber?
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                { label: "Entrega", value: "delivery" },
                { label: "Retirada", value: "pickup" }
              ].map((option) => {
                const isSelected = fulfillmentMethod === option.value;

                return (
                  <button
                    aria-pressed={isSelected}
                    className={juntarClasses(
                      "tap-soft rounded-full border px-3 py-2 text-sm font-black transition",
                      isSelected
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-sm"
                        : "border-[var(--color-primary)]/15 bg-[var(--color-background)] text-[var(--color-muted)]"
                    )}
                    key={option.value}
                    onClick={() =>
                      setFulfillmentMethod(option.value as "delivery" | "pickup")
                    }
                    type="button"
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {needsAddress ? (
              <label className="mt-3 block">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Endereco de entrega
                </span>
                <textarea
                  className="mt-2 min-h-20 w-full resize-none rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-background)] px-3 py-2 text-sm font-bold leading-6 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-primary)] focus:bg-white"
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Rua, numero, bairro, complemento e ponto de referencia"
                  value={address}
                />
              </label>
            ) : (
              <p className="mt-3 rounded-2xl bg-[var(--color-background)] px-3 py-2 text-xs font-bold leading-5 text-[var(--color-muted)]">
                A retirada sera combinada no WhatsApp com horario e disponibilidade.
              </p>
            )}
          </div>
        ) : null}

        <div className="mt-4 rounded-[1.4rem] bg-[var(--color-background)]/90 p-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-bold text-[var(--color-muted)]">
              Total aproximado
            </span>
            <strong className="font-display text-xl font-black text-[var(--color-primary)]">
              {formattedTotal ?? "a confirmar"}
            </strong>
          </div>
          <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
            {needsAddress
              ? "Taxa de entrega, disponibilidade e forma de pagamento sao combinadas no WhatsApp."
              : "Horario de retirada, disponibilidade e forma de pagamento sao combinados no WhatsApp."}
          </p>
        </div>

        <div className="mt-4 grid gap-2">
          <a
            aria-disabled={!canCheckout}
            className={juntarClasses(
              "tap-soft inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-black transition",
              canCheckout
                ? "button-3d bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:-translate-y-0.5"
                : "pointer-events-none bg-[var(--color-primary)]/25 text-[var(--color-muted)]"
            )}
            href={canCheckout ? orderHref : "#sabores"}
            rel={canCheckout ? "noreferrer" : undefined}
            target={canCheckout ? "_blank" : undefined}
          >
            {!hasItems
              ? "Adicione itens para continuar"
              : needsAddress && !address.trim()
                ? "Informe o endereco para continuar"
                : "Fechar pedido no WhatsApp"}
          </a>
          {hasItems ? (
            <button
              className="text-xs font-black uppercase tracking-[0.14em] text-[var(--color-muted)]"
              onClick={clear}
              type="button"
            >
              limpar carrinho
            </button>
          ) : null}
        </div>
      </aside>

      <button
        aria-label={hasItems ? `Abrir carrinho com ${totalItems} itens` : "Abrir carrinho"}
        className="button-3d tap-soft fixed bottom-4 right-4 z-50 inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 text-sm font-black text-[var(--color-primary-foreground)] transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:bottom-5 sm:right-5 sm:min-h-14 sm:px-5"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span>Carrinho</span>
        <span
          className="animate-cart-pop grid h-7 min-w-7 place-items-center rounded-full bg-[var(--color-accent-soft)] px-2 text-xs text-[var(--color-primary)]"
          key={totalItems}
        >
          {totalItems}
        </span>
      </button>
    </>
  );
}
