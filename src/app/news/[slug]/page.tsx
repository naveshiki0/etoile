import { notFound } from "next/navigation";
import { newsItems } from "@/data/news";
import ArticleDetail from "@/components/articledetail";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const news = newsItems.find((n) => n.slug === slug);
  if (!news) return notFound();

  return (
    <ArticleDetail
      title={news.title}
      date={news.date}
      category={news.category}
      image={news.thumbnail}
      content={stripHtmlTags(news.content)}
    />
  );
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
