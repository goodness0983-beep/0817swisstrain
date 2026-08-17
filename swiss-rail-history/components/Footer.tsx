import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone/60 bg-slate text-paper">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-glacier">
              月台廣播 / Platform Announcement
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold">
              訂閱瑞士鐵路史電子報
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/70">
              每月一封信，分享新增的鐵路歷史文章與工程冷知識，不會有其他打擾。
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
          <div className="font-mono text-[13px] leading-loose text-paper/60">
            <p className="mb-2 text-paper/80">本站資料來源</p>
            <p>內容參考瑞士聯邦鐵路（SBB）、瑞士國家博物館與公開歷史紀錄整理撰寫，僅供知識分享之用。</p>
          </div>
        </div>
        <p className="mt-12 text-[11px] text-paper/40">
          © {new Date().getFullYear()} 瑞士鐵路史 Swiss Rail Archive — 以站牌與鋼軌記錄兩百年工程史。
        </p>
      </div>
    </footer>
  );
}
