-- Cookies da Mavis: estoque editavel pelo painel /admin
-- Rode este arquivo no SQL Editor do Supabase.

create table if not exists public.product_stock (
  id text primary key,
  stock integer check (stock is null or stock >= 0),
  updated_at timestamptz not null default now()
);

create table if not exists public.stock_admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.product_stock enable row level security;
alter table public.stock_admins enable row level security;

grant select on public.product_stock to anon, authenticated;
grant insert, update on public.product_stock to authenticated;
grant select on public.stock_admins to authenticated;

drop policy if exists "stock is readable by everyone" on public.product_stock;
create policy "stock is readable by everyone"
on public.product_stock
for select
to anon, authenticated
using (true);

drop policy if exists "admins can insert stock" on public.product_stock;
create policy "admins can insert stock"
on public.product_stock
for insert
to authenticated
with check (
  exists (
    select 1
    from public.stock_admins
    where stock_admins.user_id = (select auth.uid())
  )
);

drop policy if exists "admins can update stock" on public.product_stock;
create policy "admins can update stock"
on public.product_stock
for update
to authenticated
using (
  exists (
    select 1
    from public.stock_admins
    where stock_admins.user_id = (select auth.uid())
  )
)
with check (
  exists (
    select 1
    from public.stock_admins
    where stock_admins.user_id = (select auth.uid())
  )
);

drop policy if exists "admins can read own admin flag" on public.stock_admins;
create policy "admins can read own admin flag"
on public.stock_admins
for select
to authenticated
using (user_id = (select auth.uid()));

-- Depois de criar o usuario da cliente em Authentication > Users,
-- copie o User UID e libere o acesso com:
--
-- insert into public.stock_admins (user_id)
-- values ('COLE-O-USER-UID-AQUI')
-- on conflict (user_id) do nothing;
