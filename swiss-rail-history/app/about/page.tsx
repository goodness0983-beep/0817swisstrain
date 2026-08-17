import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於本站",
  description: "關於瑞士鐵路史網站的製作理念與內容來源說明。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
        About
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        關於本站
      </h1>

      <div className="mt-8 space-y-5 text-[15px] leading-8 text-ink/85">
        <p>
          瑞士鐵路史是一個以繁體中文整理瑞士鐵路發展歷程的知識型網站。內容涵蓋
          1847 年第一條鐵路通車、聖哥達隧道與基線隧道等世紀工程、瑞士聯邦鐵路
          （SBB CFF FFS）國有化歷程，以及少女峰鐵路、冰河列車等登山與觀光鐵道的故事。
        </p>
        <p>
          我們希望以「時刻表」與「鋼軌時間軸」的方式，讓讀者能循著時間脈絡，
          理解瑞士如何在多山地形與有限資源條件下，發展出全球密度數一數二、
          且以準點聞名的鐵路網。
        </p>
        <p>
          網站內容參考瑞士聯邦鐵路、瑞士國家博物館與其他公開歷史資料整理撰寫，
          僅供知識分享與學習之用，如發現內容有誤，歡迎透過電子報回信與我們聯繫。
        </p>
      </div>
    </div>
  );
}
