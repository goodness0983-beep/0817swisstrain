import Link from "next/link";
import { timeline } from "@/lib/timeline";

export default function TimelineRail() {
  return (
    <ol className="relative mx-auto max-w-3xl px-5">
      {/* 中央鋼軌：兩條主軌 + 枕木刻度 */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 hidden h-full w-6 -translate-x-1/2 bg-rail md:block"
      />
      <div
        aria-hidden
        className="absolute left-5 top-0 h-full w-4 bg-rail md:hidden"
      />

      {timeline.map((era, i) => {
        const isLeft = i % 2 === 0;
        return (
          <li
            key={era.slug}
            className="rise-in relative mb-14 last:mb-0 md:grid md:grid-cols-2 md:gap-10"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* 站牌年份章 */}
            <div
              aria-hidden
              className="absolute left-5 top-0 z-10 -translate-x-1/2 md:left-1/2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-paper bg-slate font-mono text-[10px] font-bold text-paper shadow-md">
                {era.year.split(/[–—]/)[0].slice(2)}
              </div>
            </div>

            <div
              className={`ml-16 md:ml-0 ${
                isLeft ? "md:col-start-1 md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"
              }`}
            >
              <div
                className={`rounded-sm border border-stone/60 bg-white/60 p-5 ${
                  isLeft ? "md:ml-auto" : ""
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
                  {era.year} · {era.station}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                  {era.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
                  {era.summary}
                </p>
                <Link
                  href={`/articles/${era.slug}`}
                  className="focus-ring mt-3 inline-block font-mono text-[12px] font-medium text-rail hover:underline"
                >
                  閱讀完整故事 →
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
