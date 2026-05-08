"use client";

import type { Session } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { brandInfo, combos, products } from "@/dados/conteudo-site";
import { caminhoAsset } from "@/codigo/caminho-assets";
import { juntarClasses } from "@/codigo/classes-css";
import { obterRotuloEstoque, estaSemEstoque } from "@/codigo/estoque";
import {
  buscarRegistrosEstoque,
  salvarRegistrosEstoque,
  mapearRegistrosEstoque,
  type RegistroEstoque
} from "@/codigo/banco-estoque";
import {
  obterClienteSupabaseBrowser,
  supabaseEstaConfigurado
} from "@/codigo/cliente-supabase";

type EditableStockItem = {
  id: string;
  name: string;
  category: string;
  price?: string;
};

const editableItems: EditableStockItem[] = [
  ...products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category ?? "Sabor",
    price: product.price
  })),
  ...combos.map((combo) => ({
    id: combo.id,
    name: combo.name,
    category: "Especial",
    price: combo.price
  }))
];

function stockToInputValue(stock?: number | null) {
  return typeof stock === "number" && Number.isFinite(stock)
    ? String(stock)
    : "";
}

function inputValueToStock(value: string) {
  const normalized = value.trim();

  if (!normalized) {
    return null;
  }

  const parsed = Number.parseInt(normalized, 10);

  if (!Number.isFinite(parsed)) {
    return null;
  }

  return Math.max(0, parsed);
}

export function PainelEstoque() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [password, setPassword] = useState("");
  const [session, setSession] = useState<Session | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [stockInputs, setStockInputs] = useState<Record<string, string>>({});
  const configured = supabaseEstaConfigurado();

  const stockRecords = useMemo<RegistroEstoque[]>(
    () =>
      editableItems.map((item) => ({
        id: item.id,
        stock: inputValueToStock(stockInputs[item.id] ?? "")
      })),
    [stockInputs]
  );

  const stockById = useMemo(() => mapearRegistrosEstoque(stockRecords), [stockRecords]);

  const loadStocks = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await buscarRegistrosEstoque();

      if (error) {
        setErrorMessage(
          "Nao consegui carregar o estoque. Confere se a tabela do Supabase foi criada."
        );
        return;
      }

      const nextInputs = editableItems.reduce<Record<string, string>>(
        (acc, item) => {
          const record = data.find((stockRecord) => stockRecord.id === item.id);
          acc[item.id] = stockToInputValue(record?.stock ?? null);
          return acc;
        },
        {}
      );

      setStockInputs(nextInputs);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const supabase = obterClienteSupabaseBrowser();

    if (!supabase) {
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);

      if (data.session) {
        void loadStocks();
      }
    });

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);

      if (nextSession) {
        void loadStocks();
      }
    });

    return () => subscription.unsubscribe();
  }, [loadStocks]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setStatusMessage("");
    setIsLoading(true);

    const supabase = obterClienteSupabaseBrowser();

    if (!supabase) {
      setErrorMessage("Supabase ainda nao esta configurado.");
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setErrorMessage("E-mail ou senha nao conferem.");
    } else {
      setPassword("");
      setStatusMessage("Login feito. Pode editar o estoque.");
    }

    setIsLoading(false);
  };

  const handleLogout = async () => {
    const supabase = obterClienteSupabaseBrowser();
    await supabase?.auth.signOut();
    setSession(null);
    setStockInputs({});
    setStatusMessage("Voce saiu do painel.");
  };

  const handleSave = async () => {
    setErrorMessage("");
    setStatusMessage("");
    setIsSaving(true);

    try {
      const { error } = await salvarRegistrosEstoque(stockRecords);

      if (error) {
        setErrorMessage(
          "Nao consegui salvar. Confere se esse usuario esta liberado como admin no Supabase."
        );
        return;
      }

      setStatusMessage("Estoque salvo. O site ja pode usar esses valores.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!configured) {
    return (
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--color-primary)]/10 bg-white/78 p-5 shadow-brand sm:p-8">
        <p className="section-eyebrow text-xs font-black uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Configuracao pendente
        </p>
        <h1 className="mt-3 font-display text-3xl font-black text-[var(--color-text)] sm:text-5xl">
          Painel de estoque quase pronto
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
          Falta conectar o Supabase. Depois disso, a cliente consegue entrar,
          editar as quantidades e o site mostra automaticamente quando um cookie
          estiver indisponivel.
        </p>
        <div className="mt-5 rounded-3xl border border-dashed border-[var(--color-primary)]/20 bg-[var(--color-background)] p-4 text-sm leading-6 text-[var(--color-muted)]">
          <p className="font-black text-[var(--color-text)]">
            O que configurar:
          </p>
          <p>1. Criar um projeto no Supabase.</p>
          <p>2. Rodar o SQL em `supabase/stock-schema.sql`.</p>
          <p>3. Criar o login da cliente no Supabase Auth.</p>
          <p>
            4. Adicionar `NEXT_PUBLIC_SUPABASE_URL` e
            `NEXT_PUBLIC_SUPABASE_ANON_KEY` na Vercel.
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <section className="rounded-[2rem] border border-[var(--color-primary)]/10 bg-white/78 p-5 shadow-brand sm:p-8">
          <div className="flex items-center gap-3">
            <Image
              alt={brandInfo.logo.alt}
              className="h-14 w-14 rounded-2xl object-cover"
              height={80}
              src={caminhoAsset(brandInfo.logo.src)}
              width={80}
            />
            <div>
              <p className="section-eyebrow text-xs font-black uppercase tracking-[0.18em] text-[var(--color-primary)]">
                Estoque
              </p>
              <h1 className="font-display text-3xl font-black text-[var(--color-text)]">
                Painel da Mavis
              </h1>
            </div>
          </div>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            Entre com o login da cliente para atualizar as quantidades sem mexer
            em codigo. Quando um item ficar com estoque zero, ele aparece como
            indisponivel no site.
          </p>
        </section>

        <form
          className="rounded-[2rem] border border-[var(--color-primary)]/10 bg-white/88 p-5 shadow-brand sm:p-8"
          onSubmit={handleLogin}
        >
          <label className="block">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--color-accent)]">
              E-mail
            </span>
            <input
              className="mt-2 min-h-12 w-full rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-background)] px-4 text-base font-bold text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="cliente@email.com"
              type="email"
              value={email}
            />
          </label>

          <label className="mt-4 block">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Senha
            </span>
            <input
              className="mt-2 min-h-12 w-full rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-background)] px-4 text-base font-bold text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Senha do painel"
              type="password"
              value={password}
            />
          </label>

          {errorMessage ? (
            <p className="mt-4 rounded-2xl bg-[var(--color-primary)]/10 px-4 py-3 text-sm font-bold text-[var(--color-primary)]">
              {errorMessage}
            </p>
          ) : null}

          <button
            className="button-3d tap-soft mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-black text-[var(--color-primary-foreground)] transition hover:-translate-y-0.5"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Entrando..." : "Entrar no painel"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-[var(--color-primary)]/10 bg-white/82 p-5 shadow-brand sm:p-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-eyebrow text-xs font-black uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Painel de estoque
          </p>
          <h1 className="mt-2 font-display text-3xl font-black leading-tight text-[var(--color-text)] sm:text-5xl">
            Atualizar quantidades
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base">
            Deixe vazio para nao mostrar estoque. Coloque `0` para deixar o
            item indisponivel.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            className="tap-soft inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-primary)]/15 bg-white px-5 py-3 text-sm font-black text-[var(--color-primary)]"
            href="/"
          >
            Ver site
          </Link>
          <button
            className="tap-soft inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-primary)]/15 bg-[var(--color-background)] px-5 py-3 text-sm font-black text-[var(--color-muted)]"
            onClick={handleLogout}
            type="button"
          >
            Sair
          </button>
        </div>
      </div>

      {statusMessage || errorMessage ? (
        <p
          className={juntarClasses(
            "mt-4 rounded-2xl px-4 py-3 text-sm font-black",
            errorMessage
              ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
              : "bg-white/80 text-[var(--color-muted)]"
          )}
        >
          {errorMessage || statusMessage}
        </p>
      ) : null}

      <div className="mt-5 grid gap-3">
        {editableItems.map((item) => {
          const stockValue = stockById[item.id];
          const stockLabel = obterRotuloEstoque(stockValue);
          const unavailable = estaSemEstoque(stockValue);

          return (
            <article
              className="grid gap-3 rounded-[1.7rem] border border-[var(--color-primary)]/10 bg-white/82 p-4 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center"
              key={item.id}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-2xl font-black leading-tight text-[var(--color-text)]">
                    {item.name}
                  </h2>
                  <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[var(--color-primary)]">
                    {item.category}
                  </span>
                  {item.price ? (
                    <span className="rounded-full bg-[var(--color-background)] px-3 py-1 text-xs font-black text-[var(--color-muted)]">
                      {item.price}
                    </span>
                  ) : null}
                </div>
                <p
                  className={juntarClasses(
                    "mt-2 text-sm font-bold",
                    unavailable
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-muted)]"
                  )}
                >
                  {stockLabel ?? "Sem controle de estoque visivel no site"}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                <input
                  aria-label={`Estoque de ${item.name}`}
                  className="min-h-12 w-28 rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-background)] px-4 text-center text-lg font-black text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:bg-white"
                  min={0}
                  onChange={(event) =>
                    setStockInputs((current) => ({
                      ...current,
                      [item.id]: event.target.value
                    }))
                  }
                  placeholder="-"
                  type="number"
                  value={stockInputs[item.id] ?? ""}
                />
                <button
                  className="tap-soft min-h-11 rounded-full bg-[var(--color-accent-soft)] px-4 text-xs font-black uppercase tracking-[0.1em] text-[var(--color-primary)]"
                  onClick={() =>
                    setStockInputs((current) => ({ ...current, [item.id]: "0" }))
                  }
                  type="button"
                >
                  Zerar
                </button>
                <button
                  className="tap-soft min-h-11 rounded-full border border-[var(--color-primary)]/15 bg-white px-4 text-xs font-black uppercase tracking-[0.1em] text-[var(--color-muted)]"
                  onClick={() =>
                    setStockInputs((current) => ({ ...current, [item.id]: "" }))
                  }
                  type="button"
                >
                  Sem controle
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div className="sticky bottom-3 mt-5 rounded-[1.7rem] border border-[var(--color-primary)]/10 bg-white/90 p-3 shadow-brand backdrop-blur sm:bottom-5 sm:flex sm:items-center sm:justify-between sm:p-4">
        <p className="text-sm font-bold leading-6 text-[var(--color-muted)]">
          {isLoading
            ? "Carregando estoque..."
            : "Salvar aqui atualiza os valores usados no site."}
        </p>
        <button
          className="button-3d tap-soft mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-black text-[var(--color-primary-foreground)] transition hover:-translate-y-0.5 sm:mt-0 sm:w-auto"
          disabled={isSaving}
          onClick={handleSave}
          type="button"
        >
          {isSaving ? "Salvando..." : "Salvar estoque"}
        </button>
      </div>
    </div>
  );
}
