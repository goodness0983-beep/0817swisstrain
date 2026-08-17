import Link from "next/link";
import type { Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="focus-ring group block border border-stone/60 bg-white/50 p-5 transition-colors hover:border-rail"
    >
      <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
        {article.year}
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-rail">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-ink/65">
        {article.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-ink/45">
        <span>{article.tags.join(" · ")}</span>
        <span>閱讀約 {article.readingMinutes} 分鐘</span>
      </div>
    </Link>
  );
}
