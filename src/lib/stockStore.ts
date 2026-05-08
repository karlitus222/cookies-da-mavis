import { getSupabaseBrowserClient } from "./supabaseClient";

export type StockRecord = {
  id: string;
  stock: number | null;
};

type StockRow = StockRecord & {
  updated_at?: string;
};

const STOCK_TABLE = "product_stock";

function normalizeStock(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  return Math.max(0, Math.trunc(value));
}

export async function fetchStockRecords() {
  const supabase = getSupabaseBrowserClient();

  if (!supabase) {
    return { data: [] as StockRecord[], error: null };
  }

  const { data, error } = await supabase
    .from(STOCK_TABLE)
    .select("id, stock")
    .order("id", { ascending: true });

  if (error) {
    return { data: [] as StockRecord[], error };
  }

  return {
    data: (data ?? []).map((row) => ({
      id: String(row.id),
      stock: normalizeStock(row.stock)
    })),
    error: null
  };
}

export async function saveStockRecords(records: StockRecord[]) {
  const supabase = getSupabaseBrowserClient();

  if (!supabase) {
    return {
      data: [] as StockRecord[],
      error: new Error("Supabase nao configurado.")
    };
  }

  const rows: StockRow[] = records.map((record) => ({
    id: record.id,
    stock: normalizeStock(record.stock),
    updated_at: new Date().toISOString()
  }));

  const { data, error } = await supabase
    .from(STOCK_TABLE)
    .upsert(rows, { onConflict: "id" })
    .select("id, stock");

  if (error) {
    return { data: [] as StockRecord[], error };
  }

  return {
    data: (data ?? []).map((row) => ({
      id: String(row.id),
      stock: normalizeStock(row.stock)
    })),
    error: null
  };
}

export function stockRecordsToMap(records: StockRecord[]) {
  return records.reduce<Record<string, number | null>>((acc, record) => {
    acc[record.id] = record.stock;
    return acc;
  }, {});
}
