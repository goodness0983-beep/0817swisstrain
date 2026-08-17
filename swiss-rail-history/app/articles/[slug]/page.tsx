import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, getAllSlugs } from "@/lib/articles";
import { siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${siteConfig.url}/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const index = articles.findIndex((a) => a.slug === article.slug);
  const prev = articles[index - 1];
  const next = articles[index + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: `${article.year.slice(0, 4)}-01-01`,
    inLanguage: "zh-TW",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "文章", item: `${siteConfig.url}/articles` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/articles/${article.slug}`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav aria-label="麵包屑" className="font-mono text-[11px] text-ink/45">
        <Link href="/" className="focus-ring hover:text-rail">首頁</Link>
        <span className="mx-1.5">/</span>
        <Link href="/articles" className="focus-ring hover:text-rail">文章</Link>
      </nav>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-glacier">
        {article.year} · {article.tags.join(" · ")}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-snug text-ink sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-4 text-sm text-ink/50">閱讀約 {article.readingMinutes} 分鐘</p>

      <div className="mt-8 space-y-5">
        {article.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-8 text-ink/85">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between gap-4 border-t border-stone/60 pt-8 font-mono text-[13px]">
        {prev ? (
          <Link href={`/articles/${prev.slug}`} className="focus-ring text-ink/70 hover:text-rail">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/articles/${next.slug}`} className="focus-ring text-right text-ink/70 hover:text-rail">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}
