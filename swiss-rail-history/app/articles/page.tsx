import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "文章",
  description:
    "瑞士鐵路歷史文章總覽：聖哥達隧道、瑞士聯邦鐵路國有化、少女峰鐵路、冰河列車與更多工程與歷史故事。",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
        Articles
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        所有文章
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">
        共 {articles.length} 篇文章，依時間排序，記錄瑞士鐵路從草創到當代的重要篇章。
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
