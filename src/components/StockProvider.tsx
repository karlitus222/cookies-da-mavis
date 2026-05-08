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
  fetchStockRecords,
  stockRecordsToMap,
  type StockRecord
} from "@/lib/stockStore";
import { isSupabaseConfigured } from "@/lib/supabaseClient";

type StockContextValue = {
  isLoading: boolean;
  stockById: Record<string, number | null>;
  refreshStocks: () => Promise<void>;
};

const StockContext = createContext<StockContextValue | null>(null);

export function StockProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [stockRecords, setStockRecords] = useState<StockRecord[]>([]);

  const refreshStocks = async () => {
    if (!isSupabaseConfigured()) {
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await fetchStockRecords();
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
      stockById: stockRecordsToMap(stockRecords)
    }),
    [isLoading, stockRecords]
  );

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
}

export function useStockValue(id: string, fallback?: number | null) {
  const context = useContext(StockContext);

  if (!context) {
    return fallback;
  }

  return Object.prototype.hasOwnProperty.call(context.stockById, id)
    ? context.stockById[id]
    : fallback;
}

export function useStockMap() {
  const context = useContext(StockContext);

  return context?.stockById ?? {};
}

export function resolveStockValue(
  stockById: Record<string, number | null>,
  id: string,
  fallback?: number | null
) {
  return Object.prototype.hasOwnProperty.call(stockById, id)
    ? stockById[id]
    : fallback;
}
