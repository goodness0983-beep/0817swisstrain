import DepartureBoard from "@/components/DepartureBoard";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
import { timeline } from "@/lib/timeline";
import Link from "next/link";

export default function HomePage() {
  const featured = articles.slice(0, 6);

  return (
    <>
      <DepartureBoard />

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-3xl font-semibold text-rail">1847</p>
            <p className="mt-1 text-sm text-ink/60">第一條鐵路通車年份</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-semibold text-rail">
              {timeline.length}
            </p>
            <p className="mt-1 text-sm text-ink/60">收錄的重要里程碑</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-semibold text-rail">57km</p>
            <p className="mt-1 text-sm text-ink/60">
              聖哥達基線隧道，世界最長鐵路隧道
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-stone/60 bg-white/40 py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
                Featured Stories
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                精選文章
              </h2>
            </div>
            <Link
              href="/articles"
              className="focus-ring shrink-0 font-mono text-[12px] text-rail hover:underline"
            >
              查看全部 →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
