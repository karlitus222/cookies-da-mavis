"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import {
  buscarRegistrosEstoque,
  mapearRegistrosEstoque,
  type RegistroEstoque
} from "@/codigo/banco-estoque";
import { supabaseEstaConfigurado } from "@/codigo/cliente-supabase";

type StockContextValue = {
  isLoading: boolean;
  stockById: Record<string, number | null>;
  refreshStocks: () => Promise<void>;
};

const StockContext = createContext<StockContextValue | null>(null);

export function ProvedorEstoque({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [stockRecords, setStockRecords] = useState<RegistroEstoque[]>([]);

  const refreshStocks = async () => {
    if (!supabaseEstaConfigurado()) {
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await buscarRegistrosEstoque();
      setStockRecords(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void refreshStocks();
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      refreshStocks,
      stockById: mapearRegistrosEstoque(stockRecords)
    }),
    [isLoading, stockRecords]
  );

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
}

export function useValorEstoque(id: string, fallback?: number | null) {
  const context = useContext(StockContext);

  if (!context) {
    return fallback;
  }

  return Object.prototype.hasOwnProperty.call(context.stockById, id)
    ? context.stockById[id]
    : fallback;
}

export function useMapaEstoque() {
  const context = useContext(StockContext);

  return context?.stockById ?? {};
}

export function resolverValorEstoque(
  stockById: Record<string, number | null>,
  id: string,
  fallback?: number | null
) {
  return Object.prototype.hasOwnProperty.call(stockById, id)
    ? stockById[id]
    : fallback;
}
