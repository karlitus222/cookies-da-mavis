import { obterClienteSupabaseBrowser } from "./cliente-supabase";

export type RegistroEstoque = {
  id: string;
  stock: number | null;
};

type LinhaEstoque = RegistroEstoque & {
  updated_at?: string;
};

const TABELA_ESTOQUE = "product_stock";

function normalizarEstoque(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  return Math.max(0, Math.trunc(value));
}

export async function buscarRegistrosEstoque() {
  const supabase = obterClienteSupabaseBrowser();

  if (!supabase) {
    return { data: [] as RegistroEstoque[], error: null };
  }

  const { data, error } = await supabase
    .from(TABELA_ESTOQUE)
    .select("id, stock")
    .order("id", { ascending: true });

  if (error) {
    return { data: [] as RegistroEstoque[], error };
  }

  return {
    data: (data ?? []).map((row) => ({
      id: String(row.id),
      stock: normalizarEstoque(row.stock)
    })),
    error: null
  };
}

export async function salvarRegistrosEstoque(records: RegistroEstoque[]) {
  const supabase = obterClienteSupabaseBrowser();

  if (!supabase) {
    return {
      data: [] as RegistroEstoque[],
      error: new Error("Supabase nao configurado.")
    };
  }

  const rows: LinhaEstoque[] = records.map((record) => ({
    id: record.id,
    stock: normalizarEstoque(record.stock),
    updated_at: new Date().toISOString()
  }));

  const { data, error } = await supabase
    .from(TABELA_ESTOQUE)
    .upsert(rows, { onConflict: "id" })
    .select("id, stock");

  if (error) {
    return { data: [] as RegistroEstoque[], error };
  }

  return {
    data: (data ?? []).map((row) => ({
      id: String(row.id),
      stock: normalizarEstoque(row.stock)
    })),
    error: null
  };
}

export function mapearRegistrosEstoque(records: RegistroEstoque[]) {
  return records.reduce<Record<string, number | null>>((acc, record) => {
    acc[record.id] = record.stock;
    return acc;
  }, {});
}
