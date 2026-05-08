"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { atingiuLimiteEstoque, estaSemEstoque } from "@/codigo/estoque";

export type ProdutoPedivelCarrinho = {
  id: string;
  name: string;
  price?: string;
  stock?: number | null;
};

export type ItemCarrinho = {
  id: string;
  name: string;
  price?: string;
  stock?: number | null;
  quantity: number;
};

type ValorContextoCarrinho = {
  items: ItemCarrinho[];
  totalItems: number;
  addItem: (product: ProdutoPedivelCarrinho) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const ContextoCarrinho = createContext<ValorContextoCarrinho | null>(null);

export function ProvedorCarrinho({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemCarrinho[]>([]);

  const addItem = (product: ProdutoPedivelCarrinho) => {
    setItems((current) => {
      if (estaSemEstoque(product.stock)) {
        return current;
      }

      const existingItem = current.find((item) => item.id === product.id);

      if (existingItem) {
        return current.map((item) =>
          item.id === product.id
            ? atingiuLimiteEstoque(item.quantity, item.stock)
              ? item
              : { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          stock: product.stock,
          quantity: 1
        }
      ];
    });
  };

  const increment = (id: string) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? atingiuLimiteEstoque(item.quantity, item.stock)
            ? item
            : { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id: string) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const clear = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      totalItems,
      addItem,
      increment,
      decrement,
      removeItem,
      clear
    }),
    [items, totalItems]
  );

  return <ContextoCarrinho.Provider value={value}>{children}</ContextoCarrinho.Provider>;
}

export function useCarrinho() {
  const context = useContext(ContextoCarrinho);

  if (!context) {
    throw new Error("useCarrinho precisa ser usado dentro de ProvedorCarrinho.");
  }

  return context;
}
