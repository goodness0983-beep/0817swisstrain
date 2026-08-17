import Link from "next/link";
import { timeline } from "@/lib/timeline";

export default function DepartureBoard() {
  const rows = timeline.slice(0, 5);

  return (
    <section className="border-b border-stone/60 bg-slate text-paper">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-glacier">
          Next Departures · 下一班列車
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          一段用鋼軌寫成的
          <br />
          瑞士歷史
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/70">
          從 1847 年蘇黎世到巴登的四十五分鐘車程，到貫穿阿爾卑斯山脈的世紀隧道工程——
          這裡是瑞士鐵路近兩百年發展的時刻表。
        </p>

        <div className="mt-10 overflow-hidden rounded-sm border border-paper/15">
          <div className="grid grid-cols-[70px_1fr_auto] gap-2 border-b border-paper/15 bg-paper/5 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-paper/50">
            <span>年份</span>
            <span>事件 / 站名</span>
            <span className="hidden sm:block">詳情</span>
          </div>
          {rows.map((era, i) => (
            <Link
              key={era.slug}
              href={`/articles/${era.slug}`}
              className="focus-ring flap-row group grid grid-cols-[70px_1fr_auto] items-center gap-2 border-b border-paper/10 px-4 py-3 text-sm transition-colors last:border-b-0 hover:bg-paper/10"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="font-mono text-rail">{era.year.slice(0, 4)}</span>
              <span>
                <span className="block text-paper">{era.title}</span>
                <span className="block text-[12px] text-paper/50">{era.station}</span>
              </span>
              <span className="hidden font-mono text-[11px] text-glacier sm:block">
                閱讀 →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/timeline"
            className="focus-ring rounded-sm bg-rail px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            查看完整時間軸
          </Link>
          <Link
            href="/articles"
            className="focus-ring rounded-sm border border-paper/30 px-5 py-2.5 text-sm font-medium text-paper/90 transition-colors hover:border-paper/60"
          >
            瀏覽所有文章
          </Link>
        </div>
      </div>
    </section>
  );
}
