-- ============================================================
-- 瑞士鐵路史網站 — Supabase Schema
-- 在 Supabase Dashboard 的 SQL Editor 貼上並執行即可建立所需資料表
-- ============================================================

-- 1. 電子報訂閱名單（首頁 / 文章頁的訂閱表單會寫入這張表）
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now(),
  source_path text -- 訂閱當下所在的頁面路徑，方便日後分析
);

alter table public.newsletter_subscribers enable row level security;

-- 只允許透過帶有 anon key 的請求「新增」資料，不可讀取／修改／刪除既有紀錄，
-- 藉此避免訪客名單被公開讀取或竄改。實際的寫入是透過伺服器端 API Route
-- （使用 service role key）完成，因此這裡的 anon insert policy 主要作為備援。
create policy "Allow insert for anon" on public.newsletter_subscribers
  for insert
  to anon
  with check (true);


-- 2. （選用／未來擴充）文章資料表
-- 目前網站文章內容以 lib/articles.ts 靜態維護。
-- 若未來想改成後台可編輯的內容管理模式，可建立以下資料表，
-- 並將 lib/articles.ts 的 `articles` 陣列改為向這張表查詢即可，
-- 頁面元件（app/articles/[slug]/page.tsx 等）幾乎不需要更動。
create table if not exists public.articles (
  slug text primary key,
  year text not null,
  title text not null,
  excerpt text not null,
  reading_minutes int not null default 4,
  tags text[] not null default '{}',
  paragraphs text[] not null default '{}',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.articles enable row level security;

create policy "Allow public read of published articles" on public.articles
  for select
  to anon
  using (published = true);
