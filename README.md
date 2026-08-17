# 瑞士鐵路史 Swiss Rail Archive

以 Next.js（App Router）+ Tailwind CSS 打造的瑞士鐵路歷史 SEO 網站，部署於 Vercel，並整合 Supabase 作為電子報訂閱資料庫。

## 技術棧

- **框架**：Next.js 14（App Router，靜態生成 + Route Handler）
- **樣式**：Tailwind CSS，自訂「月台時刻表 / 鋼軌時間軸」設計系統
- **資料庫**：Supabase（`newsletter_subscribers` 資料表；預留 `articles` 資料表供未來改為後台可編輯內容）
- **部署**：Vercel

目前所有文章與時間軸內容是**靜態資料**（見 `lib/articles.ts`、`lib/timeline.ts`），對 SEO 與載入速度最有利。Supabase 目前負責電子報訂閱功能；`supabase/schema.sql` 已預留 `articles` 資料表，未來若想改成後台可編輯的 CMS 模式，只需把 `lib/articles.ts` 換成向 Supabase 查詢即可，頁面元件幾乎不用改。

## 本機開發

```bash
npm install
cp .env.example .env.local   # 填入你的 Supabase 專案資訊
npm run dev
```

開啟 http://localhost:3000

## 設定 Supabase

1. 到你的 Supabase 專案 → **SQL Editor**，貼上並執行 `supabase/schema.sql`，建立 `newsletter_subscribers`（與預留的 `articles`）資料表。
2. 到 **Project Settings → API**，複製：
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`（**僅**用於伺服器端，勿外流、勿加 `NEXT_PUBLIC_` 前綴）
3. 將這三組值填進 `.env.local`（本機）以及 Vercel 專案的 Environment Variables（正式環境）。

## 部署到 Vercel

1. 將這個專案推送到你的 GitHub repo（例如 `0817swisstrain`）：
   ```bash
   git init
   git add .
   git commit -m "feat: 瑞士鐵路史網站初版"
   git branch -M main
   git remote add origin https://github.com/goodness0983-beep/0817swisstrain.git
   git push -u origin main
   ```
2. 到 [vercel.com](https://vercel.com) → **Add New Project** → 選擇這個 GitHub repo → Framework 會自動偵測為 Next.js。
3. 在 Vercel 的 **Environment Variables** 設定頁，加入 `.env.example` 中列出的四組變數（`NEXT_PUBLIC_SITE_URL` 填正式網域，例如 `https://your-project.vercel.app`）。
4. 點擊 **Deploy**，完成後即可透過 Vercel 提供的網址訪問。

## SEO 重點設計

- `app/layout.tsx`：全站預設 metadata、Open Graph、`WebSite` JSON-LD 結構化資料。
- `app/articles/[slug]/page.tsx`：每篇文章獨立 metadata、canonical URL、`Article` 與 `BreadcrumbList` JSON-LD。
- `app/sitemap.ts`、`app/robots.ts`：自動依文章資料產生 sitemap 與 robots.txt。
- 語意化標題階層（h1 → h3）、`next/font` 自動優化字型載入、響應式排版、鍵盤可視焦點樣式。

部署完成後建議：
1. 到 Google Search Console 加入網站並提交 `https://你的網域/sitemap.xml`。
2. 將 `NEXT_PUBLIC_SITE_URL` 換成正式網域後重新部署，確保 canonical URL 與 JSON-LD 網址正確。

## 專案結構

```
app/
  layout.tsx            根版面、全站 metadata
  page.tsx               首頁（月台時刻表 Hero）
  timeline/page.tsx       時間軸頁（鋼軌時間軸元件）
  articles/page.tsx       文章列表
  articles/[slug]/page.tsx  文章內頁（動態 metadata + JSON-LD）
  about/page.tsx          關於本站
  api/subscribe/route.ts  電子報訂閱 API（寫入 Supabase）
  sitemap.ts / robots.ts  SEO 用路由
components/               UI 元件
lib/
  articles.ts            文章靜態資料
  timeline.ts             時間軸靜態資料
  supabase.ts             Supabase client（browser / server）
  seo.ts                  網站 SEO 共用設定
supabase/schema.sql       Supabase 資料表 SQL
```
